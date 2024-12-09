// import React, { useState } from 'react';
// import { 
//     Box, 
//     Grid, 
//     Typography, 
//     Tabs, 
//     Tab, 
//     Card, 
//     CardContent, 
    
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import './Education.css';

// const AyurvedaEducation = () => {
//     const [selectedTab, setSelectedTab] = useState(0);

//     const handleTabChange = (event, newValue) => {
//         setSelectedTab(newValue);
//     };

//     const educationalContent = {
//         basics: [
//             {
//                 title: "Introduction to Ayurveda",
//                 description: "Learn the fundamental principles of Ayurvedic medicine.",
//                 videoUrl: "https://youtu.be/WfN1ZLNzP4A?si=-XpwhWm3JQghNYCt", // Updated URL
//                 type: "video"
//             },
//             {
//                 title: "Understanding Doshas",
//                 description: "Deep dive into Vata, Pitta, and Kapha.",
//                 videoUrl: "https://youtu.be/G7dgGxJPd-c?si=w_zVnlMrsbPrbhZv", // Updated URL
//                 type: "video"
//             }
//         ],
//         practices: [
//             {
//                 title: "Daily Ayurvedic Routine",
//                 description: "Establish a healthy daily routine with Dinacharya.",
//                 videoUrl: "https://youtu.be/G7dgGxJPd-c?si=w_zVnlMrsbPrbhZv", // Updated URL
//                 type: "video"
//             }
//         ],
//         herbs: [
//             {
//                 title: "Common Ayurvedic Herbs",
//                 description: "Learn about essential herbs and their benefits.",
//                 videoUrl: "https://youtu.be/WfN1ZLNzP4A?si=-XpwhWm3JQghNYCt", // Updated URL
//                 type: "video"
//             }
//         ]
//     };

//     const renderContent = (type) => {
//         return educationalContent[type].map((item, index) => (
//             <Grid item xs={12} md={6} key={index}>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                 >
//                     <Card className="content-card">
//                         <Box className="video-container">
//                             <iframe
//                                 width="100%"
//                                 height="315"
//                                 src={item.videoUrl}
//                                 title={item.title}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             />
//                         </Box>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom>
//                                 {item.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {item.description}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </motion.div>
//             </Grid>
//         ));
//     };

//     return (
//         <Box className="education-container">
//             <Typography 
//                 variant="h4" 
//                 sx={{ 
//                     mb: 4, 
//                     color: '#4A6741',
//                     fontFamily: 'Playfair Display'
//                 }}
//             >
//                 Ayurvedic Education Center
//             </Typography>

//             <Tabs 
//                 value={selectedTab} 
//                 onChange={handleTabChange}
//                 sx={{ 
//                     mb: 4,
//                     '& .MuiTab-root': {
//                         color: '#4A6741',
//                         '&.Mui-selected': {
//                             color: '#4A6741',
//                             fontWeight: 'bold'
//                         }
//                     },
//                     '& .MuiTabs-indicator': {
//                         backgroundColor: '#4A6741'
//                     }
//                 }}
//             >
//                 <Tab label="BASICS" />
//                 <Tab label="PRACTICES" />
//                 <Tab label="HERBAL KNOWLEDGE" />
//             </Tabs>

//             <Grid container spacing={3}>
//                 {selectedTab === 0 && renderContent('basics')}
//                 {selectedTab === 1 && renderContent('practices')}
//                 {selectedTab === 2 && renderContent('herbs')}
//             </Grid>
//         </Box>
//     );
// };

// export default AyurvedaEducation;
import React, { useState } from 'react';
import { 
    Box, 
    Grid, 
    Typography, 
    Tabs, 
    Tab, 
    Card, 
    CardContent 
} from '@mui/material';
import { motion } from 'framer-motion';
import './Education.css';

const AyurvedaEducation = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const educationalContent = {
        basics: [
            {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },   {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },   {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },   {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },   {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },   {
                title: "Introduction to Ayurveda",
                description: "Learn the fundamental principles of Ayurvedic medicine.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Understanding Doshas",
                description: "Deep dive into Vata, Pitta, and Kapha.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            }
        ],
        practices: [
            {
                title: "Daily Ayurvedic Routine",
                description: "Establish a healthy daily routine with Dinacharya.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },
            {
                title: "Daily Ayurvedic Routine",
                description: "Establish a healthy daily routine with Dinacharya.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },
            {
                title: "Daily Ayurvedic Routine",
                description: "Establish a healthy daily routine with Dinacharya.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },
            {
                title: "Daily Ayurvedic Routine",
                description: "Establish a healthy daily routine with Dinacharya.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            },
            {
                title: "Daily Ayurvedic Routine",
                description: "Establish a healthy daily routine with Dinacharya.",
                videoUrl: "https://www.youtube.com/embed/G7dgGxJPd-c", // Updated embed URL
                type: "video"
            }
        ],
        herbs: [
            {
                title: "Common Ayurvedic Herbs",
                description: "Learn about essential herbs and their benefits.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Common Ayurvedic Herbs",
                description: "Learn about essential herbs and their benefits.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Common Ayurvedic Herbs",
                description: "Learn about essential herbs and their benefits.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            },
            {
                title: "Common Ayurvedic Herbs",
                description: "Learn about essential herbs and their benefits.",
                videoUrl: "https://www.youtube.com/embed/WfN1ZLNzP4A", // Updated embed URL
                type: "video"
            }
        ]
    };

    const renderContent = (type) => {
        return educationalContent[type].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <Card className="content-card">
                        <Box className="video-container">
                            <iframe
                                width="100%"
                                height="315"
                                src={item.videoUrl}
                                title={item.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Box>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </Grid>
        ));
    };

    return (
        <Box className="education-container">
            <Typography 
                variant="h4" 
                sx={{ 
                    mb: 4, 
                    color: '#4A6741',
                    fontFamily: 'Playfair Display'
                }}
            >
                Ayurvedic Education Center
            </Typography>

            {/* Tabs for switching between content categories */}
            <Tabs 
                value={selectedTab} 
                onChange={handleTabChange}
                sx={{ 
                    mb: 4,
                    '& .MuiTab-root': {
                        color: '#4A6741',
                        '&.Mui-selected': {
                            color: '#4A6741',
                            fontWeight: 'bold'
                        }
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#4A6741'
                    }
                }}
            >
                <Tab label="BASICS" />
                <Tab label="PRACTICES" />
                <Tab label="HERBAL KNOWLEDGE" />
            </Tabs>

            {/* Render content based on selected tab */}
            <Grid container spacing={3}>
                {selectedTab === 0 && renderContent('basics')}
                {selectedTab === 1 && renderContent('practices')}
                {selectedTab === 2 && renderContent('herbs')}
            </Grid>
        </Box>
    );
};

export default AyurvedaEducation;
