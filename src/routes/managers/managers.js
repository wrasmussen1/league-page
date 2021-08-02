export const managers = [
   {
     "roster": 1,  // ID of the roster that the manager manages
     "name": "Wyatt",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Overland Park",
     "bio": "Lorem ipsum...",
     "photo": "/managers/name.jpg", // done
     "fantasyStart": 2012, // when did the manager start playing fantasy football
     "favoriteTeam": "ind", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Cole", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5124, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "2 Years from a 'Ship",
     "tradingScale": 8, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
  {
     "roster": 2,  // ID of the roster that the manager manages
     "name": "Cole",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Storm Lake",
     "bio": "Lorem ipsum...",
     "photo": "/managers/name.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "ne", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Wyatt", // Can be anything (usually your rival's name)
       link: 1, // manager array number within this array, or null to link back to all managers page
       image: "/managers/rival.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 206, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "My team is shit",
     "tradingScale": 4, // 1 - 10
     "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
]
