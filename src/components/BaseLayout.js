import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
import Password from './password/password';
import More from './password/more';

export default function BaseLayout() {
   const location = useLocation();
   const [authenticated, setAuthenticated] = useState(false); // Add authentication state
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      console.log(oppositeOfCurrentDarkMode);
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route path="/password" element={<Password setAuthenticated={setAuthenticated} />} />
                  <Route path="/more" element={authenticated ? <More /> : <Navigate to="/password" />} /> {/* Conditionally render the route */}
                  {singlePage ? <Route path="*" element={<SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} />} /> : <Route path="*" element={<MultiPageRoutes />} />}
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'} fontSize={'0.8rem'}>
                  <p>created by : <a href={'https://github.com/VnCi23'}>Vince Christian Gaurino</a> &copy; 2025</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}