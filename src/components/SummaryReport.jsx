
import styled from "styled-components";
import PropTypes from "prop-types";
import { _Color } from "../App.Theme";

console.log(_Color);

const MainDiv = styled.div`
    padding: 1.2rem 0;
`;

const BalanceDiv = styled.div`
    font-size: 1.6em;
    font-weight: bold;
    margin-top: .2em;
    margin-bottom: .5em;
    display: flex;
    justify-content: space-around;
`

const DetailDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
     > div {
        flex: 1;
        font-size: 1em;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        border-right: 1px solid;
    }
    > div > span {
        font-size: 1.1em;
        font-weight: bold;
    }

    > div:nth-of-type(1) > :last-child  {
        color: ${_Color.Income};
    }

    > div:nth-of-type(2) > :last-child {
        color: ${_Color.Expense};
    }
`


function SummaryReport({ sumData: { income, expense } }) {
    return (
        <MainDiv>
            <BalanceDiv>
                <span>ยอดคงเหลือ</span>
                <span>{(income - Math.abs(expense)).toLocaleString()} </span>
            </BalanceDiv>

            <DetailDiv>
                <div>
                    <span>รายรับ</span>
                    <span>{income.toLocaleString()}</span>
                </div>
                <div>
                    <span>รายจ่าย</span>
                    <span>{expense.toLocaleString()}</span>
                </div>
            </DetailDiv>
        </MainDiv>
    )
}


SummaryReport.propTypes = {
    sumData: PropTypes.object,
    income: PropTypes.number,
    expense: PropTypes.number,
}


export default SummaryReport
