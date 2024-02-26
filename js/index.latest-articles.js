
  
  const bubblyButtons = document.getElementsByClassName("buttom__class");
  
  for (const i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }