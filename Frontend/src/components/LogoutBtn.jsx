import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

// Define custom styled components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  backdropFilter: 'blur(8px)',
  backgroundColor: 'transparent', // Transparent to allow gradient effect
  '& .MuiPaper-root': {
    background: 'linear-gradient(#6223a96d, rgba(16, 108, 221, 0.405), #232ca96d, #6223a96d)', // Gradient background
    borderRadius: 16, // Increased border radius
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
  },
}));

const StyledDialogTitle = styled(Button)(({ theme }) => ({
  color: 'lightGreen',
  fontFamily: 'sans-serif',
  fontSize: '2rem',
  fontWeight: 'bold',
  textTransform: 'none',
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#2196F3'), // Contrast text based on primary color
  backgroundColor: '#ff4d4f', // Reddish color for logout button
  '&:hover': {
    backgroundColor: '#f5222d', // Darker shade on hover
  },
}));

const CancelButton = styled(Button)(({ theme }) => ({
  color: 'rgb(5, 4, 28)', // Contrast text based on primary color
  backgroundColor: 'rgb(164, 163, 194)', // Reddish color for logout button
  '&:hover': {
    backgroundColor: 'rgb(82, 81, 112)', // Darker shade on hover
  },
}));

const StyledDialogContentText = styled(DialogContentText)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Arial',
  fontWeight: 400,
  textTransform: 'none', // Ensure text is not transformed to uppercase
  fontSize: '1.3rem',
}));

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      const clearCookie = async (name) => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      };
      await clearCookie('userdetails');
      window.location.href = 'https://harmonix-play.vercel.app/login';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <button id="logout-btn" className="log-in-out-btns" onClick={handleClickOpen}>
        <i className="fa-solid fa-right-from-bracket" id="logout-icon"></i>&nbsp;Logout
      </button>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledDialogTitle id="alert-dialog-title">
          {"Logout Confirmation.."}
        </StyledDialogTitle>
        <DialogContent>
          <StyledDialogContentText id="alert-dialog-description">
            You are about to logout. Are you sure?<br /><br />
            Note: To abort the permissions given during authorization, visit <a href='https://www.spotify.com/in-en/account/apps/' target="_blank" rel="noopener noreferrer" style={{ color: "#e4a81db4", textDecoration: "underline" }}>Spotify Account</a>
          </StyledDialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose} color="primary">
            Cancel
          </CancelButton>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </DialogActions>
      </StyledDialog>
    </React.Fragment>
  );
}
