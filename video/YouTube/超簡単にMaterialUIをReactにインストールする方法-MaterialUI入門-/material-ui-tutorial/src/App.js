import './App.css';
import { Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h1' mt={5}>こんにちは</Typography>
      <HomeIcon/>
    </div>
  );
}

export default App;
