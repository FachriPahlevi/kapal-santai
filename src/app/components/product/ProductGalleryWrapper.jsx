'use client'

import { useState } from 'react'
import ProductGallery from './ProductGallery'
import ModalProcuctGallery from './ModalProductGallery'

export default function ProductGalleryWrapper({ images = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ProductGallery images={images} openModal={() => setOpen(true)} />
      <ModalProcuctGallery
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Galeri Kapal"
        images={images.map(i => i.src || i.image)}
      />
    </>
  )
}
