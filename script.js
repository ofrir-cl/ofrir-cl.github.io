function updateTimeAndDate() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

function updateBackground() {
    const randomImageUrl = 'https://picsum.photos/1920/1080';
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}

updateTimeAndDate();
updateBackground();

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Update background every 10 seconds
setInterval(updateBackground, 10000);
