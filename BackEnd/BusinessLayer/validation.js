const validateCar = (data) => {
    if (!data.name || !data.brand || !data.color || !data.year) {
      throw new Error("Missing required fields: name, brand, color, year");
    }
  };
  
  module.exports = { validateCar };
  