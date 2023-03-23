const cat = require("../FirebaseFunctions/cat")

const Query = {
    cats: async () => {
      const data = await fetch(`https://catgraphql-default-rtdb.firebaseio.com/cats.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function(item) {
        const catData = dataJson[item];
        const graphqlCat = cat(catData);
        return graphqlCat;
      });
      return mapsKeys;
    }
  }

  module.exports = Query;