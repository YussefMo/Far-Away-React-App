import Header from "./header/Header"
import Form from "./form/Form"
import TravelList from "./travel-list/TravelList"
import Footer from "./footer/Footer"
import { useState } from "react"

function Container (){
    const [items, setItems] = useState([])

    function addItemHandler(item) {
        setItems((prevItem)=> [...prevItem , item])
    }

    function removeItemHandler(id) {
        setItems((prevItems)=> prevItems.filter((item)=> item.id !== id))
    }

    function togglePackHandler(id) {
        setItems((prevItems)=> prevItems.map((item)=> item.id === id? {...item, packed:!item.packed}: item))
    }

    function removeAllHandler() {
        const confirm = window.confirm('Are you sure you want to remove all items')
        if (confirm === true){ 
            setItems([]) 
        } else {
            null
        }
    }

    return (
        <div className="app">
            <Header />
            <Form onSubmit={addItemHandler} />
            <TravelList items={items} 
            onRemove={removeItemHandler} 
            onPack={togglePackHandler} 
            onRemoveAll={removeAllHandler}  
            />
            <Footer item={items} />
        </div>
    )
}


export default Container