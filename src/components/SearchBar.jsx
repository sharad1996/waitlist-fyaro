import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // Live search
    onSearch(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(query.trim());
    }
  };

  return (
    <Box>
      <TextField
        placeholder="Search User"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        // sx={{ width: '264px', }}
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
