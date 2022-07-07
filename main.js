function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x4jWXgocs/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
r1=Math.floor(Math.random()*255)+1;
r2=Math.floor(Math.random()*255)+1;
r3=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="i can hear- "+results[0].label;
document.getElementById("result_label").style.color="rgb("+r1+","+r2+","+r3+")";

img=document.getElementById("img1bobba");
if(results[0].label=="barking"){
    img.src="cute-corgi-dog-eating-bone-cartoon_138676-2534.jpg";
}
else if(results[0].label=="meawing"){
    img.src="motion_cat_still_2x.gif.webp";
}
else if(results[0].label=="roar"){
    img.src="c8ca5438e1d96b9408928a8d53b23820.jpg";
}
else if(results[0].label=="mooing"){
    img.src="st,small,507x507-pad,600x600,f8f8f8.jpg";
}
else{
    img.src="cute-kawaii-bubble-tea-tshirt-boba-milk-tea-lover-gift-idea-eboni-dabila-transparent.png";
}

}
}