import express from 'express';
import cookie from 'cookie-parser';

const app: express.Application = express();

app.use(express.static('public'));
app.use(cookie());
app.use(express.json());
app.use(express.text());
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index', {
        page: (await import('fs')).readFileSync('views/index.ejs'),
    });
});

app.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
