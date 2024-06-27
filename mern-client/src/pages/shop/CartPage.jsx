import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  console.log(cart)
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // Handle quantity increase
  const handleIncrease = async (item) => {
    try {
      const response = await fetch(`http://localhost:5001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });

      if (response.ok) {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        await refetch();
        setCartItems(updatedCart);
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  // Handle quantity decrease
  const handleDecrease = async (item) => {
    if (item.quantity > 1) {
      try {
        const response = await fetch(
          `http://localhost:5001/carts/${item._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity - 1 }),
          }
        );
        if (response.ok) {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          await refetch();
          setCartItems(updatedCart);
        } else {
          console.error("Failed to update quantity");
        }
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  // Calculate the cart subtotal
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const orderTotal = cartSubtotal;

  // delete item
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5001/carts/${item._id}`).then(response => {
          if (response) {
            refetch();
             Swal.fire("Deleted!", "Your item has been deleted.", "success");
           }
        })
        .catch(error => {
          console.error(error);
        });
      }
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-white">
        {/* banner */}
        <div className="py-36 flex flex-col justify-center items-center gap-8 ">
          {/* text */}
          <div className="text-center space-y-7 px-4">
            <h5 className="text-4xl font-bold md:text-3xl md:leading-snug leading-snug">
              Lorem ipsum dolor sit amet
              <span className="text-violet-600"> Food</span>
            </h5>
          </div>
        </div>

        {/* table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-violet-300 text-black rounded-md">
                <tr>
                  <th>No</th>
                  <th>Food</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {(cart || []).map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td>
                      <button
                        className="btn btn-xs bg-violet-300"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        onChange={() => console.log(item.quantity)}
                        value={item.quantity}
                        className="w-10 mx-2 text-center overflow-hidden appearance-none"
                      />
                      <button
                        className="btn btn-xs bg-violet-300"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>${calculateTotalPrice(item).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost text-rose-600 btn-sm"
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

        {/* customer details */}
        <div className="my-12 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 space-y-3">
            <h3 className="font-medium">Customer Details</h3>
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>User ID: {user?.uid}</p>
          </div>
          <div className="md:w-1/2 space-y-3">
            <h3 className="font-medium">Shopping Details</h3>
            <p>Total Items: {(cart || []).length}</p>
            <p>Total Price: ${orderTotal.toFixed(2)}</p>
            <button className="btn bg-violet-600 text-white">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
