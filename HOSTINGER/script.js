function updateCountdown() {
  const targetDate = new Date("2024-12-31"); // Set your target date here
  const now = new Date();
  const timeLeft = targetDate - now;

  const padWithZero = (value) => value.toString().padStart(2, "0");

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = padWithZero(days);
  document.getElementById("hours").textContent = padWithZero(hours);
  document.getElementById("minutes").textContent = padWithZero(minutes);
  document.getElementById("seconds").textContent = padWithZero(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
