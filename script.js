function showLove() {
    const messages = [
        "รักเธอทุกๆวันบ่มีวันไม่มีเปลี่ยนแปลงโย้วว 😘",
        "เธอคือคนที่ดีที่สุดในชีวิตฉันเบยน้าาา 💖",
        "ฉันโชคดีที่มีเธออยู่ข้าง ๆ ขอบคุณนะพี่อังงง 💕",
        "หัวใจฉันมีแต่เธอคนเดียวนะครัชช  😍"
    ];
    
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageElement.classList.remove("hidden");
}

// เอฟเฟกต์หัวใจลอย
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
