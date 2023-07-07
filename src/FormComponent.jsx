// import React from 'react'
import React, { useState, useRef } from 'react';
import './FormComponent.css'

function FormComponent(props) {

    // const [formData, setFormData] = useState([])

    let ref = useRef({
        name: '',
        amount: 0
    });

    const handleInputChange = (event) => {

        const inputName = event.target.name;
        const inputVal = event.target.value;
        console.log('ref : ', ref);
        let data = ref.current
        data[inputName] = inputVal
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Save !!');

        const { name, amount } = ref.current

        const updateData = {
            name,
            amount: parseFloat(amount)
        }

        // setFormData(updateData);

        console.log(updateData);

        props.getItems(updateData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input name='name' type="text" placeholder="ระบุข้อมูล" onChange={handleInputChange}></input>
                </div>

                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input name='amount' type="number" placeholder="ระบุข้อมูล" onChange={handleInputChange}></input>
                </div>

                <div className="form-control">
                    <button type="submit" className='btn'>เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

export default FormComponent