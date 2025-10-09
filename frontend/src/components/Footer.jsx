export default function Footer(){
  return (
    <footer className="w-full border-t border-[#111219] mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex justify-between">
        <div>© {new Date().getFullYear()} King Vibez</div>
        <div>Built with ❤️</div>
      </div>
    </footer>
  )
}
