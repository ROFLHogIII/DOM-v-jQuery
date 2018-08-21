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

let nameButton = document.getElementById('nameButton')
let nameBox = document.getElementById('nameBox')
nameButton.addEventListener("click",function(){
    let span  = document.createElement("span");
    let name = document.createTextNode("Richard Lee Garner ")
    nameBox.appendChild(span)
    span.appendChild(name)
})

let myFriends = ["Christopher", "Warryn", "Woody", "Juniper", "Anthony", "Joe", "Random", "Eric", "Sara", "Tess", "Blair (A Cat)", "Yuki (Another Cat)"]
let friendButton = document.getElementById('listIt')
let friendList = document.getElementById('list0Friends')
friendButton.addEventListener("click",function(){
    for (let i = 0; i < myFriends.length; i++) {
        const friend = myFriends[i];
        let friendName = document.createTextNode(friend)
        let li = document.createElement("li");
        friendList.appendChild(li)
        li.appendChild(friendName)
    }
})