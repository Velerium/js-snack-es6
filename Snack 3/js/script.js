let short = document.querySelector(`.output`);

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1 )) + min;

const teams = [

    {
        Name: 'teamA',
        Score: 0,
        Fouls: 0,
    },

    {
        Name: 'teamB',
        Score: 0,
        Fouls: 0,
    },

    {
        Name: 'teamC',
        Score: 0,
        Fouls: 0,
    }

]

const stats = [];

let tableHeader = ``;

tableHeader += `<ul>`

for (let x = 0; x < Object.getOwnPropertyNames(teams[0]).length; x++) {
    tableHeader += `<li>${Object.getOwnPropertyNames(teams[0])[x]}</li>`
}

tableHeader += `</ul>`

short.innerHTML += tableHeader;


let teamCounter = 0;
let highestFouls = 1; // Set to 1 so if there's no fouls, no team gets highlighted (line 84)

for (let i = 0; i < teams.length; i++) {

    let tableRow = ``;

    teams[i].Score = randomNumber(0, 10);
    teams[i].Fouls = randomNumber(0, 10);
    let { Score, Fouls } = teams[i];

    // stats[i] = {
    //     score,         // WHAT THE HELL!
    //     fouls
    // };

    stats.push({Score, Fouls});

    
    tableRow += `<ul class='ul'>`;

    for (let x = 0; x < Object.getOwnPropertyNames(teams[0]).length; x++) {
        
        switch (x) {
            case 0:
                tableRow += `<li>${teams[teamCounter].Name}</li>`;
                break;
            case 1:
                tableRow += `<li>${teams[teamCounter].Score}</li>`;
                break;
            case 2:
                tableRow += `<li>${teams[teamCounter].Fouls}</li>`;
                break;
        }
    }

    tableRow += `</ul>`;

    short.innerHTML += tableRow;
    

    if (teams[i].Fouls > highestFouls) {
        highestFouls = teams[i].Fouls;
        document.querySelectorAll(`.ul`)[i].style.backgroundColor = `yellow`;
        if (i > 0) {
            for (m = 0; m < i; m++) {
                document.querySelectorAll(`.ul`)[m].style.backgroundColor = `initial`;
            }
        }
        
    } else if (teams[i].Fouls === highestFouls) {
        document.querySelectorAll(`.ul`)[i].style.backgroundColor = `yellow`;
    }

    teamCounter++;

}





