const circles = document.querySelectorAll('.circle');
let activeLight = 0;

function changeLight() {
    circles[activeLight].classList.remove(circles[activeLight].getAttribute('color'));
    activeLight = (activeLight + 1) % circles.length;
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}

setInterval(changeLight, 1000);
