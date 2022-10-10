import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';

class ChooseCategory extends React.Component {
    render() {
        return (
            <Container sx={{'minWidth': 150, height: '60vh'}}>
            <FormControl sx={{'minWidth':150}}>
            <InputLabel id="simple-select-label">
                Category
            </InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                label = "Category"
                value={this.props.current_cat}
                onChange={event=> this.props.handleChangeCat(event)}
              >
                <MenuItem value="">
                <em>Category</em>
                </MenuItem>
                {this.props.categories.map((category) => (
                    <MenuItem key={category} value={category} >
                        {category}
                    </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>)
    }
}

export default ChooseCategory;