import React from 'react';
// import BinaryComponent from './question-components/BinaryComponent';
import ColorComponent from './question-components/ColorComponent';
import MultipleChoiceComponent from './question-components/MultipleChoiceComponent';
import QuestionComponent from './question-components/QuestionComponent';
import QuizComponent from './question-components/QuizComponent';



const ErrorComponent = props => <span>--error rendering component--</span>

/**
 * Mapping question type to question components.
 * key is the 
 * Import new components and them here to use them in parser.
 * e.g.:
 * ...
 * "new-type": NewQuestionComponent
 */
const questionTypes = {
    // "table" : QuestionComponent,
    "text-field" : QuestionComponent,
    "field" : QuestionComponent,
    "quiz"  : QuizComponent,
    "color" : ColorComponent,
    // 'binary': BinaryComponent,
    'binary': MultipleChoiceComponent,
    'multiple': MultipleChoiceComponent
}

/**
 * Function returns either question component or error component if type not found.
 * @param {*} type 
 */
const getQuestionComponent = type => {
    console.debug("getQuestionComponent type:", type);
    return questionTypes[type] || ErrorComponent;
}

export default getQuestionComponent;