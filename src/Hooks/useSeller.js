import { useEffect, useState } from "react"

const useAdmin = role => {
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (role) {
            fetch(`http://localhost:5000/users/seller/${role}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isAdmin);
                })
        }
    }, [role])
    return [isSeller]
}

export default useAdmin;