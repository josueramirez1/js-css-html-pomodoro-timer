function Counter() {
  const timeLeftDisplay = document.querySelector("#time-left");
  const sliderFill = document.querySelector(".fill");
  const startCount = 25 * 60;
  let timeLeft = startCount;
  let timerId;

  // convert seconds to minutes for display
  const convertToMin = (secondsLeft) => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft - minutes * 60;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  // countdown timer
  const countDown = (button) => {
    timerId = setInterval(() => {
      timeLeft--;
      timeLeftDisplay.textContent = convertToMin(timeLeft);
      sliderFill.style.width = (timeLeft / startCount) * 100 + "%";

      if (timeLeft <= 0) {
        clearInterval(timerId);
        delete descendingTasks[button.id];
        button.parentNode.remove();
        timeLeft = startCount;
        timeLeftDisplay.textContent = convertToMin(timeLeft);
      }
    }, 1000);
  };

  const handleClick = (button) => {
    switch (button.textContent) {
      case "ACTIVE":
        button.textContent = "PAUSED";
        clearInterval(timerId);
        break;
      case "PAUSED":
        button.textContent = "ACTIVE";
        countDown(button);
        break;
      default:
        const allButtons = document.querySelectorAll(".controller-button");
        allButtons.forEach((button) => {
          button.textContent = "START";
          button.classList.remove("active-button");
          clearInterval(timerId);
          timeLeft = startCount;
          timeLeftDisplay.textContent = convertToMin(timeLeft);
        });
        button.textContent = "ACTIVE";
        button.classList.add("active-button");
        countDown(button);
        break;
    }
  };

  return {
    handleClick,
  };
}

export { Counter };
