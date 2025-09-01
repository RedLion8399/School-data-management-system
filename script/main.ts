let settingsOpen: boolean;

window.onload = () => {
  settingsOpen = false;
};

function toggleSettings() {
  const settingsIcon = document.getElementById("settings-icon")!;
  const settings = document.getElementById("settings-container")!;
  if (settingsOpen) {
    settingsOpen = false;
    settingsIcon.classList.add("fa-gear");
    settingsIcon.classList.remove("fa-xmark");
    settings.style.display = "none";

    settingsIcon.style.position = "static";
    settingsIcon.style.top = "auto";
    settingsIcon.style.left = "auto";
  } else {
    settingsOpen = true;
    settingsIcon.classList.remove("fa-gear");
    settingsIcon.classList.add("fa-xmark");
    settings.style.display = "block";

    settingsIcon.style.position = "fixed";
    settingsIcon.style.top = "12px";
    settingsIcon.style.left = "10px";
  }
}
