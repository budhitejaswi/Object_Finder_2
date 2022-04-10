status= "";
video = "";
object = "";

function setup(){
    canvas = createCanvas(380,340);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,340);
    video.hide();
}

function start() {
    object_detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_model").innerHTML = "Status - Detecting Objects";
    object= document.getElementById("object_name").value;
    console.log(object);
}

function modelLoaded() {
    console.log("Model Loaded :)");
    status = true;
}

function draw() {
    image(video,0,0,380,380);
}