const router = require('express').Router();
const axios = require('axios');
const Book = require('../../models/book');

router.get('/', (req,res)=>{
    Book.find()
        .then(booksData => {
            res.json(booksData);
        })
        .catch(err=>{
            res.json({error: err});
        });
});

router.post('/search',(req,res)=>{
    let search = req.body.search.replace(/\s/g,`+`);

    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(response => {
            res.json(response.data.items);
        })
        .catch(err =>{
            res.json({ error:err});
        });
});

