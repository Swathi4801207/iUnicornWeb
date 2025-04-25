// let currentIndex = 0;
//   const slides = document.querySelectorAll('.carousel-item');

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.style.transform = `translateX(${100 * (i - index)}%)`;
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const sentences = [
    "Mobile App Development",
    "AI Solutions Architech",
    "Business Process Optimization",
    "Web Application Development",
    
  ];
  
  function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function typeSentence(sentence, element, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      document.querySelector(element).append(letters[i]);
      i++;
    }
  }
  
  async function deleteSentence(element) {
    const sentence = document.querySelector(element).innerHTML;
    const letters = sentence.split("");
    while (letters.length > 0) {
      await waitForMs(200);
      letters.pop();
      document.querySelector(element).innerHTML = letters.join("");
    }
  }
  
  
  async function sentenceLoop(sentenceList, element) {
    let i = 0;
    while (true) {
      await typeSentence(sentenceList[i], element);
      await waitForMs(1500);
      await deleteSentence(element);
      await waitForMs(500);
      i++;
      if (i >= sentenceList.length) {
        i = 0;
      }
    }
  }
  
  sentenceLoop(sentences, "#text");
// 


$('.footer-img').slick({
    dots: false, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    speed:800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow:2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });

  $('.customers').slick({
    dots: false, 
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    margin:20,
    speed:800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


  new Swiper('.testimonials-slide', {
    speed: 600,
    loop: true,
    margin:20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  AOS.init({
    once: true
 })

  




function reverseAnimation() {
  var image = document.querySelector('.image');
  image.classList.toggle('reverse-animation');
}


document.addEventListener('scroll', function() {
  var video = document.getElementById('background-video');
  video.pause();
});


  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('mainNavbar');
    if (navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
      document.querySelectorAll('#mainNavbar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          bsCollapse.hide();
        });
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('mainNavbar');
    if (navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
      document.querySelectorAll('#mainNavbar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          bsCollapse.hide();
          // Remove active class from all links
          document.querySelectorAll('#mainNavbar .nav-link').forEach(link => link.classList.remove('active'));
          // Add active class to the clicked link
          link.classList.add('active');
        });
      });
    }
  });






