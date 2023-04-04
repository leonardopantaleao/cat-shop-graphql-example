const cat = require("../FirebaseFunctions/cat");
const { ref, child, get } = require("firebase-admin");
const database = require("./database");

const Query = {
    cats: async () => {
      const data = await fetch(`https://catgraphql-default-rtdb.firebaseio.com/cats.json`);
      const dataJson = await data.json();
      console.log(dataJson);
      if (dataJson === null) {
        return [];
      }
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function(item) {
        const catData = dataJson[item];
        const graphqlCat = cat(catData);
        return graphqlCat;
      });
      return mapsKeys;
    },
    cat: async (parent, args, { cats }) => {
      const catRef = database.ref().child("cats/" + args.id);
      const fetchedCat = await catRef.once("value").then(function(snapshot) {
        if (snapshot.exists()) {
          let catData = {
            id: snapshot.child("id").val(),
            catName: snapshot.child("catName").val(),
            description: snapshot.child("description").val(),
            imageURL: snapshot.child("imageURL").val(),
            rating: snapshot.child("rating").val()
          }
          return catData;
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      return cat(fetchedCat);
    }
  }

  module.exports = Query;