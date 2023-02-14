import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import Form from "./Form"
import ShoppingButton from "./ShoppingButton";





export default function Product({name, cat, price, img, proid, cartItem, setCartItems, setAmount }){

    const handleClick = () => {
        setCartItems ((prev) => [
            {title: name, price: price, proid: proid}, ...prev
        ])
        console.log(cartItem)
        setAmount((prev) => prev + Number (price))
        
    }
    return (
        <article className="product-card">
            <img src={"./images/PROD_"+img} alt={"Produktbilde av " + name} />
            <ProductTitle name={name}  />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <Form name={name} handleClick={handleClick}/>
        </article>
    )
}