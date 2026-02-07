'use client'

import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { feature } from 'topojson-client'
import Carousel, { CarouselItem } from './ui/Carousel'

type TripInfo = {
  title: string
  blurb: string
  highlight?: string
}

const visited: Record<string, TripInfo> = {
  China: {
    title: 'China ✦',
    blurb:
      'I grew up in China with my parents and completed all my schools before college there, including high school.',
    highlight:
      'The photos are from my time dancing in a Girls’ Generation cover group and participating in a robotics club in high school.',
  },
  Japan: {
    title: 'Japan ✦',
    blurb: 'First time there felt rushed and hectic, but hubby and I will be back soon to take it all in.',
    highlight:
      "Can’t wait to check out the Kuromi stores and maid cafés! And of course, the summer festivals with all the BBQs!",
  },
  'United States of America': {
    title: 'United States ✦',
    blurb: 'I met the love of my life after graduating from UW (University of Washington), where I majored in Informatics.',
    highlight: "He’s the main reason I stayed in the States and built a life here ♥︎",
  },
  Canada: {
    title: 'Canada ✦',
    blurb: 'Only been to Vancouver once by driving, love the food, love the nature and will drive back again!',
    highlight: 'Husband and I biked around Stanley Park and loved the beach. Such good vibes ✦',
  },
  Australia: {
    title: 'Australia ✦',
    blurb: 'The first country I visited on my own as a teenager, traveling with my high school robotics team.',
    highlight: 'The results are a blur, but I’ll never forget dancing at a school party and celebrating friendships with my team',
  },
  'South Korea': {
    title: 'South Korea ✦',
    blurb: "First graduation trip with my parents; loved the food but didn't have any cute pics! Will go back for more!",
    highlight: "It's been so long it felt like a dream; the food, the mountains and the beach~",
  },
}

type Marker = {
  country: string
  lat: number
  lng: number
  img: string
  size?: number
}

const markers: Marker[] = [
  { country: 'China', lat: 35.8617, lng: 104.1954, img: '/landmark.png', size: 20 },
  { country: 'Japan', lat: 36.2048, lng: 138.2529, img: '/landmark.png', size: 20 },
  { country: 'United States of America', lat: 39.8283, lng: -98.5795, img: '/landmark.png', size: 20 },
  { country: 'Canada', lat: 56.1304, lng: -106.3468, img: '/landmark.png', size: 20 },
  { country: 'Australia', lat: -25.2744, lng: 133.7751, img: '/landmark.png', size: 20 },
  { country: 'South Korea', lat: 35.9078, lng: 127.7669, img: '/landmark.png', size: 20 },
]

const PHOTOS_BY_COUNTRY: Record<string, CarouselItem[]> = {
  China: [{ src: '/china-01.jpg' }, { src: '/china-02.jpg' }],
  'United States of America': [{ src: '/US-01.png' }, { src: '/US-02.jpg' }],
  Canada: [{ src: '/CA-01.jpg' }],
  Australia: [{ src: '/AU.jpg' }],
  Japan: [{ src: '/JA.jpg' }],
  'South Korea': [{ src: '/KO.jpg' }],
}

// --------------------------
// TYPES
// --------------------------
type TravelGlobeProps = {
  onCountryClick?: (code: string) => void
}

// --------------------------
// HOOK: element size
// --------------------------
function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect()
      setSize({ width: Math.round(r.width), height: Math.round(r.height) })
    })

    ro.observe(el)
    const r = el.getBoundingClientRect()
    setSize({ width: Math.round(r.width), height: Math.round(r.height) })

    return () => ro.disconnect()
  }, [])

  return { ref, size }
}

// --------------------------
// COMPONENT
// --------------------------
export default function TravelGlobe({ onCountryClick }: TravelGlobeProps) {
  const globeRef = useRef<any>(null)
  const [countries, setCountries] = useState<any[]>([])
  const [selected, setSelected] = useState<{ name: string; info?: TripInfo } | null>(null)
  const { ref: wrapRef, size } = useElementSize<HTMLDivElement>()

  // Load country data
  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
      .then((r) => r.json())
      .then((topology) => {
        const geo: any = feature(topology, topology.objects.countries)
        setCountries(geo.features || [])
      })
  }, [])

  // Initial globe POV
  useEffect(() => {
    if (!globeRef.current) return
    globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 800)
  }, [countries.length])

  const getCountryName = (d: any) =>
    d?.properties?.name || d?.properties?.NAME || d?.properties?.ADMIN || d?.properties?.NAME_EN || 'Country'

  const selectedPhotos = selected?.name ? PHOTOS_BY_COUNTRY[selected.name] || [] : []

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
      {/* globe */}
      <div className="bg-white/70 border border-lavender/20 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-lavender/20">
          <div className="text-sm font-medium">Places I’ve been ✦</div>
          <div className="text-xs text-muted">Drag the globe. Click my logo.</div>
        </div>

        <div ref={wrapRef} className="h-[460px]">
          {size.width > 0 && size.height > 0 && (
            <Globe
              ref={globeRef}
              width={size.width}
              height={size.height}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              polygonsData={countries}
              polygonAltitude={0.01}
              polygonCapColor={(d: any) =>
                visited[getCountryName(d)] ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.05)'
              }
              polygonSideColor={() => 'rgba(0,0,0,0.05)'}
              polygonStrokeColor={(d: any) =>
                visited[getCountryName(d)] ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.20)'
              }
              onPolygonClick={(d: any) => {
                const name = getCountryName(d)
                setSelected({ name, info: visited[name] })
                if (onCountryClick && name === 'China') onCountryClick('CN')
              }}
              htmlElementsData={markers}
              htmlLat={(d: Marker) => d.lat}
              htmlLng={(d: Marker) => d.lng}
              htmlAltitude={() => 0.03}
              htmlElement={(d: Marker) => {
                const el = document.createElement('div')
                el.style.width = `${d.size ?? 48}px`
                el.style.height = `${d.size ?? 48}px`
                el.style.cursor = 'pointer'
                el.style.pointerEvents = 'auto'
                el.style.transform = 'translate(-50%, -50%)'

                const img = document.createElement('img')
                img.src = d.img
                img.alt = d.country
                img.style.width = '100%'
                img.style.height = '100%'
                img.style.objectFit = 'contain'
                img.draggable = false

                el.appendChild(img)
                el.onclick = () => {
                  setSelected({ name: d.country, info: visited[d.country] })
                  globeRef.current?.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.6 }, 650)
                  if (onCountryClick && d.country === 'China') onCountryClick('CN')
                }

                return el
              }}
            />
          )}
        </div>
      </div>

      {/* info card */}
      <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6">
        {!selected ? (
          <div className="text-sm text-muted">Click a logo ✦</div>
        ) : selected.info ? (
          <div className="space-y-2">
            <div className="text-lg font-semibold">{selected.info.title}</div>
            <p className="text-sm leading-relaxed">{selected.info.blurb}</p>
            {selected.info.highlight && (
              <div className="text-xs text-muted">Highlight: {selected.info.highlight}</div>
            )}

            {selectedPhotos.length > 0 && <Carousel title="Photos" items={selectedPhotos} />}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-lg font-semibold">{selected.name}</div>
            <p className="text-sm text-muted">Not in your visited list yet ✦</p>
          </div>
        )}
      </div>
    </div>
  )
}
