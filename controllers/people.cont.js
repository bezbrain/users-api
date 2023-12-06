const PeopleCollection = require("../models/People");

const getAllPeople = async (req, res) => {
  try {
    const people = await PeopleCollection.find({});

    res.status(200).json({
      success: true,
      data: people,
      message: "All available people fetched",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

const getSinglePerson = async (req, res) => {
  try {
    const { personID } = req.params;
    const person = await PeopleCollection.findOne({ _id: personID });

    if (!person) {
      return res.status(404).json({
        success: true,
        message: `Person with the id, ${personID} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: person,
      message: `Person with the id ${personID} is fetched successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// ============
// Create Person
const createPerson = async (req, res) => {
  try {
    const person = await PeopleCollection.create(req.body);
    res.status(201).json({
      success: true,
      data: person,
      message: "Person successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// ============
// Delete Person
const deletePerson = async (req, res) => {
  try {
    const { personID } = req.params;
    const person = await PeopleCollection.findOneAndDelete({ _id: personID });
    if (!person) {
      return res.status(404).json({
        success: true,
        message: `Person with the id, ${personID} not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Person with the id, ${personID} successfully deleted`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

// =============
// Update person
const updatePerson = async (req, res) => {
  try {
    const { personID } = req.params;
    const person = await PeopleCollection.findOneAndUpdate(
      { _id: personID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!person) {
      return res.status(404).json({
        success: true,
        message: `There is no person with the id, ${personID}`,
      });
    }

    res.status(200).json({
      success: true,
      data: person,
      message: `Person with the id, ${personID} updated successfully`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: error,
    });
  }
};

module.exports = {
  getAllPeople,
  getSinglePerson,
  createPerson,
  deletePerson,
  updatePerson,
};
