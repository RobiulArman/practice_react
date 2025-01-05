import PriceOption from "./PriceOption.jsx";  

const Price = () => {  
    const gymMemberships = [  
        {  
            "id": "1",  
            "name": "Basic Membership",  
            "price": 29.99,  
            "features": [  
                "Access to gym facilities",  
                "Use of weight training equipment",  
                "Group fitness classes"  
            ]  
        },  
        {  
            "id": "2",  
            "name": "Standard Membership",  
            "price": 49.99,  
            "features": [  
                "Access to gym facilities",  
                "Weight training and cardio equipment",  
                "Group fitness classes",  
                "One personal training session per month"  
            ]  
        },  
        {  
            "id": "3",  
            "name": "Premium Membership",  
            "price": 69.99,  
            "features": [  
                "Access to gym facilities",  
                "All weight training and cardio equipment",  
                "Unlimited group fitness classes",  
                "Two personal training sessions per month",  
                "Nutrition consultation"  
            ]  
        }  
    ];  

    return (  
        <div className="m-12">  
            <h2 className="text-5xl">Best Prices in the Town</h2>  
            <div className="flex gap-10 m-4 border-4 border-blue-300">  
                {  
                    gymMemberships.map(option => (  
                        <PriceOption key={option.id} option={option} />  
                    ))  
                }  
            </div>  
        </div>  
    );  
};  

export default Price;