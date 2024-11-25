import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Layout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(!isMobile);
    const drawerWidth = 240;

    const StyledListItemText = (props) => (
        <ListItemText
            {...props}
            primaryTypographyProps={{
                style: {
                    fontSize: '20px',
                    color: 'white',
                },
            }}
        />
    );

    const menuItems = [
        {
            text: "Nauka",
            icon: <SchoolIcon/>,
            submenu: [
                {text: "Losowa Zagadka", href: "/puzzle"},
                {text: "Nauka Otwarć", href: "/"},
            ]
        },
        {
            text: "Zadania",
            icon: <ExtensionIcon/>,
            submenu: [
                {text: "Dzisiejsze zadanie", href: "/daily-task"},
                {text: "Moje zadania", href: "/tasks"},
            ]
        },
        {
            text: "Kurs",
            icon: <ContentPasteIcon/>,
            submenu: [
                {text: "Zaplanowane spotkania", href: "/user-courses"},
                {text: "Nowe spotkanie", href: "/new-meeting"},
                {text: "Historia spotkań", href: "/course-history"},
            ]
        },
        {
            text: "Dla Instruktorów",
            icon: <PeopleIcon/>,
            submenu: [
                {text: "Kursy", href: "/instructor-courses"},
                {text: "Zgłoś kandydaturę", href: "/instructor-application"},
            ]
        },
        {
            text: "Inne",
            icon: <MoreHorizIcon/>,
            submenu: [
                {text: "FAQ", href: "/faq"},
                {text: "Kontakt", href: "/contact"},
                {text: "Regulamin", href: "/terms"},
            ]
        },
    ];

    const [openSubmenus, setOpenSubmenus] = useState(Array(menuItems.length).fill(false));

    const toggleSubmenu = (index) => {
        setOpenSubmenus((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setDrawerOpen(!isMobile);
    }, [isMobile]);

    return (
        <Box sx={{display: 'flex', position: 'relative', minHeight: '100vh'}}>
            <Drawer
                variant={isMobile ? 'temporary' : 'persistent'}
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    },
                }}
            >
                <Toolbar sx={{
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: 'black',
                    padding: '10px',
                }}>
                    {isMobile ?
                        <Box display="flex" justifyContent="flex-start" width='100%'>
                            <IconButton color="secondary" onClick={toggleDrawer}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                        : <Typography component="a" href="/" sx={{
                            color: 'white',
                            fontWeight: 'lighter',
                            fontSize: '24px',
                            textDecoration: 'none'
                        }}>
                            chess-info.com
                        </Typography>
                    }
                </Toolbar>

                <List sx={{width: '100%', flexGrow: 1, pt: 0}}>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <ListItemButton onClick={() => toggleSubmenu(index)}>
                                <ListItemIcon style={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <StyledListItemText primary={item.text}/>
                            </ListItemButton>
                            {item.submenu && openSubmenus[index] && (
                                <List sx={{paddingLeft: 4, bgcolor: 'background.paperDarker'}}>
                                    {item.submenu.map((subitem, subindex) => (
                                        <ListItemButton key={subindex} component="a" href={subitem.href}>
                                            <StyledListItemText primary={subitem.text}/>
                                        </ListItemButton>
                                    ))}
                                </List>
                            )}
                        </div>
                    ))}
                </List>
                <Divider/>
                <Box sx={{
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: "100%"
                }}>
                    <Button variant="contained" component="a" href="/login" fullWidth color="secondary"
                            sx={{marginBottom: '10px', fontSize: '18px'}}>
                        Logowanie
                    </Button>
                    <Button variant="contained" component="a" href="/signup" fullWidth
                            sx={{fontSize: '18px'}}>
                        Rejestracja
                    </Button>
                </Box>
            </Drawer>
            <Box
                component="main"
                className="content"
                sx={{
                    flexGrow: 1,
                    display: 'flex'
                }}
            >
                <Outlet/>
            </Box>

            {isMobile && (
                <Toolbar
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                        backgroundColor: 'black',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 16px',
                    }}
                >
                    <IconButton color="inherit" onClick={toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <a href="/"
                       style={{color: 'white', textDecoration: 'none', fontWeight: 'lighter', fontSize: '24px',}}>
                        chess-info.com
                    </a>
                    <Box width="5vw"></Box>
                </Toolbar>
            )}
        </Box>
    );
}