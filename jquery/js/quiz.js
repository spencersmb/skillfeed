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

    //console.log(allQuestions.length);

    //GET USER INPUT
    //this listens for a user select in each question set
    //listen for change on form with name q1 and get its value
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.forms['quizForm']['q3'].value;
    var q4 = document.forms['quizForm']['q4'].value;
    var q5 = document.forms['quizForm']['q5'].value;

    //var q1 = document.getElementsByName('q1');
    //var q2 = document.getElementsByName('q2');
    //var q3 = document.getElementsByName('q3');

    //console.log(q1);


    //var getForm = document.getElementsByName( myformName );

    var getForm = document.getElementsByName('quizForm');



    var formName = document.forms[getForm[0].name];



    //console.log(formName);

    //only runs when object is passed in through submit
    //alert(formName[0].name);

    var form = formName;

    //console.log(form);

    var filteredInputs = [];


    //GET ALL INPUTS FROM FORM
    var getInputs = function(form){

        _.each( form, function(input){
            if( input.type == 'radio'){
                filteredInputs.push(input);
            }
        });

    };

  getInputs(form);

    //console.log(form);

    //console.log(q1.value);

    //if( eval(q1.value) == '' || eval(q1.value) == null ){
    //    alert('true');
    //    return false;
    //} else{
    //    alert('false');
    //    return false;
    //}



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
    //    } else {
    //        alert('question '+ i + ' is filled');
    //    }
    //}


    //_.each(q1, function(someThing){
    //    if( eval(someThing) == null || eval(someThing) == ''){
    //     alert('You missed the question')
    //    }
    //});
    //var array = [{key:1},{key:2},{key:3}];
    //console.log(q1x.toString());

    //var checkVal = function(array, value){
    //
    //    result = false;
    //
    //    _.find(array, function(val){
    //        if(val === value){
    //            console.log(true);
    //
    //            return result = true;
    //        }
    //
    //        return console.log('Q1 not filled out yet');
    //
    //    });
    //
    //};

    var qNames = [];

    var getNames = function(form){

        _.each(form, function(input, i){
            if( input.type == 'radio'){
                qNames.push(input.name);
            }

        });
    };

    getNames(form);


    //TRY PUTTING ALL THE Q's IN AN OBJECT
    //ref
    //var formName = document.forms[getForm[0].name];

    //var q1form = formName['q1'];
    //console.log(q1form);

    //console.log(qNames);






    //REMOVE DUPLICATE NAMES
    var inputContainers =_.uniq(qNames, false);

    console.log(inputContainers);


    var quizObject = {};

    //CREATE OBJECT WITH KEY/VALUE OF EACH BLOCK OF INPUTS
    var questions = function( namesArr, formElem ){

        //FOR EACH NAME PUT THAT INTO THE OBJECT
        _.each(namesArr, function(name, i){

            quizObject[name] = formElem[name].value

        })
    };

    questions(inputContainers, formName);

    console.log(quizObject);


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

    //for(i = 1; i <= total; i++){
    //    //use eval so it turn into a letter and you can concatinate it
    //    if(eval('q'+ i) == null || eval('q'+ i) == '' ){
    //        alert( 'You missed question ' + i );
    //        return false;
    //    } else {
    //        alert('question '+ i + ' is filled');
    //    }
    //}



    //if( eval(masterArray[0].value) == '' || eval(masterArray[0].value) == null ){
    //    alert('true');
    //    return false;
    //} else{
    //    alert('false');
    //    return false;
    //}

    //_.every(masterArray, function(item,i){
    //
    //        if(eval(masterArray[i].value) == '' || eval(masterArray[i].value) == null){
    //
    //            var count = i + 1;
    //            alert( 'You missed question ' + count );
    //            return false;
    //
    //        }
    //});
    //good code below
    //var checkVal = function(array){
    //
    //    result = false;
    //
    //    _.each(array, function(val){
    //        if (val == true){
    //            console.log('true');
    //            return result = true;
    //        }
    //
    //        return  console.log('Q1 not filled out yet');
    //    })
    //};
    //
    //var ids = _.map(inputArray, function(input){
    //    return input.checked;
    //});

    //checkVal(ids, true);
    //checkVal(ids);

    //var each = _.each(ids, function(val){
    //    return val;
    //});

    //var ids = [].map.call(q1x, function(input) {
    //    return input.value;
    //});


    //SET CORRECT ANSWERS
    var answers = [];

}

submitAnswers();

function createVariables(){
    var accounts = [];

    for (var i = 0; i <= 20; ++i) {
        accounts[i] = "whatever";
    }

    console.log(accounts);
}

