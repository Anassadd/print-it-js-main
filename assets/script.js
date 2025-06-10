const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

let currentSlide = 0;

// Crée les points et ajoute un event listener sur chaque pour aller directement à la slide correspondante
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("dot_selected");
  dot.addEventListener("click", () => {
    currentSlide = i;
    updateBanner();
  });
  dotsContainer.appendChild(dot);
});

function updateBanner() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerText.innerHTML = slides[currentSlide].tagLine;

  document.querySelectorAll(".dot").forEach((dot, i) =>
    dot.classList.toggle("dot_selected", i === currentSlide)
  );
}

leftArrow.onclick = () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateBanner();
};

rightArrow.onclick = () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateBanner();
};

updateBanner();