import React, {useState, useEffect} from 'react'
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

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/test").then(res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App-header" >
      <Card sx={{ maxWidth: 'md', height: '70vh' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          maxWidth= 'md'
          image= 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuQJbojjNO0ImWdzPvVcdBKxjuwBBEcbbu-stLAeOPB6oUtpQK-bRWRLfLo1DCX9clLl2T0czC1CYvKsgZ7YYRH-xjYJqa&usqp=CAY,https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7Yogj1KBu7ofN-l7ePmr-SYolkjSg-dMG1fkRPeR6dXdGIb1MfzYhC3ZU2KGCDI8npjczJee9pnHQbc2cJ4whiF5iMuJS&usqp=CAY,https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRge2KKYOwEIE-uyO7gVbvWyQOs4K--Ckrj_OxvVYTMfpH15mUrakwmxk8T200_kQqY9UZ4sI4NRthwgG4cNy5PSSLLQcf1&usqp=CAY,https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLChVn5A75zRVl-uHrSR8GaxT5g0fFi25227okHHo0va2jgpjw1rjZ69Dzi7XVGV0e_3YqCBN-RiX0GPdlJbjTjYs9QVoUTA&usqp=CAY,https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMUZwF0Rmcopn8EWkVpMZE1AdU8GJdtr_7a_g70Vn4MYcFX2XzzArKfmKfJAEDLmX1r8266dSMsd0TKU6rPQRUQVrndZwj&usqp=CAY,https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTetPFWBKa62eZFGBkJNQrRskIC2DiRIKTqyvNGlK0rk9xyi6H3rglfuBNq6lxKflzZubhkQ7wE7vZ-68jxtsqkgWIkBRuL&usqp=CAY,https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1ucNgdYPy3WjEn7zZKgWhsauu0fp4IKkjlxP0ajkgfqwic9RwcOn3d4uLJ5C1UQOiY38otOIDBItmZLGJoycnh8TzKgmM&usqp=CAY,https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmcO3P0pENrYEgP9phT5ah-oZrFqB6Zp_RFm7z4GlP_0sIOBA&usqp=CAY,https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUDB-SLqk1qsKt6BXMXxuaIkiZqSA72roYJg04jwSMzwmwLe6QhwnRQf6khANumquLPmZN4qtZWEACY22Re1_TmIWSBXGMWg&usqp=CAY,https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCeptfAnlg8JhMOR1fRJM_hbhPHo77Vf3z6A2I7MmeCXxkRZzJK5oji871EFFi33uleX2fH_RDBg2Gw-csAmEcyLcZczMm4w&usqp=CAY,https://i5.walmartimages.com/asr/303ecf3f-a5ee-4543-a20f-04f76b34af79_1.f383917a95b4223f20b5ed4f60f7f65e.jpeg,https://i5.walmartimages.com/asr/500f3b20-2cf9-4f37-9e08-fec2b4b19ca4_1.8c97c15221873ae99cdcac849987fb40.jpeg,https://i5.walmartimages.com/asr/5789520e-44f4-4e80-9c7f-411d35542fac_1.3f707684a179294adf12bac2e8f9978f.jpeg,https://i5.walmartimages.com/asr/871bba60-400f-4577-902a-9e83106fa680_1.6be96f31e616cd41b5f51366f4aa8682.jpeg,https://media.kohlsimg.com/is/image/kohls/4290310?&op_sharpen=1'
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Shoe $15.99
          </Typography>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            Sketchers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container direction="column" justify="left" alignItems="left">
        <IconButton>
          <ThumbDownIcon />
        </IconButton>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="right">
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
      </Grid>
      </CardActions>
    </Card>
    </div>
  );
}

export default App;
