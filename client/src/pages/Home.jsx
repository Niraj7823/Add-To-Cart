import SwipperMain from "../Component/SwipperMain";
import { BecomeAgent, WhyWorkWithUs, Sponser, HowItWorks } from "../layout/BecomeAgent"
import { getData } from "../api/PropertyApi";
import { useEffect, useState } from "react";



export const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const result = await getData();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    if (loading) {
        return (
            <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div className="loader"></div>
            </div>  
            
            </>
          
        );
    }

    return (
        <>
            <SwipperMain data={data} />
            <BecomeAgent />
            <Sponser />
            <WhyWorkWithUs />
            <HowItWorks />
        </>
    );
};
