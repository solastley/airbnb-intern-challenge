var fs = require('fs');
var parse = require('csv-parse');

var cardData = [];
fs.createReadStream('data.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        cardData.push({
          firstName: csvrow[0],
          lastName: csvrow[1],
          school: csvrow[2],
          facts: [
            {
              text: csvrow[3],
              status: true
            },
            {
              text: csvrow[4],
              status: true
            },
            {
              text: csvrow[5],
              status: false
            }
          ]
        });
    })
    .on('end',function() {
      cardData = cardData.slice(1, cardData.length);
      fs.writeFile("data.json", JSON.stringify(cardData), function() {
				console.log("Job complete.");
			})
    });
