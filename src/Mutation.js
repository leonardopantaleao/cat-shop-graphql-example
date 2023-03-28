const admin = require("firebase-admin");
const serviceAccount = require("../catgraphql-firebase-adminsdk-na5ci-35082c7aa7.json");
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://catgraphql-default-rtdb.firebaseio.com"
}, "catgraphql");
const database = admin.database(firebaseApp);

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