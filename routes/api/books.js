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