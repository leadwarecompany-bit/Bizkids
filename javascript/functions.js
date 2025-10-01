const lCarousel = document.querySelectorAll('.what-parent-carousel');
const indicators = document.querySelectorAll('.landing-what-parent-carousel-indicator');

function showslide(index) {
    lCarousel.forEach((slide, i) => {
        slide.classList.toggle('lcaro-active', i === index);
    });

    indicators.forEach((dot, i) => {
        dot.classList.toggle('indi-active', i === index);
    });
}

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        showslide(i);
    });
});

const loginforms =  document.querySelectorAll('.login-form');
const loginformindicator = document.querySelectorAll('.switch-link');

function showform(index) {
    loginforms.forEach((form, i) => {
        form.classList.toggle('form-active', i === index);
    })
    loginformindicator.forEach((indicater, i) => {
        indicater.classList.toggle('login-link-active', i === index)
    });
};

loginformindicator.forEach((indicate, i) => {
    indicate.addEventListener('click', () => {
        showform(i);
    });
});

// cache nodes
const name_magic = document.querySelectorAll('.yeye-name-magic');
const sentence_magic = document.getElementById('fancy-fancy');
const kids_name = document.getElementById('childs-profile-creation-first-name');

function updateName() {
  const val = kids_name.value.trim();               // read current input value
  name_magic.forEach(el => el.textContent = val);  // update every .yeye-name-magic
  // show sentence only when there's text
  if(val == ""){
    sentence_magic.textContent = ""
  }
  else{
    sentence_magic.textContent =  ` Great ${val} will love learning with Kimba 😊`;
  }
}

// update in real-time as user types
kids_name.addEventListener('input', updateName);

// ensure correct initial state on page load
document.addEventListener('DOMContentLoaded', updateName);
