<script lang="ts" setup>
import { SurveyCreatorModel } from "survey-creator-core";
import { json } from "../../data/survey_json.js";

const options = {
    showLogicTab: true,
    showState: true,
    showThemeTab: true,
    showTestSurveyTab: true,
};

const creator = new SurveyCreatorModel(options);
const savedSurvey = window.localStorage.getItem("survey-json");
creator.JSON = json;

// Assuming `creator` is your Vue component or a relevant object
if (savedSurvey) {
    creator.text = savedSurvey;  // Load saved survey data into your component
} else {
    creator.text = JSON.stringify(json);
}

creator.onModified

creator.saveSurveyFunc = (saveNo, callback) => {
    const surveyData = creator.text;  // Survey data in JSON format

    window.localStorage.setItem("survey-json", surveyData);

    // Send the data to the server using a POST request
    fetch('/save-survey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ surveyData }),  // Send survey data to the server
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to save survey');
            }
        })
        .then(data => {
            console.log('Survey saved successfully:', data);
            callback(saveNo, true);
        })
        .catch(error => {
            console.error('Error saving survey:', error);
            callback(saveNo, false);
        });
};



</script>
<template>
    <div style="position: fixed; top: 52px; left: 0; width: 100vw; bottom: 0">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>