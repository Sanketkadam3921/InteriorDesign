import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    IconButton,
    Button,
    useTheme
} from '@mui/material';
import {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn,
    YouTube,
    Pinterest,
    Phone,
    Email
} from '@mui/icons-material';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ mt: 'auto' }}>
            {/* "Your dream home is just a click away" Section */}
            <Box
                sx={{
                    backgroundColor: theme.palette.background.default,
                    py: 8,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3rem' },
                                mb: 3,
                                maxWidth: '600px',
                            }}
                        >
                            Your dream home is just a click away
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: 2,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            GET STARTED
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Main Footer */}
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                    py: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Logo and Social Media */}
                        <Grid item xs={12} md={3}>
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontWeight: 'bold',
                                        fontSize: '1.8rem',
                                        letterSpacing: '0.1em',
                                        mb: 1,
                                    }}
                                >
                                    KALAKRUTI
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '0.9rem',
                                        letterSpacing: '0.2em',
                                        opacity: 0.8,
                                    }}
                                >
                                    STUDIO
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Twitter />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <YouTube />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Pinterest />
                                </IconButton>
                            </Box>

                        </Grid>

                        {/* OFFERINGS */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            >
                                OFFERINGS
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Interiors
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Furnishings
                                </Link>
                            </Box>
                        </Grid>

                        {/* GET INSPIRED */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            >
                                GET INSPIRED
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Link
                                    href="/designs"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Design Ideas
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Magazine
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    KalaKruti TV
                                </Link>
                            </Box>
                        </Grid>

                        {/* COMPANY */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            >
                                COMPANY
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Refer a friend
                                </Link>
                                <Link
                                    href="/how-it-works"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    How it works
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Policies
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Terms and conditions
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    About us
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        opacity: 0.8,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Store Locator
                                </Link>
                            </Box>
                        </Grid>

                        {/* CONTACT US */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            >
                                CONTACT US
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Phone sx={{ fontSize: '1rem', opacity: 0.8 }} />
                                    <Link
                                        href="tel:+91-9876543210"
                                        sx={{
                                            color: theme.palette.secondary.contrastText,
                                            textDecoration: 'none',
                                            fontSize: '0.85rem',
                                            opacity: 0.8,
                                            '&:hover': { opacity: 1, textDecoration: 'underline' }
                                        }}
                                    >
                                        +91-9876543210
                                    </Link>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Email sx={{ fontSize: '1rem', opacity: 0.8 }} />
                                    <Link
                                        href="mailto:care@kalakruti.com"
                                        sx={{
                                            color: theme.palette.secondary.contrastText,
                                            textDecoration: 'none',
                                            fontSize: '0.85rem',
                                            opacity: 0.8,
                                            '&:hover': { opacity: 1, textDecoration: 'underline' }
                                        }}
                                    >
                                        care@kalakruti.com
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Copyright */}
                    <Box
                        sx={{
                            borderTop: 1,
                            borderColor: 'rgba(255,255,255,0.2)',
                            mt: 4,
                            pt: 4,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                opacity: 0.8,
                                fontSize: '0.8rem',
                            }}
                        >
                            © 2024 KalaKruti. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

