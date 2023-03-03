const { Slide } = require("./../models");

module.exports.createSlide = (req, res, next) => {
  const { body } = req;

  const createdSlide = Slide.create(body);
  res.status(201).send(createdSlide);
};

module.exports.getSlides = (req, res, next) => {
  res.status(200).send(Slide.getAll());
};

module.exports.getSlideById = (req, res, next) => {
  const { id } = req.params;
  const foundSlide = Slide.getById(id);

  if (foundSlide) {
    return res.status(200).send(foundSlide);
  }
  res.status(404).send("Slide Not Found");
};

module.exports.updateSlideById = (req, res, next) => {
  const {
    body,
    params: { id }
  } = req;

  const updatedSlide = Slide.updateById(id, body);

  if (updatedSlide) {
    return res.status(200).send(updatedSlide);
  }
  res.status(404).send("Slide Not Found");
};

module.exports.deleteSlideById = (req, res, next) => {
  const { id } = req.params;

  const deletedSlide = Slide.deleteById(id);
  if (deletedSlide) {
    return res.status(204).send();
  }
  res.status(404).send("Slide Not Found");
};
