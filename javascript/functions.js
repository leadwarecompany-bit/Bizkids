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
  const val = kids_name.value.trim(); 
  name_magic.forEach(el => el.textContent = val);
  if(val == ""){
    sentence_magic.textContent = ""
  }
  else{
    sentence_magic.textContent =  ` Great ${val} will love learning with Kimba 😊`;
  }
}


kids_name.addEventListener('input', updateName);


document.addEventListener('DOMContentLoaded', updateName);

// node selections
const age_range_options = document.querySelectorAll('.kids-profile-creation-age-range');
const age_ranges_first_text = document.querySelectorAll('.age-ranges-first-text');
const age_ranges_input = document.getElementById('age-range'); // hidden input to hold chosen age

function show_options(index) {

  age_range_options.forEach((option, o) => {
    option.classList.toggle('age-range-active', o === index);
  });

 
  age_ranges_first_text.forEach((ageEl, a) => {
    const isActive = a === index;
    ageEl.classList.toggle('age-active', isActive);

    if (isActive) {
      
      age_ranges_input.value = ageEl.textContent.trim();
    }
  });
}

age_range_options.forEach((opt, o) => {
  opt.addEventListener('click', () => show_options(o));
});

if (age_range_options.length) show_options(0);
