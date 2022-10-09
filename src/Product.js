import "./App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ButtonGroup, CardActionArea } from '@mui/material';
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Rating from '@mui/material/Rating';
import React, {useState, useEffect} from 'react'


class Product extends React.Component {
   render() {
    return (
        <Card sx={{ maxwidth: 'md', height: '60vh' }}>
        <CardActionArea onClick={event => this.props.handleClick(this.props.product.ProductId)}>
          <CardMedia
            component="img"
            height="400"
            maxwidth= 'md'
            image= {this.props.product.ImageURL}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.product.ProductTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default Product;
