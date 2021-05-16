canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


r_w=100;
r_h=90;
b_img="mars.jpg";
r_img="rover.png";

r_x=10;
r_y=10;

function add(){
    b_imgTag= new Image();
    b_imgTag.onload=uploadBackground;
    b_imgTag.src=b_img;

    r_imgTag= new Image();
    r_imgTag.onload=uploadRover;
    r_imgTag.src=r_img;
}

function uploadBackground(){
    ctx.drawImage(b_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadRover(){
    ctx.drawImage(r_imgTag , r_x , r_y , r_w , r_h);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    k_p=e.keyCode;

    if(k_p=='38'){
        up();
        console.log("up");
    }

    if(k_p=='40'){
       down();
        console.log("down");
    }

    if(k_p=='37'){
       left();
        console.log("left");
    }

    if(k_p=='39'){
       right();
        console.log("right");
    }
}

function up(){
    if (r_y > 0){
        r_y=r_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (r_y < 500){
        r_y=r_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (r_x > 0){
        r_x=r_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (r_x < 700){
        r_x=r_x+10;
        uploadBackground();
        uploadRover();
    }
}