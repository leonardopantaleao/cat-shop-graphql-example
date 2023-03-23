function cat(data) {
    return {
      catName: data.catName,
      description: data.description,
      imageURL: data.imageURL,
      rating: data.rating,
      id: data.id
    };
  }
  module.exports = cat;