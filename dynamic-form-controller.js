$("#choice-1").on("change", function(){
    console.log("choice-1 change");

    var choice2 = $("#choice-2").empty();

    var options = getChoice2Options($('#choice-1').val())
    $.each(options, function(key, choiceObj){
        choice2.append(
            $('<option>', choiceObj, '</option>')
        );
    });
});

function getChoice2Options(choice1){
    // returns set of options for choice 2 given choice 1 selection
    // TODO: this is just a json lookup, change to that once I have the real values.
    if (choice1 == "1-1"){
        return [
            {text:"test text apples", value: "appl"},
            {text:"test text bananas", value: "bann"}
        ];
    } else if( choice1 == "1-2"){
        return [
            {text:"text text 1-2", value: "test1-2"}
        ]
    } else {
        console.error("unknown value for choice-1:" + choice1);
    }
}
