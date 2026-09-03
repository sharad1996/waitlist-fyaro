import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
  Typography,
  Divider,
  Collapse,
  IconButton,
} from '@mui/material';
import logo from '../assets/logo.png';

import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = ({
  filters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
}) => {
  const [open, setOpen] = useState(false);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    onFilterChange(field, value);
  };

  const handleCheckboxChange = (e, field, value) => {
    const { checked } = e.target;
    const currentValues = filters[field] || [];

    if (checked) {
      onFilterChange(field, [...currentValues, value]);
    } else {
      onFilterChange(
        field,
        currentValues.filter((v) => v !== value)
      );
    }
  };

  const isChecked = (field, value) => {
    return (filters[field] || []).includes(value);
  };

  return (
    <Paper
      component="aside"
      sx={{
        width: { xs: '100%', md: 280 },
        p: { xs: 2, md: 3 },
        overflow: 'hidden',
        background: '#F4F7F9',
        boxShadow: 1,
        borderRadius: 1,
        height: 'fit-content',

        position: { md: 'sticky' },
        top: { md: 16 },
      }}
    >
      <Box
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: { xs: 'pointer', md: 'default' },
        }}
      >

        <IconButton
          size="small"
          sx={{
            display: { xs: 'flex', md: 'none' },
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>


      <Collapse
        in={open}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <FilterContent
          filters={filters}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
          onApplyFilters={onApplyFilters}
          onClearFilters={onClearFilters}
        />
      </Collapse>

      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <FilterContent
          filters={filters}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
          onApplyFilters={onApplyFilters}
          onClearFilters={onClearFilters}
        />
      </Box>
    </Paper>
  );
};

const FilterContent = ({
  filters,
  handleInputChange,
  handleCheckboxChange,
  isChecked,
  onApplyFilters,
  onClearFilters,
}) => {
  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, m: "20px 0 20px 0 !important" }}>
        <img src={logo} alt="Logo" />

      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: 'rgba(200, 213, 217, 1)',
          color: 'rgba(0, 0, 0, 1)',
          textTransform: 'none',
          fontWeight: 700,
          width: '100%',
          height: '36px',
          fontSize: '16px',
          boxShadow: 'none',
          borderRadius: '8px',
          // '&:hover': {
          //   backgroundColor: '#1d4ed8',
          // },
        }}
      >
        User Management
      </Button>
      <Box sx={{ m: "40px 0 20px 0 !important" }}>
        <TextField
          fullWidth
          size="small"
          label="Postcode"
          sx={{ backgroundColor: '#fff', border: '1px solid rgba(115, 119, 127, 1)', borderRadius: '4px' }}
          placeholder="ZIP"
          value={filters.postcode || ''}
          onChange={(e) =>
            handleInputChange(e, 'postcode')
          }
        />
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: 'rgba(50, 64, 84, 1)',
          }}
        >
          Registration Status
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked('status', 'Onboarded')}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'status',
                    'Onboarded'
                  )
                }
                size="small"
              />
            }
            label="Onboarded"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked('status', 'Rejected')}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'status',
                    'Rejected'
                  )
                }
                size="small"
              />
            }
            label="Rejected"
          />
        </FormGroup>
      </Box>

      <Box sx={{ m: "30px 0 20px 0 !important" }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: 'rgba(50, 64, 84, 1)',
          }}
        >
          Date Registered
        </Typography>

        <Stack spacing={1} sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 1, alignItems: 'baseline' }}>
          <TextField
            fullWidth
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={filters.startDate || ''}
            onChange={(e) =>
              handleInputChange(e, 'startDate')
            }
          />

          <TextField
            fullWidth
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={filters.endDate || ''}
            onChange={(e) =>
              handleInputChange(e, 'endDate')
            }
          />
        </Stack>
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: 'rgba(50, 64, 84, 1)',
          }}
        >
          Vendor Type
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(
                  'vendorType',
                  'Independent'
                )}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'vendorType',
                    'Independent'
                  )
                }
                size="small"
              />
            }
            label="Independent"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(
                  'vendorType',
                  'Company'
                )}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'vendorType',
                    'Company'
                  )
                }
                size="small"
              />
            }
            label="Company"
          />
        </FormGroup>
      </Box>

      <Box sx={{ m: "30px 0 20px 0 !important" }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: 'rgba(50, 64, 84, 1)',
          }}
        >
          Service Offering
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(
                  'serviceOffering',
                  'Housekeeping'
                )}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'serviceOffering',
                    'Housekeeping'
                  )
                }
                size="small"
              />
            }
            label="Housekeeping"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(
                  'serviceOffering',
                  'Window Cleaning'
                )}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'serviceOffering',
                    'Window Cleaning'
                  )
                }
                size="small"
              />
            }
            label="Window Cleaning"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked(
                  'serviceOffering',
                  'Car Valet'
                )}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    'serviceOffering',
                    'Car Valet'
                  )
                }
                size="small"
              />
            }
            label="Car Valet"
          />
        </FormGroup>
      </Box>


      <Stack spacing={1}>
        <Button
          fullWidth
          variant="contained"
          onClick={onApplyFilters}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '100px'
          }}
        >
          Apply Filters
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={onClearFilters}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '100px'
          }}
        >
          Clear Filters
        </Button>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
