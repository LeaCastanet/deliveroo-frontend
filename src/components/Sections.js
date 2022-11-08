const Sections = ({ data, basket, setBasket }) => {
  // const addBasketItem = () => {
  //   const newBasket = [...basket];
  //   newBasket.push(info.title, info.price);
  //   setBasket(newBasket);
  // };

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
                          const addBasketItem = () => {
                            const newBasket = [...basket];
                            newBasket.push(info);
                            setBasket(newBasket);
                            // {
                            //   newBasket.map((achat) => {
                            //     return (
                            //       <div>
                            //         <p>{achat.tile}</p>
                            //         <p>{achat.price}</p>
                            //       </div>
                            //     );
                            //   });
                            // }

                            console.log(info.title);
                            console.log(info.price);
                          };
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
                      ) : null}
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
