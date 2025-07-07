import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
    const { user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://ti-server-585b.onrender.com/carts?email=${user.email}`)
            const data = await res.json()
            return data;
            
        }
    })


    return [cart, refetch]
};

export default useCart