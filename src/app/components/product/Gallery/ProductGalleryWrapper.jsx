'use client'

import { useState } from 'react'
import ProductGallery from './ProductGallery'
import ModalProductGallery from './ModalProductGallery'

export default function ProductGalleryWrapper({ images = [] }) {
  const [open, setOpen] = useState(false)

  // Process images to ensure they have proper structure
  const processedImages = images.map((img, index) => {
    if (typeof img === 'string') {
      return {
        id: index,
        src: img,
        image: img,
        alt: `Gallery image ${index + 1}`,
        type: 'Outdoor',
      }
    }

    return {
      id: img.id || index,
      src: img.src || img.image,
      image: img.src || img.image,
      alt: img.alt || `Gallery image ${index + 1}`,
      type: img.type || 'Outdoor',
      isThumb: img.isThumb || false,
    }
  })

  return (
    <>
      <ProductGallery
        images={processedImages}
        openModal={() => setOpen(true)}
      />
      <ModalProductGallery
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Galeri Kapal"
        images={processedImages}
      />
    </>
  )
}
