const DATA = [{
        question: 'Question 1',
        answers: [{
                id: '1',
                value: 'Answer 1',
                correct: 'true',
            },
            {
                id: '2',
                value: 'Answer 2',
                correct: 'false',
            },
            {
                id: '3',
                value: 'Answer 3',
                correct: 'false',
            },
        ]
    },
    {
        question: 'Question 2',
        answers: [{
                id: '4',
                value: 'Answer 4',
                correct: 'true',
            },
            {
                id: '5',
                value: 'Answer 5',
                correct: 'false',
            },

        ]
    }
]

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestion = (index) => {
    const renderAnswers = () => DATA[index].answers.map((answer) =>
            `
            <li>
            <label>
<input type="radio" class="answer-input" name=${index} value=${answer.id}>
${answer.value}
</label>
        </li>
            `
        )
        .join('');
    questions.innerHTML = `
<div class="quiz-questions-item">
<div class="quiz-questions-item-question">${DATA[index].question}</div>
<ul class="quiz-questions-item-answers">${renderAnswers()}
   
</ul>
</div>
`;
};
const renderResults = () => {};
const renderIndicator = () => {};
quiz.addEventListener('change', (event) => {});
quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        console.log('proceed')
    }
    if (event.target.classList.contains('btn-restart')) {
        console.log('start over')
    }
});