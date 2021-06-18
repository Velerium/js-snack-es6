const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1 )) + min;

const teams = [

    {
        name: 'teamA',
        score: 0,
        fouls: 0,
    },

    {
        name: 'teamB',
        score: 0,
        fouls: 0,
    },

    {
        name: 'teamC',
        score: 0,
        fouls: 0,
    }

]

for (let i = 0; i < teams.length; i++) {
    teams[i].score = randomNumber(0, 10);
    teams[i].fouls = randomNumber(0, 10);
    console.log(teams[i]);
}

const stats = [];

for (i = 0; i < teams.length; i++) {
    let { name, score, fouls } = teams[i];

    // stats[i] = {
    //     score,         // WHAT THE HELL!
    //     fouls
    // };

    stats.push({score, fouls})

    console.log(`----- ${name} -----`)
    console.log(stats[i])
}

