import {config} from 'dotenv';
config(); // wczytuje zmienne srodowiskowe
import express from 'express';
import {MongoClient} from 'mongodb';
import {schema} from "./data/schema";
import GraphQLHttp from 'express-graphql';

const App = express();
let DATABASE;
// wymaga --harmony
// App.get('/', async (req, res) => {
//   res.send(await Promise.resolve("dziala"))
// });

App.use(express.static('public'));

MongoClient.connect(process.env.MONGO_URL, (err, db) => {
  if (err) throw err;

  DATABASE = db;

  //inicjalizacja graphqla - jak zwykly root
  App.use('/graphql', GraphQLHttp({
    schema: schema(DATABASE),
    graphiql: true, // wlacza graphiql pod adresem http://127.0.0.1:3000/graphql - dobre do testow
  }));

  App.listen(3000, () => console.log("nasłuchuje na porcie 3000"));
});




App.get('/data/links/', (req, res) => {
  DATABASE.collection('links')
    .find({})
    .toArray((err, links) => {
      if (err) res.code(400).json(err);

      res.json(links)
    })
})