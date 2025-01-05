import axios from 'axios';  
import React, { useEffect, useState } from 'react';  
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';  
import { Audio } from 'react-loader-spinner'

const Phones = () => {  
    const [phones, setPhones] = useState([]);  
    const [loading, setLoading] = useState(true);  
    
    useEffect(() => {  
        const fetchPhones = async () => {  
            try {  
                const response = await axios.get('https://openapi.programming-hero.com/api/phones?search=iphone');  
                const phoneData = response.data.data;  

                const phonesWithFakeData = phoneData.map(phone => ({  
                    name: phone.phone_name,  
                    price: parseInt(phone.slug.split('-')[1]) // Check slug structure  
                }));  

                setPhones(phonesWithFakeData);  
                setLoading(false);  
            } catch (error) {  
                console.error("Error fetching phone data:", error);  
                setLoading(false);  
            }  
        };  

        fetchPhones();  
    }, []);  

    return (  
        <div>  
 { loading && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/> }
             
                <div>  
                    <h2 className='text-5xl'>Phones: {phones.length}</h2>  
                    <ResponsiveContainer width="100%" height={400}>  
                        <BarChart data={phones}>  
                            <CartesianGrid strokeDasharray="3 3" />  
                            <XAxis dataKey="name" />  
                            <YAxis />  
                            <Tooltip />  
                            <Bar dataKey="price" fill="#8884d8" />  
                        </BarChart>  
                    </ResponsiveContainer>  
                </div>  
             
        </div>  
    );  
};  

export default Phones;