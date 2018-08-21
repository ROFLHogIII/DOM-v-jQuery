let body = document.body;
let button = document.createElement("button");
let bText = document.createTextNode("Click me, Fool!")
button.appendChild(bText)
body.appendChild(button)

button.addEventListener("click", function(){
    window.alert("Well, arn't you lookin' cute today. ;)")
})


let submit = document.getElementById('submit');
submit.addEventListener("click", function(e){
    e.preventDefault()
    let text = document.getElementById('formText');
    let value = text.value;
    console.log(value)
    window.alert(value)

})

let hover  = document.getElementById('hover')
hover.addEventListener("mouseenter", function(){
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    hover.style.backgroundColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
    hover.addEventListener("mouseleave",function(){
        hover.style.backgroundColor = "initial";
    })
})

let p = document.getElementById('rand')
p.addEventListener("click", function(){
//    p.style.color = "red";
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    p.style.color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
})