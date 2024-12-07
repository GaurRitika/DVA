// import React from 'react';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Divider,
//   Box,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import PersonIcon from '@mui/icons-material/Person';
// import { motion } from 'framer-motion';

// const drawerWidth = 280; // Increased width of the sidebar

// const Sidebar = ({ mobileOpen, onDrawerToggle }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     { text: 'Home', icon: <HomeIcon />, path: '/' },
//     { text: 'Dosha Analysis', icon: <AssessmentIcon />, path: '/dosha-analysis' },
//     { text: 'Personal Consultation', icon: <PersonIcon />, path: '/consultation' },
//   ];

//   const drawer = (
//     <>
//       <Toolbar />
//       <Divider sx={{ borderColor: '#8D6E63' }} />
//       <List>
//         {menuItems.map((item) => (
//           <motion.div
//             key={item.text}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <ListItem
//               button
//               onClick={() => navigate(item.path)}
//               selected={location.pathname === item.path}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: '#8D6E63',
//                   transform: 'scale(1.05)',
//                   transition: 'background-color 0.4s ease, transform 0.4s ease',
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ color: location.pathname === item.path ? '#2E7D32' : '#fff' }}>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 sx={{
//                   fontWeight: location.pathname === item.path ? 'bold' : 'normal',
//                   color: '#fff',
//                 }}
//               />
//             </ListItem>
//           </motion.div>
//         ))}
//       </List>
//     </>
//   );

//   return (
//     <Box
//       component="nav"
//       sx={{
//         width: { sm: drawerWidth },
//         flexShrink: { sm: 0 },
//         backgroundColor: '#1F2937',
//         height: '100vh',
//       }}
//     >
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={onDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: drawerWidth,
//             backgroundColor: '#1F2937',
//             color: '#fff',
//             transition: 'background-color 0.3s ease',
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>

//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           '& .MuiDrawer-paper': {
//             boxSizing: 'border-box',
//             width: drawerWidth,
//             backgroundColor: '#1F2937',
//             color: '#fff',
//             transition: 'background-color 0.3s ease',
//           },
//         }}
//         open
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//   );
// };

// export default Sidebar;


import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import SpaIcon from '@mui/icons-material/Spa';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import EcoIcon from '@mui/icons-material/Eco';
import { motion } from 'framer-motion';

const drawerWidth = 300;

const Sidebar = ({ mobileOpen, onDrawerToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/dashboard' }, // Changed from '/'
    { text: 'Dosha Analysis', icon: <AssessmentIcon />, path: '/dashboard/dosha-analysis' },
    { text: 'Personal Consultation', icon: <PersonIcon />, path: '/dashboard/consultation' },
    { text: 'Herbal Remedies', icon: <LocalHospitalIcon />, path: '/dashboard/herbal-remedy' },
  ];
  

  const drawer = (
    <Box sx={{ height: '100%', background: 'linear-gradient(135deg, #4A6741 0%, #2F442A 100%)' }}>
      <Toolbar sx={{ height: '80px' }} />
      <Box sx={{ px: 3, py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <SpaIcon sx={{ color: '#F5F1E8', fontSize: '2.5rem' }} />
            <Typography
              variant="h6"
              sx={{
                color: '#F5F1E8',
                fontFamily: 'Playfair Display',
                fontWeight: 600,
                fontSize: '1.2rem',
              }}
            >
              Ayurvedic Journey
            </Typography>
          </Box>
        </motion.div>

        <Divider sx={{ borderColor: 'rgba(245, 241, 232, 0.2)', mb: 3 }} />

        <List>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <ListItem
                button
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: '12px',
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(245, 241, 232, 0.15)',
                    '&:hover': {
                      backgroundColor: 'rgba(245, 241, 232, 0.2)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(245, 241, 232, 0.1)',
                    transform: 'translateX(8px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#F5F1E8', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: '#F5F1E8',
                      fontSize: '1.1rem',
                      fontFamily: 'Poppins',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border: 'none',
            boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;