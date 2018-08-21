let body = document.body;
let button = $("<button>" + "Click me, Fool!" + "</button>").appendTo(body);
$(button).appendTo(body);

$(button).click(function(){
    window.alert("Well, arn't you lookin' cute today. ;)")
})