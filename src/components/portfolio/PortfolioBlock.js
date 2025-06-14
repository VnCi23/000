import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          border: '8px solid black', // kulay ng border
          borderRadius: '8px',         // optional: para sa rounded corners
          overflow: 'hidden',          // para hindi lumagpas ang image sa border
          mb: 3                        // tinaasan mula 2 para mas malaki ang space sa baba ng image
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', display: 'block' }}
        />
      </Box>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h1>
      <Box
        className="portfolio"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        alignItems="center"
        fontSize="1rem"
        py="2rem"
      >
        <Box p={1} border="2px solid black" borderRadius="25px">
          <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
        </Box>
        <Box p={1} border="2px solid black" borderRadius="25px">
          <IconLink link={source} title="Source" icon="fa fa-code" />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;