console.log("Hello from index.js");

//======Code.org======
// setProperty("title", "color", "navy");
// setProperty("paragraph", "background-color", "lightblue");
// setProperty("ptag", "padding", "10px");

// onEvent("esBtn", "click", function () {
//   console.log("Spanish button clicked");
//   setText("title", "Consejos de Conservación de Agua");
//   setText(
//     "paragraph",
//     "Es importante que todos hagamos nuestra parte para usar menos"
//   );
//   setText("next-btn", "Siguiente");
// });

// onEvent("enBtn", "click", function () {
//   console.log("English button clicked");
//   setText("title", "Water Conservation Tips");
//   setText(
//     "paragraph",
//     "It's important that we all do our part to use less water."
//   );
// });

//====== Refactoring =======
// setProperty("title", "color", "navy");
// Property setting
const title = document.getElementById("title");
if (title) {
  title.style.color = "navy";
}

//setProperty("paragraph", "background-color", "lightblue");
const paragraph = document.getElementById("paragraph");
if (paragraph) {
  paragraph.style.backgroundColor = "lightblue";
}

//Event for the Spanish button
const esBtn = document.getElementById("esBtn");
esBtn.addEventListener("click", function () {
  console.log("Spanish Button Clicked!");
  //setText("title", "Consejos de Conservación de Agua");
  // Text setting
  if (title) {
    title.textContent = "Consejos de Conservación de Agua";
  }
  if (paragraph) {
    paragraph.textContent =
      "Es importante que todos hagamos nuestra parte para usar menos";
  }
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.textContent = "Siguiente";
  }
});

// Event for the English button
const enBtn = document.getElementById("enBtn");
enBtn.addEventListener("click", function () {
  console.log("English button clicked!");
  // Text setting
  if (title) {
    title.textContent = "Water Conservation Tips";
  }
  if (paragraph) {
    paragraph.textContent =
      "It's important that we all do our part to use less water.";
  }
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.textContent = "Next";
  }
});

//======JavaScript======
// const translations = {
//   en: {
//     title: "Water Conservation Tips",
//     body: "It's important that we all do our part to use less water. Click through this app for tips for conservation ideas.",
//     button: "Next",
//   },
//   es: {
//     title: "Consejos para la Conservación del Agua",
//     body: "Es importante que todos hagamos nuestra parte para usar menos agua. Haz clic en esta aplicación para ver ideas de conservación.",
//     button: "Siguiente",
//   },
// };

// function changeLanguage(lang) {
//   console.log("Button Clicked");
//   document.getElementById("title").textContent = translations[lang].title;
//   document.getElementById("paragraph").textContent = translations[lang].body;
//   document.getElementById("next-btn").textContent = translations[lang].button;
//   document.documentElement.lang = lang;
// }
