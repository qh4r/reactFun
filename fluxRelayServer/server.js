import express from 'express';

const App = express();

// wymaga --harmony
// App.get('/', async (req, res) => {
//   res.send(await Promise.resolve("dziala"))
// });

App.use(express.static('public'));


App.listen(3000);