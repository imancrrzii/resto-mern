import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaEdit,
  FaTrash,
  FaUser,
  FaUserCheck,
  FaUserLock,
  FaUsers,
} from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/users`);
      return res.json();
    },
  });
  return (
    <div>
      <div className="flex items-center justify-between mx-4">
        <h5>Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-violet-300 text-black rounded-xl">
              <tr className="text-center">
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="text-center" key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button className="btn btn-circle bg-gray-700 btn-sm text-white">
                        <FaUserLock />
                      </button>
                    ) : (
                      <button className="btn btn-circle bg-violet-600 btn-sm text-white">
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-ghost text-yellow-400 btn-sm">
                      <FaEdit />
                    </button>
                    <button className="btn btn-ghost text-rose-600 btn-sm">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
