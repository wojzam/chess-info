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
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';

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
                {text: "Znane Partie", href: "/"},
            ]
        },
        {
            text: "Zadania",
            icon: <ExtensionIcon/>,
            submenu: [
                {text: "Dzisiejsze zadanie", href: "/"},
                {text: "Obecne zadania", href: "/"},
                {text: "Rozpocznij nowe", href: "/"},
            ]
        },
        {
            text: "Kurs",
            icon: <ContentPasteIcon/>,
            submenu: [
                {text: "Zaplanowane spotkania", href: "/"},
                {text: "Nowe spotkanie", href: "/new-meeting"},
                {text: "Historia spotkań", href: "/"},
            ]
        },
        {
            text: "Dla Instruktorów",
            icon: <PeopleIcon/>,
            submenu: [
                {text: "Zaplanowane kursy", href: "/"},
                {text: "Prośby kursu", href: "/"},
                {text: "Zgłoś kandydaturę", href: "/"},
                {text: "Wymagania", href: "/"},
            ]
        },
        {
            text: "Inne",
            icon: <MoreHorizIcon/>,
            submenu: [
                {text: "FAQ", href: "/"},
                {text: "Kontakt", href: "/"},
                {text: "Regulamin", href: "/"},
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
                <Toolbar component="a" href="/" sx={{
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px',
                    fontWeight: 'lighter',
                    fontSize: '24px',
                    textDecoration: 'none',
                }}>
                    chess-info.com
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
                            sx={{marginBottom: '10px'}}>
                        Logowanie
                    </Button>
                    <Button variant="contained" component="a" href="/signup" fullWidth>
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
                    <a href="/" style={{color: 'white', textDecoration: 'none'}}>
                        chess-info.com
                    </a>
                    <IconButton color="inherit" onClick={toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            )}
        </Box>
    );
}