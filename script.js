
var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector('.logo').appendChild(copy);



var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector('.logo').appendChild(copy);


function openPage() {
    window.location.href = 'loginpage/login.html';
}




document.getElementById('chatbot-button').addEventListener('click', function () {
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotIcon = document.getElementById('chatbot-icon');
  const tempDiv = document.getElementById('temp');  

  if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
    chatbotContainer.style.display = 'block'; 
    chatbotIcon.src = 'assets/images/downward.svg'; 
    tempDiv.style.display = 'flex'; 
  } else {
    chatbotContainer.style.display = 'none';
    chatbotIcon.src = 'chatbot.jpg'; 
    tempDiv.style.display = 'none'; 
  }
});

function countUp() {
  const counters = document.querySelectorAll(".count-up");
  const duration = 2000; 

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    const startValue = 0;
    const increment = (target / duration) * 100; 
    let currentValue = startValue;
    const intervalTime = 100;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= target) {
        currentValue = target;
        clearInterval(interval); 
      }
      counter.innerText = Math.ceil(currentValue); 
    }, intervalTime);
  });
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(); 
      observer.unobserve(entry.target); 
    }
  });
}
const observerOptions = {
  root: null, 
  rootMargin: "0px 0px -40% 0px", 
  threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);


const items = document.querySelectorAll(".glance-card-item");
items.forEach((item) => observer.observe(item));

// footer section starts here -------------------------------------------------------------

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

// Mobile menu toggle
document.querySelectorAll(".link-category h4").forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

const backToTopButton = document.querySelector(".back-to-top");


window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none"; 
  }
});


backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const elH = document.querySelectorAll(".timeline li > div");


window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}


function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

function openPage() {
  window.location.href = "loginpage/login.html";
}

const popup = document.querySelector(".popup");
const x = document.querySelector(".popup-content h1");

window.addEventListener("load", () => {
  popup.classList.add("showPopup");
  popup.childNodes[1].classList.add("showPopup");
});
x.addEventListener("click", () => {
  popup.classList.remove("showPopup");
  popup.childNodes[1].classList.remove("showPopup");
})















