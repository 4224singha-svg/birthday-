let holdTimer;
let progress = 0;
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');

function startHold() {
    progressBarContainer.style.display = 'block';
    holdTimer = setInterval(() => {
        progress += 4;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(holdTimer);
            showBirthdayPage();
        }
    }, 50);
}

function endHold() {
    clearInterval(holdTimer);
    if (progress < 100) {
        progress = 0;
        progressBar.style.width = '0%';
        progressBarContainer.style.display = 'none';
    }
}

function showBirthdayPage() {
    document.getElementById('scanner-page').classList.add('hidden');
    document.getElementById('birthday-page').classList.remove('hidden');
}
