import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold tracking-tight">KING VIBEZ</h1>
      <p className="mt-4 text-gray-300 max-w-xl">Official website of King Vibez — new wave rap. Latest tracks, videos, merch and tour dates.</p>
      <div className="mt-6 flex gap-4">
        <Link to="/music" className="px-6 py-3 bg-yellow-500 rounded-lg">🎵 Listen</Link>
      </div>
    </section>
  )
}
