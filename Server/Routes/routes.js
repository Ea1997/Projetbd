var express = require('express');
var router = express.Router();
const https = require('https');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/stats/province', function (req, res) {
    https.get('https://services3.arcgis.com/hjUMsSJ87zgoicvl/arcgis/rest/services/Covid_19/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID_1,RegionFr,Cases,Deaths,Recoveries&returnGeometry=false&outSR=4326&f=json', (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            let result=JSON.parse(data);

        
                    res.header('Access-Control-Allow-Origin: *').status(200).json(result.features);
                         
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

});

router.get('/stats', function (req, res) {
    https.get('https://api.covid19api.com/total/country/morocco', (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            let result=JSON.parse(data);
            var count = Object.keys(result).length;
           
        
        res.header('Access-Control-Allow-Origin: *').status(200).json(result[count-1]);
                         
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
});

router.get('/allstats', function (req, res) {
  https.get('https://api.covid19api.com/country/Morocco', (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
          let result=JSON.parse(data);
          var count = Object.keys(result).length;
         
      
      res.header('Access-Control-Allow-Origin: *').status(200).json(result);
                       
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
});
router.get('/zones', function (req, res) {
 
data=[
  {
    "province":"Aousserd",
    "zone":1
  },
  {
    "province":"Boulemane",
    "zone":1
  },
  {
    "province":"Chefchaouen",
    "zone":1
  },
  {
    "province":"Es-Semara",
    "zone":1
  },
  {
    "province":"Fahs-Anjra",
    "zone":1
  },
  {
    "province":"Jerada",
    "zone":1
  },
  {
    "province":"M'Diq-Fnideq",
    "zone":1
  },
  {
    "province":"Sidi Kacem",
    "zone":1
  },
   {
    "province":"Tan-Tan",
    "zone":1
  },
  {
    "province":"Tarfaya",
    "zone":1
  },
  {
    "province":"Tiznit",
    "zone":1
  },
  {
    "province":"Youssoufia",
    "zone":1
  },
  {
    "province":"Figuig",
    "zone":1
  },
  {
    "province":"Khénifra",
    "zone":1
  },
  {
    "province":"Ouazzane",
    "zone":1
  },
  {
    "province":"Sidi Slimane",
    "zone":1
  },
  {
    "province":"Chtouka-Ait Baha",
    "zone":1
  },
  {
    "province":"Boujdour",
    "zone":1
  },
  {
    "province":"Tata",
    "zone":1
  },
  {
    "province":"El Kelâa des Sraghna",
    "zone":1
  },
  {
    "province":"Essaouira",
    "zone":1
  },
  {
    "province":"Oued Ed-Dahab",
    "zone":1
  },
  {
    "province":"Errachidia",
    "zone":1
  },
  {
    "province":"Guercif",
    "zone":1
  },
  {
    "province":"Taourirt",
    "zone":1
  },
  {
    "province":"Driouch",
    "zone":1
  },
  {
    "province":"Tinghir",
    "zone":1
  },
  {
    "province":"Zagora",
    "zone":1
  },
  {
    "province":"Fquih Ben Salah",
    "zone":1
  },
  {
    "province":"Ifrane",
    "zone":1
  },
  {
    "province":"Chichaoua",
    "zone":1
  },
  {
    "province":"Inezgane-Ait Melloul",
    "zone":1
  },
  {
    "province":"Guelmim",
    "zone":1
  },
  {
    "province":"Berkane",
    "zone":1
  },
  {
    "province":"Sefrou",
    "zone":1
  },
  {
    "province":"Midelt",
    "zone":1
  },
  {
    "province":"Al Haouz",
    "zone":1
  },
  {
    "province":"Taza",
    "zone":1
  },
  {
    "province":"Oujda-Angad",
    "zone":1
  },
  {
    "province":"Meknès",
    "zone":1
  },
  {
    "province":"Rehamna",
    "zone":1
  },
  {
    "province":"Ouarzazate",
    "zone":1
  },
  {
    "province":"Assa-Zag",
    "zone":1
  },
  {
    "province":"Laâyoune",
    "zone":1
  },
  {
    "province":"Sidi Ifni",
    "zone":1
  },
  {
    "province":"Safi",
    "zone":1
  },
  {
    "province":"Moulay Yacoub",
    "zone":1
  },
  {
    "province":"Al Hoceima",
    "zone":1
  },
  {
    "province":"Khémisset",
    "zone":1
  },
  {
    "province":"Khouribga",
    "zone":1
  },
  {
    "province":"Agadir-Ida-Ou-Tnane",
    "zone":1
  },
  {
    "province":"Nador",
    "zone":1
  },
  {
    "province":"Taroudannt",
    "zone":1
  },
  {
    "province":"Taounate",
    "zone":1
  },
  {
    "province":"Azilal",
    "zone":1
  },
  {
    "province":"Settat",
    "zone":1
  },
  {
    "province":"Béni Mellal",
    "zone":1
  },
  {
    "province":"Tétouan",
    "zone":1
  },
  {
    "province":"Sidi Bennour",
    "zone":1
  },
 
  {
    "province":"Skhirate-Témara",
    "zone":1
  },
  {
    "province":"Fès",
    "zone":1
  },
  {
    "province":"Salé",
    "zone":1
  },
  {
    "province":"Benslimane",
    "zone":1
  },
  {
    "province":"El Jadida",
    "zone":1
  },
 
  {
    "province":"Berrechid",
    "zone":1
  },
  {
    "province":"Rabat",
    "zone":1
  },
  {
    "province":"El Hajeb",
    "zone":1
  },
  {
    "province":"Médiouna",
    "zone":1
  },
  {
    "province":"Nouaceur",
    "zone":1
  },
  {
    "province":"Mohammadia",
    "zone":1
  },
 
 
  {
    "province":"Casablanca",
    "zone":1
  },
   {
    "province":"Tanger-Assilah",
    "zone":2
  },
  {
    "province":"Marrakech",
    "zone":2
  },
  {
    "province":"Larache",
    "zone":2
  },
   {
    "province":"Kénitra",
    "zone":2
  }
]
      res.header('Access-Control-Allow-Origin: *').status(200).json(data);
                       
    
    
  
});
module.exports = router;