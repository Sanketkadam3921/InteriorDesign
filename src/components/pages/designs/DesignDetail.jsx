import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Breadcrumbs, Link } from '@mui/material';
import { ArrowBack, Favorite, Share, ShoppingCart } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

export default function DesignDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock design data - in real app, this would come from API
    const design = {
        id: parseInt(id),
        title: 'Modern Minimalist Living Room',
        category: 'living',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Clean lines and neutral colors create a serene living space that promotes relaxation and comfort.',
        longDescription: 'This modern minimalist living room design focuses on simplicity, functionality, and natural light. The design incorporates clean geometric lines, neutral color palette, and carefully selected furniture pieces that serve both aesthetic and practical purposes. The space features large windows to maximize natural light, built-in storage solutions to maintain the minimalist aesthetic, and carefully curated decor items that add personality without clutter.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
        ],
        features: [
            'Neutral Color Palette',
            'Clean Geometric Lines',
            'Built-in Storage Solutions',
            'Natural Light Maximization',
            'Minimalist Furniture Selection',
            'Functional Layout Design'
        ],
        specifications: {
            area: '300 sq ft',
            style: 'Modern Minimalist',
            colorScheme: 'Neutral',
            materials: 'Wood, Metal, Glass',
            lighting: 'Natural + LED',
            furniture: 'Built-in + Modular'
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link
                    color="inherit"
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    sx={{ cursor: 'pointer' }}
                >
                    Home
                </Link>
                <Link
                    color="inherit"
                    href="/designs"
                    onClick={(e) => { e.preventDefault(); navigate('/designs'); }}
                    sx={{ cursor: 'pointer' }}
                >
                    Designs
                </Link>
                <Typography color="text.primary">{design.title}</Typography>
            </Breadcrumbs>

            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate('/designs')}
                sx={{ mb: 3 }}
            >
                Back to Designs
            </Button>

            {/* Design Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {design.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <Chip label={design.style} color="primary" />
                    <Chip label={design.price} variant="outlined" color="secondary" />
                </Box>
            </Box>

            {/* Main Image */}
            <Card sx={{ mb: 4 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={design.image}
                    alt={design.title}
                />
            </Card>

            {/* Design Details Grid */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        Design Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {design.description}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {design.longDescription}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Design Specifications
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Area
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.area}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Style
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.style}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Color Scheme
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.colorScheme}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Materials
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.materials}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Lighting
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.lighting}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Furniture
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.furniture}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Features */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Key Features
                </Typography>
                <Grid container spacing={2}>
                    {design.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="body1">
                                        {feature}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Gallery */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Design Gallery
                </Typography>
                <Grid container spacing={2}>
                    {design.images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image}
                                    alt={`${design.title} - Image ${index + 1}`}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCart />}
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4 }}
                >
                    Get This Design
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Favorite />}
                >
                    Save to Favorites
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Share />}
                >
                    Share
                </Button>
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Want to customize this design?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    We can adapt this design to fit your specific space and requirements.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{ px: 4 }}
                >
                    Request Customization
                </Button>
            </Box>
        </Container>
    );
}

