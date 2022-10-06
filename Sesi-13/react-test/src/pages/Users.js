import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table"

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <>
            <Link to="/" className="btn btn-success btn-lg mb-4" type="button" role="button">
                Back to Home
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Users;