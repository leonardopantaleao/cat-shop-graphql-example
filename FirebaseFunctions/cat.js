function cat(data) {
    return {
      catName: data.catName,
      description: data.description,
      imageURL: data.imageURL,
      rating: data.rating
    };
  }
  module.exports = cat;