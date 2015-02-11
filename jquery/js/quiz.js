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
    //var q1 = document.forms['quizForm']['q1'].value;
    //var q2 = document.forms['quizForm']['q2'].value;
    //var q3 = document.forms['quizForm']['q3'].value;
    //var q4 = document.forms['quizForm']['q4'].value;
    //var q5 = document.forms['quizForm']['q5'].value;

    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');


    var form = document.forms["quizForm"];

    var filteredInputs = [];

    var getInputs = function(form){

        _.each( form, function(input){
            if( input.type == 'radio'){
                filteredInputs.push(input);
            }
        });

    };

  getInputs(form);

    //console.log(form);

    var a = "a";

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
    _.each(form, function(input, i){


        //console.log(eval(input.value));
        //if(input.value == null || input.value == ''){
        //    alert('you missed question ' + i);
        //}
    });

    var qNames = [];

    var getNames = function(form){

        _.each(form, function(input, i){
            if( input.type == 'radio'){
                qNames.push(input.name);
            }

        });
    };

    getNames(form);

    console.log(qNames);

    //REMOVE DUPLICATE NAMES
    var inputContainers =_.uniq(qNames, false);

    console.log(inputContainers);


    //
    //var set1 = [];
    //var set2 = [];
    //var set4 = [];

    //checkName(form, qNames);

    var counter = 1;

    //var filteredForm =
    //    form.filter(function(input){
    //       if( input.name == 'q1'){
    //           return input;
    //       }
    //    });

    //get array of names - delete duplicates, for each name - filter form - if input from form = name of index i - push to msater array 1, if

    var masterArray = [];

//build empty array length of the inputs in html
    _.each(inputContainers, function(names,i){

        masterArray.push([]);

    });

    console.log(masterArray);

    var inputSeperation = function( namesArray, formArray){



            _.filter(formArray, function(input){


                _.each(namesArray, function(name, i){
                    if( input.name == namesArray[i]){
                        masterArray[i].push(input);
                    }
                });
                //if( input.name == namesArray[0]){
                //    masterArray[0].push(input);
                //}


            //_.each(formArray, function(input){
            //
            //        masterArray[i] = input;
            //})

        });

            //_.filter(formArray, function(input){
            //
            //    masterArray[i].push(input);
            //
            //});
    };

    inputSeperation( inputContainers, filteredInputs);
    //var filteredInputs = _.filter(form, function(input){
    //
    //           //if( input.name == 'q1'){
    //           //    return input;
    //           //}
    //
    //});

    console.log(masterArray);
    _.each(form, function(input) {

        //console.log(eval( "q" + counter));
        //counter++;

        //
        //if( input.name == 'q1'){
        //    set1.push(input);
        //} else if(input.name == 'q2'){
        //    set2.push(input);
        //} else if(input.name == 'q4'){
        //    set4.push(input);
        //}
    });

    //console.log(set1);
    //console.log(set2);
    //console.log(set4);


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

