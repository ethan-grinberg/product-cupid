import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, {useState} from 'react';
import Box from '@mui/material/Box';

class Product extends React.Component {
   render() {
    return (        
        <Card sx={{height: '60vh', display:'flex'}}>
        <CardActionArea onClick={event => this.props.handleClick(this.props.product.ProductId, this.props.order)}>
          <CardMedia
            component="img"
            image= {this.props.product.ImageURL}
            sx={{height:'35vh', padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              ${this.props.product.price}.00
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: '200px',
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}>
              {this.props.product.ProductTitle}
            </Typography>
            <Rating value={this.props.product.reviews ?? 2} precision={1} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default Product;
