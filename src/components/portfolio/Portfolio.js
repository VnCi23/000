import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import { motion } from "framer-motion"; // <-- Add this import

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef} marginTop={'4rem'} px={2}>
            <Grid container display={'flex'} justifyContent={'center'} spacing={3}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <motion.div
                           initial={{ opacity: 0, y: 40 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: index * 0.2 }}
                       >
                           <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                       </motion.div>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};