export const json = {
 "title": "Ryan's New Survey!",
 "description": "Do you like what I like?",
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "rating",
     "name": "question1",
     "title": "How hot would you rate Lea?",
     "rateType": "smileys",
     "rateCount": 10,
     "rateMax": 10
    },
    {
     "type": "boolean",
     "name": "question2",
     "title": "Would you marry her?"
    },
    {
     "type": "checkbox",
     "name": "question3",
     "title": "Favorite thing(s) about her",
     "choices": [
      {
       "value": "Item 1",
       "text": "Interest"
      },
      {
       "value": "Item 2",
       "text": "Face"
      },
      {
       "value": "Item 3",
       "text": "Legs"
      },
      {
       "value": "Item 4",
       "text": "Hips"
      },
      {
       "value": "Item 5",
       "text": "Butt"
      },
      {
       "value": "Item 6",
       "text": "Sense of humor"
      },
      {
       "value": "Item 7",
       "text": "She likes my IT work"
      },
      {
       "value": "Item 8",
       "text": "I just like everything about her tbh"
      }
     ]
    },
    {
     "type": "expression",
     "name": "question4",
     "title": "hehe"
    }
   ]
  }
 ],
 "triggers": [
  {
   "type": "runexpression",
   "expression": "{question2} = true",
   "setToName": "question4",
   "runExpression": "Bro, Lea is so fucking hot. I love her, god damn dude."
  }
 ]
};