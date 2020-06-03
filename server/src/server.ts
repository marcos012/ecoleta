import express from 'express';

const app = express();

app.get('/user', (req, res) => {
    res.json({'Marcos': 's', 'sssss': 'a'});
    
});

app.listen(3000);