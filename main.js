var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let width_form = window.innerWidth / 2;
let heigth_form = window.innerHeight / 2;


function recursive(param,radious){
    if(param === 300){
        return 'finished!'
    } else{
        ctx.beginPath();
        ctx.arc(width_form, heigth_form, radious, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(param);
        recursive(++param, radious-10);
    }

}


recursive(0,240);