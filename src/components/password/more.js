import React from 'react';
import { Box } from '@mui/material';

export default function More() {
    return (
        <Box className="container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh', margin: '3rem', overflow: 'hidden', transform: 'skew(5deg)' }}>
            {['Plotting', 'Angry', 'Curious', 'Prowling', 'Sleepy'].map((title, index) => (
                <Box key={index} className="card" sx={{ flex: 1, transition: 'all 1s ease-in-out', height: '75vmin', position: 'relative', marginRight: index !== 4 ? '1em' : 0, '&:hover': { flexGrow: 10, '& img': { filter: 'grayscale(0)' }, '& .card__head': { textAlign: 'center', top: 'calc(100% - 2em)', color: 'white', fontSize: '2em', transform: 'rotate(0deg) skew(-5deg)' } } }}>
                    <img src={`https://upload.wikimedia.org/wikipedia/commons/${index === 0 ? 'd/d6/Cat_plotting_something_evil%21.jpg' : index === 1 ? 'thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg' : index === 2 ? 'thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG' : index === 3 ? 'thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg' : 'thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg'}`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 1s ease-in-out' }} />
                    <Box className="card__head" sx={{ color: 'black', background: 'rgba(0, 110, 255, 0.72)', padding: '0.5em', transform: 'rotate(-90deg)', transformOrigin: '0% 0%', transition: 'all 0.5s ease-in-out', minWidth: '100%', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, fontSize: '1em', whiteSpace: 'nowrap' }}>{title}</Box>
                </Box>
            ))}
        </Box>
    );
}