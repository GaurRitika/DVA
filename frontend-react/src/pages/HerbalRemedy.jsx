


// import React, { useState } from 'react';
// import './HerbalRemedy.css';
// import HerbModel3D from '../components/HerbModel3D';

// const HerbalRemedy = () => {
//   const [selectedHerb, setSelectedHerb] = useState(null);

//   const herbs = [
//     {
//       id: 1,
//       name: 'Ashwagandha',
//       scientificName: 'Withania somnifera',
//       benefits: 'Reduces stress and anxiety, improves strength',
//       image: '/images/Aswhagandha.webp',
//       modelPath: '/models/peruviana.glb'
//     },
//     {
//       id: 2,
//       name: 'Turmeric',
//       scientificName: 'Curcuma longa',
//       benefits: 'Anti-inflammatory, antioxidant properties',
//       image: '/images/turmeric.webp',
//       modelPath: '/models/turmeric_bulb_medium_poly.glb'
//     },
//     {
//       id: 3,
//       name: 'Holy Basil',
//       scientificName: 'Ocimum sanctum',
//       benefits: 'Adaptogenic herb, supports immune system',
//       image: '/images/holy-basil-or-tulsi-leaves.webp',
//       modelPath: '/models/tulsi_tree_on_a_cement_tub.glb'
//     },
//     {
//       id: 4,
//       name: 'Brahmi',
//       scientificName: 'Bacopa monnieri',
//       benefits: 'Enhances memory and cognitive function',
//       image: '/images/HER-BAC01_2000x.webp',
//       modelPath: '/models/ribwort.glb'
//     },
//     {
//       id: 5,
//       name: 'Triphala',
//       scientificName: 'Three fruits combination',
//       benefits: 'Digestive health, detoxification',
//       image: '/images/three-fruits-triphala.webp',
//       modelPath: '/models/plants_bush_grass.glb'
//     },
//     {
//       id: 6,
//       name: 'Shatavari',
//       scientificName: 'Asparagus racemosus',
//       benefits: 'Reproductive health, hormonal balance',
//       image: '/images/shatavari-in-root-form.webp',
//       modelPath: '/models/monstera_deliciosa_potted_mid-century_plant.glb'
//     }
    
//   ];

//   return (
//     <div className="herbal-remedy-container">
//       <header className="herbal-header">
//         <h1>Ayurvedic Herbal Remedies</h1>
//         <p>Discover the healing power of traditional herbs in 3D</p>
//       </header>

//       <div className="herbs-grid">
//         {herbs.map((herb) => (
//           <div 
//             key={herb.id} 
//             className="herb-card"
//             onClick={() => setSelectedHerb(herb)}
//           >
//             <div className="herb-image-container">
//               <img src={herb.image} alt={herb.name} className="herb-image" />
//             </div>
//             <div className="herb-info">
//               <h3>{herb.name}</h3>
//               <p className="scientific-name">{herb.scientificName}</p>
//               <p className="benefits">{herb.benefits}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedHerb && (
//         <div className="modal-overlay" onClick={() => setSelectedHerb(null)}>
//           <div className="modal-content model-view" onClick={e => e.stopPropagation()}>
//             <button className="close-button" onClick={() => setSelectedHerb(null)}>×</button>
//             <h2>{selectedHerb.name}</h2>
//             <div className="model-container">
//               <HerbModel3D modelPath={selectedHerb.modelPath} />
//             </div>
//             <h3>{selectedHerb.scientificName}</h3>
//             <p>{selectedHerb.benefits}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HerbalRemedy;




import React, { useState } from 'react';
import './HerbalRemedy.css';
import HerbModel3D from '../components/HerbModel3D';

