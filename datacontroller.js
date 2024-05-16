const Data = require('../models/DataModel');

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createData = async (req, res) => {
  const newData = new Data({
    name: req.body.name,
    age: req.body.age
  });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
