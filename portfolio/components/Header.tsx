import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
            <a className="text-2xl font-bold">My Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li>
              <a className="hover:text-gray-400">About</a>
          </li>
          <li>
              <a className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header