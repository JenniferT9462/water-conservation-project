console.log("Hello from index.js");

const translations = {
    en: {
        title: "Water Conservation Tips",
        body: "It's important that we all do our part to use less water. Click through this app for tips for conservation ideas.",
        button: "Next"
    },
    es: {
        title: "Consejos para la Conservación del Agua",
        body: "Es importante que todos hagamos nuestra parte para usar menos agua. Haz clic en esta aplicación para ver ideas de conservación.",
        button: "Siguiente"
    }
}


function changeLanguage(lang) {
    console.log("Button Clicked");
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('paragraph').textContent = translations[lang].body;
    document.getElementById('next-btn').textContent = translations[lang].button;
    document.documentElement.lang = lang;
}