const HerbalRemedy = () => {
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [show3DModel, setShow3DModel] = useState(false);

  const herbs = [
    {
      id: 1,
      name: 'Ashwagandha',
      scientificName: 'Withania somnifera',
      benefits: 'Reduces stress and anxiety, improves strength',
      description: 'Ashwagandha is one of the most important herbs in Ayurveda, used for over 3,000 years to relieve stress, increase energy levels, and improve concentration. This adaptogenic herb helps the body manage stress and promotes overall wellness. It is particularly known for its rejuvenating properties and ability to enhance vitality.',
      image: '/images/Aswhagandha.webp',
      modelPath: '/models/plants_bush_grass.glb'
    },
    {
      id: 2,
      name: 'Turmeric',
      scientificName: 'Curcuma longa',
      benefits: 'Anti-inflammatory, antioxidant properties',
      description: 'Turmeric, known as the golden spice, has been used in Ayurvedic medicine for thousands of years. Its active compound, curcumin, provides powerful anti-inflammatory and antioxidant benefits. Regular consumption can help support joint health, boost immunity, and promote healthy digestion.',
      image: '/images/turmeric.webp',
      modelPath: '/models/turmeric_bulb_medium_poly.glb'
    },
    {
      id: 3,
      name: 'Holy Basil',
      scientificName: 'Ocimum sanctum',
      benefits: 'Adaptogenic herb, supports immune system',
      description: 'Holy Basil, or Tulsi, is revered as a sacred plant in Ayurvedic tradition. This powerful adaptogenic herb helps the body adapt to stress, supports immune function, and promotes respiratory health. It is also known for its purifying properties and ability to enhance spiritual awareness.',
      image: '/images/holy-basil-or-tulsi-leaves.webp',
      modelPath: '/models/tulsi_tree_on_a_cement_tub.glb'
    },
    {
      id: 4,
      name: 'Brahmi',
      scientificName: 'Bacopa monnieri',
      benefits: 'Enhances memory and cognitive function',
      description: 'Brahmi is a renowned brain tonic in Ayurvedic medicine, known for its cognitive-enhancing properties. It helps improve memory, concentration, and learning ability. Regular use may support mental clarity, reduce anxiety, and promote overall brain health.',
      image: '/images/HER-BAC01_2000x.webp',
      modelPath: '/models/ribwort.glb'
    },
    {
      id: 5,
      name: 'Triphala',
      scientificName: 'Three fruits combination',
      benefits: 'Digestive health, detoxification',
      description: 'Triphala is a traditional Ayurvedic formulation consisting of three fruits: Amalaki, Bibhitaki, and Haritaki. This powerful combination supports digestive health, promotes gentle detoxification, and helps maintain regular elimination. It is also known for its antioxidant properties.',
      image: '/images/three-fruits-triphala.webp',
      modelPath: '/models/peruviana.glb'
    },
    {
      id: 6,
      name: 'Shatavari',
      scientificName: 'Asparagus racemosus',
      benefits: 'Reproductive health, hormonal balance',
      description: 'Shatavari is known as the "Queen of Herbs" in Ayurveda, particularly renowned for supporting women health. This nourishing herb helps maintain hormonal balance, supports reproductive health, and promotes vitality. It is also beneficial for maintaining a healthy digestive system.',
      image: '/images/shatavari-in-root-form.webp',
      modelPath: '/models/monstera_deliciosa_potted_mid-century_plant.glb'
    }
  ];

  const handleClose = () => {
    if (show3DModel) {
      setShow3DModel(false);
    } else {
      setSelectedHerb(null);
    }
  };

  return (
    <div className="herbal-remedy-container">
      <header className="herbal-header">
        <h1>Ayurvedic Herbal Remedies</h1>
        <p>Discover the healing power of traditional herbs</p>
      </header>

      <div className="herbs-grid">
        {herbs.map((herb) => (
          <div 
            key={herb.id} 
            className="herb-card"
            onClick={() => setSelectedHerb(herb)}
          >
            <div className="herb-image-container">
              <img src={herb.image} alt={herb.name} className="herb-image" />
            </div>
            <div className="herb-info">
              <h3>{herb.name}</h3>
              <p className="scientific-name">{herb.scientificName}</p>
              <p className="benefits">{herb.benefits}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedHerb && !show3DModel && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content detail-view" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>×</button>
            <div className="detail-image-container">
              <img src={selectedHerb.image} alt={selectedHerb.name} />
            </div>
            <div className="detail-info">
              <h2>{selectedHerb.name}</h2>
              <h3 className="scientific-name">{selectedHerb.scientificName}</h3>
              <p className="description">{selectedHerb.description}</p>
              <p className="benefits-detail"><strong>Benefits:</strong> {selectedHerb.benefits}</p>
              <button 
                className="view-3d-button"
                onClick={() => setShow3DModel(true)}
              >
                
                View 3D Model
              </button>

              {/* <button 
                className="order"
               
              >
                
                Wanna Order
              </button> */}
            </div>
          </div>
        </div>
      )}

      {show3DModel && (
        <div className="fullscreen-model">
          <button className="close-button" onClick={() => setShow3DModel(false)}>×</button>
          <HerbModel3D modelPath={selectedHerb.modelPath} />
        </div>
      )}
    </div>
  );
};

export default HerbalRemedy;
