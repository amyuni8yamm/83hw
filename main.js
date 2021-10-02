canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function set(){
    
}
color="black";
widthofline=10;
var y_last_position;
var x_last_position;
var width=screen.width;
var height=screen.height-300;
var newwidth=screen.width-70;
if(width<990){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=widthofline;
     ctx.moveTo(x_last_position,y_last_position);
     ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
     ctx.stroke();
     console.log(x_last_position,y_last_position);
    }
    x_last_position=currentpositionofmousex;
    y_last_position=currentpositionofmousey;
}
canvas.addEventListener("TouchStart",myTouchStart);
function myTouchStart(){
    console.log("myTouchStart");
    x_last_position=e.touches[0].clientX-canvas.offsetLeft;
    y_last_position=e.touches[0].clientY-canvas.offsetTop;   
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    currentpositionoftouchx=e.touches[0].clientX-canvas.offsetLeft;
    currentpositionoftouchy=e.touches[0].clientY-canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=widthofline;
     ctx.moveTo(x_last_position,y_last_position);
     ctx.lineTo(currentpositionoftouchx,currentpositionoftouchy);
     ctx.stroke();
     console.log(x_last_position,y_last_position);
    x_last_position=currentpositionoftouchx;
    y_last_position=currentpositionoftouchy;
}