import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, deleteCar } from "../store";
import { Link } from "react-router-dom";
import { Table, Button, Form, Container, Pagination, Spinner } from "react-bootstrap";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, loading } = useSelector(state => state.carStore);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa xe này không?")) {
      fetch(`http://localhost:5000/api/cars/${id}`, { method: "DELETE" })
        .then(() => dispatch(deleteCar(id)))
        .catch(error => console.error("Error deleting car:", error));
    }
  };

  // Tìm kiếm xe theo tên hoặc hãng
  const [search, setSearch] = useState("");
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase()) ||
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 5;
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🚗 Danh sách xe</h2>

      {/* Ô tìm kiếm */}
      <Form.Control
        type="text"
        placeholder="🔍 Tìm kiếm xe..."
        className="mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link to="/add" className="btn btn-success mb-3">➕ Thêm xe mới</Link>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Đang tải dữ liệu...</p>
        </div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Tên xe</th>
                <th>Hãng</th>
                <th>Màu sắc</th>
                <th>Năm</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {currentCars.map(car => (
                <tr key={car._id}>
                  <td>{car.name}</td>
                  <td>{car.brand}</td>
                  <td>{car.color}</td>
                  <td>{car.year}</td>
                  <td>
                    <Link to={`/edit/${car._id}`} className="btn btn-warning btn-sm mx-1">✏️ Sửa</Link>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(car._id)}>🗑️ Xóa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Phân trang */}
          {totalPages > 1 && (
            <Pagination className="justify-content-center">
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages).keys()].map(num => (
                <Pagination.Item
                  key={num + 1}
                  active={num + 1 === currentPage}
                  onClick={() => setCurrentPage(num + 1)}
                >
                  {num + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default CarList;
