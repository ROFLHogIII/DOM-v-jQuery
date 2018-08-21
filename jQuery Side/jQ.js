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