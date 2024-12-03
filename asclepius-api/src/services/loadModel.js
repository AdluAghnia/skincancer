const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
  try {
    const model = await tf.loadGraphModel(
      "https://storage.googleapis.com/asclepius-models/submissions-model/model.json",
    );
    console.log("Model loaded successfully");
    return model;
  } catch (error) {
    console.error("Error loading model:", error);
    throw new Error("Failed to load model");
  }
}

module.exports = loadModel;
