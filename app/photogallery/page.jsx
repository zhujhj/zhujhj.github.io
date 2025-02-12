'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Users, XCircle } from "phosphor-react";
import Nav from '../components/Nav';

const PhotoGallery = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const photos = [
    {
      id: 0,
      src: '/images/spanishbanks.jpeg',
      alt: 'Photo 3',
    },
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
    {
      id: 16,
      src: '/images/indigenous.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 17,
      src: '/images/fireworks1.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 18,
      src: '/images/chipmunk.jpeg',
      alt: 'Photo 3',
    },
    {
      id: 19,
      src: '/images/mall.jpeg',
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
const [isImageExpanded, setImageExpanded] = useState(false);
const [leftPhotoID, setLeftPhotoID] = useState(null);
const [rightPhotoID, setRightPhotoID] = useState(null);

  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  // };

  // const closeModal = () => {
  //   setSelectedPhoto(null);
  // };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setImageExpanded(true);
    // console.log("opened photo: " + photo.src);
    // console.log("opened photo id: " + photo.id);
    // setLeftPhotoID(photo.id - 1);
    // setRightPhotoID(photo.id + 1);
    // console.log("left id: " + leftPhotoID);
    // console.log("right id: " + rightPhotoID);
    // console.log("image expanded: " + isImageExpanded);
    // console.log(isImageExpanded);
    // console.log(selectedPhoto);
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    setImageExpanded(false);
    setLeftPhotoID(null);
    setRightPhotoID(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      // console.log(event);
      closeModal();
    }
  };

  const handleArrowKeys = (event) => {
    event.preventDefault();
    console.log(isImageExpanded)
    if (!isImageExpanded) return;
    let newIndex;
    if (event.key === 'ArrowLeft') {
      // console.log("detected left");
      // if (isImageExpanded) {
      //   console.log(selectedPhoto);
      //   leftPhoto(selectedPhoto);
      // } else {
      //   console.log("photo was not expanded");
      // }
      // console.log("left photo id " + leftPhotoID);
      // closeModal();
      // console.log(photos[leftPhotoID]);
      // openModal(photos[leftPhotoID]);
      // console.log("reaches here");
      // setLeftPhotoID(leftPhotoID - 1);
      // console.log(leftPhotoID);
      // setRightPhotoID(leftPhotoID + 1);
      // console.log(rightPhotoID);
    } else if (event.key === 'ArrowRight') {
      // console.log("right photo id " + rightPhotoID);

      // console.log(isImageExpanded)
      // if (isImageExpanded) {
      //   console.log(selectedPhoto.id)
      //   let rightID = selectedPhoto.id + 1
      //   closeModal();
      //   openModal(photos[rightID]);
      // }

      newIndex = photos.findIndex(photo => photo.id === selectedPhoto.id) + 1;
    if (newIndex < photos.length) {
      setSelectedPhoto(photos[newIndex]);
    }

      // closeModal();
      // openModal(photos[rightPhotoID]);
      // if (isImageExpanded) {
        // nextPhoto(selectedPhoto);
      // }
    }
  }

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

  useEffect(() => {
    console.log("isImageExpanded:", isImageExpanded);
    console.log("selectedPhoto:", selectedPhoto);
  }, [isImageExpanded, selectedPhoto]);

  return (
    <motion.div
     className="container mx-auto py-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 2 }}
        >
      <h1 className="text-4xl font-bold text-left m-4 text-gray-300">Photo Gallery</h1>
      <p className='text-gray-500 m-4'>
        One of my personal hobbies is photography. I didn't want to spend
      too much money on a very expensive camera, so I salvaged my dad's old film camera from the closet, a
      Ricoh KR-5 Super II. Right now, I am playing around with it, and here are some of my favourite photos.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <motion.div key={photo.id} onClick={() => {
            openModal(photo)}}
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
        {photosVert.map(photosVertItem => (
          <motion.div key={photosVertItem.id} onClick={() => openModal(photosVertItem)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src={photosVertItem.src}
              alt={photosVertItem.alt}
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