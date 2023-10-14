'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { XCircle } from "phosphor-react";

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
      id: 10,
      src: '/images/5615371C-F970-4D3D-8D60-D6FCA9E18C80_1_105_c.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 11,
      src: '/images/kitssunset.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 12,
      src: '/images/mistymountain.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 13,
      src: '/images/pianosfu.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 14,
      src: '/images/chinatown.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 15,
      src: '/images/basketball.jpeg',
      alt: 'Photo 3',
    },
    // Add more photos as needed
  ];

  const photosVert = [
    {
      id: 100,
      src: '/images/verticalsunset.jpeg',
      alt: 'Photo 1',
    },
    {
      id: 101,
      src: '/images/stanleyparkbike.jpeg',
      alt: 'Photo 1',
    },
    {
      id: 102,
      src: '/images/mountainwindow.jpeg',
      alt: 'Photo 1',
    },
    {
      id: 103,
      src: '/images/gastown.jpeg',
      alt: 'Photo 1',
    },
  ]

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
const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  // };

  // const closeModal = () => {
  //   setSelectedPhoto(null);
  // };

  const openModal = (photo, id) => {
    console.log("reached");
    setSelectedPhoto(photo);
    setSelectedPhotoId(id);
    setImageExpanded(true);
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    setImageExpanded(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const previousPhoto = (number) => {
    // Find the index of the currently selected photo
    // const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);

    // // Calculate the index of the previous photo
    // const previousIndex = (currentIndex - 1 + photos.length) % photos.length;

    // Select the previous photo
    // closeModal();
    openModal(photos[1]);
  };

  const nextPhoto = (number) => {
    // Find the index of the currently selected photo
    // const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);

    // // Calculate the index of the next photo
    // const nextIndex = (currentIndex + 1) % photos.length;

    // Select the next photo
    // closeModal();
    openModal(photos[5]);
  };

  const handleArrowKeys = (event) => {
    if (event.key === 'ArrowLeft') {
      previousPhoto(selectedPhotoId);
    } else if (event.key === 'ArrowRight') {
      nextPhoto(selectedPhotoId);
    }
  }
  
  const [isImageExpanded, setImageExpanded] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleArrowKeys);
    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, []);

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
      too much money on a very expensive camera, so I salvaged my dad's old film camera from the closet, a &#160;
      <span className='font-bold'>Ricoh KR-5 Super II</span>.
      Right now, I am playing around with it, and here are some of my favourite photos I have taken.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <motion.div key={photo.id} onClick={() => openModal(photo, photo.id)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={400}
              className="object-cover cursor-pointer shadow-lg border-2 border-black rounded-lg"
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photosVert.map(photosVert => (
          <motion.div key={photosVert.id} onClick={() => openModal(photosVert, photosVert.id)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src={photosVert.src}
              alt={photosVert.alt}
              width={500}
              height={800}
              className="object-cover cursor-pointer shadow-lg border-2 border-black rounded-lg"
              // whileHover={{ scale: 1.1 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
        // onClick={closeModal}
        >
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
              width={selectedPhoto.id < 100 ? 800 : 500}
              height={400}
              className="object-contain border-2 border-black rounded-lg"
            />
            <motion.button
              className="absolute top-4 right-4 text-white font-bold text-lg"
              onClick={closeModal}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <XCircle size={32} weight="fill" className='pr-1 -mt-1'/>
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default PhotoGallery;