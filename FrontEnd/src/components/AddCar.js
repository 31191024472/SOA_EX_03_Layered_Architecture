import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const AddCar = () => {
  const [car, setCar] = useState({ name: "", brand: "", color: "", year: "" });
  const history = useHistory();

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/cars", car)
      .then(() => history.push("/"))
      .catch(error => console.error("Error adding car:", error));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🚗 Thêm xe mới</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tên xe</Form.Label>
          <Form.Control type="text" name="name" placeholder="Nhập tên xe" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hãng</Form.Label>
          <Form.Control type="text" name="brand" placeholder="Nhập hãng xe" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Màu sắc</Form.Label>
          <Form.Control type="text" name="color" placeholder="Nhập màu sắc" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Năm sản xuất</Form.Label>
          <Form.Control type="text" name="year" placeholder="Nhập năm sản xuất" onChange={handleChange} required />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">➕ Thêm xe</Button>
      </Form>
    </Container>
  );
};

export default AddCar;
