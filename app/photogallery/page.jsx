'use client';

import Image from 'next/image';
import { useState } from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: '/images/overlay.png',
      alt: 'Photo 1',
    },
    {
      id: 2,
      src: '/images/rosegarden.png',
      alt: 'Photo 2',
    },
    {
      id: 3,
      src: '/images/yourname.jpeg',
      alt: 'Photo 3',
    },
    {
        id: 4,
        src: '/images/overlay.png',
        alt: 'Photo 1',
      },
      {
        id: 5,
        src: '/images/rosegarden.png',
        alt: 'Photo 2',
      },
      {
        id: 6,
        src: '/images/yourname.jpeg',
        alt: 'Photo 3',
      },
      {
        id: 1,
        src: '/images/overlay.png',
        alt: 'Photo 1',
      },
      {
        id: 2,
        src: '/images/rosegarden.png',
        alt: 'Photo 2',
      },
      {
        id: 3,
        src: '/images/yourname.jpeg',
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
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-left mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} onClick={() => openModal(photo)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={500}
              className="object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={800}
              className="object-contain"
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
    </div>
  );
};

export default PhotoGallery;