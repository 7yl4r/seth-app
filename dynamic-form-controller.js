var data = {
    "1-1": {
        "text": "you chose 1-1",
        "link": "#option1",
        "linkText": "link for optn 1"
    },
    "1-2": {
        "text": "1-2 chosen",
        "link": "#option2",
        "linkText": "link for op 2"
    }
}

$("#choice").on("change", function(){
    console.log("choice change");
    var cho = $("#choice").val();
    $("#dynamic-text").html(data[cho].text);
    $("#dynamic-link").html('<a href="' + data[cho].link + '">' + data[cho].linkText + "</a>");
});

$(function(){
    var chooser = $("#choice");
    $.each(data, function(key, val){
        chooser.append(
            $('<option>', {
                value: key,
                text: key   // NOTE: could also use val.chooserText if added to data
            }, '</option>')
        );
    });
    chooser.change();
});
