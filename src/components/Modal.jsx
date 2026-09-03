import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  Tabs,
  Tab,
  TextField,
  IconButton,
  Paper,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const Modal = ({ isOpen, onClose, row }) => {
  const [tabValue, setTabValue] = useState(0);
  const [editNotes, setEditNotes] = useState(false);
  const [notes, setNotes] = useState('');

  if (!row) return null;

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleStatusChange = (status) => {
    console.log(`Status changed to: ${status}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <Box sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'rgba(0, 0, 0, 1)', display: 'flex', alignItems: 'center', gap: 1 }}>
            <PermIdentityIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} /> User Details
          </Typography>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.2rem' }}>
              {row.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(174, 174, 174, 1)', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} /> {row.email}
            </Typography>
          </Box>
          <Box
            sx={{
              p: "20px 0px 20px 0px",
              display: 'flex',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgba(241, 241, 241, 1)',
                color: 'rgba(0, 0, 0, 1)',
                textTransform: 'none',
                fontWeight: 400,
                width: '92px',
                height: '22px',
                fontSize: '12px',
                boxShadow: 'none',
                borderRadius: '8px',
                // '&:hover': {
                //   backgroundColor: '#1d4ed8',
                // },
              }}
            >
              Customer
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgba(241, 241, 241, 1)',
                color: 'rgba(0, 0, 0, 1)',
                textTransform: 'none',
                fontWeight: 400,
                width: '92px',
                height: '22px',
                fontSize: '12px',
                boxShadow: 'none',
                borderRadius: '8px',
                // '&:hover': {
                //   backgroundColor: '#dc2626',
                // },
              }}
            >
              Invite
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              fontSize: '0.875rem',
              mb: 1.5,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Contact Information
          </Typography>

          <Stack spacing={1.5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">{row.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">{row.phoneNumber}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">
                  United Kingdom
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EventIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">
                  Signed up {new Date(row.signupDate).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Divider sx={{ mb: 2, mt: 2 }} />
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              fontSize: '0.875rem',
              mb: 1.5,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            Customer Details
          </Typography>

          <Stack spacing={1.5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PermIdentityIcon sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                <Typography variant="body2">individual</Typography>
              </Box>

            </Box>

          </Stack>
        </Box>

        <Divider sx={{ mb: 2, mt: 2 }} />
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              fontSize: '0.875rem',
              mb: 1.5,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            User Details
          </Typography>

          <Stack spacing={1.5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>

                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">
                  houseKeeping
                </Typography>
                <Typography sx={{ color: 'rgba(174, 174, 174, 1)' }} variant="body2">
                  car valet
                </Typography>
              </Box>

            </Box>

          </Stack>
        </Box>
        <Divider sx={{ mb: 2, mt: 2 }} />

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: 'text.primary',
              }}
            >
              Internal Notes
            </Typography>
            <IconButton
              size="small"
              onClick={() => setEditNotes(!editNotes)}
              sx={{ color: 'primary.main' }}
            >
              <EditIcon sx={{ fontSize: '1rem' }} />
            </IconButton>
          </Box>

          {editNotes ? (
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Add note..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              variant="outlined"
              size="small"
            />
          ) : (
            <Paper variant="outlined" sx={{ p: 1.5, bgcolor: '#f9fafb', minHeight: '60px' }}>
              <Typography variant="body2" sx={{ color: notes ? 'text.primary' : 'text.secondary' }}>
                {notes || 'No Note Added yet'}
              </Typography>
            </Paper>
          )}
        </Box>

        <Box
          sx={{
            p: 2.5,
            display: 'flex',
            gap: 1.5,
            justifyContent: 'space-evenly',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(26, 120, 242, 1)',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1,
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: '#1d4ed8',
              },
            }}
            onClick={() => handleStatusChange('Onboarded')}
          >
            Onboard
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ef4444',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1,
              borderRadius: '100px',
              '&:hover': {
                backgroundColor: '#dc2626',
              },
            }}
            onClick={() => handleStatusChange('Rejected')}
          >
            Reject
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Modal;
