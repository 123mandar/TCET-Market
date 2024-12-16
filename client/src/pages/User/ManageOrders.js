import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ManageOrders = () => {
  const [auth] = useAuth();
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState(0); // New state for total sales
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/v1/order/seller-orders");
        if (data.success) {
          setOrders(data.orders);
          setTotalSales(data.totalSales); // Set total sales from the response
        } else {
          toast.error(data.message || "Failed to fetch orders");
        }
      } catch (error) {
        toast.error("Error fetching orders");
        console.error("Error fetching orders:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [auth.token]);

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const { data } = await axios.put(
        `/api/v1/order/update-status/${orderId}`,
        { status: newStatus }
      );

      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success("Order status updated successfully.");
      } else {
        toast.error(data.message || "Failed to update order status.");
      }
    } catch (error) {
      console.error("Error updating status:", error.message);
      toast.error("An error occurred while updating the status.");
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      if (!window.confirm("Are you sure you want to delete this order?")) {
        return;
      }

      const { data } = await axios.delete(
        `/api/v1/order/delete-order/${orderId}`
      );

      if (data.success) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
        toast.success("Order deleted successfully.");
      } else {
        toast.error(data.message || "Failed to delete the order.");
      }
    } catch (error) {
      console.error("Error deleting order:", error.message);
      toast.error("An error occurred while deleting the order.");
    }
  };

  return (
    <Layout title="User Dashboard | Manage Orders">
      <div className="container py-4">
        <div className="row" style={{ alignItems: "flex-start" }}>
          <div className="col-md-3 mb-4">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <div
                className="card-header text-black "
                style={{ backgroundColor: "#dda92f" }}
              >
                <h3>Manage Your Orders</h3>
              </div>
              <div className="card-body">
                {loading ? (
                  <div className="text-center">
                    <p>Loading orders...</p>
                  </div>
                ) : orders.length > 0 ? (
                  <div>
                    <h5>Total Sales: ₹{totalSales}</h5>
                    {/* Display total sales */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Buyer Name</th>
                            <th>Buyer Phone</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order, index) => (
                            <tr key={order._id}>
                              <td>{index + 1}</td>
                              <td>{order.buyer?.name || "N/A"}</td>
                              <td>{order.buyer?.phone || "N/A"}</td>
                              <td>{order.product?.name || "N/A"}</td>
                              <td>₹{order.product?.price || "N/A"}</td>
                              <td>
                                <select
                                  value={order.status}
                                  onChange={(e) =>
                                    handleUpdateStatus(
                                      order._id,
                                      e.target.value
                                    )
                                  }
                                  className="form-select form-select-sm"
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Processing">Processing</option>
                                  <option value="Shipped">Shipped</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger btn-lg"
                                  onClick={() => handleDeleteOrder(order._id)}
                                  title="Delete Order"
                                  style={{ width: "45%" }}
                                >
                                  <FaTrash />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <p>No orders found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageOrders;
