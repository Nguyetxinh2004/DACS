import { db } from "../config/firebase.js";
import { collection, getDocs, query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const usersList = document.getElementById("user_list");

// Lấy danh sách Users từ Firestore
const fetchUsers = async () => {
    try {
        const usersRef = collection(db, "Users");
        const snapshot = await getDocs(usersRef);
        let users = []
        users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        renderUsers(users);
    } catch (error) {
        console.error("Lỗi render User:", error);
    }
};

// Render danh sách Users
function renderUsers(users) {
    const html = users.map((user) => {
        return `
            <div class="card col-lg-12 col-sm-12 my-2 shadow p-3">
                <div class="row my-3">
                    <img src="${user.avata}" class="col-lg-4 col-md-12 col-sm-12 rounded-circle" style="height:200px;width:250px">
                    <div class="col-lg-8 col-md-12 col-sm-12 px-2 py-2">
                        <h5 class="card-title">Họ và tên khách hàng: <strong>${user.username}</strong></h5>
                        <p class="card-text">Địa chỉ khách hàng: <strong>${user.address ? user.address : "Khách hàng chưa cập nhật địa chỉ"}</strong></p>
                        <p class="card-text">Số điện thoại: <strong>${user.phone}</strong></p>
                        <p class="card-text">Email: <strong>${user.email}</strong></p>
                    </div>
                </div>
                <button class="btn btn-primary" type="button" onclick="fetchOrders('${user.id}')" 
                    data-bs-toggle="collapse" data-bs-target="#collapse_${user.id}" aria-expanded="false" aria-controls="collapse_${user.id}">
                    View All Orders
                </button>
                <div class="collapse" id="collapse_${user.id}">
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Payment Method</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody class="orders-container" id="orders-${user.id}"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    usersList.innerHTML = html;
}

// Lấy danh sách đơn hàng theo userId
window.fetchOrders = async (userId) => {
    const ordersContainer = document.getElementById(`orders-${userId}`);


    try {
        const ordersRef = collection(db, "Bills");
        const q = query(ordersRef, where("userId", "==", userId));
        const snapshot = await getDocs(q);
        const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        renderOrders(userId, orders);
    } catch (error) {
        console.error("Lỗi lấy danh sách đơn hàng:", error);
        ordersContainer.innerHTML = "<p>Không thể tải đơn hàng.</p>";
    }
};

// Render danh sách đơn hàng của User
window.renderOrders = (userId, orders) => {
    const ordersContainer = document.getElementById(`orders-${userId}`);

    if (orders.length === 0 || orders.every(order => order.isPending === false)) {
        ordersContainer.innerHTML = "<tr><td colspan='6' class='text-center'>Không có đơn hàng nào</td></tr>";
        return;
    }


    const html = orders.map((order, index) => {
        if (order.isPending === true) {
            return `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${order.createdAt}</td>
                    <td>${order.paymentMethod}</td>
                    <td>${order.totalAmount}.000₫</td>
                    <td>
                        <button class="btn btn-primary" onclick = "orderConfirm('${order.id}')">Xác nhận đơn hàng</button>
                    </td>
                </tr>
        `;
        }
    }).join("");
    ordersContainer.innerHTML = html;

    // Xác nhận đơn hàng
    window.orderConfirm = async (orderId) => {
        try {
            const orderRef = doc(db, "Bills", orderId);
            await updateDoc(orderRef, { isPending: false });
            alert("Đơn hàng đã được xác nhận.");
            fetchOrders(userId);
        } catch (error) {
            console.error("L��i xác nhận đơn hàng:", error);
            alert("Không thể xác nhận đơn hàng.");
        }
    };
};

// Gọi hàm lấy danh sách người dùng khi trang load
window.onload = () => {
    fetchUsers();
};
