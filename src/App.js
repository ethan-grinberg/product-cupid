import React, {useState, useEffect} from 'react'
import "./App.css";
import Grid from "@mui/material/Grid"
import Product from "./Product";
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {"product0": "none", "product1": "none"}
  }

   handleClick = (id, order) => {
    console.log(order)
    axios.get(`/products/${id}/${order}`)
      .then((response) => {
        console.log(response.data)
        this.setState({"product0": response.data[0]}) 
        this.setState({"product1": response.data[1]})
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  componentDidMount() {
      axios.get("/products")
      .then((response) => {
        this.setState({"product0": response.data[0]}) 
        this.setState({"product1": response.data[1]})
      })
      .catch(error => console.error('Error: ${error}')); 
  }
  
  render() {
    return (
      <div className="App-header" >
        <Grid container spacing={1} 
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
          <Grid item>
            <Product handleClick={this.handleClick} product={this.state.product0} order="0"/>
          </Grid>
          <Grid item>
            <Product handleClick={this.handleClick} product={this.state.product1} order="1"/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
