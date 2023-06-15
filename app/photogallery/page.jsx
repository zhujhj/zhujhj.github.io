'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PhotoGallery = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const photos = [
    {
      id: 1,
      src: '/images/bryantstephen.jpeg',
      alt: 'Photo 1',
    },
    {
      id: 2,
      src: '/images/chineserestaurant.jpeg',
      alt: 'Photo 2',
    },
    {
      id: 3,
      src: '/images/group1.jpeg',
      alt: 'Photo 3',
    },
    {
        id: 4,
        src: '/images/group2.jpeg',
        alt: 'Photo 1',
      },
      {
        id: 5,
        src: '/images/jackphilipstephen.jpeg',
        alt: 'Photo 2',
      },
      {
        id: 6,
        src: '/images/lights.jpeg',
        alt: 'Photo 3',
      },
      {
        id: 7,
        src: '/images/skyline1.jpeg',
        alt: 'Photo 1',
      },
      {
        id: 8,
        src: '/images/stephen.jpeg',
        alt: 'Photo 2',
      },
      {
        id: 9,
        src: '/images/CE74FC1D-0CC2-4992-9C9E-5ACB4DBAA837_1_105_c.jpeg',
        alt: 'Photo 3',
      },
      {
        id: 9,
        src: '/images/5615371C-F970-4D3D-8D60-D6FCA9E18C80_1_105_c.jpeg',
        alt: 'Photo 3',
      },
    // Add more photos as needed
  ];

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {photos.map(photo => (
//           <div key={photo.id}>
//             <Image
//               src={photo.src}
//               alt={photo.alt}
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGallery;
const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <motion.div
     className="container mx-auto py-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 2 }}
        >
      <h1 className="text-4xl font-bold text-left mb-4">Photo Gallery</h1>
      <p className='text-gray-600 mb-4 mr-[500px]'>
        One of my personal hobbies is photography. I didn't want to spend
      too much money on a very expensive camera, so I salvaged my dad's old film camera, a &#160;
      <span className='font-bold'>Ricoh KR-5 Super II</span>.
      Right now, I am playing around with it, and here are some of my favourite photos I have taken.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <motion.div key={photo.id} onClick={() => openModal(photo)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover cursor-pointer shadow-lg border-2 border-black rounded-lg"
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <motion.div className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              restDelta: 0.001
            }
          }}>
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={800}
              className="object-contain border-2 border-black rounded-lg"
            />
            <motion.button
              className="absolute top-4 right-4 text-white font-bold text-lg"
              onClick={closeModal}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default PhotoGallery;