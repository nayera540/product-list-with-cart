function CartItem({ cartitem, dispatch }) {
    return (
        <div className="cart__item">
            <div className="item">
                <div className="item__header">
                    <p>{cartitem.name}</p>
                </div>
                <div className="item__details">
                    <span className="quantity">{cartitem.quantity}x</span>
                    <span className="item__price">@${cartitem.price.toFixed(2)}</span>
                    <span className="item__totalprice">
                        ${cartitem.totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="item__remove">
                <button
                    className="btn_remove"
                    onClick={() => dispatch({ type: "removeItem", payload: cartitem })}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                    >
                        <path
                            fill="#CAAFA7"
                            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CartItem;
