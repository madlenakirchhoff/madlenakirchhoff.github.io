var sites = [
    'https://www.lukassanner.de/madlenakirchhoff/survey/a',
    'https://www.lukassanner.de/madlenakirchhoff/survey/b'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
    console.log(sites[i])
    window.location.replace(sites[i]);
}
