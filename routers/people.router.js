const express = require("express");
const router = express.Router();

const {
  getAllPeople,
  getSinglePerson,
  createPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/people.cont");

// API for all people
router.get("/", getAllPeople);

// API for single person based on the ID
router.get("/:personID", getSinglePerson);

// Post request for new person
router.post("/", createPerson);

router.delete("/:personID", deletePerson);

router.patch("/:personID", updatePerson);

module.exports = router;
