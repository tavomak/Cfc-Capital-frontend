const Hamburger = ({ open = false, setOpen }) => (
  <button
    type="button"
    className={`${open ? 'right-2 sm:right-6 top-2' : ''} h-14 w-14 z-20`}
    aria-label="Menu"
    onClick={() => setOpen(!open)}
  >
    <div className="relative grid gap-1.5 justify-items-center">
      <span className="h-[4px] w-8 rounded-full bg-medium-purple transition" />
      <span className="h-[4px] w-8 rounded-full bg-medium-purple transition" />
      <span className="h-[4px] w-8 rounded-full bg-medium-purple" />
    </div>
  </button>
);

export default Hamburger;
