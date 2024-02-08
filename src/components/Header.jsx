import sykesLogo from "../assets/sykes-logo.jpeg";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <img className="h-8 w-auto" src={sykesLogo} alt="" />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Properties
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 cursor-not-allowed">
            Settings
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300 cursor-not-allowed">
            Log
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
