import React from 'react'
import PropTypes from 'prop-types';

function Item({ title, amount }) {

    console.log('Item page');
    console.log('title: ', title);
    console.log('amount: ', amount);

    return (
        <li>
            <div>{title} -- {amount}</div>
            {/* <div>{amount}</div> */}
        </li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item