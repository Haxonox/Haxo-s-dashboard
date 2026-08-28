function openTab(tabName) {

    // hide all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.style.left = "-300px";
        tab.style.top = "-110px";
        tab.style.display = "none";
    });

    // show selected tab
    document.getElementById(tabName).style.display = "block";
}

function closeTab() {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.display = "none";
    });
}

let activeTab = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("mousedown", (e) => {
        activeTab = tab;

        offsetX = e.clientX - tab.offsetLeft;
        offsetY = e.clientY - tab.offsetTop;
    });
});

document.addEventListener("mousemove", (e) => {
    if (activeTab) {
        activeTab.style.left = (e.clientX - offsetX) + "px";
        activeTab.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    activeTab = null;
});



const btn = document.getElementById("audio");
const music = document.getElementById("bgmusic");

let isPlaying = true;

btn.addEventListener("click", () => {
    if (!isPlaying) {
        music.pause();
    } else {
        music.play();
        music.currentTime = 0;
    }

    isPlaying = !isPlaying;
});
music.volume = 0.1;

//chatbox

const firebaseConfig = {
  apiKey: "AIzaSyAZh89JuL7u01UhaDZYYNoPfEqTcdRCN8g",
  authDomain: "chatbox-138be.firebaseapp.com",
  projectId: "chatbox-138be",
  storageBucket: "chatbox-138be.firebasestorage.app",
  messagingSenderId: "324389548037",
  appId: "1:324389548037:web:fb156d078ca60d119a2c6c"
};



