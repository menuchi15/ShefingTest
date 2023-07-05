import './App.css';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HomeIcon from '@mui/icons-material/Home';
import Fab from '@mui/material/Fab';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <AppBar position={"sticky"}>
        <Toolbar>
          <Diversity1Icon />
          <Fab sx={{ mx: "15px" }} size="small" color="primary" onClick={() => navigate('/')}>
            <HomeIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
