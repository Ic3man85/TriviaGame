$(document).ready(function() {
    let correctAnswered = 0;
    let incorrectAnswered = 0;
    let unAnswered = 0;
    let timeRemaining = 10;
    let setTimer = 0;
    let correct;
    let index = 0;
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
    $('#time').hide();

    function startGame() {
        $('.choices').hide();
        $('#question').show();
        $('.answers').show();
        question();
        run();
    }

    function question() {

        correct = triviaGame[index].correct;
        let question = triviaGame[index].question;

        for (let i = 0; i < 4; i++) {
            $('#question').html(question);

            let choices = triviaGame[index].choices[i];
            $('#answers').append("<h2 class=choices id=" + i + ">" + choices + "</h2>");
        }
        $("h2").click(function() {
            let value = $(this).attr('id');
            if (value === correct) {
                correctAnswered++;
                $('#result').html("Correct!!!!");
                stop();
            } else if (value != correct) {
                incorrectAnswered++
                $('#result').text("That is Incorrect!!!!");
                stop();
            }
        });
    }

    function reset() {
        $("#answers").empty();
        $("#result").empty();
        index++
        if (index < triviaGame.length) {
            question();
        } else {
            $("#question").empty();
            $("#answers").empty();
            $("#result").empty();
            $('#time').hide();
            $("#answers").append("<h2 class=choices>" + "Correctly Answered: " + correctAnswered + "</h2>");
            $("#answers").append("<h2 class=choices>" + "InCorrectly Answered: " + incorrectAnswered + " </h2>");
            $("#answers").append("<h2 class=choices>" + "Un-Answered: " + unAnswered + "</h2>");
        }
    }

    function run() {
        $('#time').show()
        setTimer = setInterval(timer, 1000);
    }

    function timer() {
        timeRemaining--;
        $("#timer").html(timeRemaining);
        if (timeRemaining === 0) {
            unAnswered++
            stop();
            alert("Time Up!");
        }

    }

    function stop() {
        timeRemaining = 10;
        clearInterval(setTimer);
        run();
        reset();
    }

    $('#start').on('click', function() {
        $('#start').hide();
        startGame();

    })



});