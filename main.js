function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassification('', modelready);
}
function modelready()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}