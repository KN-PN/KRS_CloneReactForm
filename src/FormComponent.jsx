import { useEffect, useState } from 'react';
import './FormComponent.css'

import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import DataContext from './data/DataContext';
import { useContext } from 'react';

function FormComponent(props) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [isFormInvalid, setIsFormValid] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        const updateData = {
            id: uuidv4(),
            name,
            amount: parseFloat(amount)
        }

        setName('')
        setAmount('')
        props.getItems(updateData);
    }


    useEffect(() => {
        const isValid = name.trim() != "" && amount != 0 && amount != '';
        setIsFormValid(!isValid)
    }, [name, amount])


    const allData = useContext(DataContext)


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input name='name'
                        list='list-of-name'
                        type="text"
                        placeholder="ระบุข้อมูล"
                        value={name}
                        onChange={(e) => (setName(e.target.value))}>
                    </input>

                    <datalist id='list-of-name'>
                        {allData.map((item) => {
                            return <option key={item.id} value={item.name} />
                        })}
                    </datalist>

                </div>

                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input name='amount'
                        type="number"
                        placeholder="ระบุข้อมูล"
                        value={amount ?? ''}
                        onChange={(e) => (setAmount(e.target.value))}>
                    </input>
                </div>

                <div className="form-control">
                    <button type="submit" className='btn'
                        disabled={isFormInvalid}>เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    )
}

FormComponent.propTypes = {
    getItems: PropTypes.func
}

export default FormComponent



