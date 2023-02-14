import ShoppingButton from "./ShoppingButton"

export default function form({name, handleClick}) {
    const handleSubmit =(event) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            
            name="title"
            id="cart-item"
            type="hidden"
            defaultValue={name} ></input>

            <ShoppingButton handleClick={handleClick}/>
        </form>
    )
}