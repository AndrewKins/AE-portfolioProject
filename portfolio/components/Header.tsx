import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white ">
      <nav className="flex justify-center space-x-4">
  <a href="/dashboard" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/Bio" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Bio</a>
  <a href="/Projects" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
  <a href="/Contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
</nav>
    </header>
  )
}

export default Header