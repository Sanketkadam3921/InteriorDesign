import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // For Designs dropdown
    const [designsMenuOpen, setDesignsMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setDesignsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setDesignsMenuOpen(false);
    };

    const navigationItems = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        {
            label: 'Designs',
            path: '/designs',
            dropdown: [
                { label: 'Modular Kitchen', path: '/designs/kitchen' },
                { label: 'Bedroom', path: '/designs/bedroom' },
                { label: 'Living Room', path: '/designs/living-room' },
            ]
        },
        { label: 'Contact', path: '/contact' },
    ];

    const drawer = (
        <Box sx={{ width: 250 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography variant="h6">KalaKruti</Typography>
                <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
            </Box>
            <List>
                {navigationItems.map((item) => (
                    <Box key={item.label}>
                        {item.dropdown ? (
                            <>
                                <ListItem
                                    button
                                    onClick={() => setAnchorEl(anchorEl === item.label ? null : item.label)}
                                    sx={{
                                        color: location.pathname.startsWith(item.path) ? theme.palette.primary.main : 'inherit',
                                        '&:hover': { backgroundColor: theme.palette.action.hover },
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                                {anchorEl === item.label && item.dropdown.map((subItem) => (
                                    <ListItem
                                        key={subItem.label}
                                        component={Link}
                                        to={subItem.path}
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            pl: 4,
                                            color: location.pathname === subItem.path ? theme.palette.primary.main : 'inherit',
                                            '&:hover': { backgroundColor: theme.palette.action.hover },
                                        }}
                                    >
                                        <ListItemText primary={subItem.label} />
                                    </ListItem>
                                ))}
                            </>
                        ) : (
                            <ListItem
                                component={Link}
                                to={item.path}
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                                    '&:hover': { backgroundColor: theme.palette.action.hover },
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        )}
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'black' }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                        KalaKruti
                    </Typography>

                    {isMobile ? (
                        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {navigationItems.map((item) => (
                                <Box key={item.label}>
                                    {item.dropdown ? (
                                        <>
                                            <Button
                                                color="inherit"
                                                onMouseEnter={handleMenuOpen}
                                                sx={{
                                                    color: location.pathname.startsWith(item.path) ? theme.palette.primary.main : 'inherit',
                                                    fontWeight: location.pathname.startsWith(item.path) ? 'bold' : 'normal',
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={designsMenuOpen}
                                                onClose={handleMenuClose}
                                                MenuListProps={{
                                                    onMouseEnter: () => setDesignsMenuOpen(true),
                                                    onMouseLeave: handleMenuClose,
                                                    sx: { pointerEvents: 'auto' }
                                                }}
                                                sx={{
                                                    pointerEvents: 'none',
                                                    '& .MuiPaper-root': {
                                                        pointerEvents: 'auto',
                                                    }
                                                }}
                                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <MenuItem
                                                        key={subItem.label}
                                                        component={Link}
                                                        to={subItem.path}
                                                        onClick={handleMenuClose}
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: theme.palette.action.hover,
                                                            }
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    ) : (
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            color="inherit"
                                            sx={{
                                                color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                                                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
