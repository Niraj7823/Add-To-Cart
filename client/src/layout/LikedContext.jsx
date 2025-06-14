import { createContext, useEffect, useState } from "react";

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState(() => {
        const stored = localStorage.getItem("likedItems");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLike = (id) => {
        setLikedItems((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    return (
        <LikedContext.Provider value={{ likedItems, toggleLike }}>
            {children}
        </LikedContext.Provider>
    );
};
