
function CartWidget({cantidad}) {
    return(
        <>
        <div className='contenedorCarrito'>
            <i className='fa fa-shopping-cart'> </i>
            {cantidad > 0 && (
                <span className='numeroBurbuja'>{cantidad}</span>
            )}
            </div>
            
        
        
        
        </>
        );
        };
        export default CartWidget;

    
