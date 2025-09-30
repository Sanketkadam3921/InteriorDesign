import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    Alert,
    Snackbar
} from '@mui/material';
import { Send as SendIcon, Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationIcon } from '@mui/icons-material';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setShowSuccess(true);
        } catch (error) {
            setShowError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Phone',
            details: '+1 (555) 123-4567'
        },
        {
            icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Email',
            details: 'info@kalakruti.com'
        },
        {
            icon: <LocationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: 'Address',
            details: '123 Design Street, Creative City, CC 12345'
        }
    ];

    return (
        <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Ready to transform your space? Contact us for a consultation and let's bring your vision to life.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 4 }}>
                            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
                                Send us a Message
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Full Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            placeholder="Tell us about your project, timeline, and any specific requirements..."
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={isSubmitting}
                                            startIcon={<SendIcon />}
                                            sx={{ px: 4, py: 2 }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {contactInfo.map((info, index) => (
                                <Card key={index} sx={{ p: 3, textAlign: 'center' }}>
                                    <CardContent>
                                        <Box sx={{ mb: 2 }}>
                                            {info.icon}
                                        </Box>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            {info.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {info.details}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        {/* Additional Info */}
                        <Card sx={{ p: 3, mt: 3, backgroundColor: 'primary.main', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Consultation Hours
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Monday - Friday: 9:00 AM - 6:00 PM
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    Saturday: 10:00 AM - 4:00 PM
                                </Typography>
                                <Typography variant="body2">
                                    Sunday: By Appointment
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Success/Error Messages */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={6000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>

            <Snackbar
                open={showError}
                autoHideDuration={6000}
                onClose={() => setShowError(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowError(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to send message. Please try again.
                </Alert>
            </Snackbar>
        </Box>
    );
}