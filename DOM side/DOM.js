let body = document.body;
let button = document.createElement("button");
let bText = document.createTextNode("Click me, Fool!")
button.appendChild(bText)
body.appendChild(button)

button.addEventListener("click", function(){
    window.alert("Well, arn't you lookin' cute today. ;)")
})