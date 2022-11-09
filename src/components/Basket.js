const Basket = ({ basket, setBasket }) => {
  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total = total + basket[i].quantity * basket[i].price;
  }

  return (
    <div className="basket">
      <button>Valider mon panier</button>
      <div>
        {basket.map((achat, id) => {
          return (
            <div key={achat.id} className="ligneAchat">
              <div className="quantity">
                {achat.quantity !== 0 ? (
                  <>
                    <span
                      className="button"
                      onClick={() => {
                        const newTab = [...basket];
                        newTab[id].quantity = newTab[id].quantity - 1;
                        setBasket(newTab);
                      }}
                    >
                      -
                    </span>
                    {achat.quantity}
                    <span
                      className="button"
                      onClick={() => {
                        const newTab = [...basket];
                        newTab[id].quantity = newTab[id].quantity + 1;
                        setBasket(newTab);
                      }}
                    >
                      +
                    </span>
                  </>
                ) : null}
              </div>
              {achat.quantity !== 0 ? (
                <div className="titlePrice">
                  <p className="titleAchat">{achat.title}</p>
                  <p className="priceBasket">{achat.price * achat.quantity}</p>
                </div>
              ) : null}
            </div>
          );
        })}
        <div className="blockLigneSousTotal">
          {/* <div className="ligneSousTotal">
            <span>Sous-Total</span>
            <span>{total}</span>
          </div> */}
          {/* <div className="ligneFraisDePort">
            <span>Frais de livraison</span>
            <span>2,5 €</span>
          </div> */}
        </div>

        <div className="ligneTotal">
          <p>Total</p>
          <p>{total} €</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
