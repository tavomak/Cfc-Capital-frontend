const Hamburger = ({ open = false, setOpen }) => (
  <button
    type="button"
    className={`${open ? 'right-2 sm:right-6 top-2' : ''} h-14 w-14 z-20`}
    aria-label="Menu"
    onClick={() => setOpen(!open)}
  >
    <div className="relative grid gap-1.5 justify-items-center">
      <span
        className={`h-0.5 w-6 rounded-full bg-medium-purple transition-transform duration-300 ease-in-out ${
          open ? 'transform rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`h-0.5 w-6 rounded-full bg-medium-purple transition-opacity duration-300 ease-in-out ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`h-0.5 w-6 rounded-full bg-medium-purple transition-transform duration-300 ease-in-out ${
          open ? 'transform -rotate-45 -translate-y-2' : ''
        }`}
      />
    </div>
  </button>
);

export default Hamburger;
