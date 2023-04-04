function cat(data) {
    return {
      id: data.id,
      catName: data.catName,
      description: data.description,
      imageURL: data.imageURL,
      rating: data.rating
    };
  }
  module.exports = cat;