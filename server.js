const express = require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post('/', (req, res)=>{
    console.log(req.body);
    let kg=Number(req.body.kg);
    let pikkus=Number(req.body.pikkus);

    let result=kg/pikkus;
    
    
    if (result < 19) {
        res.send('alakaaluline');
      } else if (result < 24,9) {
        res.send('normaalkaal');
    } else if (result < 29,9) {
        res.send('ylekaal');
      } else {
        res.send('rasvumine');
      }
    (`${kg}/${pikkus}=${result}`);

});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});