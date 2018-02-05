



const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.static('public'));
app.use(expressLayouts);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout')



app.get('/',(req, res, next)=>{
  
  res.render('index', {
    name: 'STAR LORD',
    profession: '-*Lord of the stars-*',
    starsTraveled: ["AlphaJ-34HT____ ", "SepticonE11234-2w___", "AnasiaK-298C " ]
  });
  next();
});

app.get('/ships', (req, res, next)=>{

  res.render('ships', {
  ships: ["LUMAX G0", "RB-120 special", "SPACE WOLF", "RAMBUM-Manatee" ]
  });
  next();
});

app.get('/character-create',(req, res) =>{
  res.render('character-create');
});

app.get('/character', (req, res) => {
  res.render('character', {
    name: req.query.name,
    weapon: req.query.weapon,
    kills: req.query.kills
  });
});

app.listen(3030,() =>{
  console.log("listeninng on port 3030 Baby");
});

