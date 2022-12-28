import * as React from 'react';
import  { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieContext from "../MovieContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl , InputLabel , Input , FormHelperText} from '@mui/material';
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display:"block",
  p: 4,
};

export default function BookingModal() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { shows } = useContext(MovieContext);
  const [show, setShow] = useState();
  console.log(shows);
  useEffect(() => {
    const id = parseInt(location.pathname.substr(1));

    const movie = shows.filter((mov) => {
      console.log(mov.show.id === id);
      return mov.show.id === id;
    });
    setShow(movie[0]);
    console.log("show" , show , movie[0]);
  }, [show]);
  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>Book Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
         {show != undefined ? <div>
           <FormControl  style={{paddingBottom:"8px" }}>
                   <InputLabel htmlFor="my-input">Name</InputLabel>
                   <Input id="my-input" aria-describedby="my-helper-text" value={show.show.name} />
           </FormControl>
           <FormControl style={{paddingBottom:"8px" }}>
                   <InputLabel htmlFor="my-input">Runtime</InputLabel>
                   <Input id="my-input" aria-describedby="my-helper-text"  value={show.show.runtime}/>
           </FormControl>
           <FormControl style={{paddingBottom:"8px" }}>
                   <InputLabel htmlFor="my-input">Language</InputLabel>
                   <Input id="my-input" aria-describedby="my-helper-text"value={show.show.language} />
           </FormControl>
           <FormControl style={{paddingBottom:"8px" }}>
                   <InputLabel htmlFor="my-input">Email address</InputLabel>
                   <Input id="my-input" aria-describedby="my-helper-text" />
                   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
           </FormControl>
           <FormControl style={{paddingBottom:"8px" }}>
                   <InputLabel htmlFor="my-input"></InputLabel>
                  
                   <Link to={`/Completed`}>Book now</Link>
           </FormControl> </div>: null
           }
         
        </Box>
      </Modal>
    </div>
  );
}
