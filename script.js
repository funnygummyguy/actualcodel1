// --------------------------------------------------------
// INITIAL 60-SECOND COUNTDOWN
// --------------------------------------------------------
let seconds = 60;
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
    seconds--;
    countdown.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(timer);
        startCaptcha();
    }
}, 1000);


// --------------------------------------------------------
// SHOW CAPTCHA WITH RANDOM NUMBERS
// --------------------------------------------------------
function startCaptcha() {
    document.getElementById("countdown").style.display = "none";

    const randomCode = Math.floor(10000 + Math.random() * 90000).toString();
    document.getElementById("captchaDisplay").textContent = randomCode;

    document.getElementById("captchaSection").style.display = "block";
}


// --------------------------------------------------------
// CAPTCHA ACCEPTS ANY INPUT
// --------------------------------------------------------
function submitCaptcha() {
    document.getElementById("captchaSection").style.display = "none";
    document.getElementById("loadingSection").style.display = "block";

    startLoading();
    startProgressBar();
}


// --------------------------------------------------------
// 60-SECOND "LOADING" WITH PROGRESS BAR
// --------------------------------------------------------
function startLoading() {
    let loadTime = 60;

    const loadTimer = setInterval(() => {
        loadTime--;

        if (loadTime <= 0) {
            clearInterval(loadTimer);
            document.getElementById("loadingSection").style.display = "none";
            document.getElementById("finalMessage").style.display = "block";
        }
    }, 1000);
}


// --------------------------------------------------------
// PROGRESS BAR FILLING FOR 60 SECONDS
// --------------------------------------------------------
function startProgressBar() {
    const bar = document.getElementById("progressBar");
    let width = 0;

    const interval = setInterval(() => {
        width += (100 / 60);
        bar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
        }
    }, 1000);
}
