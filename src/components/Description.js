import imgDescription from "../assets/imgDescription.jpg";

const Description = ({ data }) => {
  return (
    <div className="descriptionContainer">
      <div className="description">
        <div className="descriptionText">
          <h2>{data.restaurant.name}</h2>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="imgDescription">
          <img src={imgDescription} className="imgDescription"></img>
        </div>
      </div>
    </div>
  );
};

export default Description;
