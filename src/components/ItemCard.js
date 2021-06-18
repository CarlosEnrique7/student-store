const ItemCard = ({ item }) => {
  return (
    <div>
      <div className="card" key={item.id}>
        <img className="image" src={item.image} alt={item.name + " image"} />
        <div className="info">
          <p className="itemName">{item.name}</p>
          <p className="category">{item.category}</p>
          <p className="price">{"$" + item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
