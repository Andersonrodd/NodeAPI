const router = require("express").Router();
const Person = require("../models/personModel");

// CREATE
router.post("/", async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "Name is required" });
    return;
  }

  const person = {
    name,
    salary,
    approved,
  };

  try {
    await Person.create(person);

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// READ
// >>Get ALL<<
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json({ people });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// >>Get a specific person from the database by id<<
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ message: "Person not found" });
      return;
    }

    res.status(200).json({ person });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// UPDATE
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);

    if (!updatedPerson.matchedCount === 0) {
      res.status(422).json({ message: "Person not found" });
      return;
    }

    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const person = await Person.findOne({ _id: id });

  if (!person) {
    res.status(422).json({ message: "Person not found" });
    return;
  }

  try {
    await Person.deleteOne({ _id: id });

    res.status(200).json({ message: "Person deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
