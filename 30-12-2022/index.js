// function sol(){
// let num=document.getElementById("number").value

// if(parseInt(num)%2===0){
//     document.getElementById("output").innerHTML="This number is even"
// }
// else if(parseInt(num)%2!==0){
//     document.getElementById("output").innerHTML="This number is odd"
// }
// else{
//     document.getElementById("output").innerHTML="Invalid Input"
// }
// }

// function sol(){
//     let num=document.getElementById("number").value

//     switch(parseInt(num)%2===0){
// case true:
//     document.getElementById("output").innerHTML="This number is even"
//     break
// case false:
//     document.getElementById("output").innerHTML="This number is odd"
//     break
// default:
//     alert("Invalid Input")
//     break

//     }
// }

function zoomIn(){
let h=document.getElementById("img").height
let w=document.getElementById("img").width
document.getElementById("img").height=h+=10
document.getElementById("img").width=w+=10

// alert(typeof(height))
if(h>=200 && w>=200){
    document.getElementById("img").height=200
document.getElementById("img").width=200
alert("Maximum Zoom level reached")
}
}

function zoomOut(){
let h=document.getElementById("img").height
let w=document.getElementById("img").width
document.getElementById("img").height=h-=10
document.getElementById("img").width=w-=10
if(h<=20 && w<=20){
    document.getElementById("img").height=20
document.getElementById("img").width=20
alert("Maximum Zoom level reached")
}
}
