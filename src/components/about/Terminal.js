import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={{xs: '80%', md: '50%'}} marginTop={'2rem'} borderRadius={'0.5rem'} mb={'1rem'}>
         <Box sx={{backgroundColor: '#00209d'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#121212'}} fontSize={'1.2rem'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;