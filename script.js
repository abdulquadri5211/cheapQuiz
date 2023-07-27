// const question = [

//     {
//         question: 'which is hardest programming language for doing backend',
//         answers: [
//             { text : 'Django', correct: false},
//             { text : 'NodeJS', correct: true},
//             { text : 'PHP', correct: false},
//             { text : 'asp.net', correct: false},
//         ]
//     },
//     {
//         question: 'What is the difference between python and Django',
//         answers: [
//             { text : 'a language and its frame work', correct: true},
//             { text : 'they are alike', correct: false},
//             { text : 'they both run on VScode', correct: false},
//             { text : 'Dont know', correct: false},           
//         ]
//     },
//     {
//         question: 'what architecture does Django Use',
//         answers: [
//             { text : 'OS.path', correct: false},
//             { text : 'Views', correct: false},
//             { text : 'Template', correct: false},
//             { text : 'Model,View,Template', correct: true},
//         ]
//     },
//     {
//         question: 'differentiate between div and Span',
//         answers: [
//             { text : 'div re for seperating block-line while Span for inline', correct: false},
//             { text : 'there is no difference', correct: false},
//             { text : 'they re use fro d same thing', correct: false},
//             { text : 'none of the above', correct: false},
//         ]
//     },
// ];
// const questionElement = document.getElementById('question')
// const answerButtons = document.getElementById('answer-buttons')
// const nextButton = document.getElementById('next-btn');

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = 'Next';
//     showQestion();
// }

// function showQestion(){
//     resetState();
//     let currentQuestionIndex = question[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + '.' + currentQuestion.
//     question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerHTML = answer.text;
//         button.classList.add('btn');
//         answerButton.appendChild(button);
//     });
// }

// function resetState(){
//     nextButton.style.display = 'none';
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// startQuiz();


        const question = [
            {
                question: 'which is hardest programming language for doing backend',
                answers: [
                    { text : 'Django', correct: false},
                    { text : 'NodeJS', correct: true},
                    { text : 'PHP', correct: false},
                    { text : 'asp.net', correct: false},
                ]
            },
            {
                question: 'What is the difference between python and Django',
                answers: [
                    { text : 'a language and its frame work', correct: true},
                    { text : 'they are alike', correct: false},
                    { text : 'they both run on VScode', correct: false},
                    { text : 'Dont know', correct: false},           
                ]
            },
            {
                question: 'what architecture does Django Use',
                answers: [
                    { text : 'OS.path', correct: false},
                    { text : 'Views', correct: false},
                    { text : 'Template', correct: false},
                    { text : 'Model,View,Template', correct: true},
                ]
            },
            {
                question: 'differentiate between div and Span',
                answers: [
                    { text : 'div re for seperating block-line while Span for inline', correct: false},
                    { text : 'there is no difference', correct: false},
                    { text : 'they re use fro d same thing', correct: false},
                    { text : 'none of the above', correct: false},
                ]
            },
        ];

        const questionElement = document.getElementById('question');
        const answerButtons = document.getElementById('answer-buttons');
        const nextButton = document.getElementById('next-btn');

        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            nextButton.innerHTML = 'Next';
            showQuestion();
        }

        function showQuestion() {
            resetState();
            const currentQuestion = question[currentQuestionIndex];
            const questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerHTML = answer.text;
                button.classList.add('btn');
                button.addEventListener('click', () => checkAnswer(answer.correct));
                answerButtons.appendChild(button);
            });
        }

        function resetState() {
            nextButton.style.display = 'none';
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function checkAnswer(isCorrect) {
            if (isCorrect) {
                score++;
            }

            currentQuestionIndex++;

            if (currentQuestionIndex < question.length) {
                showQuestion();
            } else {
                questionElement.innerHTML = 'Quiz Finished! Your score: ' + score;
                nextButton.style.display = 'none';
            }
        }

        startQuiz();
 
