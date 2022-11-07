const Sections = ({ data }) => {
  return (
    <div className="section">
      {data.categories.map((elem, index) => {
        return (
          <div className="sectionName">
            <h3 key={index}>{elem.name}</h3>
            <div className="meals">
              {elem.meals.map((info, index) => {
                if (info.picture) {
                  return (
                    <div className="mealsTextImg">
                      <div className="mealsText">
                        <h4 key={index}>{info.title}</h4>
                        <p key={index}>{info.description}</p>
                        <p className="price" key={index}>
                          {info.price} €
                        </p>
                      </div>
                      <img
                        className="mealsImg"
                        key={index}
                        src={info.picture}
                      ></img>
                    </div>
                  );
                } else {
                  return (
                    <div className="mealsTextImg">
                      <div className="mealsText">
                        <h4 key={index}>{info.title}</h4>
                        <p key={index}>{info.description}</p>
                        <p className="price" key={index}>
                          {info.price} €
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
