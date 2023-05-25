var input1 = document.getElementById("phone");
  var input2 = document.getElementById("name");
  var checkButton = document.getElementById("battun_form");

  function checkInputs() {
    if (input1.value.trim() === '') {
      input1.style.border = '1px solid red';
    } else {
      input1.style.borderColor = '';
    }
    if (input2.value.trim() === '') {
      input2.style.border = '1px solid red';
    } else {
      input2.style.borderColor = '';
    }
  }

  checkButton.addEventListener('click', checkInputs);




const carPriceSlider = document.querySelector("#carPriceSlider");
const downPaymentSlider = document.querySelector("#downPaymentSlider");
const leaseTermSlider = document.querySelector("#leaseTermSlider");
const carPriceValue = document.querySelector("#carPriceValue");
const downPaymentValue = document.querySelector("#downPaymentValue");
const leaseTermValue = document.querySelector("#leaseTermValue");
const initialPaymentValue = document.querySelector("#initialPaymentValue");
const monthlyPaymentValue = document.querySelector("#monthlyPaymentValue");
const totalCostValue = document.querySelector("#totalCostValue");
const minCarPrice = 1000000;
const maxCarPrice = 6000000;
const minDownPayment = 10;
const maxDownPayment = 60;
const minLeaseTerm = 1;
const maxLeaseTerm = 60;

const calculateValues = () => {
  const carPrice = Number(carPriceSlider.value);
  const downPayment = carPrice * Number(downPaymentSlider.value) /100;
  const leaseTerm = Number(leaseTermSlider.value);
  const monthlyInterestRate = 0.05 / 12;

  const initialPayment = downPayment;
  const monthlyPayment = carPrice - downPayment * (monthlyInterestRate / (1 - (1 + monthlyInterestRate) ** (-leaseTerm)));
  const totalCost = downPayment + monthlyPayment * leaseTerm;

  initialPaymentValue.innerHTML = `${initialPayment.toFixed(0)}`;
  monthlyPaymentValue.innerHTML = `${monthlyPayment.toFixed(0)}`;
  totalCostValue.innerHTML = `${totalCost.toFixed(0)}`;
};

carPriceSlider.addEventListener("input", () => {
  carPriceValue.innerHTML = `${Number(carPriceSlider.value).toLocaleString()}`;
  const carPriceBgColor = "#ddd";
  carPriceSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((carPriceSlider.value - minCarPrice) / (maxCarPrice - minCarPrice)) * 100}%, ${carPriceBgColor} ${((carPriceSlider.value - minCarPrice) / (maxCarPrice - minCarPrice)) * 100}%)`;
  calculateValues();
});

downPaymentSlider.addEventListener("input", () => {
  downPaymentValue.innerHTML = `${Number(downPaymentSlider.value).toLocaleString()}%`;
  const downPaymentBgColor = "#ddd";
  downPaymentSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((downPaymentSlider.value - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%, ${downPaymentBgColor} ${((downPaymentSlider.value - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%)`;
  calculateValues();
});

leaseTermSlider.addEventListener("input", () => {
  leaseTermValue.innerHTML = `${Number(leaseTermSlider.value)}`;
  const leaseTermBgColor = "#ddd";
  leaseTermSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((leaseTermSlider.value - minLeaseTerm) / (maxLeaseTerm - minLeaseTerm)) * 100}%, ${leaseTermBgColor} ${((leaseTermSlider.value - minLeaseTerm) / (maxLeaseTerm - minLeaseTerm)) * 100}%)`;
  calculateValues();
});

calculateValues();



const slider = document.querySelector('input[type="range"]');
slider.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    return;
  }
  if (event.key === 'Tab' || event.key === 'Enter' || event.key === 'Escape') {
    return;
  }
  if (event.key === 'Backspace' || event.key === 'Delete') {
    return;
  }
  if (event.key === '.' || event.key === ',' || event.key === '-' || event.key === '+') {
    return;
  }
  if (event.key.match(/^\d$/)) {
    return;
  }
  event.preventDefault();
});



var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");


var closeBtn = document.querySelector(".close");


var btn = function() {
  modal.style.display = "block";
  }

closeBtn.onclick = function() {
modal.style.display = "none";
}


window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
} 
 
 
 /*lazyLoad*/
  
  function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
  
    images.forEach((img) => {
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.src = img.dataset.src;
        img.onload = () => {
          img.removeAttribute('data-src');
        };
      }
    });
  }
  
  window.addEventListener('scroll', lazyLoad);

  window.addEventListener('load', lazyLoad);



/*Slaider*/


const images = document.querySelectorAll(".slider-image");
const dots = document.querySelectorAll(".slider-dot");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
let currentSlide = 0;
let interval;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  images[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (n + images.length) % images.length;
  images[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function startSlider() {
  interval = setInterval(() => {
    nextSlide();
  }, 10000);
}

function stopSlider() {
  clearInterval(interval);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopSlider();
    goToSlide(parseInt(dot.getAttribute("data-slide")) - 1);
  });
});

prevBtn.addEventListener("click", () => {
  prevSlide();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
});

startSlider();



var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });

  var input1 = document.getElementById("phone");
  var input2 = document.getElementById("name");
  var checkButton = document.getElementById("battun_form");

  function checkInputs() {
    if (input1.value.trim() === '') {
      input1.style.border = '1px solid red';
    } else {
      input1.style.borderColor = '';
    }
    if (input2.value.trim() === '') {
      input2.style.border = '1px solid red';
    } else {
      input2.style.borderColor = '';
    }
  }

  checkButton.addEventListener('click', checkInputs);


//maska


var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");


var closeBtn = document.querySelector(".close");


var btn = function() {
modal.style.display = "block";
}


closeBtn.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}




var open = document.querySelector(".burger");
var close = document.querySelector(".close_menu_burger");
var bergerMenu = document.querySelector(".burger_menu");


var opeen = function() {
  bergerMenu.style.display = "block";
  }

  var closse = function() {
    bergerMenu.style.display = "none";
}

