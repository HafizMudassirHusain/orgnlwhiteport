// ===================================My Navbar======================================
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// ======================================text TYPING====================================

window.onload = function() {
    // Typing animation
    const typingText = document.querySelector('.typing-text');
    const words = ['Developer','Programmer','Freelancer'];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200); // Typing speed (adjust as needed)
      } else {
        setTimeout(erase, 2000); // Pause before erasing (adjust as needed)
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Erasing speed (adjust as needed)
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // Pause before typing new word (adjust as needed)
      }
    }

    type(); // Start typing animation
  };



// ==============================Project Picture expand section=====================================
document.getElementById('showMoreButton').addEventListener('click', function() {
  var hiddenCards = document.querySelectorAll('.card.hidden');
  hiddenCards.forEach(function(card) {
    card.classList.remove('hidden');
  });
});
// ======================expand images======================
function expandImage(imageUrl) {
    var expandedImage = document.querySelector('.expanded-image');
    expandedImage.src = imageUrl;
    document.querySelector('.expanded-image-container').style.display = 'flex';
}
function closeExpandedImage() {
    document.querySelector('.expanded-image-container').style.display = 'none';
}
// ========================================COntact me section====================================
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${message.value}<br>`;
    Email.send({
        SecureToken : "cc5b16e1-4cf5-4391-9286-da529c592342",
        To: 'hmudassir511@gmail.com',
        From: "hmudassir511@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        //   message => alert(message)
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "SuccessFull!",
                    text: "Message send successFully!",
                    icon: "success"
                });
            }
        }

    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != "") {
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        })
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid Email Address";
        } else {
            errorTxtEmail.innerText = "email Address cant be Blank";
        }

    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (!fullName.classList.contains("error") && !email.classList.
    contains("error") && !phone.classList.contains("error") && 
    !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();
        form.reset();
        return false;
    }

});
// ==============================Testenomial part======================
// Iitialization Of Swiper JS
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });
// ===============================GSAPs=========================================
// // Function to make the navbar sticky
function makeNavbarSticky() {
  const navbar = document.querySelector('navigation-navbar');
  // const navbarHeight = navbar.offsetHeight;

  // Use GSAP to animate the navbar
  gsap.to(navbar, {
    y: 0,
    duration: 0.3,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: ".content",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false
    }
  });
}
document.addEventListener('DOMContentLoaded', makeNavbarSticky);

// =====================================banner gsap======================
gsap.from(".banner", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5
});

gsap.from(".btnhire", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1
});

// =====================================About gsaps================================

// script.js
// gsap.registerPlugin(ScrollTrigger);

gsap.from(".about", {

  scrollTrigger: {
    y:50,
    trigger: ".about",
    start: "top 80%", // Animation starts when the top of the element hits the center of the viewport
    end: "bottom center", // Animation ends when the bottom of the element hits the center of the viewport
    scrub: true // Smoothly animates as you scroll
  },
  opacity: 0, // Fade in animation
  duration: 1 // Duration of the animation
});

// Add animations for other elements using similar syntax




// gsap.utils.toArray('.about').forEach((section) => {
//   gsap.from(section, {
//     opacity: 0,
//     // y: 50,
//     x:-50,
//     duration: 1,
//     scrollTrigger: {
//       trigger: section,
//       start: 'top 70%',
//       end: 'bottom 10%',
//       toggleActions: 'play none none reverse'
//     }
//   });
// });

// ======================Eduication section==============================

gsap.utils.toArray('.education-content').forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});
// ========================Skill sevtion=================================
gsap.utils.toArray('.grid').forEach((grid) => {
  gsap.from(grid, {
    opacity: 0,
    y: 90,
    duration: 2,
    scrollTrigger: {
      trigger: grid,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});
// ===========================Project Section===========================
gsap.utils.toArray('.card').forEach((grid) => {
  gsap.from(grid, {
    opacity: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
      trigger: grid,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});
// =================================Testinomial Part====================================
gsap.utils.toArray('.swiper-slide').forEach((slide) => {
  gsap.from(slide, {
    opacity: 0,
    y: 50,
    x:50,
    duration: 1,
    scrollTrigger: {
      trigger: slide,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});
// ===================================Contact Me=================================
  // Define a timeline
  var tl = gsap.timeline({ paused: true });

  // Add animations to the timeline
  tl.from('.input-field,.textarea-field', { opacity: 0, y: -50, stagger: 0.2 });

  // Trigger the timeline when the contact section enters the viewport
  ScrollTrigger.create({
    trigger: '.section-contact',
    start: 'top 80%',
    end: 'bottom 20%',
    animation: tl.play(),
    toggleActions: 'play none none reverse',
  });

  // =============================lomotive Js================================





