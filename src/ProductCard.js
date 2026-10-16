import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductCard({ product }) {
  return (
    <div style={{border : "1px solid black" , padding : "10px" , width : "50%" , borderRadius : "5px" , marginLeft : "20%"}}>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>

       <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    </div>
  );
}

export default ProductCard;