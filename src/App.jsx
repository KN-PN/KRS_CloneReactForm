import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent'
import ListItem from './ListItem'
import DataContext from './data/DataContext'
import SummaryReport from './components/SummaryReport'
import PieChart from './components/PieChart'

function App() {

  const styleHeader = {

    textAlign: 'center'
  }

  const [listItem, setListItem] = useState([])

  const getItems = (item) => {
    setListItem((prevState) => [...prevState, item])
  }
  let summaryData = {
    income: listItem.filter((item) => item.amount > 0)
      .map((data) => data.amount)
      .reduce((total, item) => total += item, 0),

    expense: listItem.filter((item) => item.amount < 0)
      .map((data) => data.amount)
      .reduce((total, item) => total += item, 0)
  }
  return (
    <DataContext.Provider value={listItem} >

      <div className='container'>
        <h1 style={styleHeader}>Clone รายรับ-รายจ่าย</h1>
        {
          listItem.length > 0 ?
            <PieChart sumData={summaryData}></PieChart>
            : null
        }
        <SummaryReport sumData={summaryData}></SummaryReport>
        <hr />
        <FormComponent getItems={getItems}></FormComponent>
        <hr />
        {
          listItem.length > 0 ?
            <ListItem items={listItem}></ListItem>
            : null
        }


      </div>

    </DataContext.Provider>

  )

}

export default App
