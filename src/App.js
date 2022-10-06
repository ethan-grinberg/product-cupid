import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css";

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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Stack spacing={2} direction="row">
        {(typeof data.test == 'undefined') ? (
          <p>Loading...</p>
        ): (
          data.test.map((t, i) => (
            <Button variant="contained">{t}</Button>
          ))

        )}
      </Stack>
      </Container>
    </React.Fragment>
  );
}

export default App;
