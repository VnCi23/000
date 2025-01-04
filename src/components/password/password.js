import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import selfImage from '../../img/self.png';

const InputContainer = styled('div')({
  position: 'relative',
  background: '  #025ed4',
  padding: '10px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  border: '3px solid #000',
  maxWidth: '300px',
  transition: 'all 400ms cubic-bezier(0.23, 1, 0.32, 1)',
  transformStyle: 'preserve-3d',
  transform: 'rotateX(10deg) rotateY(-10deg)',
  perspective: '1000px',
  boxShadow: '8px 8px 0 #000',
  '&:hover': {
    transform: 'rotateX(5deg) rotateY(1deg) scale(1.05)',
    boxShadow: '20px 20px 0 -5px rgb(0, 110, 255), 20px 20px 0 0 #000',
  },
  '&::before': {
    content: '"Vince Christian Gaurino"',
    position: 'absolute',
    top: '-10px',
    left: '15px',
    background: 'rgb(246, 246, 246)',
    color: '#000',
    fontWeight: 'bold',
    padding: '3px 8px',
    fontSize: '12px',
    transform: 'translateZ(50px)',
    zIndex: 4,
    border: '2px solid #000',
  },
});

const ShadowInput = styled('div')({
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0',
    bottom: '0',
    zIndex: '-1',
    transform: 'translateZ(-50px)',
    background: ' #025ed4',
});



const InputSearch = styled('input')({
  width: '100%',
  outline: 'none',
  border: '3px solid #000',
  padding: '5px',
  fontSize: '12px',
  background: ' #deb887',
  color: '#000',
  transform: 'translateZ(10px)',
  transition: 'all 400ms cubic-bezier(0.23, 1, 0.32, 1)',
  position: 'relative',
  zIndex: 3,
  letterSpacing: '-0.5px',
  '&::placeholder': {
    color: '#666',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  '&:hover, &:focus': {
    background: '#f0f0f0',
    transform: 'translateZ(20px) translateX(-5px) translateY(-5px)',
    boxShadow: '5px 5px 0 0 #000',
  },
});

export default function Password({ setAuthenticated }) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const correctPassword = 'About Vince Christian Gaurino';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      navigate('/more');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <InputContainer>
            <ShadowInput />
            <img src={selfImage} alt="description" width="50px" height="50px" />
            <InputSearch
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          {/* <Button type="submit" variant="contained" color="primary">Login</Button> */}
        </Box>
      </Box>
    </Box>
  );
}