function start(){

navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3q3Q45YSt/model.json",modelReady);
}