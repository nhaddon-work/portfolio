'use client'

import React from 'react'
import Globe from 'react-globe.gl'
import { feature } from 'topojson-client'

/* -------------------- data -------------------- */

type TripInfo = {
  title: string
  blurb: string
  highlight?: string
}

const visited: Record<string, TripInfo> = {
    China: {
      title: 'China ✦',
      blurb: 'Home roots, comfort food memories, and the start of everything.',
      highlight: 'Hot pot + street snacks forever.',
    },
    Japan: {
      title: 'Japan ✦',
      blurb: 'Design inspiration overload. Quiet details everywhere.',
      highlight: 'Matcha + cozy wandering.',
    },
    'United States of America': {
      title: 'United States ✦',
      blurb: 'Where I built my adult life — work, trails, and lots of reinvention.',
      highlight: 'Hikes + building calm systems.',
    },
    Canada: {
      title: 'Canada ✦',
      blurb: 'Calm cities, kind people, and beautiful natural balance.',
      highlight: 'Clean air + peaceful pace.',
    },
    Australia: {
      title: 'Australia ✦',
      blurb: 'Sun, coastline energy, and that far-from-everything feeling.',
      highlight: 'Beaches + open skies.',
    },
    Korea: {
      title: 'Korea ✦',
      blurb: 'Food, nightlife, and culture that moves fast and feels alive.',
      highlight: 'Late nights + spicy comfort food.',
    },
  }  

type Marker = {
  country: string
  lat: number
  lng: number
  img: string
  size?: number
}

/* center-ish coordinates per country */
const markers: Marker[] = [
    { country: 'China', lat: 35.8617, lng: 104.1954, img: '/landmark.png', size: 20 },
    { country: 'Japan', lat: 36.2048, lng: 138.2529, img: '/landmark.png', size: 20 },
    {
      country: 'United States of America',
      lat: 39.8283,
      lng: -98.5795,
      img: '/landmark.png',
      size: 20,
    },
    { country: 'Canada', lat: 56.1304, lng: -106.3468, img: '/landmark.png', size: 20 },
    { country: 'Australia', lat: -25.2744, lng: 133.7751, img: '/landmark.png', size: 20 },
    { country: 'Korea', lat: 35.9078, lng: 127.7669, img: '/landmark.png', size: 20 },
  ]
  

/* -------------------- helpers -------------------- */

function useElementSize<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null)
  const [size, setSize] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
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

/* -------------------- component -------------------- */

export default function TravelGlobe() {
  const globeRef = React.useRef<any>(null)
  const [countries, setCountries] = React.useState<any[]>([])
  const [selected, setSelected] = React.useState<{
    name: string
    info?: TripInfo
  } | null>(null)

  const { ref: wrapRef, size } = useElementSize<HTMLDivElement>()

  React.useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
      .then((r) => r.json())
      .then((topology) => {
        const geo: any = feature(topology, topology.objects.countries)
        setCountries(geo.features || [])
      })
  }, [])

  React.useEffect(() => {
    if (!globeRef.current) return
    globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 800)
  }, [countries.length])

  const getCountryName = (d: any) =>
    d?.properties?.name ||
    d?.properties?.NAME ||
    d?.properties?.ADMIN ||
    d?.properties?.NAME_EN ||
    'Country'

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
      {/* ---------- globe ---------- */}
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
                visited[getCountryName(d)]
                  ? 'rgba(0,0,0,0.14)'
                  : 'rgba(0,0,0,0.05)'
              }
              polygonSideColor={() => 'rgba(0,0,0,0.05)'}
              polygonStrokeColor={(d: any) =>
                visited[getCountryName(d)]
                  ? 'rgba(0,0,0,0.75)'
                  : 'rgba(0,0,0,0.20)'
              }
              onPolygonClick={(d: any) => {
                const name = getCountryName(d)
                setSelected({ name, info: visited[name] })
              }}

              /* ---------- LOGO MARKERS (NO CIRCLES) ---------- */
              htmlElementsData={markers}
              htmlLat={(d: any) => d.lat}
              htmlLng={(d: any) => d.lng}
              htmlAltitude={() => 0.03}
              htmlElement={(d: any) => {
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
                img.style.userSelect = 'none'
                img.draggable = false

                el.appendChild(img)

                el.onclick = () => {
                  setSelected({ name: d.country, info: visited[d.country] })
                  globeRef.current?.pointOfView(
                    { lat: d.lat, lng: d.lng, altitude: 1.6 },
                    650
                  )
                }

                return el
              }}
            />
          )}
        </div>
      </div>

      {/* ---------- info card ---------- */}
      <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6">
        {!selected ? (
          <div className="text-sm text-muted">Click a logo ✦</div>
        ) : selected.info ? (
          <div className="space-y-2">
            <div className="text-lg font-semibold">{selected.info.title}</div>
            <div className="text-sm text-muted">{selected.name}</div>
            <p className="text-sm leading-relaxed">{selected.info.blurb}</p>
            {selected.info.highlight && (
              <div className="text-xs text-muted">
                Highlight: {selected.info.highlight}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-lg font-semibold">{selected.name}</div>
            <p className="text-sm text-muted">
              Not in your visited list yet ✦
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
