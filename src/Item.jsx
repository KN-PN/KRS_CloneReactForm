// import React from 'react'
import PropTypes from 'prop-types';

import styled from "styled-components";
import { _Color } from "./App.Theme";


function Item({ title, amount }) {
    const colorItem = amount >= 0 ? _Color.Income : _Color.Expense;

    const Li = styled.li`
        background-color: #f7f7f7;
        box-shadow:  5px 5px 5px  #e6e6e6;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #eaeaea;
        border-right: 6px solid ${colorItem};
        list-style: inside;
        user-select: none;
        /* margin: auto; */

        width: 100%;
        transition: font-size .2s ease , width .2s ease;
        margin-bottom: .3rem;
        
        &:hover{
            font-size: 1.5em;
            /* width:120%; */
            border: 1px solid ${colorItem};
            border-right: 6px solid ${colorItem};
            cursor: pointer;
        }

    `;

    const Span = styled.span`
        &:first-child {
            color: ${colorItem};
            text-align: left;
        }

        &:last-child {
            color: ${colorItem};
            float: right;
        }
    `;

    return (
        <Li>
            <Span>{title}</Span><Span>{amount}</Span>
        </Li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item