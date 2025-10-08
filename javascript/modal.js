const modalOverlay = document.getElementById("modal-overlay");
const modalCancel =  document.getElementById("modal-cancel");
const modalActivationButton =  document.getElementById("modal-activation-button");

modalActivationButton.addEventListener('click', () => {
    modalOverlay.classList.remove("modal-inactive");
});
modalCancel.addEventListener('click', () => {
    modalOverlay.classList.add("modal-inactive");
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("modal-inactive");
  }
});

const change_avatar = document.querySelectorAll('.change-avatar');
const change_avatar_p = document.querySelectorAll('.change-avatar-p');
const change_avatar_input = document.getElementById('change-avatar-input'); // hidden input to hold chosen age

function show_choice(index) {

  change_avatar.forEach((choice, o) => {
    choice.classList.toggle('avatar-choice', o === index);
  });

 
  change_avatar_p.forEach((chocietext, a) => {
    const isAvatarActive = a === index;
    chocietext.classList.toggle('avatar-choice-active', isAvatarActive);

    if (isAvatarActive) {
      
      change_avatar_input.value = chocietext.textContent.trim();
    }
  });
}

change_avatar.forEach((pick, o) => {
  pick.addEventListener('click', () => show_choice(o));
});

if (change_avatar.length) show_choice(0);