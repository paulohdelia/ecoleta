import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuários');
    res.json([
        {
            name: 'Paulo',
            email: 'paulohdelia@gmail.com',
            github: 'paulodelia',
            birth: '2000-09-19',

        }
    ]);
});

app.listen(3333)