const express = require("express");
const router = express.Router();
const Note = require("../db/model.js");

router.get("/notes", (req, res, next) => {
    Note.find({}, 'title content')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/notes', (req, res, next) => {
    Note.create(req.body)
        .then(data => res.json(data))
        .catch(next)
});

router.delete("/notes/:id", (req, res, next) => {
    Note.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

// router.patch("/notes/:id", (req, res, next) => {
//     Note.findOneAndUpdate({"_id": req.params.id}, {$set: {title: req.body.title, content: req.body.content}}, (err) => {
//         console.log(err);
//     });
// });

module.exports = router;