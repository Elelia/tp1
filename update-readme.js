const fs = require('fs');

// Récupérer la version de build depuis les variables d'environnement
const buildVersion = process.env.BUILD_NUMBER;

// Chemin vers le fichier README.md
const readmePath = './README.md';

// Lire le contenu du README.md
fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remplacer la version précédente par la nouvelle version de build
    const updatedContent = data.replace(/Version du Build: `.*`/, `Version du Build: \`${buildVersion}\``);

    // Écrire le contenu mis à jour dans le fichier README.md
    fs.writeFile(readmePath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Le README a été mis à jour avec succès.');
    });
});