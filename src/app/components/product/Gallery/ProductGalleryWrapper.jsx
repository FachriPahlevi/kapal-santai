'use client'

import { useMemo, useState } from 'react'
import ProductGallery from './ProductGallery'
import ModalProductGallery from './ModalProductGallery'
import ShowGalleryModal from './ShowGalleryModal'

export default function ProductGalleryWrapper({ images = [] }) {
  if (!images.length) return null
  const [openAll, setOpenAll] = useState(false)
  const [openSingle, setOpenSingle] = useState(false)
  const [index, setIndex] = useState(0)

  const list = useMemo(
    () =>
      images.map((img, i) =>
        typeof img === 'string'
          ? { id: i, src: img, image: img, alt: `Gallery image ${i + 1}` }
          : {
              id: img.id ?? i,
              src: img.src || img.image,
              image: img.src || img.image,
              alt: img.alt || `Gallery image ${i + 1}`,
              type: img.type || 'image',
              isThumb: !!img.isThumb,
            }
      ),
    [images]
  )

  const len = list.length
  const prev = () => setIndex(v => (v - 1 + len) % len)
  const next = () => setIndex(v => (v + 1) % len)
  const jump = i => setIndex(i)

  return (
    <>
      <ProductGallery
        images={list}
        openSingle={i => {
          setIndex(i || 0)
          setOpenSingle(true)
          setOpenAll(false)
        }}
        openAll={() => {
          setOpenAll(true)
          setOpenSingle(false)
        }}
      />

      <ModalProductGallery
        isOpen={openAll}
        onClose={() => setOpenAll(false)}
        title="Galeri Kapal"
        images={list}
        initialIndex={0}
      />

      {openSingle && (
        <ShowGalleryModal
          images={list}
          index={index}
          onClose={() => setOpenSingle(false)}
          onPrev={prev}
          onNext={next}
          onJump={jump}
        />
      )}
    </>
  )
}
