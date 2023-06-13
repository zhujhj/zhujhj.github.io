import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-white font-bold text-lg">Home</h1>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/photogallery">
                <h1 className="text-gray-300 hover:text-white">Photo Gallery</h1>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h1 className="text-gray-300 hover:text-white">Projects</h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1 className="text-gray-300 hover:text-white">Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;