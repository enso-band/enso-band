const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

// First , We will create song list

const songList = [
  {
    path: "Phrase_2.mp3", 
    songName: "Phrase 2"
  },
  {
    path: "Phrase_7.mp3", 
    songName: "Phrase 7"
  },
  {
    path: "Phrase_9.1.mp3", 
    songName: "Phrase 9.1"
  },
  {
    path: "Phrase_9.2.mp3", 
    songName: "Phrase 9.2"
  },
  {
    path: "Phrase_9.3.mp3", 
    songName: "Phrase 9.3"
  },
];

let song_Playing = false;

// Play Song 
function playSong() {
  song_Playing = true;
  audio.play();
  playPause.classList.add('active');
  // Change icon
  playPause.innerHTML = '<img src="./Logo/pause.png"  style="width: 40px;" />';
}

// Pause Song 
function pauseSong() {
  song_Playing = false;
  audio.pause();
  playPause.classList.remove('active');
  // Change icon
  playPause.innerHTML = '<img src="./Logo/play-buttton.png"  style="width: 50px;" />';
}

// Play or Pause Song Click
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

// Load Song
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

// Current Song 
let i = 0;

// On load - Select First Song From Song List 
loadSong(songList[i]);

// Previous Song 
function prevSong() {
  i--;
  if(i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i]);
  playSong();
}
prev.addEventListener("click", prevSong);

// Next Song 
function nextSong() {
  i++;
  if(i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i]);
  playSong();
}
next.addEventListener("click", nextSong);