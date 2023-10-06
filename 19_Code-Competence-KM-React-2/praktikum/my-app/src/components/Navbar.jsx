const Navbar = () => {
  return (
    <div>
      <div className="bg-[#3f3f46] flex items-center justify-between h-14 px-10 fixed top-0 right-0 left-0 z-50">
        <div>
          <a className="text-2xl text-white font-bold" href="#">Fatur <span className='text-[#4ade80]'>Dev</span></a>
        </div>
        <div>
          <ul className="flex text-lg gap-20">
            <li>
              <a className="text-white font-semibold hover:text-[#4ade80]" href="#hero">Home</a>
            </li>
            <li>
              <a className="text-white font-semibold hover:text-[#4ade80]" href="#contactUs">Contact</a>
            </li>
            <li>
              <a className="text-white font-semibold hover:text-[#4ade80]" href="#aboutUs">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar