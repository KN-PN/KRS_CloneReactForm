// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import FormComponent from './FormComponent'
import ListItem from './ListItem'

function App() {
  // const [count, setCount] = useState(0)

  const styleHeader = {
    color: 'red', textAlign: 'center'
  }

  const [listItem, setListItem] = useState([])

  const getItems = (prevItems) => {
    console.log('prevItems: ', prevItems);
    console.log('listItem: ', listItem);
    // setListItem((item) => [item, ...prevItems])
    setListItem((item) => [prevItems, ...item])
  }

  return (

    <div className='container'>
      <h1 style={styleHeader}></h1>
      <FormComponent getItems={getItems}></FormComponent>
      <ListItem items={listItem}></ListItem>
    </div>

  )
}

export default App
