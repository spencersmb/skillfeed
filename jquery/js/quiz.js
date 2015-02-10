/**
 * Created by spencerbigum on 2/9/15.
 */


var allQuestions = [
    {
        question: "Who is the Prime Minister of the United Kingdom?",
        choices: ["David Cameron","Gordon Brown", "Winston Churchill", "Tony Blair"],
        correctAnswer:0
    },
    {
        question: "What came first chicken or the egg?",
        choices: ["Chicken","egg"],
        correctAnswer:1
    },
    {
        question: "What is 1 + 1?",
        choices: ["1","2","3","4"],
        correctAnswer:1
    },
    {
        question: "What is the capital of Georgia?",
        choices: ["Athens","Alpharetta","Altanta","Smyrna"],
        correctAnswer:2
    },
    {
        question: "What city was Julia Roberts born?",
        choices: ["Los Angeles","Philidelphia","Portland", "Smyrna"],
        correctAnswer:3
    }

];


function submitAnswers(){
    //allquestions.length
    var total = 5;
    var score = 0;

    //console.log(allQuestions.length);

    //GET USER INPUT
    //this listens for a user select in each question set
    //listen for change on form with name q1 and get its value
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;

    var q1x = document.getElementsByName('q1');

    //jquery version idea
    //function Checkform() {
    //    var result = true;
    //    $('.rbl').each(function() {
    //        var checked = $(this).find('input:radio:checked');
    //        if (checked.length == 0) {
    //            result = false;
    //            return;
    //        }
    //    });
    //    return result;
    //}

    //VALIDATION LOOP
    //for(i = 1; i <= total; i++){
    //    //use eval so it turn into a letter and you can concatinate it
    //    if(eval('q'+ i) == null || eval('q'+ i) == '' ){
    //        alert( 'You missed question ' + i );
    //        return false;
    //    }
    //}


    //_.each(q1, function(someThing){
    //    if( eval(someThing) == null || eval(someThing) == ''){
    //     alert('You missed the question')
    //    }
    //});
    //var array = [{key:1},{key:2},{key:3}];
    //console.log(q1x.toString());

    var ids = [].map.call(q1x, function(input) {
        return input.value;
    });

    console.log(ids);
    //SET CORRECT ANSWERS
    var answers = [];

}

submitAnswers();