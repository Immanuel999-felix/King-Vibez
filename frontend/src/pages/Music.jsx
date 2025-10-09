import { useEffect, useState } from 'react'

export default function Music({ api }){
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`${api}/api/music`)
      .then(r => r.json())
      .then(data => {
        setTracks(data)
        setLoading(false)
      })
      .catch(err => { console.error(err); setLoading(false) })
  }, [api])

  if(loading) return <div className="p-8">Loading...</div>

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Music</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map(t => (
          <article key={t._id} className="bg-[#0b0f17] p-4 rounded-lg">
            <img src={t.coverImageUrl || 'https://via.placeholder.com/400'} alt={t.title} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-3 text-xl font-semibold">{t.title}</h3>
            <p className="text-gray-300 mt-1">{t.description}</p>
            {t.audioUrl && <audio controls src={t.audioUrl} className="w-full mt-3" />}
          </article>
        ))}
      </div>
    </section>
  )
}
