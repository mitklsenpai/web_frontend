import { useCallback, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { getUser, updateUser } from "../services/userService";

export default function useUsers() {
    const [user, setUser] = useState(null);

    const fetchUser = useCallback(async () => {
        const res = await getUser();
        return res.data;
    }, []);

    const { data, loading } = useFetch(fetchUser);

    // Derive user/config from fetched data, but let saveUser update user locally
    const fetchedUser = data?.user ?? null;
    const configuration = data?.config ?? null;
    const activeUser = user ?? fetchedUser;

    const saveUser = async (updates) => {
        const res = await updateUser(activeUser.id, updates);
        setUser(res.data);
    };

    return { user: activeUser, configuration, loading, saveUser };
}
