var fs = require('fs');
var parse = require('csv-parse');

var cardData = [];
fs.createReadStream('data.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        cardData.push({
          firstName: csvrow[0] || 'Not specified',
          lastName: csvrow[1] || 'Not specified',
          school: csvrow[2] || 'Not specified',
          facts: [
            {
              text: csvrow[3] || 'Not specified',
              status: true
            },
            {
              text: csvrow[4] || 'Not specified',
              status: true
            },
            {
              text: csvrow[5] || 'Not specified',
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
