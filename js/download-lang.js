
const content = {
    en: {
        home: "Home",
        download: "Download",
        about: "About",
        ranking: "Ranking",
        downloadTitle: "Download the game",
        downloads: "Downloads",
        operatingFile: "Operating file",
        reportMarch: "Report March 4",
        techSpecs: "Technical specifications",
        plan1: "Plan Soutenance 1",
        plan2: "Plan Soutenance 2",
        plan3: "Plan Soutenance 3",
        projectReport: "Project Report"

    },
    fr: {
        home: "Accueil",
        download: "Télécharger",
        about: "À propos",
        ranking: "Classement",
        downloadTitle: "Téléchargez le jeu",
        downloads: "Téléchargements",
        operatingFile: "Dossier d'exploitation",
        reportMarch: "Rapport du 4 Mars",
        techSpecs: "Cahier des charges",
        plan1: "Plan Soutenance 1",
        plan2: "Plan Soutenance 2",
        plan3: "Plan Soutenance 3",
        projectReport: "Rapport de projet"
    }
};

function switchLanguage(language) {
    document.querySelector('a[href="../index.html"]').textContent = content[language].home;
    document.querySelector('a[href="download.html"]').textContent = content[language].download;
    document.querySelector('a[href="about.html"]').textContent = content[language].about;
    document.querySelector('a[href="leaderboard.html"]').textContent = content[language].ranking;

    document.querySelector('.content h2').textContent = content[language].downloadTitle;
    document.querySelector('.title-download').textContent = content[language].downloads;
    document.querySelectorAll('.box-content h3')[0].textContent = content[language].operatingFile;
    document.querySelectorAll('.box-content h3')[1].textContent = content[language].reportMarch;
    document.querySelectorAll('.box-content h3')[2].textContent = content[language].techSpecs;
    document.querySelectorAll('.box-content h3')[3].textContent = content[language].plan1;
    document.querySelectorAll('.box-content h3')[4].textContent = content[language].plan2;
    document.querySelectorAll('.box-content h3')[5].textContent = content[language].plan3;
    document.querySelectorAll('.box-content h3')[6].textContent = content[language].projectReport;
}

document.addEventListener('DOMContentLoaded', () => {
    
    switchLanguage('en'); 
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
});
