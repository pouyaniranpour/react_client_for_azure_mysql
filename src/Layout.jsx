import { Link, Outlet } from "react-router-dom";

// Layout
export function Layout() {
  return (
    <div className="sm:flex min-h-screen overflow-y-hidden">
      <aside className="sm:w-1/4 bg-gray-200 sticky top-0">
        <nav className="fixed">
          <ul className="flex flex-col p-4 gap-2">
            <li className="text-left">
              <Link to="/" className="p-2">
                Home
              </Link>
            </li>
            <li className="text-left">
              <Link to="/allcountries" className="p-2">
                All Countries
              </Link>
            </li>
            <li className="text-left">
              <Link to="/oceania" className="p-2">
                Oceania
              </Link>
            </li>
            <li className="text-left">
              <Link to="/country/australia" className="p-2">
                Country - Australia
              </Link>
            </li>
            <li className="text-left">
              <Link to="/country/newzealand" className="p-2">
                Country - New Zealand
              </Link>
            </li>
            <li className="text-left">
              <Link to="/population/europe" className="p-2">
                Population - Europe
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="sm:w-3/4">
        <header className="bg-gray-800 text-white p-4 fixed top-0 w-full">
          <h1 className="text-2xl font-bold text-left">
            React Client for our API
          </h1>
        </header>
        <div className="overflow-y-auto scroll-m-8 h-full pt-16 flex justify-center items-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
