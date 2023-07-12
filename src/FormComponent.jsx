import { useEffect, useState } from 'react';
import './FormComponent.css'

import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';


function FormComponent(props) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [isFormInvalid, setIsFormValid] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateData = {
            id: uuidv4(),
            name,
            amount: parseFloat(amount)
        }

        setName('')
        setAmount(0)
        props.getItems(updateData);
    }


    useEffect(() => {
        const isValid = name.trim() != "" && amount != 0;

        setIsFormValid(!isValid)
    }, [name, amount])


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input name='name'
                        type="text"
                        placeholder="ระบุข้อมูล"
                        value={name}
                        onChange={(e) => (setName(e.target.value))}></input>
                </div>

                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input name='amount'
                        type="number"
                        placeholder="ระบุข้อมูล"
                        value={amount}
                        onChange={(e) => (setAmount(e.target.value))}></input>
                </div>

                <div className="form-control">
                    <button type="submit" className='btn' disabled={isFormInvalid}>เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

FormComponent.propTypes = {
    getItems: PropTypes.func
}

export default FormComponent



