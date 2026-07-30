import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

export default function useUsers() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } finally {
            setLoading(false);
        }
    }

    return {
        users,
        loading
    };
}