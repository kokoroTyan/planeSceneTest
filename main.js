const testData = {
    selectedOS: "androidRu",
    androidModelRu: "BB8.glb",
    androidModelEng: "BB8.glb",
    iosModelRu: "BB8.glb",
    iosModelEng: "BB8.glb",
    arPlacement: "floor",
    audioRu: "miracle.mp3",
    audioEng: "miracle.mp3",
    volume: 0.5
}

console.log(testData)
const modelViewer = document.querySelector('#modelViewer')
const sceneAudio = document.querySelector('#sceneAudio')

let modelUrl;
switch(testData.selectedOS){
    case "androidRu":{
        modelUrl = testData.androidModelRu
    }
    case "androidEng":{
        modelUrl = testData.androidModelEng
    }
    case "iosModelRu":{
        modelUrl = testData.iosModelRu
    }
    case "iosModelEng":{
        modelUrl = testData.iosModelEng
    }
}

modelViewer.setAttribute('ar-placement', testData.arPlacement)
modelViewer.setAttribute('src', modelUrl)
sceneAudio.src = testData.audioRu
sceneAudio.volume = testData.volume;
sceneAudio.play();