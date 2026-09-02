import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Checkbox,
  TableSortLabel,
  Chip,
  IconButton,
  Box,
  Typography,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const DataTable = ({
  data,
  filters,
  searchQuery,
  onEdit,
  onSelectChange,
  selectedRows,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: 'signupDate',
    direction: 'desc',
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectAll, setSelectAll] = useState(false);

  // Apply filters and search
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        const searchableFields = [
          row.email,
          row.name,
          row.phoneNumber,
          row.postcode,
          row.vendorType,
          row.serviceOffering,
          row.status,
        ];

        if (
          !searchableFields.some((field) =>
            field.toLowerCase().includes(query)
          )
        ) {
          return false;
        }
      }

      // Postcode filter
      if (filters.postcode) {
        if (!row.postcode.includes(filters.postcode)) {
          return false;
        }
      }

      // Status filter
      if (filters.status && filters.status.length > 0) {
        if (!filters.status.includes(row.status)) {
          return false;
        }
      }

      // Vendor type filter
      if (filters.vendorType && filters.vendorType.length > 0) {
        if (!filters.vendorType.includes(row.vendorType)) {
          return false;
        }
      }

      // Service offering filter
      if (filters.serviceOffering && filters.serviceOffering.length > 0) {
        if (!filters.serviceOffering.includes(row.serviceOffering)) {
          return false;
        }
      }

      // Date range filter
      if (filters.startDate) {
        if (row.signupDate < filters.startDate) {
          return false;
        }
      }

      if (filters.endDate) {
        if (row.signupDate > filters.endDate) {
          return false;
        }
      }

      return true;
    });
  }, [data, filters, searchQuery]);

  // Sort data
  const sortedData = useMemo(() => {
    let sorted = [...filteredData];

    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      });
    }

    return sorted;
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Reset to first page when data changes
  React.useEffect(() => {
    setPage(0);
    setSelectAll(false);
  }, [searchQuery, filters]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      const allIds = paginatedData.map((row) => row.id);
      onSelectChange(allIds);
    } else {
      onSelectChange([]);
    }
  };

  const handleRowSelectChange = (e, rowId) => {
    const newSelected = e.target.checked
      ? [...selectedRows, rowId]
      : selectedRows.filter((id) => id !== rowId);
    onSelectChange(newSelected);
    setSelectAll(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { key: 'email', label: 'Email' },
    { key: 'phoneNumber', label: 'Phone Number' },
    { key: 'postcode', label: 'Postcode' },
    { key: 'vendorType', label: 'Vendor Type' },
    { key: 'serviceOffering', label: 'Service Offering' },
    { key: 'signupDate', label: 'Signup Date' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <Paper sx={{ width: '100%', boxShadow: 1, border: '1px solid rgba(103, 117, 130, 1)', borderRadius: '3px' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectAll && paginatedData.length > 0}
                  onChange={handleSelectAllChange}
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < paginatedData.length
                  }
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  sortDirection={
                    sortConfig.key === column.key ? sortConfig.direction : false
                  }
                  sx={{ fontWeight: 600, cursor: 'pointer', backgroundColor: '#f5f7fa' }}
                >
                  <TableSortLabel
                    active={sortConfig.key === column.key}
                    direction={
                      sortConfig.key === column.key ? sortConfig.direction : 'asc'
                    }
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    // Even rows
                    backgroundColor:
                      index % 2 === 1 ? '#f5f7fa' : 'inherit',

                    // Selected row
                    // ...(selectedRows.includes(row.id) && {
                    //   backgroundColor: '#f5f5f5',
                    // }),
                    // backgroundColor:
                    //   selectedRows.includes(row.id) ? '#f5f5f5' : 'inherit',
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onChange={(e) => handleRowSelectChange(e, row.id)}
                    />
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.postcode}</TableCell>
                  <TableCell>{row.vendorType}</TableCell>
                  <TableCell>{row.serviceOffering}</TableCell>
                  <TableCell>
                    {new Date(row.signupDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      color={
                        row.status === 'Onboarded' ? 'success' : 'error'
                      }
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => onEdit(row)}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 5 }}>
                  <Typography color="textSecondary">
                    No service providers found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ borderTop: '1px solid #e0e0e0' }}
      />

      {selectedRows.length > 0 && (
        <Box sx={{ p: 2, backgroundColor: '#e3f2fd', borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="primary">
            {selectedRows.length} row(s) selected
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default DataTable;
