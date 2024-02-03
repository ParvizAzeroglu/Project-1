// class Carousel {
//   constructor(imagesArray) {
//     const carousel = document.querySelector(".carousel");
//     this.imageElement = document.createElement("img");
//     imageElement.className = "carousel-image";
//     carousel.appendChild(this.imageElement);
//     this.time = 3000;
//     this.imagesPath = [imagesArray];
//     this.index = 0;
//   }

//   changeImage() {
//     this.imageElement.src = this.imagesPath[this.index];

//     if (this.index < this.imagesPath.length - 1) {
//       this.index++;
//     } else {
//       this.index = 0;
//     }
//   }
// }

// const ImagesPath = [
// "./public/image-1.webp",
// "./public/image-2.webp",
// "./public/image-3.webp",
// ];

// const carousel = new Carousel(ImagesPath);

// setTimeout(() => {
//   carousel.changeImage();
// }, carousel.time);

// document.addEventListener("DOMContentLoaded", () => {
//   var slider = document.querySelector(".carousel");
//   const slides = [
//     "./public/image-1.webp",
//     "./public/image-2.webp",
//     "./public/image-3.webp",
//   ];
//   var index = 0;

//   slides.forEach((src, index) => {
//     var slide = document.createElement("div");
//     slide.className = "slide";
//     if (index === 0) slide.classList.add("active");
//     var img = document.createElement("img");
//     img.src = src;
//     slide.appendChild(img);
//     slider.appendChild(slide);
//   });

//   function changeSlide(move) {
//     var slidesArray = document.querySelectorAll(".slide");
//     slidesArray[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide + move + slides.length) % slides.length;
//     slidesArray[currentSlide].classList.add("active");
//   }

//   setInterval(function () {
//     changeSlide(1);
//   }, 3000);
// });

const imagesPath = [
  "./public/image-1.webp",
  "./public/image-2.webp",
  "./public/image-3.webp",
];
var index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".carousel");
  const imgElement = document.createElement("img");
  imgElement.className = "carousel-image";
  imgElement.alt = "carousel image";
  imgElement.src = imagesPath[index];
  slider.appendChild(imgElement);
  imgElement.style.opacity = 1;

  const slide = document.querySelector(".carousel-image");

  setInterval(() => {
    if (index < imagesPath.length - 1) {
      slide.src = imagesPath[index];
      index++;
    } else {
      index = 0;
    }
  }, 3000);
});
