import { Chart } from "react-google-charts";
import PropTypes from "prop-types";



function PieChart({ sumData: { income, expense } }) {

    const data = [
        ["รายการ", "รายรับ-รายจ่าย"],
        ["รายรับ", income],
        ["รายจ่าย", Math.abs(expense)]
    ];

    const options = {
        backgroundColor: 'transparent',
        // 'width': 400,
        // 'height': 300,
        // 'title': 'My Chart',
        legend: { position: 'bottom' }
    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"300px"}
        />

    )
}


PieChart.propTypes = {
    sumData: PropTypes.object,
    income: PropTypes.number,
    expense: PropTypes.number,
}

export default PieChart


