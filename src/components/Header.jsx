import sykesLogo from "../assets/sykes-logo.jpeg";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex">
          <img className="h-8 w-auto" src={sykesLogo} alt="" />
        </div>
        <div className="lg:flex lg:gap-x-12">
          <button type="button" className="add-button">New property</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
