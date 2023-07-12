import PropTypes from 'prop-types';
import Item from './Item'

import styled from 'styled-components';

const UL = styled.ul`
    padding-left: 0;
    
`
function ListItem(props) {
    const items = props.items;
    return (
        <div>
            <h2>ListItem</h2>
            <UL>
                {
                    items.map(({ name: title, amount, id }) => {
                        return <Item key={id}
                            title={title}
                            amount={amount}></Item>
                    })
                }
            </UL>
        </div>
    )
}

ListItem.propTypes = {
    items: PropTypes.array
}
export default ListItem