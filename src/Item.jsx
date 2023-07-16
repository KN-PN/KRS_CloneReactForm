import PropTypes from 'prop-types';

import styled from "styled-components";
import { _Color } from "./App.Theme";


const Li = styled.li`
    background-color: #f7f7f7;
    box-shadow:  5px 5px 5px  #e6e6e6;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #eaeaea;
    border-right: 6px solid ${props => props.$colorItem};
    list-style: none;
    user-select: none;
    width: 100%;
    transition: font-size .2s ease , width .2s ease;
    margin-bottom: .3rem;
    &:hover{
        font-size: 1.5em;
        width: 120%;
        border: 1px solid ${props => props.$colorItem};
        border-right: 6px solid ${props => props.$colorItem};
        cursor: pointer;
    }
    `;

const Span = styled.span`
    &:first-child {
        color: ${props => props.$colorItem};
        text-align: left;
    }

&:last-child {
    color: ${props => props.$colorItem};
    float: right;
    }
`;

function Item({ title, amount }) {
    const colorItem = amount >= 0 ? _Color.Income : _Color.Expense;

    console.log('colorItem: ', colorItem);

    return (
        <Li $colorItem={colorItem}>
            <Span $colorItem={colorItem}>{title}</Span>
            <Span $colorItem={colorItem}>{amount.toLocaleString()}</Span>
        </Li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item