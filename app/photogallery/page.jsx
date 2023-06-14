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
      src: '/images/kyotarob.jpeg',
      alt: 'Photo 1',
    },
    {
      id: 2,
      src: '/images/meandemma.jpeg',
      alt: 'Photo 2',
    },
    {
      id: 3,
      src: '/images/nitobe.jpeg',
      alt: 'Photo 3',
    },
    {
        id: 4,
        src: '/images/stephenbryant.jpeg',
        alt: 'Photo 1',
      },
      {
        id: 5,
        src: '/images/stephensunset.jpeg',
        alt: 'Photo 2',
      },
      {
        id: 6,
        src: '/images/stephenwhistler.jpeg',
        alt: 'Photo 3',
      },
      {
        id: 7,
        src: '/images/stephenwhistler2.jpeg',
        alt: 'Photo 1',
      },
      {
        id: 8,
        src: '/images/whistlergroup1.jpeg',
        alt: 'Photo 2',
      },
      {
        id: 9,
        src: '/images/whistlergroup2.jpeg',
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
      too much money on a very expensive camera, so I salvaged my dad's old film camera, a 
      <span className='font-bold'>Ricoh KR-5 Super II</span>.
      Right now, I am playing around with it, and here are some of my favourite photos I have taken.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} onClick={() => openModal(photo)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover cursor-pointer shadow-lg border-2 border-black rounded-lg"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={800}
              className="object-contain border-2 border-black rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white font-bold text-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PhotoGallery;