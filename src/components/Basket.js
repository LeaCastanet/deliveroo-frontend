const Basket = ({ basket }) => {
  return (
    <div className="basket">
      <button>Valider mon panier</button>
      <div>
        {basket.map((achat) => {
          return (
            <>
              <div className="ligneAchat" key={achat.id}>
                <span>{achat.title}</span>
                <span>{achat.price}</span>
              </div>
              <div className="ligneSousTotal">
                <span>Sous-Total</span>
              </div>
              <div className="ligneFraisDePort">
                <span>Frais de livraison</span>
                <span>2,5 €</span>
              </div>
              <div className="ligneTotal"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
