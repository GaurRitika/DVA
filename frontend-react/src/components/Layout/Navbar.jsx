// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import YogaIcon from '@mui/icons-material/FitnessCenter';
// import { motion } from 'framer-motion'; // Added animation library for smooth transitions

// const Navbar = ({ onMenuClick }) => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//         backgroundColor: '#1F2937',
//         boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
//         padding: '10px 20px',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={onMenuClick}
//             sx={{ display: { sm: 'none' }, fontSize: '2rem' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{
//               fontWeight: 'bold',
//               color: '#fff',
//               fontSize: '2rem',
//               letterSpacing: '1px',
//               textTransform: 'uppercase',
//               '&:hover': {
//                 color: '#8D6E63',
//                 cursor: 'pointer',
//                 transition: 'color 0.4s ease-in-out',
//               },
//             }}
//           >
//             Digital Vedic Ayurveda
//           </Typography>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <IconButton
//             color="inherit"
//             sx={{
//               display: { xs: 'none', sm: 'block' },
//               fontSize: '2rem',
//               '&:hover': {
//                 color: '#8D6E63',
//                 transform: 'rotate(360deg)',
//                 transition: 'transform 0.6s ease-in-out',
//               },
//             }}
//           >
//             <YogaIcon />
//           </IconButton>
//         </motion.div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SpaIcon from '@mui/icons-material/Spa';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { motion } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'rgba(255, 253, 250, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(193, 127, 89, 0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IconButton
            edge="start"
            onClick={onMenuClick}
            sx={{
              display: { sm: 'none' },
              color: '#4A6741',
              '&:hover': {
                background: 'rgba(74, 103, 65, 0.08)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <SpaIcon sx={{ color: '#4A6741', fontSize: '2.5rem' }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 700,
              color: '#2C3E50',
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '0.5px',
              '&:hover': {
                color: '#4A6741',
                transition: 'color 0.4s ease',
              },
            }}
          >
            {/* <div style={{display:'flex'}}>
            <div> */}
            Digital Vedic Ayurveda
            {/* </div> */}
{/* 
            <div style={{marginLeft:'100px'}}>
            Log out
            </div>
            </div> */}

          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <IconButton
            sx={{
              color: '#C17F59',
              '&:hover': {
                background: 'rgba(193, 127, 89, 0.08)',
                transform: 'rotate(180deg)',
                transition: 'all 0.6s ease',
              },
            }}
          >
            <LocalFloristIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;