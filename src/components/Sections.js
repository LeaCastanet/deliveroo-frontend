const Sections = ({ data, basket, setBasket }) => {
  const addBasketItem = (info) => {
    const newBasket = [...basket];
    newBasket.push(
      { title: info.title },
      { price: info.price },
      { id: info.id }
    );
    setBasket(newBasket);
  };

  return (
    <div className="section">
      {data.categories.map((elem, index) => {
        if (elem.meals.length !== 0) {
          return (
            <div className="sectionName">
              <h3 key={index}>{elem.name}</h3>
              <div className="meals">
                {elem.meals.map((info) => {
                  return (
                    <div className="mealsTextImg">
                      <div
                        className="mealsText"
                        onClick={() => {
                          addBasketItem(info);
                        }}
                      >
                        <h4 key={info.id}>{info.title}</h4>
                        <p className="textCaché" key={info.id}>
                          {info.description}
                        </p>
                        <p className="price" key={info.id}>
                          {info.price} €
                        </p>
                      </div>
                      {info.picture ? (
                        <img
                          className="mealsImg"
                          key={info.id}
                          src={info.picture}
                        ></img>
                      ) : null}{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Sections;
