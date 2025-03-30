Dưới đây là toàn bộ nội dung mà bạn có thể sao chép và lưu thành một tệp `README.md` cho dự án website bán hàng Café:

```markdown
# DACS - Website Bán Hàng Café

Đây là một dự án xây dựng website bán hàng Café, cung cấp các dịch vụ cho phép khách hàng dễ dàng mua các loại đồ uống và thực phẩm liên quan đến café trực tuyến. Website hỗ trợ tính năng đăng ký tài khoản, giỏ hàng, thanh toán trực tuyến và theo dõi đơn hàng.

## Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Cài Đặt](#cài-đặt)
- [Cách Sử Dụng](#cách-sử-dụng)
- [Các Tính Năng Chính](#các-tính-năng-chính)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)

## Giới Thiệu

Website bán hàng Café giúp người dùng mua các món đồ uống và thực phẩm một cách nhanh chóng và dễ dàng. Dự án bao gồm các tính năng như tạo tài khoản, duyệt sản phẩm, thêm sản phẩm vào giỏ hàng, thanh toán và theo dõi trạng thái đơn hàng.

### Các Tính Năng Chính:

1. **Đăng ký và đăng nhập tài khoản**: Người dùng có thể tạo tài khoản mới và đăng nhập để theo dõi đơn hàng của mình.
2. **Danh mục sản phẩm**: Hiển thị các sản phẩm đồ uống và món ăn từ quán café.
3. **Giỏ hàng và thanh toán**: Cho phép người dùng thêm sản phẩm vào giỏ hàng và thanh toán trực tuyến.
4. **Lịch sử đơn hàng**: Người dùng có thể xem các đơn hàng trước đây và trạng thái của đơn hàng hiện tại.
5. **Quản lý người dùng**: Người quản trị có thể thêm, sửa, xóa sản phẩm, và quản lý đơn hàng.

## Cài Đặt

Để cài đặt và chạy dự án trên máy tính của bạn, làm theo các bước sau:

### 1. Clone Dự Án

```bash
git clone https://github.com/Nguyetxinh2004/DACS.git
cd DACS
```

### 2. Cài Đặt Các Phụ Thuộc

Chạy lệnh sau để cài đặt các thư viện cần thiết cho cả frontend và backend:

```bash
npm install
```

### 3. Cấu Hình Cơ Sở Dữ Liệu

Dự án sử dụng Firebase cho cơ sở dữ liệu. Để kết nối Firebase, bạn cần cấu hình các thông tin trong tệp `.env`:

```plaintext
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

### 4. Chạy Ứng Dụng

#### Backend:

```bash
npm run server
```

#### Frontend:

```bash
cd frontend
npm start
```

Website sẽ chạy tại `http://localhost:3000`.

## Cách Sử Dụng

### 1. Đăng ký và đăng nhập

- Người dùng có thể đăng ký tài khoản bằng cách điền tên, email và mật khẩu.
- Sau khi đăng ký, người dùng có thể đăng nhập để truy cập các tính năng bảo mật như giỏ hàng và theo dõi đơn hàng.

### 2. Duyệt sản phẩm

- Người dùng có thể duyệt qua các sản phẩm đồ uống và món ăn được chia theo các danh mục như "Cà phê", "Trà", "Snack", v.v.
- Mỗi sản phẩm có thông tin chi tiết và hình ảnh mô tả.

### 3. Thêm sản phẩm vào giỏ hàng

- Người dùng có thể chọn các sản phẩm yêu thích và thêm vào giỏ hàng.
- Giỏ hàng có thể được xem và chỉnh sửa bất kỳ lúc nào.

### 4. Thanh toán

- Sau khi xem lại giỏ hàng, người dùng có thể tiến hành thanh toán.
- Hệ thống hỗ trợ thanh toán qua các cổng như Paypal, Stripe.

### 5. Theo dõi đơn hàng

- Người dùng có thể xem trạng thái đơn hàng của mình từ phần tài khoản cá nhân.

## Các Tính Năng Chính

1. **Đăng ký và Đăng nhập**:
   - Người dùng có thể tạo tài khoản bằng email và mật khẩu.
   - Đăng nhập để truy cập giỏ hàng và lịch sử đơn hàng.

2. **Danh mục sản phẩm**:
   - Sản phẩm được phân loại theo từng loại (cà phê, trà, bánh, v.v.).
   - Có chức năng tìm kiếm và lọc sản phẩm.

3. **Giỏ hàng và thanh toán**:
   - Người dùng có thể thêm sản phẩm vào giỏ hàng, chỉnh sửa số lượng và thanh toán trực tuyến qua Paypal hoặc Stripe.

4. **Lịch sử đơn hàng**:
   - Người dùng có thể theo dõi tình trạng đơn hàng, đơn đã giao hoặc đang chờ xử lý.

5. **Quản lý người dùng (Admin)**:
   - Quản trị viên có thể thêm, sửa, xóa sản phẩm trong cửa hàng.
   - Quản trị viên có thể theo dõi và thay đổi trạng thái đơn hàng.

## Công Nghệ Sử Dụng

- **Frontend**: React.js (hoặc Vue.js), HTML5, CSS3
- **Backend**: Node.js
- **Cơ sở dữ liệu**: Firebase
- **Thanh toán trực tuyến**: 
- **Xác thực**: JSON Web Tokens (JWT)
- **Quản lý phiên**: Cookies

