function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

function updateBackground() {
    const randomImageUrl = 'https://source.unsplash.com/random';
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}

updateTime();
updateBackground();

// Update time every second
setInterval(updateTime, 1000);

// Update background every 10 seconds
setInterval(updateBackground, 10000);
