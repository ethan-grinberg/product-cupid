import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';

class ChooseCategory extends React.Component {
    render() {
        return (
            <Container sx={{'minWidth': 100, alignItems: "center", height: '60vh'}}>
            <FormControl sx={{'minWidth':150}}>
            <InputLabel id="simple-select">
                Category
            </InputLabel>
              <Select
              labelId="simple-select"
                alignItems = "center"
                label = "Category"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Container>)
    }
}

export default ChooseCategory;