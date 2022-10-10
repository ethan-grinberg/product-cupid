import React from 'react'
import "./App.css";
import Grid from "@mui/material/Grid"
import Product from "./Product";
import ChooseCategory from './ChooseCategory';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {"product0": {}, "product1": {}, "categories": [], "current_cat": ""}
  }

   handleClick = (id, order) => {
    let url = `/products/${id}/${order}/${this.state.current_cat}`
    axios.get(url)
      .then((response) => {
        this.setState({"product0": response.data[0]}) 
        this.setState({"product1": response.data[1]})
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  handleChangeCat = (event) => {
    this.setState({"current_cat": event.target.value})
    axios.get(`/products/${event.target.value}`)
      .then((response) => {
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

      axios.get("/categories")
      .then((response) => {
        this.setState({"categories": Object.values(response.data)}) 
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
            <ChooseCategory handleChangeCat={this.handleChangeCat} categories={this.state.categories} current_cat={this.state.current_cat}/>
          </Grid>
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
