'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, ArrowLeft, ArrowRight } from "phosphor-react";

const PhotoGallery = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Combine all photos into one array and add aspect ratio information
  const allPhotos = [
    {
      id: 0,
      src: '/images/spanishbanks.jpeg',
      alt: 'Spanish Banks',
      title: 'Spanish Banks',
      aspectRatio: 'landscape'
    },
    {
      id: 1,
      src: '/images/bryantstephen.jpeg',
      alt: 'Bryant and Stephen',
      title: 'Friends at UBC',
      aspectRatio: 'landscape'
    },
    {
      id: 2,
      src: '/images/chineserestaurant.jpeg',
      alt: 'Chinese Restaurant',
      title: 'Chinese Restaurant',
      aspectRatio: 'landscape'
    },
    {
      id: 100,
      src: '/images/verticalsunset.jpeg',
      alt: 'Vertical Sunset',
      title: 'Sunset View',
      aspectRatio: 'portrait'
    },
    {
      id: 3,
      src: '/images/group1.jpeg',
      alt: 'Group Photo 1',
      title: 'Group Photo 1',
      aspectRatio: 'landscape'
    },
    {
      id: 101,
      src: '/images/stanleyparkbike.jpeg',
      alt: 'Stanley Park Bike',
      title: 'Stanley Park Bike',
      aspectRatio: 'portrait'
    },
    {
      id: 4,
      src: '/images/group2.jpeg',
      alt: 'Group Photo 2',
      title: 'Group Photo 2',
      aspectRatio: 'landscape'
    },
    {
      id: 5,
      src: '/images/jackphilipstephen.jpeg',
      alt: 'Jack, Philip, and Stephen',
      title: 'Jack, Philip, and Stephen',
      aspectRatio: 'landscape'
    },
    {
      id: 102,
      src: '/images/mountainwindow.jpeg',
      alt: 'Mountain Window',
      title: 'Mountain Window',
      aspectRatio: 'portrait'
    },
    {
      id: 6,
      src: '/images/lights.jpeg',
      alt: 'Lights',
      title: 'Lights',
      aspectRatio: 'landscape'
    },
    {
      id: 7,
      src: '/images/skyline1.jpeg',
      alt: 'Skyline',
      title: 'Skyline',
      aspectRatio: 'landscape'
    },
    {
      id: 103,
      src: '/images/gastown.jpeg',
      alt: 'Gastown',
      title: 'Gastown',
      aspectRatio: 'portrait'
    },
    {
      id: 8,
      src: '/images/stephen.jpeg',
      alt: 'Stephen',
      title: 'Stephen',
      aspectRatio: 'landscape'
    },
    {
      id: 9,
      src: '/images/CE74FC1D-0CC2-4992-9C9E-5ACB4DBAA837_1_105_c.jpeg',
      alt: 'Photo 3',
      title: 'Photo 3',
      aspectRatio: 'landscape'
    },
    {
      id: 10,
      src: '/images/5615371C-F970-4D3D-8D60-D6FCA9E18C80_1_105_c.jpeg',
      alt: 'Photo 3',
      title: 'Photo 3',
      aspectRatio: 'landscape'
    },
    {
      id: 11,
      src: '/images/kitssunset.jpeg',
      alt: 'Kits Sunset',
      title: 'Kits Sunset',
      aspectRatio: 'landscape'
    },
    {
      id: 12,
      src: '/images/mistymountain.jpeg',
      alt: 'Misty Mountain',
      title: 'Misty Mountain',
      aspectRatio: 'landscape'
    },
    {
      id: 13,
      src: '/images/pianosfu.jpeg',
      alt: 'Pianosfu',
      title: 'Pianosfu',
      aspectRatio: 'landscape'
    },
    {
      id: 14,
      src: '/images/chinatown.jpeg',
      alt: 'Chinatown',
      title: 'Chinatown',
      aspectRatio: 'landscape'
    },
    {
      id: 15,
      src: '/images/basketball.jpeg',
      alt: 'Basketball',
      title: 'Basketball',
      aspectRatio: 'landscape'
    },
    {
      id: 16,
      src: '/images/indigenous.jpeg',
      alt: 'Indigenous',
      title: 'Indigenous',
      aspectRatio: 'landscape'
    },
    {
      id: 17,
      src: '/images/fireworks1.jpeg',
      alt: 'Fireworks',
      title: 'Fireworks',
      aspectRatio: 'landscape'
    },
    {
      id: 18,
      src: '/images/chipmunk.jpeg',
      alt: 'Chipmunk',
      title: 'Chipmunk',
      aspectRatio: 'landscape'
    },
    {
      id: 19,
      src: '/images/mall.jpeg',
      alt: 'Mall',
      title: 'Mall',
      aspectRatio: 'landscape'
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isImageExpanded, setImageExpanded] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setImageExpanded(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    setImageExpanded(false);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleArrowKeys = (event) => {
    if (!isImageExpanded) return;
    
    const currentIndex = allPhotos.findIndex(photo => photo.id === selectedPhoto.id);
    
    if (event.key === 'ArrowLeft' && currentIndex > 0) {
      setSelectedPhoto(allPhotos[currentIndex - 1]);
    } else if (event.key === 'ArrowRight' && currentIndex < allPhotos.length - 1) {
      setSelectedPhoto(allPhotos[currentIndex + 1]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleArrowKeys);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleArrowKeys);
    };
  }, [selectedPhoto, isImageExpanded]);

  return (
    <motion.div 
      className="container mx-auto px-4 py-12 min-h-screen max-w-7xl"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.header 
        className="text-center mb-16"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold text-gray-200 mb-4">Photo Gallery</h1>
        <p className="text-gray-400 text-lg">A collection of moments captured through my lens</p>
      </motion.header>

      <motion.main variants={containerVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allPhotos.map(photo => (
            <motion.div
              key={photo.id}
              className={`group relative overflow-hidden rounded-lg border-2 border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer
                ${photo.aspectRatio === 'portrait' ? 'row-span-2' : ''}`}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(photo)}
            >
              <div className="relative w-full h-0" style={{ 
                paddingBottom: photo.aspectRatio === 'portrait' ? '140%' : '66.66%',
              }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{photo.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-7xl mx-auto"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                onClick={closeModal}
              >
                <XCircle size={32} weight="fill" />
              </button>
              
              <div className="relative max-h-[90vh] rounded-xl overflow-hidden">
                <div className="relative" style={{ 
                  width: selectedPhoto.aspectRatio === 'portrait' ? 'auto' : '100%',
                  height: selectedPhoto.aspectRatio === 'portrait' ? '90vh' : 'auto',
                  maxWidth: '100vw',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    width={selectedPhoto.aspectRatio === 'portrait' ? 800 : 1200}
                    height={selectedPhoto.aspectRatio === 'portrait' ? 1200 : 800}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="absolute inset-y-0 left-4 flex items-center">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArrowKeys({ key: 'ArrowLeft' });
                  }}
                >
                  <ArrowLeft size={24} className="text-white" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArrowKeys({ key: 'ArrowRight' });
                  }}
                >
                  <ArrowRight size={24} className="text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoGallery;