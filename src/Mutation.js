const Mutation = {
    addCat: (parent, { catName, description, imageURL, rating }, { cats }) => {
        let newCat = {
            catName,
            description,
            imageURL,
            rating,
        }
        console.log(newCat);
        // cats.push(newCat)
        return newCat
    },
    // removeCat: (parent, { id }, { cats }) => {
    //     let index = cats.findIndex((cat) => {
    //         return cat.id === id
    //     })
    //     cats.splice(index, 1)
    //     return true
    // },
    // findCat: (parent, { catName }, { cats }) => {
    //     return cats.find(cat => cat.catName === catName)
    // },
    // updateCat: (parent, { catName, description, imageURL, rating }, { cats }) => {
    //     let oldCat =  cats.find(cat => cat.catName === catName)
    //     let newCat = {
    //         id: oldCat.id,
    //         description: oldCat.description !== description ? description : oldCat.description,
    //         imageURL: oldCat.imageURL !== imageURL ? imageURL : oldCat.imageURL,
    //         rating: oldCat.rating !== rating ? rating : oldCat.rating,
    //     }
    //     let index = cats.findIndex((cat) => {
    //         return cat.id === id
    //     })
    //     cats.splice(index, 1)
    //     cats.push(newCat)
    //     return newCat
    // },
}

module.exports = Mutation