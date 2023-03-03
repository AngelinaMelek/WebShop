const { v4: uuidv4 } = require("uuid");

module.exports = (db) => {
  class Slide {
    static tableName = "slides";
    static modelName = "Slide";

    static init() {
      try {
        db.client.getData(`/${Slide.tableName}`);
      } catch (err) {
        db.client.push(`/${Slide.tableName}`, []);
      }
    }

    static create(value) {
      const existingSlides = db.client.getData(`/${Slide.tableName}`);
      const newSlides = [...existingSlides, { id: uuidv4(), ...value }];
      db.client.push(`/${Slide.tableName}`, newSlides);
      const newExistingSlides = db.client.getData(`/${Slide.tableName}`);

      return newExistingSlides[newExistingSlides.length - 1];
    }

    static getAll() {
      return db.client.getData(`/${Slide.tableName}`).map((s) => s.href);
    }

    static getById(id) {
      const foundSlide = db.client
        .getData(`/${Slide.tableName}`)
        .find((s) => s.id === id);

      return foundSlide;
    }

    static updateById(id, value) {
      const allSlides = db.client.getData(`/${Slide.tableName}`);

      const updatedSlideIndex = db.client
        .getData(`/${Slide.tableName}`)
        .findIndex((s) => s.id === id);

      if (updatedSlideIndex === -1) {
        return null;
      }

      allSlides[updatedSlideIndex] = {
        ...allSlides[updatedSlideIndex],
        ...value
      };

      db.client.push(`/${Slide.tableName}`, allSlides);
      return Slide.getById(id);
    }

    static deleteById(id) {
      const allSlides = db.client.getData(`/${Slide.tableName}`);

      const deletedSlideIndex = db.client
        .getData(`/${Slide.tableName}`)
        .findIndex((s) => s.id === id);

      if (deletedSlideIndex === -1) {
        return;
      }

      const [deletedSlide] = allSlides.splice(deletedSlideIndex, 1);
      db.client.push(`/${Slide.tableName}`, allSlides);
      return deletedSlide;
    }
  }

  Slide.init();

  return Slide;
};
