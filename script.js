console.log("Welcome to Q-Music");

//Initialization of Variables
let songIndex=0;
let audioElement=new Audio('Vikram.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
    {songName: "Vikram BGM", filePath: "Vikram.mp3", coverPath: "cover.jpg"},
]

//audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})


//Listen to Events

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})