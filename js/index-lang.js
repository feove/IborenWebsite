
const content = {
    en: {
        home: "Home",
        download: "Download",
        about: "About",
        ranking: "Ranking",
        welcome: "Welcome to Treashunt",
        setOff: "Set off on an adventure!",
        whatIs: "What is TreasHunt?",
        description: `A thrilling adventure game that transports you into a world full of mysteries and captivating challenges. 
                      You play as a fearless young adventurer who has just arrived on a legendary island in the heart of the ocean, 
                      known for its volatile volcano. In this epic yet dangerous journey, your goal is to reach the summit of the volcano 
                      and claim a priceless treasure that bestows extraordinary powers upon those who are worthy. 
                      However, the path to the summit is anything but easy. You will have to navigate dense, lush forests, 
                      climb steep mountains, and overcome formidable trials. Each stage of your journey brings you closer to the coveted treasure, 
                      but you'll need to use your intelligence, agility, and bravery to conquer the obstacles that stand in your way.`,
        adventure: "Adventure",
        emotional: "Emotional",
        history: "History",
        contact: "Contact us",
    },
    fr: {
        home: "Accueil",
        download: "Télécharger",
        about: "À propos",
        ranking: "Classement",
        welcome: "Bienvenue dans Treashunt",
        setOff: "Partez à l'aventure !",
        whatIs: "Qu'est-ce que TreasHunt ?",
        description: `Un jeu d'aventure palpitant qui vous transporte dans un monde plein de mystères et de défis captivants.
                      Vous incarnez un jeune aventurier intrépide qui vient d'arriver sur une île légendaire au cœur de l'océan,
                      connue pour son volcan volatil. Dans cette épopée dangereuse, votre objectif est d'atteindre le sommet du volcan
                      et de mettre la main sur un trésor inestimable qui confère des pouvoirs extraordinaires à ceux qui en sont dignes.
                      Cependant, le chemin vers le sommet n'est pas facile. Vous devrez naviguer à travers des forêts denses et luxuriantes,
                      gravir des montagnes escarpées et surmonter des épreuves redoutables. Chaque étape de votre parcours vous rapproche du trésor convoité,
                      mais vous devrez faire preuve d'intelligence, d'agilité et de bravoure pour surmonter les obstacles qui se dressent sur votre chemin.`,
        adventure: "Aventure",
        emotional: "Émotionnel",
        history: "Histoire",
        contact: "Contactez-nous",
    }
};

function switchLanguage(language) {
    document.querySelector('a[href="index.html"]').textContent = content[language].home;
    document.querySelector('#download-nav').textContent = content[language].download;
    document.querySelector('a[href="index/about.html"]').textContent = content[language].about;
    document.querySelector('a[href="index/leaderboard.html"]').textContent = content[language].ranking;
    document.querySelector('.text-box h3').textContent = content[language].welcome;
    document.querySelector('.animated-title h1').textContent = content[language].setOff;
    document.querySelector('.story-header h2').textContent = content[language].whatIs;
    document.querySelector('.story-text p').innerHTML = content[language].description;
    document.querySelectorAll('.text-overlay h3')[0].textContent = content[language].adventure;
    document.querySelectorAll('.text-overlay h3')[1].textContent = content[language].emotional;
    document.querySelectorAll('.text-overlay h3')[2].textContent = content[language].history;
    document.querySelector('.contact-link span').textContent = content[language].contact;
}

document.addEventListener('DOMContentLoaded', () => {
   
    switchLanguage('en');
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
});
