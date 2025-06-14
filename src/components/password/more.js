import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const fadeInUp = {
    '@keyframes fadeInUp': {
        from: {
            opacity: 0,
            transform: 'translateY(40px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
};

const fadeInModal = {
    '@keyframes fadeInModal': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    '@keyframes fadeOutModal': {
        from: { opacity: 1 },
        to: { opacity: 0 },
    },
};

const images = [
    require('../../img/m3.png'),
    require('../../img/m2.png'),
    require('../../img/m1.png'),
    require('../../img/m2.png'),
    require('../../img/m3.png'),
    require('../../img/m2.png'),
    require('../../img/m1.png'),
    require('../../img/m2.png'),
    require('../../img/m3.png'),
    require('../../img/m2.png'),
    require('../../img/m1.png'),
    require('../../img/m2.png'),
    
];

const captions = [
    "Feature 1: Secure and Reliable",
    "Feature 2: Easy Integration",
    "Feature 3: User Friendly",
    "Feature 4: Fast Performance",
    "Feature 5: Modern Design",
    "Feature 6: Customizable",
    "Feature 7: 24/7 Support",
    "Feature 8: Cloud Ready",
    "Feature 9: Analytics",
    "Feature 10: Multi-Platform",
    "Feature 11: Scalable",
    "Feature 12: Trusted by Many",
];

export default function More() {
    const [openIdx, setOpenIdx] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Show modal with fade-in
    React.useEffect(() => {
        if (openIdx !== null) {
            setModalVisible(true);
        }
    }, [openIdx]);

    // Hide modal with fade-out
    const handleCloseModal = () => {
        setModalVisible(false);
        setTimeout(() => setOpenIdx(null), 250); // match fadeOut duration
    };

    return (
        <Box component="section" sx={{ width: '100%', py: { xs: 3, md: 5 } }}>
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 0.5, sm: 1.5, md: 2 },
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    sx={{
                        mx: 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {images.map((src, idx) => (
                        <Grid
                            item
                            key={idx}
                            xs={12}
                            sm={9}
                            md={7}
                            lg={6}
                            xl={5}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Box
                                component="img"
                                src={src}
                                alt={`billboard-${idx + 1}`}
                                sx={{
                                    ...fadeInUp,
                                    width: '100%',
                                    maxWidth: { xs: '100%', sm: 500, md: 650, lg: 800 },
                                    height: 'auto',
                                    borderRadius: 3,
                                    objectFit: 'cover',
                                    boxShadow: 4,
                                    opacity: 0,
                                    animation: 'fadeInUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                                    animationDelay: `${idx * 0.09}s`,
                                    transition: 'box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        boxShadow: 8,
                                        transform: 'scale(1.025)',
                                    },
                                }}
                                onClick={() => setOpenIdx(idx)}
                            />
                            <Typography
                                variant="caption"
                                align="center"
                                sx={{ mt: 0.7, color: 'text.secondary' }}
                            >
                                {captions[idx]}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                {/* Popup Modal */}
                {openIdx !== null && (
                    <Box
                        sx={{
                            ...fadeInModal,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            bgcolor: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1300,
                            animation: `${modalVisible ? 'fadeInModal' : 'fadeOutModal'} 0.25s ease`,
                            pointerEvents: modalVisible ? 'auto' : 'none',
                        }}
                        onClick={handleCloseModal}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                boxShadow: 24,
                                p: 2,
                                maxWidth: 600,
                                width: '90%',
                                outline: 'none',
                                transform: modalVisible ? 'scale(1)' : 'scale(0.98)',
                                opacity: modalVisible ? 1 : 0,
                                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <Box
                                component="img"
                                src={images[openIdx]}
                                alt={`popup-${openIdx + 1}`}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    mb: 1,
                                }}
                            />
                            <Typography
                                variant="caption"
                                align="center"
                                sx={{ display: 'block', color: 'text.secondary' }}
                            >
                                {captions[openIdx]}
                            </Typography>
                            <Button
                                onClick={handleCloseModal}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    minWidth: 0,
                                    p: 0.5,
                                    fontSize: 18,
                                }}
                            >
                                ×
                            </Button>
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
}