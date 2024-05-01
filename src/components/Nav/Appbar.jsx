import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Main from '../main/mainPage';
import CardMedia from '@mui/material/CardMedia';

import { Tab } from '@mui/material';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';





const drawerWidth = 240;
const navItems = [
  ["1", 'Home'],
  ["2", 'About'],
  ["3", 'Services'],
  ["4", 'Pages'],
  ["5", 'Blogs'],
  ["6", 'Contact us']
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component="div"
        fontSize={30}
        fontFamily={"Oswald"}
        fontWeiight={700}
      >
        The Consumer Magazine
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" >
        <Box >
          <Toolbar sx={{ maxWidth: { md: "100%", lg: "93%", xl: "75%" }, m: "auto" }}>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, py: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ mr: 1 }}>

                  <CardMedia
                    component="img"
                    src="logo.webp"
                    alt="The Consumer Magazine"
                    loading="lazy"
                    sx={{ width: { xs: "40px", md: "90px" } }}
                  />
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' } }}

                >
                  <MenuIcon size='large' />
                </IconButton>

              </Box>


              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: { sm: 30, md: 42 } }}
                  fontFamily={"Oswald"}
                  fontWeiight={700}

                >
                  The Consumer Magazine
                </Typography>
                <Typography fontFamily={"Oswald"} color={"#53B8E2"} fontSize={18} textTransform={"uppercase"} fontWeight={600}>Finding the highest quality and most affordable products for you!</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", alignItems: "space-between" }}>
              <TabContext value={value} >
                <Box>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#ffffff">
                    {navItems.map((item) => (
                      <Tab key={item[0]} label={item[1]} value={item[0]} />
                    ))}
                  </TabList>
                </Box>

              </TabContext>

              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))} */}
            </Box>
          </Toolbar>
        </Box>
      </AppBar >
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <TabContext value={value}>
          <TabPanel sx={{ padding: "0" }} value="1"><Main /></TabPanel>
          <TabPanel sx={{ padding: "0" }} value="2">Item Two</TabPanel>
          <TabPanel sx={{ padding: "0" }} value="3">Item Three</TabPanel>
          <TabPanel sx={{ padding: "0" }} value="4">Item next</TabPanel>
          <TabPanel sx={{ padding: "0" }} value="5">Item Two</TabPanel>
          <TabPanel sx={{ padding: "0" }} value="6">Item Three</TabPanel>
        </TabContext>

      </Box>
    </Box >
  );
}


export default DrawerAppBar;