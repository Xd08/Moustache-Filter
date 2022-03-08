nose_x=0;
nose_y=0;
function preload() {
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas=createCanvas(300, 300,);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    
    //circle(nose_x, nose_y, 20);

    fill(227, 32, 18);
    
    stroke(227, 32, 18);

    image(mustache, nose_x- 20, nose_y, 50, 30);

}

function take_snapshot() {
save("Filtered");
}

function modelLoaded() {
    console.log("MODEL HAS BEEN LOADED")
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x=" + nose_x-20+ "nose y=" + nose_y);
    }
}