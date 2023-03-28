const admin = require("firebase-admin");
const serviceAccount = require("../catgraphql-firebase-adminsdk-na5ci-35082c7aa7.json");
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://catgraphql-default-rtdb.firebaseio.com"
}, "catgraphql");
const database = admin.database(firebaseApp);

module.exports = database;