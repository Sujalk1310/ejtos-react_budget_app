import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <span className='alert alert-secondary bg-info text-white py-2'> Currency: 
        {<select name="Currency" className="border-0 bg-info text-white" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        }
    </span>
    );
};

export default Currency;