import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import './search.scss'

export default function CustomizedInputBase() {
  return (
    <Paper 
      id='input'
      component="form"
      sx={{display: 'flex', alignItems: 'center' }}
    >
      <IconButton  aria-label="menu">
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Réf constructeur, réf Autover, marque..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <button id='button'>
          <SearchIcon />
          <span>Rechercher</span>
      </button>
      
      
     
      
    </Paper>
  );
}