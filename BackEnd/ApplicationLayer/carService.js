const Car = require("../DataAccessLayer/carModel");
const { validateCar } = require("../BusinessLayer/validation");

const getAllCars = async () => {
  return await Car.find();
};

const getCarById = async (id) => {
  return await Car.findById(id);
};

const createCar = async (data) => {
  validateCar(data);
  return await Car.create(data);
};

const updateCar = async (id, data) => {
  validateCar(data);
  return await Car.findByIdAndUpdate(id, data, { new: true });
};

const deleteCar = async (id) => {
  return await Car.findByIdAndDelete(id);
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };
