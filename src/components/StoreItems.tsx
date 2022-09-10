import {Card, Button} from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type storeItemsProps ={
    id:number,
    name:string,
    price:number,
    imageUrl:string
}

function StoreItem({id, name, price, imageUrl}:storeItemsProps) {


    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);

    return (
     <>
     <Card className='h-100'>
        <Card.Img variant='top' src ={imageUrl} height='200px' style ={{objectFit:'cover'}}/>
        <Card.Body className='d-flex flex-column'>
            <Card.Title className ='d-flex justify-content-between align-items-baseline mb-4'>
             <span className='fs-2'>{name}</span>
             <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
               {quantity === 0 ? <Button className='w-100 bg-warning' onClick={() => increaseCartQuantity(id)}>+ Add to cart</Button>:
               <div className='d-flex align-items-center flex-column' style={{gap:'0.5rem'}}>
               <div className='d-flex align-items-center justify-content-center' style={{gap:'0.5rem'}}>
              <Button className='bg-success' onClick={()=> decreaseCartQuantity(id)}>-</Button>
             <div> <span className='fs-3'>{quantity}
              in cart</span></div>
              <Button className='bg-success' onClick={()=> increaseCartQuantity(id)}>+</Button>      
                </div>
               <Button variant='danger' onClick={()=> removeFromCart(id)}>Remove</Button>
                </div>
               }
            </div>
        </Card.Body>
     </Card>
     </>
    )
  }
  
  export default StoreItem