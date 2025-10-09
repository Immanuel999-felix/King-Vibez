import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="w-full border-b border-[#111219]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">KING VIBEZ</Link>
        <nav className="flex items-center gap-4">
          <Link to="/music" className="text-sm">Music</Link>
          <Link to="/" className="text-sm">Videos</Link>
          <Link to="/" className="text-sm">Merch</Link>
        </nav>
      </div>
    </header>
  )
}
