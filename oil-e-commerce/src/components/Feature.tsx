import FeatureCard from "./FeatureCard"

import {
    LiaShippingFastSolid,
    LiaMoneyBillWaveSolid,
} from "react-icons/lia";

import { FiPhoneCall } from "react-icons/fi";

const data =[
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />,
    },

    {
        title: "Best Price Gurantee",
        icon: <LiaMoneyBillWaveSolid />,
    },

    {
        title: "Free Curbside Pickup",
        icon: <FiPhoneCall/>,
    },
];

const Feature = () => {
    return(
        <div className="container pt-16">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((el) => (
                    <FeatureCard 
                    key={el.title}
                    title={el.title}
                    icon={el.icon}
                    />
                   ))}
            </div>
        </div>
    );
};

export default Feature