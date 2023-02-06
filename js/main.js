// TRACCIA:

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Ecco i dati dei membri dei team:
// Wayne Barnett		Founder & CEO			wayne - barnett - founder - ceo.jpg
// Angela Caroll		Chief Editor			angela - caroll - chief - editor.jpg
// Walter Gordon		Office Manager			walter - gordon - office - manager.jpg
// Angela Lopez		Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada		Developer				scott - estrada - developer.jpg
// Barbara Ramos		Graphic Designer		barbara - ramos - graphic - designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card / schede


// SVOLGIMENTO:

// Creo array membri del team
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "<img src='wayne-barnett-founder-ceo.jpg'>"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "<img src='angela-caroll-chief-editor.jpg'>"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "<img src='walter-gordon-office-manager.jpg'>"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "<img src='angela-lopez-social-media-manager.jpg'>"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "<img src='scott-estrada-developer.jpg'>"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "<img src='barbara-ramos-graphic-designer.jpg'>"
    }
];

// Stampare su console PER OGNI membro del team le informazioni
for (let teamMember of teamMembers) {
    console.log(teamMember);
}