function toggleCurtain() {
  const curtain = document.querySelector('.curtain');
  curtain.classList.add('opened-curstain');

  const prize = document.querySelector('.prize');
  prize.classList.add('fly-down');
}


function goto() {
  window.location.reload();
}


