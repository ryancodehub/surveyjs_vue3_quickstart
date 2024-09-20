import express from "express";
import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import cors from "cors";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
// app.use(cors());
app.use(express.json());

app.post("/save-survey", (req, res) => {
  const surveyData = req.body.surveyData;

  if (!surveyData) {
    return res
      .status(400)
      .json({ success: false, message: "No survey data provided" });
  }

  const filePath = "E:/LocalGit/surveyjs_vue3_quickstart/data/survey_json.js";

  fs.writeFile(
    filePath,
    `export const json = ${surveyData};`,
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res
          .status(500)
          .json({ success: false, message: "Failed to save survey" });
      }
      res.json({ success: true, message: "Survey saved successfully" });
    }
  );
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
