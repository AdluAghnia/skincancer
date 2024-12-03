const { Firestore } = require("@google-cloud/firestore");

async function getAllData() {
  const db = new Firestore({
    projectId: "submissionmlgc-adluaghnia",
    keyFilename: "./service-account-key.json",
  });
  const predictCollection = db.collection("predictions");

  const allData = await predictCollection.get();
  return allData;
}

module.exports = getAllData;
