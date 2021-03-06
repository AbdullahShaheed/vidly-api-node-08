const Joi = require("joi");
const mongoose = require("mongoose");

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: { type: String, required: true },
  })
);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().required(),
  };
  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
