let body = document.body;
let button = $("<button>" + "Click me, Fool!" + "</button>").appendTo(body);
$(button).appendTo(body);

$(button).click(function () {
    window.alert("Well, arn't you lookin' cute today. ;)")
})

$("#submit").click(function (e) {
    e.preventDefault()
    let wordz = $("#formText").val()
    window.alert(wordz)
});

$("#hover").mouseenter(function(){
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    $("#hover").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
    $("#hover").mouseleave(function(){
        $("#hover").css("background-color", "initial")
    })
})