// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material';
// import Navbar from './components/Layout/Navbar';
// import Sidebar from './components/Layout/Sidebar';
// import Home from './pages/Home';
// import DoshaAnalysis from './pages/DoshaAnalysis';
// import PersonalConsultation from './pages/PersonalConsultation';
// import { Box, CssBaseline } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2E7D32', // Ayurvedic green
//     },
//     secondary: {
//       main: '#8D6E63', // Earthy brown for accent
//     },
//     background: {
//       default: '#f1f8e9', // Light soothing background color
//     },
//     text: {
//       primary: '#333333', // Dark gray text for readability
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", sans-serif',
//     h6: {
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           '&:hover': {
//             backgroundColor: '#8D6E63', // Button hover color
//             transform: 'scale(1.05)',
//             transition: 'background-color 0.3s ease, transform 0.3s ease',
//           },
//         },
//       },
//     },
//   },
// });

// function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Box sx={{ display: 'flex' }}>
//           <Navbar onMenuClick={handleDrawerToggle} />
//           <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               backgroundColor: '#f1f8e9',
//               paddingTop: '60px',
//               transition: 'margin-left 0.5s ease',
//             }}
//           >
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/dosha-analysis" element={<DoshaAnalysis />} />
//               <Route path="/consultation" element={<PersonalConsultation />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material';
// import Navbar from './components/Layout/Navbar';
// import Sidebar from './components/Layout/Sidebar';
// import Home from './pages/Home';
// import HerbalRemedy from './pages/HerbalRemedy';
// import DoshaAnalysis from './pages/DoshaAnalysis';
// import PersonalConsultation from './pages/PersonalConsultation';
// import { Box, CssBaseline } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4A6741', // Deeper Ayurvedic green
//       light: '#7B9971',
//       dark: '#2F442A',
//     },
//     secondary: {
//       main: '#C17F59', // Warmer earth tone
//       light: '#E2A984',
//       dark: '#8B5E3C',
//     },
//     background: {
//       default: '#F5F1E8', // Warm papyrus-like background
//       paper: '#FDFAF3',
//     },
//     text: {
//       primary: '#2C3E50',
//       secondary: '#5D4037',
//     },
//   },
//   typography: {
//     fontFamily: '"Playfair Display", "Poppins", sans-serif',
//     h1: {
//       fontFamily: 'Playfair Display',
//       fontWeight: 700,
//     },
//     h2: {
//       fontFamily: 'Playfair Display',
//       fontWeight: 600,
//     },
//     body1: {
//       fontFamily: 'Poppins',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           textTransform: 'none',
//           padding: '10px 24px',
//           transition: 'all 0.4s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
//           },
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundImage: 'none',
//         },
//       },
//     },
//   },
// });

// function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Box sx={{ display: 'flex', background: '#F5F1E8' }}>
//           <Navbar onMenuClick={handleDrawerToggle} />
//           <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               minHeight: '100vh',
//               paddingTop: '80px',
//               paddingX: { xs: 2, sm: 4, md: 6 },
//               background: 'linear-gradient(135deg, #F5F1E8 0%, #FDFAF3 100%)',
//               backgroundImage: `
//                 radial-gradient(circle at 100% 100%, rgba(193, 127, 89, 0.05) 0%, transparent 50%),
//                 radial-gradient(circle at 0% 0%, rgba(74, 103, 65, 0.05) 0%, transparent 50%)
//               `,
//               transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//             }}
//           >
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/dosha-analysis" element={<DoshaAnalysis />} />
//               <Route path="/consultation" element={<PersonalConsultation />} />
//               <Route path="/herbal-remedy" element={<HerbalRemedy />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material';
// import Navbar from './components/Layout/Navbar';
// import Sidebar from './components/Layout/Sidebar';
// import Home from './pages/Home';
// import HerbalRemedy from './pages/HerbalRemedy';
// import DoshaAnalysis from './pages/DoshaAnalysis';
// import PersonalConsultation from './pages/PersonalConsultation';
// import { Box ,CssBaseline  } from '@mui/material';
// import { Toaster } from 'react-hot-toast'
// import MyHome from './pages/MyHome'
// import New from './pages/New'
// import Login from './pages/Login'
// import Register from './pages/Register'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4A6741', // Deeper Ayurvedic green
//       light: '#7B9971',
//       dark: '#2F442A',
//     },
//     secondary: {
//       main: '#C17F59', // Warmer earth tone
//       light: '#E2A984',
//       dark: '#8B5E3C',
//     },
//     background: {
//       default: '#F5F1E8', // Warm papyrus-like background
//       paper: '#FDFAF3',
//     },
//     text: {
//       primary: '#2C3E50',
//       secondary: '#5D4037',
//     },
//   },
//   typography: {
//     fontFamily: '"Playfair Display", "Poppins", sans-serif',
//     h1: {
//       fontFamily: 'Playfair Display',
//       fontWeight: 700,
//     },
//     h2: {
//       fontFamily: 'Playfair Display',
//       fontWeight: 600,
//     },
//     body1: {
//       fontFamily: 'Poppins',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           textTransform: 'none',
//           padding: '10px 24px',
//           transition: 'all 0.4s ease',
//           '&:hover': {
//             transform: 'translateY(-2px)',
//             boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
//           },
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundImage: 'none',
//         },
//       },
//     },
//   },
// });

// function App() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     // <ThemeProvider theme={theme}>
//     <BrowserRouter>
//          <Toaster />
//          <ThemeProvider theme={theme}>
//          <CssBaseline />
//         <Box sx={{ display: 'flex', background: '#F5F1E8' }}>
//           <Navbar onMenuClick={handleDrawerToggle} />
//           <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               minHeight: '100vh',
//               paddingTop: '80px',
//               paddingX: { xs: 2, sm: 4, md: 6 },
//               background: 'linear-gradient(135deg, #F5F1E8 0%, #FDFAF3 100%)',
//               backgroundImage: `
//                 radial-gradient(circle at 100% 100%, rgba(193, 127, 89, 0.05) 0%, transparent 50%),
//                 radial-gradient(circle at 0% 0%, rgba(74, 103, 65, 0.05) 0%, transparent 50%)
//               `,
//               transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
//             }}
//           >
//             <Routes>
//               <Route path="/Home" element={<Home />} />
//               <Route path="/dosha-analysis" element={<DoshaAnalysis />} />
//               <Route path="/consultation" element={<PersonalConsultation />} />
//               <Route path="/herbal-remedy" element={<HerbalRemedy />} />
//             </Routes>
//           </Box>
//         </Box>

//         </ThemeProvider>
//         <Routes>
//         <Route path="/" element={<MyHome />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/new" element={<New />} />
//       </Routes>
      
//     </BrowserRouter>
//     // </ThemeProvider>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Box, CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';
// Import components
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import HerbalRemedy from './pages/HerbalRemedy';
import DoshaAnalysis from './pages/DoshaAnalysis';
import PersonalConsultation from './pages/PersonalConsultation';
import MyHome from './pages/MyHome';
// import New from './pages/New';
import Login from './pages/Login';
import Register from './pages/Register';
import AyurvedicCenters from './pages/AyurvedicCentres';
import AyurvedaEducation from './pages/Education/AyurvedaEducation';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4A6741',
      light: '#7B9971',
      dark: '#2F442A',
    },
    secondary: {
      main: '#C17F59',
      light: '#E2A984',
      dark: '#8B5E3C',
    },
    background: {
      default: '#F5F1E8',
      paper: '#FDFAF3',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Poppins", sans-serif',
    h1: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Playfair Display',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Poppins',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Layout component for protected routes
const ProtectedLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex', background: '#F5F1E8' }}>
      <Navbar onMenuClick={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          paddingTop: '80px',
          paddingX: { xs: 2, sm: 4, md: 6 },
          background: 'linear-gradient(135deg, #F5F1E8 0%, #FDFAF3 100%)',
          backgroundImage: `
            radial-gradient(circle at 100% 100%, rgba(193, 127, 89, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, rgba(74, 103, 65, 0.05) 0%, transparent 50%)
          `,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<MyHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route path="/dashboard/*" element={
    <ProtectedRoute>
        <ProtectedLayout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="dosha-analysis" element={<DoshaAnalysis />} />
                <Route path="consultation" element={<PersonalConsultation />} />
                <Route path="herbal-remedy" element={<HerbalRemedy />} />
                <Route path="centers" element={<AyurvedicCenters />} />
                <Route path="education" element={<AyurvedaEducation />} />
            </Routes>
        </ProtectedLayout>
    </ProtectedRoute>
} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
