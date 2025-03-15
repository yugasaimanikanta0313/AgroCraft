import  { useEffect, useState } from 'react';
import { getPaymentById } from '../services/api';
import { getSession } from '../utils/cookieUtils'; // Import getSession to fetch userId

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchId, setSearchId] = useState('');
    const userId = getSession("userId"); // Fetch userId from session

    useEffect(() => {
        if (userId) {
            fetchUserOrders();
        }
    }, [userId]);

    const fetchUserOrders = async () => {
        try {
            const response = await getPaymentById(userId); // Fetch payments using userId
            setOrders(response); 
        } catch (error) {
            console.error('Error fetching user orders:', error);
        }
    };

    const fetchOrderById = async () => {
        if (!searchId) return;
        try {
            const response = await getPaymentById(searchId);
            setSelectedOrder(response);
        } catch (error) {
            console.error('Error fetching order by ID:', error);
            setSelectedOrder(null);
        }
    };

    return (
        <div className="container">
            <h2>My Orders</h2>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter Order ID" 
                    value={searchId} 
                    onChange={(e) => setSearchId(e.target.value)} 
                />
                <button onClick={fetchOrderById}>Search</button>
            </div>
            {selectedOrder && (
                <div className="order-details">
                    <h3>Order Details</h3>
                    <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                    <p><strong>Product ID:</strong> {selectedOrder.productId}</p>
                    <p><strong>Amount:</strong> ₹{selectedOrder.amount}</p>
                    <p><strong>Status:</strong> {selectedOrder.status}</p>
                </div>
            )}
            <h3>All Orders</h3>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order ID: {order.id} | Amount: ₹{order.amount} | Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyOrders;
