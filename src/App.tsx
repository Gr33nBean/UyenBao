import React from 'react';
import {AppBar, Toolbar, IconButton, } from '@mui/material'
import LocationIcon from '@mui/icons-material/LocationOn'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

import './App.css';

function App() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <AppBar position='static'>
      <Toolbar>
        <Search>
            <SearchIconWrapper>
              <SearchIcon></SearchIcon>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="I'm searching for..."
              inputProps={{ 'aria-label': 'search' }}
            />
            {/* <KeyboardArrowDown></KeyboardArrowDown> */}
          </Search>
        {/* <IconButton size = 'large' edge='start' color='inherit' aria-label='logo'>
          <LocationIcon></LocationIcon>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}

export default App;
