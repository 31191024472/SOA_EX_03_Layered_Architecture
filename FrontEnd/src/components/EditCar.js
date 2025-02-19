import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const EditCar = () => {
  const { id } = useParams();
  const history = useHistory();
  const [car, setCar] = useState({ name: "", brand: "", color: "", year: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error("Error fetching car:", error));
  }, [id]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/cars/${id}`, car)
      .then(() => history.push("/"))
      .catch(error => console.error("Error updating car:", error));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">✏️ Chỉnh sửa xe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Tên xe</Form.Label>
          <Form.Control type="text" name="name" value={car.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hãng</Form.Label>
          <Form.Control type="text" name="brand" value={car.brand} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Màu sắc</Form.Label>
          <Form.Control type="text" name="color" value={car.color} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Năm sản xuất</Form.Label>
          <Form.Control type="text" name="year" value={car.year} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">💾 Cập nhật</Button>
      </Form>
    </Container>
  );
};

export default EditCar;
