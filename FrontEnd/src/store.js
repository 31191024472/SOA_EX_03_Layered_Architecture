import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice quản lý danh sách xe
const carSlice = createSlice({
  name: "cars",
  initialState: { cars: [], loading: false },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
      state.loading = false;
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(car => car._id !== action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    }
  }
});

// Action creators
export const { setCars, deleteCar, startLoading } = carSlice.actions;

// Async action để fetch dữ liệu
export const fetchCars = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await axios.get("http://localhost:5000/api/cars");
    dispatch(setCars(response.data));
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
};

// Store
export default configureStore({
  reducer: { carStore: carSlice.reducer }
});
