import React from "react";
import ProductList from "./ProductList";

function Dashboard({ products, loading }) {
  return (
    <div>
      <h1 style={{textAlign : "center"}}>Product Dashboard</h1>
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </div>
  );
}

export default Dashboard;