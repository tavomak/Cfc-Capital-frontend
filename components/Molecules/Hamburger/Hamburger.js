const Hamburger = ({ open = false, setOpen }) => (
  <button
    type="button"
    className={`${open ? 'fixed right-2 sm:right-6 top-2' : ''} h-14 w-14 rounded-full border-2 border-dark-blue z-20`}
    aria-label="Menu"
    onClick={() => setOpen(!open)}
  >
    <div className="relative grid gap-1 justify-items-center">
      <span
        className={`h-[4px] w-8 rounded-full bg-dark-blue transition ${open && 'absolute top-1/2 left-1/2 rotate-45 -translate-y-1/2 -translate-x-1/2'} `}
      />
      <span
        className={`h-[4px] w-8 rounded-full bg-dark-blue transition ${open && 'scale-x-0'}`}
      />
      <span
        className={`h-[4px] w-8 rounded-full bg-dark-blue ${open && 'absolute top-1/2 left-1/2 -rotate-45 -translate-y-1/2 -translate-x-1/2'}`}
      />
    </div>
  </button>
);

export default Hamburger;
