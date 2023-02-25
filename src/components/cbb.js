import '../App.css';
function CBB() {

    function handleGetPlayerDetailsByPlayer() {
        //     /// <summary>
        //     /// Get Player Details by Player
        //     /// </summary>
        //     /// <param name="playerid">Unique FantasyData Player ID. Example:<code>60003802</code>.</param>
        //     getPlayerDetailsByPlayerPromise(playerid){
        //         var parameters = {};
        //         parameters['playerid']=playerid;
        //         return this.GetPromise('/v3/cbb/scores/{format}/Player/{playerid}', parameters);
        //     }
    }

    function handleGetTeamSeasonStats() {
        //     /// <summary>
        //     /// Get Team Season Stats
        //     /// </summary>
        //     /// <param name="season">Year of the season (with optional season type). Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.</param>
        //     getTeamSeasonStatsPromise(season){
        //         var parameters = {};
        //         parameters['season']=season;
        //         return this.GetPromise('/v3/cbb/scores/{format}/TeamSeasonStats/{season}', parameters);
        //     }
    }

    function handleGetTeams() {

        //     /// <summary>
        //     /// Get Teams
        //     /// </summary>
        //     getTeamsPromise(){
        //         return this.GetPromise('/v3/cbb/scores/{format}/teams');
        //     }
    }

    function handleGetPlayerDetailsByTeam() {
        //     /// <summary>
        //     /// Get Player Details by Team
        //     /// </summary>
        //     /// <param name="team">The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>.</param>
        //     getPlayerDetailsByTeamPromise(team){
        //         var parameters = {};
        //         parameters['team']=team;
        //         return this.GetPromise('/v3/cbb/scores/{format}/Players/{team}', parameters);
        //     }
    }

    return (
    <div className="App">
        <head className='App-header'>
            This is the College Basketball Page
            <button>
                <a href="/">
                    Back
                </a>
            </button>
        </head>
  </div>
);
}

export default CBB;