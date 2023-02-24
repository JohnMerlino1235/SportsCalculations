const fdClientModule = require('fantasydata-node-client');
const keys = {
   'CBBv3StatsClient': 'baad666f057d4581beaad950dc119ca8',
   'CBBv3ScoresClient': 'baad666f057d4581beaad950dc119ca8'
};

const CBBClient = new fdClientModule(keys);
// this.CBBv2Client = new CBBv2Client(apiKeys.CBBv2Client);
// this.CBBv3ScoresClient = new CBBv3ScoresClient(apiKeys.CBBv3ScoresClient);
// this.CBBv3StatsClient = new CBBv3StatsClient(apiKeys.CBBv3StatsClient);
// this.CBBv3OddsClient = new CBBv3OddsClient(apiKeys.CBBv3OddsClient);

CBBClient.CBBv3ScoresClient.getLeagueHierarchyPromise()
    .then((resp => {
        console.log(resp);
    }))
    .catch((err) => {
        console.log('error', err);
    });