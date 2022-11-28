import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LandingPage() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProducts = await response.json();
    setProducts(dataProducts);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container">
      <div className="row">
        <h1>My Product</h1>;
        {products.map((produk) => {
          return (
            <div className="col-3">
              <CardProduct key={produk.id} title={produk.title} price={produk.price} description={produk.description} image={produk.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CardProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "auto" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          S{props.description}
          <br />
          <p>
            <b>Price : $ {props.price}</b>
          </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default LandingPage;
