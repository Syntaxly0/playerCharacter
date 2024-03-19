import express from "express";
import ejs from "ejs";
import * as fs from 'fs';
import * as readline from 'readline-sync';
import { Player } from  "./interface";
import { Classes } from "./interface";

const app = express();
const players: Player[] = JSON.parse(fs.readFileSync('players.json', 'utf-8'));
const classes: Classes[] = JSON.parse(fs.readFileSync('classes.json', 'utf-8'));

app.set("view engine", "ejs"); // EJS als view engine
app.set("port", 3000);

app.use(express.static('public'));

app.set("port", 3000);

app.get('/',(req,res)=>{
            res.render('index', {
              players: players
            })
        });

app.get('/classes',(req,res)=>{
  res.render('classes', {
    classes: classes
  })
});

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);