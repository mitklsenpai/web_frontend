import { useEffect, useState } from "react";
import {
    getUser,
    updateUser,
} from "../services/userService";

export default function useUsers() {
    const [user, setUser] = useState(null);
    const [configuration, setConfiguration] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        try {
            const res = await getUser();
            setUser(res.data.user);
            setConfiguration(res.data.config);
        } finally {
            setLoading(false);
        }
    };

    const saveUser = async (data) => {
        const res = await updateUser(user.id, data);
        setUser(res.data);
    };

    return {
        user,
        configuration,
        loading,
        saveUser,
    };
}