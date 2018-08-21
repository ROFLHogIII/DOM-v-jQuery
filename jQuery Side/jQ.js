let body = document.body;
let button = $("<button>" + "Click me, Fool!" + "</button>").appendTo(body);
$(button).appendTo(body);

$(button).click(function () {
    window.alert("Well, arn't you lookin' cute today. ;)")
});

$("#submit").click(function (e) {
    e.preventDefault()
    let wordz = $("#formText").val()
    window.alert(wordz)
});

$("#hover").mouseenter(function () {
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    $("#hover").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
    $("#hover").mouseleave(function () {
        $("#hover").css("background-color", "initial")
    });
});

$("#rand").click(function () {
    //$("#rand").css("color", "red");
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    $("#rand").css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
});

$("#nameButton").click(function () {
    $("<span>" + "Richard Lee Garner " + "</span>").appendTo("#nameBox")
});


let myFriends = ["Christopher", "Warryn", "Woody", "Juniper", "Anthony", "Joe", "Random", "Eric", "Sara", "Tess", "Blair (A Cat)", "Yuki (Another Cat)"]
$("#listIt").click(function () {
    for (let i = 0; i < myFriends.length; i++) {
        const friend = myFriends[i];
        $("<li>" + friend + "</li>").appendTo("#list0Friends")
    }
})