const fdClientModule = require('fantasydata-node-client');
const keys = {
   'CBBv3StatsClient': 'baad666f057d4581beaad950dc119ca8',
   'CBBv3ScoresClient': 'baad666f057d4581beaad950dc119ca8',
   'NFLv3ProjectionsClient': 'baad666f057d4581beaad950dc119ca8',
};

const CBBClient = new fdClientModule(keys);
// const CBBv3ScoresClient = require('./CBB/CBBv3Scores');
// const CBBv3StatsClient = require('./CBB/CBBv3Stats');
// const CBBv3OddsClient = require('./CBB/CBBv3Odds');


// Teams and Stadiums
// NOT GOOD
CBBClient.CBBv3ScoresClient.getLeagueHierarchyPromise()
    .then((resp => {
        console.log(resp);
    }))
    .catch((err) => {
        console.log('error', err);
});

