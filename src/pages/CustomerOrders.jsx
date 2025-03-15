import { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import { getSession } from "../utils/cookieUtils";
import { PaymentAPI } from "../services/api";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = getSession("userId"); // Retrieve customer ID from session

  useEffect(() => {
    if (!userId) {
      setError("Please log in to view your orders.");
      window.location.href = "/login";
      return;
    }
    fetchCustomerOrders();
  }, [userId]);

  const fetchCustomerOrders = async () => {
    try {
      setLoading(true);
      const data = await PaymentAPI.getOrdersByCustomer(userId);
      setOrders(data);
    } catch (error) {
      setError("Failed to fetch orders. Try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography>No orders found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Payment ID</strong></TableCell>
                <TableCell><strong>Order ID</strong></TableCell>
                <TableCell><strong>Product ID</strong></TableCell>
                <TableCell><strong>Amount (₹)</strong></TableCell>
                <TableCell><strong>Receipt</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Order Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.razorpayOrderId}</TableCell>
                  <TableCell>{order.productId}</TableCell>
                  <TableCell>{order.amount.toFixed(2)}</TableCell>
                  <TableCell>{order.receipt}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default CustomerOrders;
