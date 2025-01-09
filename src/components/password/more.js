import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

export default function More() {
    return (
        <Box component="section" sx={{ width: '100%'}}>
            <Container sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: { md: 4, xs: 10 } }}>
                <Grid container spacing={2} sx={{ width: { xl: '80%', sm: '85%', xs: '90%' }, mx: 'auto', mt: 4, flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', alignItems: { lg: 'stretch', md: 'center' } }}>
                    <Grid item md={6} xs={12}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0 0', objectFit: 'cover' }} src={require('../../img/m3.png')} alt="billboard" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper sx={{ p: { md: 4, xs: 2 }, bgcolor: 'grey.100', color: 'text.secondary', borderRadius: 1, height: '100%' }}>
                            <Typography variant="h3" sx={{ fontSize: { md: '1.5rem', xs: '1.5rem' }, fontWeight: 'fontWeightBold', color: 'text.primary' }}>
                                Lorem ipsum dolor sit amet consectetur
                            </Typography>
                            <Typography variant="h3" fontSize={'1rem'} sx={{ mt: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga nobis tempora possimus ullam!
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ width: { xl: '80%', sm: '85%', xs: '90%' }, mx: 'auto', mt: 6, flexDirection: { md: 'row', xs: 'column-reverse' }, justifyContent: 'center', alignItems: { lg: 'stretch', md: 'center' } }}>
                    <Grid item md={6} xs={12}>
                        <Paper sx={{ p: { md: 4, xs: 2 }, bgcolor: 'grey.100', color: 'text.secondary', borderRadius: 1, height: '100%' }}>
                        <Typography variant="h3" sx={{ fontSize: { md: '1.5rem', xs: '1.5rem' }, fontWeight: 'fontWeightBold', color: 'text.primary' }}>
                        Lorem ipsum dolor sit amet consectetur
                            </Typography>
                            <Typography variant="h3" fontSize={'1rem'} sx={{ mt: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga nobis tempora possimus ullam!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0 0', objectFit: 'cover' }} src={require('../../img/m2.png')} alt="billboard" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ width: { xl: '80%', sm: '85%', xs: '90%' }, mx: 'auto', mt: 4, flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', alignItems: { lg: 'stretch', md: 'center' } }}>
                    <Grid item md={6} xs={12}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0 0', objectFit: 'cover' }} src={require('../../img/m1.png')} alt="billboard" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper sx={{ p: { md: 4, xs: 2 }, bgcolor: 'grey.100', color: 'text.secondary', borderRadius: 1, height: '100%' }}>
                        <Typography variant="h3" sx={{ fontSize: { md: '1.5rem', xs: '1.5rem' }, fontWeight: 'fontWeightBold', color: 'text.primary' }}>
                        Lorem ipsum dolor sit amet consectetur
                            </Typography>
                            <Typography variant="h3" fontSize={'1rem'} sx={{ mt: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga nobis tempora possimus ullam!
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ width: { xl: '80%', sm: '85%', xs: '90%' }, mx: 'auto', mt: 6, flexDirection: { md: 'row', xs: 'column-reverse' }, justifyContent: 'center', alignItems: { lg: 'stretch', md: 'center' } }}>
                    <Grid item md={6} xs={12}>
                        <Paper sx={{ p: { md: 4, xs: 2 }, bgcolor: 'grey.100', color: 'text.secondary', borderRadius: 1, height: '100%' }}>
                        <Typography variant="h3" sx={{ fontSize: { md: '1.5rem', xs: '1.5rem' }, fontWeight: 'fontWeightBold', color: 'text.primary' }}>
                        Lorem ipsum dolor sit amet consectetur
                            </Typography>
                            <Typography variant="h3" fontSize={'1rem'} sx={{ mt: 4 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga nobis tempora possimus ullam!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img style={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0 0', objectFit: 'cover' }} src={require('../../img/m2.png')} alt="billboard" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}