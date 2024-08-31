const content = {
    en: {
        home: "Home",
        download: "Download",
        about: "About",
        ranking: "Ranking",
        team: "Our Team",
        paul_role: "Project leader",
        paul_des: "I led the team to ensure the success of the project by meeting deadlines and resolving conflicts. I also created a unique immersive sound experience.",
        leo_des: "I created the maps for Chapters 1 and 2 and helped add several features to the game.",
        cyril_role: "Technical Director",
        cyril_des: "I've set up a lobby-based multiplayer mode and realized the player's moves.",
        baptiste_role: "Art Director",
        baptiste_des: "I conceived the level design, developed the scenario, and managed the graphic assets to create immersive environments and a compelling story.",
        realization: "Realization of Treashunt",
        team : "Our Team",
        october: "October",
        october_des: "Starting the project, writing the specifications, brainstorming about the game during our many calls, etc.",
        november: "November",
        november_des: "The basics of the game are clearly defined, including the graphic style, the type of game, and the division of tasks.",
        jan_feb: "January/February",
        jan_feb_des: "The team loses one of its members, but we don't let it get us down and we divide up the tasks. We are all preparing for the March defense.",
        march: "March presentation",
        march_des: "The lobby map and game narrative are complete, the first version of multiplayer is up and running, and players can move and jump with the corresponding animations. We've even been able to get a head start on map design, camera management, and interface.",
        may_june: "May/June",
        may_june_des: "Enemy AI has been developed, the pause menu has been redesigned for better aesthetics, the player health system has been implemented with a life bar, and a timer has been added. The multiplayer system has been completely overhauled for a more secure and optimized version. Sound design is completed and a game trailer is edited and integrated into the website.",
        web: "Website development",
        rep : "Realization of Treashunt",
        oct : "October",
        nov : "November",
        jan : "January/February",
        mar : "March Soutenance",
        may : "May/June",     
        tim_oct : "October 2023",
        tim_jan : "January 2023",
        tim_mar : "March 2023",
        tim_jun : "Juin 2023",
        start : "Start",
        host :"Site hosting",
        first : "First Design",
        parallax : "Parallax effect",
        remaster : "Remastering",
        host_text :"It was in this month that I initiated a repository on GitHub to host the Treashunt website.",
        first_text : "I've almost completed the first version of the home page, entirely in HTML/CSS. This approach has given me a thorough understanding of the basics of web development.",
        parallax_text : "I integrated my first parallax effect into the “About” section without the use of external JavaScript libraries. This involved setting up event handlers and CSS transitions to create a smooth scrolling effect.",
        remaster_text : "I've improved the home page to make it simpler and more modern with a new javascript effect"
        
    },
    fr: {
        home: "Accueil",
        download: "Télécharger",
        about: "À propos",
        ranking: "Classement",
        team: "Notre équipe",
        paul_role: "Chef de Projet",
        paul_des: "J'ai dirigé l'équipe afin d'assurer la réussite du projet en respectant les délais et en résolvant les conflits. J'ai également créé une expérience sonore immersive unique.",
        leo_des: "J'ai créé les cartes des chapitres 1 et 2 et j'ai réalisé plusieurs fonctionnalités au jeu comme les interfaces.",
        cyril_role: "Directeur Technique",
        cyril_des: "J'ai mis en place un mode multijoueur basé sur un lobby et j'ai réalisé les mouvements des joueurs.",
        baptiste_role: "Directeur artistique",
        baptiste_des: "J'ai conçu le level design, développé le scénario et géré les ressources graphiques pour créer des environnements immersifs et une histoire captivante.",
        realization: "Réalisation de Treashunt",
        october: "Octobre",
        october_des: "Début du projet, rédaction du cahier des charges, brainstorming sur le jeu lors de nos nombreux appels, etc.",
        november: "Novembre",
        november_des: "Les bases du jeu sont clairement définies, y compris le style graphique, le type de jeu et la répartition des tâches.",
        jan_feb: "Janvier/Février",
        jan_feb_des: "L'équipe perd l'un de ses membres, mais nous ne nous laissons pas abattre et nous répartissons les tâches. Nous préparons tous la défense de mars.",
        march: "Présentation de mars",
        march_des: "La carte du lobby et la narration du jeu sont terminées, la première version du multijoueur est opérationnelle, et les joueurs peuvent se déplacer et sauter avec les animations correspondantes. Nous avons même pu prendre de l'avance sur la conception des cartes, la gestion de la caméra et l'interface.",
        may_june: "Mai/Juin",
        may_june_des: "L'IA des ennemis a été développée, le menu pause a été repensé pour un meilleur esthétisme, le système de santé des joueurs a été implémenté avec une barre de vie, et un chronomètre a été ajouté. Le système multijoueur a été complètement remanié pour une version plus sécurisée et optimisée. Le sound design est terminé et une bande-annonce du jeu est montée et intégrée au site web.",
        web : "Développement du Site",
        rep : "Réalisation de Treashunt",
        oct : "Octobre",
        nov : "Novembre",
        jan : "Janvier/Février",
        mar : "Soutenance Mars",
        may : "Mai/Juin",
        web : "Réalisation du Site Web",
        team : "Notre Equipe",
        tim_oct : "Octobre 2023",
        tim_jan : "Janvier 2023",
        tim_mar : "Mars 2023",
        tim_jun : "Juin 2023",
        start : "Départ",
        host : "Hébergement du site",
        first : "Premier design",
        parallax : "Effet parallax",
        remaster : "Remasterisation",
        host_text : "C'est ce mois-ci que j'ai créé un dépôt sur GitHub pour héberger le site Treashunt.",
        first_text : "J'ai presque terminé la première version de la page d'accueil, entièrement en HTML/CSS. Cette approche m'a permis de bien comprendre les bases du développement web.",
        parallax_text : "J'ai intégré mon premier effet parallax dans la section « À propos » sans utiliser de bibliothèques JavaScript externes. Cela a impliqué de configurer des gestionnaires d'événements et des transitions CSS pour créer un effet de défilement fluide.",
        remaster_text : "J'ai amélioré la page d'accueil pour la rendre plus simple et plus moderne avec un nouvel effet JavaScript."

    }
};
function switchLanguage(language) {
    const homeLink = document.querySelector('a[href="../index.html"]');
    const downloadLink = document.querySelector('a[href="download.html"]');
    const aboutLink = document.querySelector('a[href="about.html"]');
    const rankingLink = document.querySelector('a[href="leaderboard.html"]');
    const teamTitle = document.querySelector('.repertory:first-of-type');
    const realizationTitle = document.querySelector('.repertory:nth-of-type(2)');
    const websiteDevTitle = document.querySelector('.repertory:nth-of-type(3)');

    const paulRole = document.getElementById('paul_role');
    const paulDes = document.getElementById('paul_des');
    const leoDes = document.getElementById('leo_des');
    const cyrilRole = document.getElementById('cyril_role');
    const cyrilDes = document.getElementById('cyril_des');
    const baptisteRole = document.getElementById('baptiste_role');
    const baptisteDes = document.getElementById('baptiste_des');

    const octoberTitle = document.querySelector('.section-content.discovery h2');
    const octoberDes = document.querySelector('.section-content.discovery p');
    const novemberTitle = document.querySelector('.section-content.strategy h2');
    const novemberDes = document.querySelector('.section-content.strategy p');
    const janFebTitle = document.querySelector('.section-content.creative h2');
    const janFebDes = document.querySelector('.section-content.creative p');
    const marchTitle = document.querySelector('.section-content.production h2');
    const marchDes = document.querySelector('.section-content.production p');
    const mayJuneTitle = document.querySelector('.section-content.analysis h2');
    const mayJuneDes = document.querySelector('.section-content.analysis p');

    if (homeLink) homeLink.textContent = content[language].home;
    if (downloadLink) downloadLink.textContent = content[language].download;
    if (aboutLink) aboutLink.textContent = content[language].about;
    if (rankingLink) rankingLink.textContent = content[language].ranking;
    if (teamTitle) teamTitle.textContent = content[language].team;
    
    if (paulRole) paulRole.textContent = content[language].paul_role;
    if (paulDes) paulDes.textContent = content[language].paul_des;
    if (leoDes) leoDes.textContent = content[language].leo_des;
    if (cyrilRole) cyrilRole.textContent = content[language].cyril_role;
    if (cyrilDes) cyrilDes.textContent = content[language].cyril_des;
    if (baptisteRole) baptisteRole.textContent = content[language].baptiste_role;
    if (baptisteDes) baptisteDes.textContent = content[language].baptiste_des;

    if (realizationTitle) realizationTitle.textContent = content[language].realization;
    if (octoberTitle) octoberTitle.textContent = content[language].october;
    if (octoberDes) octoberDes.textContent = content[language].october_des;
    if (novemberTitle) novemberTitle.textContent = content[language].november;
    if (novemberDes) novemberDes.textContent = content[language].november_des;
    if (janFebTitle) janFebTitle.textContent = content[language].jan_feb;
    if (janFebDes) janFebDes.textContent = content[language].jan_feb_des;
    if (marchTitle) marchTitle.textContent = content[language].march;
    if (marchDes) marchDes.textContent = content[language].march_des;
    if (mayJuneTitle) mayJuneTitle.textContent = content[language].may_june;
    if (mayJuneDes) mayJuneDes.textContent = content[language].may_june_des;



    document.querySelector('#rep').textContent = content[language].rep;
    document.querySelector('#oct').textContent = content[language].oct;
    document.querySelector('#nov').textContent = content[language].nov;
    document.querySelector('#jan').textContent = content[language].jan;
    document.querySelector('#mar').textContent = content[language].mar;
    document.querySelector('#may').textContent = content[language].may;
    document.querySelector('#web').textContent = content[language].web;

    document.querySelector('#tim_oct').textContent = content[language].tim_oct;
    document.querySelector('#tim_jan').textContent = content[language].tim_jan;
    document.querySelector('#tim_mar').textContent = content[language].tim_mar;
    document.querySelector('#tim_jun').textContent = content[language].tim_jun;
    document.querySelector('#start').textContent = content[language].start;
    document.querySelector('#team').textContent = content[language].team;

    document.querySelector('#host').textContent = content[language].host;
    document.querySelector('#first').textContent = content[language].first;
    document.querySelector('#parallax').textContent = content[language].parallax;
    document.querySelector('#remaster').textContent = content[language].remaster;

  
    if (host_text) host_text.textContent = content[language].host_text;
    if (first_text) first_text.textContent = content[language].first_text;
    if (parallax_text) parallax_text.textContent = content[language].parallax_text;
    if (parallax_text) remaster_text.textContent = content[language].remaster_text;

}

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
});
