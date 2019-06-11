/*let correctAnswered = 0;
let incorrectAnswered = 0;
let unAnswered = 0;
let timeRemaining = 30;
let setTimer = 0;
let answered = false;
let correct;*/

$(document).ready(function() {

    correctAnswered = 0;
    incorrectAnswered = 0;
    unAnswered = 0;
    timeRemaining = 30;
    setTimer = 0;
    answered = false;
    let correct;
    let index;
    let triviaGame = [{
            question: 'Which MVP had his helmet stolen at the 1994 Super Bowl?',
            choices: ['Adrian Pederson', 'Frank Gore', 'Emmitt Smith', 'Barry Sanders'],
            correct: '2'
        },
        {
            question: 'Who was the first team to win 5 Super Bowls?',
            choices: ['Pittsburg Steelers', 'Green Bay Pakers', 'San Francisco 49ers', 'Dallas Cowboys'],
            correct: '2'
        },
        {
            question: 'In 2006, how much did it cost for a 30-second commercial?',
            choices: ['1 million dollars', '2.5 million dollars', '3.5 million dollars', '2 million dollars'],
            correct: '1'
        },
        {
            question: 'Who won the Super Bowl in 1997?',
            choices: ['Denver Broncos', 'Dallas Cowboys', 'Washington Redskins', 'Green Bay Packers'],
            correct: '3'
        },
        {
            question: 'Who has the most passing yards ever in a Super Bowl game?',
            choices: ['Eli Manning', 'Tom Brady', 'Brett Favre', 'Peyton Manning'],
            correct: '1'
        },
        {
            question: 'Which running back has never won a Super Bowl?',
            choices: [' Marshawn Lynch', 'Emmitt Smith', 'Willie Parker', 'Barry Sanders'],
            correct: '3'
        },
        {
            question: 'Who won the Super Bowl in 1975?',
            choices: ['Pittsburg Steelers', 'Chicago Bears', 'San Francisco 49ers', 'Green Bay Packers'],
            correct: '0'
        },
        {
            question: 'Which starting quarterback won with two different teams?',
            choices: ['Brett Favre', 'Peyton Manning', 'Kurt Warner', 'Trent Dilfer'],
            correct: '1'
        },
        {
            question: 'Who is the oldest player to participate in the Super Bowl?',
            choices: ['Matt Stover', 'Jeff Feagles', 'Tom Brady', 'Jerry Rice'],
            correct: '0'
        },
        {
            question: 'Who won the Super Bowl in 1970?',
            choices: ['Green Bay Pakers', 'San Francisco 49ers', 'Kansas City Chiefs', 'Pittsburg Steelers'],
            correct: '2'
        }
    ];

    function questionAnswer() {
        index = triviaGame.length;
        for (let i = 0; i < index; i++) {
            console.log(triviaGame.question);
            $('#question').html('<h2>' + triviaGame[index].question[i] + "</h2>");

            // $('#answers').html('<h4>' + pick.choices[i] + "</h4>");
        }
    };
    questionAnswer();
})