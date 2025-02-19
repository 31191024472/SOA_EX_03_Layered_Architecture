const carService = require("../ApplicationLayer/carService");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCar = async (req, res) => {
  try {
    const newCar = await carService.createCar(req.body);
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await carService.updateCar(req.params.id, req.body);
    if (!updatedCar) return res.status(404).json({ message: "Car not found" });
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await carService.deleteCar(req.params.id);
    if (!deletedCar) return res.status(404).json({ message: "Car not found" });
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
