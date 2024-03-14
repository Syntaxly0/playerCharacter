import express from "express";
import ejs from "ejs";
import * as fs from 'fs';
import * as readline from 'readline-sync';
import { Player } from  "./interface";

const app = express();

app.set("view engine", "ejs"); // EJS als view engine
app.set("port", 3000);

app.use(express.static('public'));

app.set("port", 3000);

app.get('/',(req,res)=>{
            res.render('index')
        });

app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);