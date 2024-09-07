function OrderItem({ cartItem }) {
    return (
        <div className="order_item">
            <div className="info">
                <img src={cartItem.image} alt={cartItem.name} />
                <div className="item__details">
                    <p>{cartItem.name}</p>
                    <div className="details">
                        <span className="quantity">{cartItem.quantity}x</span>
                        <span className="item__price">@${cartItem.price.toFixed(2)}</span>
                    </div>
                </div>

            </div>
            <div className="order__price">
                <p>${cartItem.totalPrice.toFixed(2)}</p>
            </div>

        </div>
    )
}

export default OrderItem
