function start(){

navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3q3Q45YSt/model.json",modelReady);
}

function modelReady(){

classifier.classify(gotResults);
}

function gotResults(error,results){

if(error){

console.error(error)

}
else{

console.log(results);
document.getElementById("label_name").innerHTML = results[0].label;
document.getElementById("label_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2);

var i1 = document.getElementById("rep_image");

if(results[0].label == "Barking"){

i1.src= "dog.gif"

}
else if(results[0].label == "Neighing"){

i1.src = "horse.png"

}
else if(results[0].label == "Mooing"){

    i1.src = "cow.png"
    
}
else if(results[0].label == "Roaring"){

    i1.src = "lion.png"
    
    }


    
}

}
