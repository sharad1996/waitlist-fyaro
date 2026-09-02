import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container, Stack, Typography, Alert, Button } from '@mui/material';
import Sidebar from './components/Sidebar';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import Toast from './components/Toast';
import { mockData } from './mockData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
      light: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
    error: {
      main: '#ef4444',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#2563eb',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
    h2: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
    h3: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
    h4: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
    h5: {
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
    },
    h6: {
      fontWeight: 600,
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle1: {
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle2: {
      fontWeight: 600,
      fontFamily: 'Poppins, sans-serif',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    caption: {
      fontFamily: 'Poppins, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          backgroundColor: '#f5f5f5',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  const [filters, setFilters] = useState({
    postcode: '',
    status: [],
    startDate: '',
    endDate: '',
    vendorType: [],
    serviceOffering: []
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [toast, setToast] = useState(null);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApplyFilters = () => {
    setToast({
      message: 'Filters applied successfully!',
      type: 'success'
    });
  };

  const handleClearFilters = () => {
    setFilters({
      postcode: '',
      status: [],
      startDate: '',
      endDate: '',
      vendorType: [],
      serviceOffering: []
    });
    setSearchQuery('');
    setSelectedRows([]);
    setToast({
      message: 'Filters cleared!',
      type: 'info'
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
    setToast({
      message: `Viewing details for ${row.name}`,
      type: 'info'
    });
  };

  const handleSelectChange = (selectedIds) => {
    setSelectedRows(selectedIds);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', py: 2 }}>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            {/* Header */}


            {/* Main Content */}
            <Stack spacing={3} direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'stretch', md: 'flex-start' }}>
              {/* Sidebar */}
              <Box sx={{ width: { xs: '100%', md: 280 } }}>
                <Sidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onApplyFilters={handleApplyFilters}
                  onClearFilters={handleClearFilters}
                />
              </Box>

              {/* Main Content Area */}
              <Box sx={{ flex: 1, width: { xs: '100%', md: 280 } }}>
                <Stack spacing={2}>
                  {/* Search Bar */}
                  <Box sx={{
                    display: { xs: 'block', sm: "flex", md: 'flex' }, justifyContent: 'space-between', alignItems: 'end'
                  }}>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 400, mb: 0.5 }}>
                        Waitlist
                      </Typography>
                      <Box
                        sx={{
                          p: { xs: "10px 0px 10px 0px", sm: "20px 0px 0px 0px", md: "20px 0px 0px 0px" },
                          display: 'flex',
                          gap: 1.5,
                          justifyContent: { xs: 'left', md: 'center' },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: 'rgba(200, 213, 217, 1)',
                            color: 'rgba(0, 0, 0, 1)',
                            textTransform: 'none',
                            fontWeight: 400,
                            width: '142px',
                            height: '32px',
                            fontSize: '12px',
                            boxShadow: 'none',
                            borderRadius: '8px',
                            // '&:hover': {
                            //   backgroundColor: '#1d4ed8',
                            // },
                          }}
                        >
                          Service Providers
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#fff',
                            color: 'rgba(0, 0, 0, 1)',
                            textTransform: 'none',
                            fontWeight: 400,
                            border: "1px solid rgba(128, 118, 100, 1)",
                            width: '92px',
                            height: '32px',
                            fontSize: '12px',
                            boxShadow: 'none',
                            borderRadius: '8px',
                            // '&:hover': {
                            //   backgroundColor: '#dc2626',
                            // },
                          }}
                        >
                          Customers
                        </Button>
                      </Box>
                    </Box>

                    <SearchBar onSearch={handleSearch} />
                  </Box>

                  {/* Selected Info Alert */}
                  {selectedRows.length > 0 && (
                    <Alert severity="info" sx={{ mb: 1 }}>
                      {selectedRows.length} row(s) selected
                    </Alert>
                  )}

                  {/* Data Table */}
                  <DataTable
                    data={mockData}
                    filters={filters}
                    searchQuery={searchQuery}
                    onEdit={handleEdit}
                    onSelectChange={handleSelectChange}
                    selectedRows={selectedRows}
                  />
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box >

      {/* Modal */}
      < Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)
        }
        row={selectedRow}
      />

      {/* Toast Notification */}
      {
        toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )
      }
    </ThemeProvider >
  );
}

export default App;
