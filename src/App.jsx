import { useState } from 'react'
import data from '../data'
import Row from './components/Row'

function App() {
    const [faqData, setFaqData] = useState([...data])
    const queries = faqData.map(item=>{
        return(
            <Row 
                key={item.id}
                id={item.id}
                query={item.query}
                answer={item.answer}
                isOpen={item.isOpen}
                handleClick={handleClick}
            />
        )
    })
    console.log("here")
    function handleClick(event, id){
        setFaqData(old => 
            old.map(item=>
                // console.log(item.isOpen)
                item.id==id ? {...item, isOpen: !item.isOpen} : item
            )
        )
    }
    return (
        <section className='container'>
            <h1>Frequently Asked queries</h1>
            {queries}
        </section>
    )
}

export default App
