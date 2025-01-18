import { useState } from 'react'
import './Form.css'

function Form({ onSubmit }) {
    const [description, setDescription] = useState('')
    const [quantity , setQuantity] = useState(1)

    function submitHandler(e) {
        e.preventDefault()
        if (description.length === 0){
            alert('Please enter an item description')
        }else {
            const newItem = {description , quantity , packed: false , id : Date.now() }
            onSubmit(newItem)
        }
        setDescription('')
        setQuantity(1)
    }


    return (
        <form className='add-form' onSubmit={submitHandler}>
            <h3>what do you need for you're trip ?</h3>
            <select 
            value={quantity} 
            onChange={e=> setQuantity(+e.target.value)}
            >
                {Array.from({ length: 20 },
                    (_, i) => i + 1).map
                    ((num) =>
                        <option value={num} key={num}>{num}</option>
                    )}
            </select>
            <input 
            type="text" 
            placeholder='item...' 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            />
            <button>Add</button>
        </form>
    )
}

export default Form;