import {config} from 'dotenv';
config(); // wczytuje zmienne srodowiskowe
import express from 'express';
import {MongoClient} from 'mongodb';
import {getSchema} from "./data/schema";
import GraphQLHttp from 'express-graphql';
import {graphql, introspectionQuery} from 'graphql';
import fs from 'fs'
import path from 'path';


const App = express();
let DATABASE;
// wymaga --harmony
// App.get('/', async (req, res) => {
//   res.send(await Promise.resolve("dziala"))
// });

App.use(express.static('public'));
(async () => {
  try {
    let db = await MongoClient.connect(process.env.MONGO_URL)

    // generacja schemy lepiej w sumie nie robic tego w runtimie  servera
    let schema = getSchema(db);
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile(path.join(__dirname, 'schema.json'), JSON.stringify(json, null, 2), err => {
      if (err) throw err
      console.log("schema persisted")
    });

    DATABASE = db;

    //inicjalizacja graphqla - jak zwykly root
    App.use('/graphql', GraphQLHttp({
      schema,
      graphiql: true, // wlacza graphiql pod adresem http://127.0.0.1:3000/graphql - dobre do testow
    }));

    App.listen(3000, () => console.log("nasłuchuje na porcie 3000"));
  }
  catch (err) {
    throw err;
  }
})();


App.get('/data/links/', (req, res) => {
  DATABASE.collection('links')
    .find({})
    .toArray((err, links) => {
      if (err) res.code(400).json(err);

      res.json(links)
    })
})