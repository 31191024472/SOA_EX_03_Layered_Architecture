# SOA_EX_03_Layered_Architecture

# 🚗 Quản Lý Xe - Ứng Dụng Web (MERN Stack)  

### 📌 Mô tả dự án  
Ứng dụng **Quản Lý Xe** giúp người dùng **thêm, sửa, xóa và xem danh sách xe**.  
Dự án tuân theo **mô hình 4 lớp (Layered Architecture)**, sử dụng **ReactJS, Redux, Node.js, Express, MongoDB** và **Bootstrap**.  

---

## 📌 **1️⃣ Công nghệ sử dụng**  
### 🔹 **Backend (Node.js + Express + MongoDB)**
- **Node.js** & **Express.js** - Xây dựng API RESTful.  
- **MongoDB & Mongoose** - Quản lý cơ sở dữ liệu.  
- **Layered Architecture** - Tách biệt các lớp **Presentation, Application, Business, Data Access**.  
- **CORS & Body-Parser** - Hỗ trợ giao tiếp giữa Frontend và Backend.  

### 🔹 **Frontend (ReactJS + Redux + Bootstrap)**
- **ReactJS** - Hiển thị giao diện người dùng.  
- **Redux Toolkit** - Quản lý state toàn cục.  
- **React Router v5** - Điều hướng trang.  
- **Bootstrap** - Làm đẹp giao diện.  
- **Axios** - Gửi HTTP request đến Backend.  

```sh
## 📌 **3️⃣ Cách cài đặt và chạy ứng dụng**
Bước 1: Clone dự án từ GitHub
    git clone https://github.com/your-username/your-repo.git
    cd your-repo

Bước 2: Cài đặt Backend
    cd BackEnd
    npm install
    Chạy Backend: npm start

Bước 3: Cài đặt Frontend
    cd FrontEnd
    npm install
    Chạy Frontend: npm start


📌 4️⃣ Các API trong Backend
    GET	/api/cars	Lấy danh sách xe
    POST	/api/cars	Thêm xe mới
    PUT	/api/cars/:id	Cập nhật xe
    DELETE	/api/cars/:id	Xóa xe
    📌 Ví dụ: Gọi API lấy danh sách xe bằng Postman

    URL: http://localhost:5000/api/cars
    Phương thức: GET

📌 5️⃣ Các tính năng đã hoàn thành
    ✅ Hiển thị danh sách xe
    ✅ Tìm kiếm xe theo tên và hãng
    ✅ Phân trang danh sách xe
    ✅ Thêm, sửa, xóa xe với xác nhận
    ✅ Sử dụng Redux để quản lý state
    ✅ Thông báo lỗi khi nhập thiếu thông tin
    ✅ Giao diện đẹp với Bootstrap

