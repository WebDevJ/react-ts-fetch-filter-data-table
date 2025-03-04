import React, { useState, useEffect } from "react";

// Define a TypeScript type for API data
type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

const TableWithSearch: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");

    // Fetch data from an API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Filter users based on search input
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 w-full p-2 border rounded-md"
            />

            {/* Table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className="text-center">
                            <td className="border p-2">{user.id}</td>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithSearch;
