import { useEffect, useState } from "react";
import "./style.css";

function Item() {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [sortOrder, setSortOrder] = useState(""); // "AZ" or "ZA"

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let result = await response.json();
        setData(result.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "AZ") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "ZA") {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  const items = data.length;

  return (
    <>
      <div className="bigBox">
        <div className="topItems">
          <h1>{items} items</h1>
          <div className="selects">
            <select>
              <option value="All items">All Items</option>
            </select>
            <select onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Sort by</option>
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
            </select>
          </div>
        </div>
        <div div className="item-container">
          {sortedData.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-img"
              />
              <div className="card-content">
                <div className="card-info">
                  <p className="category">Categories</p>
                  <p className="rating">Rating: {item.rating}</p>
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="price">{item.price}$</p>
                <div className="actions">
                  <span className="heart" onClick={() => toggleLike(item.id)}>
                    {likedItems[item.id] ? (
                      <i className="fas fa-heart" style={{ color: "red" }}></i>
                    ) : (
                      <i className="far fa-heart"></i>
                    )}
                  </span>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Item;
