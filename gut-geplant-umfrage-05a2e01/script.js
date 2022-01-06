var sites = [
    'https://survey.uni-hannover.de/index.php/991545?lang=de',
    'https://survey.uni-hannover.de/index.php/714787?lang=de '
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
    console.log(sites[i])
    window.location.replace(sites[i]);
}