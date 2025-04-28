let play_pause=document.getElementById("play_pause")
let audioElement=new Audio("./songs/Satranga.mp3")
let song_bar=document.getElementById("song_progress_bar")
let album_name=document.getElementById("album_name")
let playButtons=document.querySelectorAll(".play i")
let currentPlayingIndex=-1
let songs=[
    "./songs/Aagi Aagi ene.mp3",
    "./songs/Satranga.mp3",
    "./songs/Gaaju Bomma.mp3",
    "./songs/Kun Faya Kun.mp3",
    "./songs/Kabira.mp3",
    "./songs/Tera Yaar Hoon Main.mp3",
    "./songs/Vastava Vastava okkasari vastava.mp3",
    "./songs/Darling - Neeve.mp3",
    "./songs/Tainu Khabar Nahi  Munjya.mp3",
    "./songs/Jigelu Rani.mp3",
    "./songs/Ippatikinka Naa Vayasu.mp3",
    "./songs/Orori Yogi.mp3"
]

let songNames=[
    "Aagi Aagi",
    "Satranga",
    "Gaaju Bomma",
    "Kun Faya Kun",
    "Kabira",
    "Tera Yaar Hoon Main",
    "Vastava Vastava okkasari vastava",
    "Darling - Neeve",
    "Tainu khabar Nahi",
    "Jigellu Rani",
    "Ippatikinka Naa Vayasu",
    "Orori Yogi"
]
play_pause.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")
    }else{
        audioElement.pause()
        play_pause.classList.remove("fa-pause")
        play_pause.classList.add("fa-play")
    }
})
audioElement.addEventListener("timeupdate",()=>{
    // console.log(audioElement.currentTime);
    // console.log(audioElement.duration);
    let progress=(audioElement.currentTime/audioElement.duration)*100
    console.log(progress);
    song_bar.value=progress
})

song_bar.addEventListener("change",()=>{
    audioElement.currentTime=(song_bar.value*audioElement.duration)/100
})
console.log(playButtons);

playButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        if(currentPlayingIndex!==index){
            if(currentPlayingIndex!==-1){
        
        playButtons[currentPlayingIndex].classList.replace("fa-pause","fa-play")
    }
    audioElement.src=songs[index]
    audioElement.play()
    button.classList.replace("fa-play","fa-pause")
    play_pause.classList.replace("fa-play","fa-pause")
    currentPlayingIndex=index
    album_name.innerText=songNames[index]
  }else{
    if(audioElement.paused){
    audioElement.play()
    button.classList.replace("fa-play","fa-pause")
    play_pause.classList.replace("fa-play","fa-pause")
    }else{
        audioElement.pause()
    button.classList.replace("fa-pause","fa-play")
    play_pause.classList.replace("fa-pause","fa-play")
    }
        }
    })
})
//HANDLING FORWARD AND BACKWARD BUTTONS
let count=-1;
let forward=document.querySelector(".fa-forward");
let backward=document.querySelector(".fa-backward");
forward.addEventListener("click",()=>{
    if(count<11){
        count++;
        audioElement.src=songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause");
        
    }
});
backward.addEventListener("click",()=>{
    if(count>0){
        count--;
        audioElement.src=songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause");
        
    }
});