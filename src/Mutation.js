const database = require("./database");

const Mutation = {
    addCat: (parent, { id, catName, description, imageURL, rating }, { cats }) => {
        let newCat = {
            id,
            catName,
            description,
            imageURL,
            rating,
        }
        database.ref().child("cats/" + id)
            .set({
                id: newCat.id,
                catName: newCat.catName,
                description: newCat.description,
                imageURL: newCat.imageURL,
                rating: newCat.rating
            })
        return newCat
    },
    removeCat: (parent, { id }, { cats }) => {
        database.ref().child("cats/" + id).remove();
        return true
    },
    updateCat: (parent, { id, catName, description, imageURL, rating }, { cats }) => {
        let newCat = {
            id,
            catName,
            description,
            imageURL,
            rating,
        }
        database.ref().child("cats/" + id)
            .update({
                id: newCat.id,
                catName: newCat.catName,
                description: newCat.description,
                imageURL: newCat.imageURL,
                rating: newCat.rating
            })
        return newCat
    }
}

module.exports = Mutation