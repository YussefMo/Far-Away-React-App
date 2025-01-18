import './Footer.css'

function Footer({ item }) {
    if (!item.length) {
        return (
            <footer>
                <p>start adding some items to pack up ✈️</p>
            </footer>
        )
    }

    const numItems = item.length
    const packedItems = item.filter((item) => item.packed).length
    const packedPercentage = Math.round((packedItems / numItems) * 100)

    return (
        <footer>
            {packedPercentage === 100 ? (<p>
                All items are packed! ✈️
            </p>) : (<p>
                👜 you have {numItems} items on your list, and you already packed {packedItems} ( {
                isNaN(packedPercentage) ? '0' : packedPercentage}% ) items
            </p>)}
        </footer>
    )
}

export default Footer