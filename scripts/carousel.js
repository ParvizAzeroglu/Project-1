const carousel = document.querySelector(".carousel");

const imgPath = [
  "./public/image-1.webp",
  "./public/image-2.webp",
  "./public/image-3.webp",
];

var imgIndex = 0;

// function MakeImgTag(imgPath, alt) {
//   const imgTag = document.createElement("img");
//   imgTag.src = imgPath;
//   imgTag.className = "carousel-image";
//   imgTag.alt = alt;
//   return imgTag;
// }

// setTimeout(() => {
//   carousel.appendChild(MakeImgTag(imgPath[imgIndex], "testCase"));
//   imgIndex++;
//   if (imgIndex == 2) {
//     imgIndex = 0;
//   }
// }, 2000);
