import products from '../products.json'
import Product from './Product'
import Title from './Title'
export default function ContentPage({name, cartItem, setCartItems}){
    return (
        <main>
            <Title/>
            <div id="product-list">
            {products.map((product) =>{
             return(
                <Product key={product.prodid}
                 name={product.title} 
                 price={product.price} 
                 cat={product.category}
                 img={product.imagefile}
                 cartItems={cartItems} 
                 setCartItems={setCartItems}
                 proid={product.proid}/>
                )
                } 
            )}
            </div>
        </main>
    )
}