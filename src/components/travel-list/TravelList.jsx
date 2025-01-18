import { useState } from 'react'
import './TravelList.css'

function TravelList({ items , onRemove , onPack , onRemoveAll }) {
    const [sortBy , setSortBy] = useState('input')

    let sortedItems

    if (sortBy === 'input') sortedItems = items
        else if (sortBy === 'description') sortedItems = items.sort((a, b) => a.description.localeCompare(b.description))
            else sortedItems = items.sort((a, b) => a.packed - b.packed)

    return (
        <div className="list">
            <ul>
                {sortedItems.map((data) => {
                    return (
                        <li key={data.id}>
                            <input type="checkbox" value={data.packed} onChange={() => onPack(data.id)} />  
                            <span className={data.packed ? 'packed' : ''}>
                                {data.quantity} {data.description}
                            </span>
                            <button onClick={()=> onRemove(data.id)}>❌</button>
                        </li>
                    )})}
            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                    <option value="input">sort by input order</option>
                    <option value="description">sort by description</option>
                    <option value="packed">sort by packed status</option>
                </select>
                <button onClick={onRemoveAll}>Remove All</button>
            </div>
        </div>
    )
}


export default TravelList