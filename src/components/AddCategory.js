import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setImputValue] = useState('');

    const handleImputChange = (e) => {
        setImputValue(e.target.value);
    }
    const handleSumbit = (e)=> {
        e.preventDefault();
        if (inputValue.trim().length > 0){
            setCategories((cats) => [inputValue, ...cats]);
            setImputValue('');
        }
    }

    return(
        <form onSubmit={handleSumbit}>
            <input
                type= "text"
                value = {inputValue}
                onChange = {handleImputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};




