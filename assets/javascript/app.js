$(document).ready(function() {
    console.log(triviaGame);
});

let triviaGame = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 30,
    timerId: false,

    questions: {
        q1: 'Which MVP had his helmet stolen at the 1994 Super Bowl?',
        q2: 'Who was the first team to win 5 Super Bowls?',
        q3: 'In 2006, how much did it cost for a 30-second commercial?',
        q4: 'Who won the Super Bowl in 1997?',
        q5: 'Who has the most passing yards ever in a Super Bowl game?',
        q6: 'Which running back has never won a Super Bowl?',
        q7: 'Most Super Bowl appearances as a player or coach?',
        q8: 'Which starting quarterback won with two different teams?',
        q9: 'Who is the oldest player to participate in the Super Bowl?',
        q10: 'Who has the most fumble return yards in a game?'
    },
    answers: {
        q1: 'Emmitt Smith',
        q2: 'San Francisco 49ers',
        q3: '2.5 million dollars',
        q4: 'Green Bay Packers',
        q5: 'Tom Brady, Super Bowl LII',
        q6: 'Barry Sanders',
        q7: 'Bill Belichick',
        q8: 'Peyton Manning',
        q9: 'Matt Stover',
        q10: 'Leon Lett'
    },
    choices: {
        q1: ['Adrian Pederson', 'Frank Gore', 'Emmitt Smith', 'Barry Sanders'],
        q2: ['Pittsburg Steelers', 'Green Bay Pakers', 'San Francisco 49ers', 'Dallas Cowboys'],
        q3: ['1 million dollars', '2.5 million dollars', '3.5 million dollars', '2 million dollars'],
        q4: ['Denver Broncos', 'Dallas Cowboys', 'Washington Redskins', 'Green Bay Packers'],
        q5: ['Eli Manning', 'Tom Brady', 'Brett Favre', 'Phillip Rivers'],
        q6: [' Marshawn Lynch', 'Emmitt Smith', 'Willie Parker', 'Barry Sanders'],
        q7: ['Adrian Pederson', '', 'Bill Belichick', 'John Gruden'],
        q8: ['Adrian Pederso', 'Frank Gore', 'Emmitt Smith', 'Barry Sanders'],
        q9: ['Adrian Pederson', 'Frank Gore', 'Emmitt Smith', 'Barry Sanders'],
        q10: ['Adrian Pederson', 'Frank Gore', 'Emmitt Smith', 'Barry Sanders'],
    },

}