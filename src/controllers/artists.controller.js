const Artist = require('../models/artist.model');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.sendStatus(201).json(artist);
  });
};
