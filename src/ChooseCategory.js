import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


class ChooseCategory extends React.Component {
    render() {
        return (
            <Container sx={{'minWidth': 150, height: '60vh'}}>
              <Typography gutterBottom variant="h5" align='center'>
              Category
            </Typography>
            <FormControl sx={{minWidth:150, backgroundColor: 'white',  borderRadius: '7%'}}>
              <Select
                id="simple-select"
                label = "Category"
                value={this.props.current_cat}
                onChange={event=> this.props.handleChangeCat(event)}
              >
                <MenuItem value="">
                <em>All</em>
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