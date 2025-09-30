import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Box,
    useMediaQuery,
    useTheme,
    Container,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/LogoKalaKruti.png";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [designsMenuOpen, setDesignsMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        {
            label: "Designs",
            path: "/designs",
            dropdown: [
                { label: "Modular Kitchen", path: "/designs/kitchen" },
                { label: "Bedroom", path: "/designs/bedroom" },
                { label: "Living Room", path: "/designs/living-room" },
            ],
        },
        { label: "Contact", path: "/contact" },
    ];

    const drawer = (
        <Box sx={{ width: 250 }}>
            {/* LOGO + TEXT inside Drawer */}
            <Box
                component={Link}
                to="/"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    p: 2,
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                }}
                onClick={handleDrawerToggle}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Kalakruti Logo"
                    sx={{
                        height: 80,
                        width: 80,
                        objectFit: "contain",
                        backgroundColor: "transparent",
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                />

                {/* Text next to logo */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        ml: 2,
                    }}
                >
                    <Typography
                        sx={{
                            color: '#505B5F',
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            letterSpacing: '0.1em',
                            fontFamily: 'sans-serif',
                            lineHeight: 1,
                            transition: 'color 0.3s ease',
                        }}
                    >
                        KALAKRUTI
                    </Typography>
                    <Typography
                        sx={{
                            color: '#505B5F',
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            fontFamily: 'sans-serif',
                            lineHeight: 1,
                            mt: 0.2,
                        }}
                    >
                        STUDIO
                    </Typography>
                </Box>
            </Box>

            <List>
                {navigationItems.map((item) => (
                    <Box key={item.label}>
                        {item.dropdown ? (
                            <>
                                <ListItem
                                    button
                                    onClick={() =>
                                        setAnchorEl(anchorEl === item.label ? null : item.label)
                                    }
                                    sx={{
                                        color: location.pathname.startsWith(item.path)
                                            ? theme.palette.primary.main
                                            : "inherit",
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                                {anchorEl === item.label &&
                                    item.dropdown.map((subItem) => (
                                        <ListItem
                                            key={subItem.label}
                                            component={Link}
                                            to={subItem.path}
                                            onClick={handleDrawerToggle}
                                            sx={{
                                                pl: 4,
                                                color:
                                                    location.pathname === subItem.path
                                                        ? theme.palette.primary.main
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: theme.palette.action.hover,
                                                },
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
                                    color:
                                        location.pathname === item.path
                                            ? theme.palette.primary.main
                                            : "inherit",
                                    "&:hover": {
                                        backgroundColor: theme.palette.action.hover,
                                    },
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
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: "white",
                color: "black",
                borderBottom: `1px solid ${theme.palette.divider}`,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1300, // Higher z-index to ensure it stays on top
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: "space-between", minHeight: "100px !important", py: 1 }}>
                    {/* LOGO + TEXT in main Toolbar */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.02)",
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Kalakruti Logo"
                            sx={{
                                height: 100,
                                width: 100,
                                objectFit: "contain",
                                backgroundColor: "transparent",
                                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                                transition: "transform 0.2s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />

                        {/* Text next to logo */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', // center the content
                                ml: 0, // remove left margin if you want perfect centering
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#505B5F',
                                    fontWeight: 'bold',
                                    fontSize: '2.2rem',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'sans-serif',
                                    lineHeight: 1,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                KALAKRUTI
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#505B5F',
                                    fontSize: '1rem',
                                    letterSpacing: '0.2em',
                                    fontFamily: 'sans-serif',
                                    lineHeight: 1,
                                    mt: 0.2,
                                }}
                            >
                                STUDIO
                            </Typography>
                        </Box>

                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationItems.map((item) =>
                                    item.dropdown ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger onMouseEnter={handleMenuOpen}>
                                                {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                anchorEl={anchorEl}
                                                open={designsMenuOpen}
                                                onClose={handleMenuClose}
                                            >
                                                {item.dropdown.map((subItem) => (
                                                    <NavigationMenuLink
                                                        key={subItem.label}
                                                        to={subItem.path}
                                                        asChild
                                                        onClick={handleMenuClose}
                                                    >
                                                        {subItem.label}
                                                    </NavigationMenuLink>
                                                ))}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink
                                                to={item.path}
                                                sx={navigationMenuTriggerStyle(theme)}
                                            >
                                                {item.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
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
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 280,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
