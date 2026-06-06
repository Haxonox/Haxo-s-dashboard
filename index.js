function openTab(tabName) {

    // hide all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
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