import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import PopupWindow from './PopupWindow'; // Import the PopupWindow component

const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: theme.zIndex.speedDial,
  width: theme.spacing(5), // Adjust the width to make the button smaller
  height: theme.spacing(5), // Adjust the height to make the button smaller
}));

function CircularButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledFab color="primary" aria-label="info" onClick={handleOpen}>
        <InfoIcon />
      </StyledFab>
      <PopupWindow open={open} handleClose={handleClose} />
    </div>
  );
}

export default CircularButton;

// TODO: On pressing this button a PopupWindow is opened and you should have a legend there, from a sidebar, implement this