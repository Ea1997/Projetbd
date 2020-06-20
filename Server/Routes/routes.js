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
            console.log(count);
        
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
          console.log(count);
      
      res.header('Access-Control-Allow-Origin: *').status(200).json(result);
                       
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
});
module.exports = router;