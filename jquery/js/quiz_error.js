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


function submitAnswers( myformName ){
    //allquestions.length
    var total = 5;
    var score = 0;

    //GET USER INPUT
    //var q1 = document.forms['quizForm']['q1'].value;
    //var q2 = document.forms['quizForm']['q2'].value;
    //var q3 = document.forms['quizForm']['q3'].value;
    //var q4 = document.forms['quizForm']['q4'].value;
    //var q5 = document.forms['quizForm']['q5'].value;


    //var getForm = document.getElementsByName( myformName );

    var getForm = document.getElementsByName('quizForm');

    var formName = document.forms[getForm[0].name];

    console.log(formName);

    var form = formName;

    var filteredInputs = [];


    var answers = ['a','a','d','b','d'];


    //GET ALL INPUTS FROM FORM
    var getInputs = function(form){

        _.each( form, function(input){
            if( input.type == 'radio'){
                filteredInputs.push(input);
            }
        });

    };

    getInputs(form);

    console.log(form);

    var qNames = [];

    var getNames = function(form){

        _.each(form, function(input, i){
            if( input.type == 'radio'){
                qNames.push(input.name);
            }

        });
    };

    getNames(form);



    console.log(formName);
    //REMOVE DUPLICATE NAMES
    var inputContainers =_.uniq(qNames, false);

    //CREATE OBJECT WITH KEY/VALUE OF EACH BLOCK OF INPUTS
    var questions = function( namesArr, formElem ){

        //FOR EACH NAME PUT THAT INTO THE OBJECT
        _.each(namesArr, function(name, i){

            quizObject[name] = formElem[name].value

        })
    };

    questions(inputContainers, formName);

    console.log(quizObject[inputContainers[0]]);

    console.log(quizObject);
    //Counting from 0 - 4 = a total of 5.
    var loopCount = inputContainers.length - 1;

    var quizObject = {};

    console.log(loopCount);

    for(i = 0; i <= loopCount.length; i++){

        //separate counter to log correct count to user.
        var count = i + 1;

        if( quizObject[inputContainers[i]] == null || quizObject[inputContainers[i]] == '' ){
            alert( 'You missed question ' + count );
            return false;
        } else {

        }
    }

    //DOUBLE LOOP EXAMPLE

    //var masterArray = [];
    //
    ////build empty array length of the inputs in html
    //_.each(inputContainers, function(names,i){
    //
    //    masterArray.push([]);
    //
    //});
    //
    ////POPULATE MASTER ARRAY
    //var inputSeperation = function( namesArray, formArray){
    //
    //        //FILTER THE FORM BY EACH NAME
    //        _.filter(formArray, function(input){
    //
    //
    //            _.each(namesArray, function(name, i){
    //                if( input.name == namesArray[i]){
    //                    masterArray[i].push(input);
    //                }
    //            });
    //
    //    });
    //
    //};
    //
    //inputSeperation( inputContainers, filteredInputs);
    //
    //console.log( masterArray[0][0].checked);

    //Loop through answers and user answer and if they match add 1 to counter
    //CHECK CORRECT ANSWERS


    var checkAnswers = function(answerArray, quiz, inputNames){
        var correctTotal = 0;

        _.each(answerArray, function(correct, i){

            if(correct == quiz[inputNames[i]] ){
                correctTotal++
            }
        });

        return correctTotal;
    };


    //alert(checkAnswers(answers,quizObject, inputContainers));

}

//submitAnswers();

