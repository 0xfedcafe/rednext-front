import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: theme.zIndex.speedDial,
  width: theme.spacing(5), // Adjust the width to make the button smaller
  height: theme.spacing(5), // Adjust the height to make the button smaller
}));

const PopupContent = styled('div')(({ theme }) => ({
  width: '60vw', // Set the width to 60% of the viewport width
  height: '60vh', // Set the height to 60% of the viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function PopupWindow() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledFab color="primary" aria-label="open-popup" onClick={handleOpen}>
        ⓘ 
      </StyledFab>
      <Dialog open={open} onClose={handleClose}>
        <PopupContent>
          {/* Content of your popup window */}
          Your Popup Content Goes Here
        </PopupContent>
      </Dialog>
    </div>
  );
}

export default PopupWindow;
