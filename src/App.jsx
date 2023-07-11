// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent'
import ListItem from './ListItem'

function App() {

  const styleHeader = {
    color: 'red', textAlign: 'center'
  }

  const [listItem, setListItem] = useState([])

  const getItems = (item) => {
    setListItem((prevState) => [...prevState, item])
  }

  return (
    <div className='container'>
      <h1 style={styleHeader}>Clone React Form App</h1>
      <FormComponent getItems={getItems}></FormComponent>
      <ListItem items={listItem}></ListItem>
    </div>
  )

}

export default App
