import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';
import exteriorImg from '../assets/exterior.jpg';
import diningImg from '../assets/dining.jpg';
import heroImg from '../assets/hero.jpg';
import tandooriImg from '../assets/tandoori.jpg';
import curryImg from '../assets/curry.jpg';
import breadsImg from '../assets/breads.jpg';
import detailsImg from '../assets/details.jpg';

export type GalleryCategory =
  | 'All'
  | 'Restaurant exterior'
  | 'Dining area'
  | 'Food photography'
  | 'Interior details';

export interface GalleryPhoto {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, 'All'>;
  title: string;
  alt: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'ext-1',
    src: exteriorImg,
    category: 'Restaurant exterior',
    title: 'Welcoming Evening Exterior',
    alt: 'Twilight exterior view of Rajdarbar Restaurant with warm architectural lighting and inviting entrance',
  },
  {
    id: 'din-1',
    src: diningImg,
    category: 'Dining area',
    title: 'Royal Burgundy Dining Hall',
    alt: 'Spacious Indian dining area featuring burgundy seating, warm brass pendant lanterns, and wooden jali screens',
  },
  {
    id: 'food-1',
    src: heroImg,
    category: 'Food photography',
    title: 'Traditional Indian Feast Spread',
    alt: 'Full Indian dining spread with copper handis, curries, saffron basmati rice, and fresh tandoori breads',
  },
  {
    id: 'int-1',
    src: detailsImg,
    category: 'Interior details',
    title: 'Brass Tableware & Ambient Glow',
    alt: 'Interior detail showing hammered antique brass goblets, linen napkin, candle glow, and carved lattice screen',
  },
  {
    id: 'food-2',
    src: tandooriImg,
    category: 'Food photography',
    title: 'Clay-Oven Tandoori Platter',
    alt: 'Close-up of clay-oven roasted tandoori delicacies served on an engraved brass platter with mint chutney',
  },
  {
    id: 'food-3',
    src: curryImg,
    category: 'Food photography',
    title: 'Simmering Copper Handi Curries',
    alt: 'Rich North Indian gravies served in traditional hammered copper handi vessels garnished with ginger and herbs',
  },
  {
    id: 'food-4',
    src: breadsImg,
    category: 'Food photography',
    title: 'Artisan Tandoori Breads',
    alt: 'Golden butter naan and flaky layered paratha served warm in a linen-lined brass basket',
  },
];

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Restaurant exterior',
  'Dining area',
  'Food photography',
  'Interior details',
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    activeCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const currentPhoto =
    lightboxIndex !== null && visiblePhotos[lightboxIndex]
      ? visiblePhotos[lightboxIndex]
      : null;

  return (
    <section
      id="gallery"
      className="py-20 sm:py-24 bg-[#171313] border-t border-[#D4AF65]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF65] font-semibold">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E6] mt-3">
            Photo Gallery
          </h2>
          <OrnamentalDivider className="my-5" />
          <p className="text-base sm:text-lg text-[#D8C9B2]">
            Explore our ambiance, exterior, interior details, and culinary presentation.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10">
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  active
                    ? 'bg-[#D4AF65] text-[#171313] font-semibold shadow-md'
                    : 'bg-[#211B1B] text-[#D8C9B2] border border-[#D4AF65]/25 hover:border-[#D4AF65]/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Open ${photo.title} in full-screen lightbox`}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#211B1B] border border-[#D4AF65]/25 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF65]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171313] via-[#171313]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF65] block">
                    {photo.category}
                  </span>
                  <span className="font-serif text-lg font-semibold text-[#F8F1E6] mt-0.5 block">
                    {photo.title}
                  </span>
                </div>
                <span className="p-2 rounded-sm bg-[#351014]/90 border border-[#D4AF65]/40 text-[#D4AF65] group-hover:bg-[#D4AF65] group-hover:text-[#171313] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
          className="fixed inset-0 z-50 bg-[#171313]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#211B1B] border border-[#D4AF65]/40 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#171313] border-b border-[#D4AF65]/25">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF65] mr-3">
                  {currentPhoto.category}
                </span>
                <span className="text-xs text-[#D8C9B2]">
                  {lightboxIndex + 1} of {visiblePhotos.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="p-1.5 rounded-sm text-[#F8F1E6] hover:text-[#D4AF65] border border-[#D4AF65]/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-[#171313] flex items-center justify-center max-h-[72vh] overflow-hidden">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visiblePhotos.length) %
                          visiblePhotos.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-3 p-2.5 rounded-full bg-[#171313]/85 border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#D4AF65] hover:text-[#171313] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)
                    }
                    aria-label="Next image"
                    className="absolute right-3 p-2.5 rounded-full bg-[#171313]/85 border border-[#D4AF65]/40 text-[#F8F1E6] hover:bg-[#D4AF65] hover:text-[#171313] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Footer */}
            <div className="px-4 sm:px-6 py-4 bg-[#211B1B] border-t border-[#D4AF65]/25">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F8F1E6]">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D8C9B2] mt-1">
                {currentPhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
