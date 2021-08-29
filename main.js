nosex=0
nosey=0
leftwristx=0
rightwristx=0
difference=0

function setup() {
    canvas=createCanvas(500,400)
    canvas.position(560,150)    
    video=createCapture(VIDEO)
    video.size(300,300)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotresult)
}


function draw() {
    background("#61b33b")
    fill("#eb345e")
    stroke("#eb345e")
    square(nosex,nosey,20)
}

function modelloaded() {
    console.log("model loaded")
}


function gotresult(result) {
    if(result.length>0){
        console.log(result)
nosex=result[0].pose.nose.x
nosey=result[0].pose.nose.y
leftwristx=result[0].pose.leftWrist.x
rightwristx=result[0].pose.rightWrist.x
difference=floor(leftwristx-rightwristx)
document.getElementById("square_side").innerHTML="Width and Height is equal to " + difference;
console.log("leftWrist="+leftwristx+ "RightWrist="+ rightwristx +"difference="+ difference)
    }
}