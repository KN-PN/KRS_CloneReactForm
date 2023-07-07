// import React from 'react'
import PropTypes from 'prop-types';
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';

function ListItem(props) {
    const items = props.items;
    return (
        <div>
            <h2>ListItem</h2>
            <ul>
                {
                    items.map(({ name: title, amount }) => {
                        // items.map((props) => {
                        console.log('ListItem page');
                        // console.log('props: ', props);
                        console.log('title: ', title);
                        console.log('name: ', name);
                        console.log('amount: ', amount);

                        return <Item key={uuidv4()} title={title} amount={amount}></Item>
                    })
                }
            </ul>
        </div>
    )
}

ListItem.propTypes = {
    items: PropTypes.array
}
export default ListItem