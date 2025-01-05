// import React from 'react';  
import PropTypes from 'prop-types';  
import Features from './Features';  

const PriceOption = ({ option }) => {  
    const { name, price, features } = option;  

    return (  
        <div className='bg-blue-400 rounded-md p-4 flex-col text-white'>  
            <h2 className='text-center'>  
                <span className='text-7xl font-extrabold'>${price.toFixed(2)}</span>  
                <span className='text-2xl'>/mon</span>  
            </h2>  
            <h4 className='text-3xl text-center my-8'>{name}</h4>  
            <div className='pl-5 flex-grow'>

            {features.map((feature, index) => (  
                <Features key={index} feature={feature} />  
            ))}  
            <button className='mt-12 bg-red-400 w-full py-4 font-bold rounded-lg hover:bg-gray-500'>Buy Now</button>
            </div>
        </div>  
    );  
};  

PriceOption.propTypes = {  
    option: PropTypes.shape({  
        name: PropTypes.string.isRequired,  
        price: PropTypes.number.isRequired,  
        features: PropTypes.arrayOf(PropTypes.string).isRequired  
    }).isRequired  
};  

export default PriceOption;