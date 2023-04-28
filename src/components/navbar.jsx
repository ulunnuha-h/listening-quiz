const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1>Practice 1 - Listenening Test</h1>
      <div>
        <button className="btn-secondary px-4">Instruction</button>
        <button className="btn-danger px-3 py-1">
          <i className="fa-regular fa-circle-xmark"></i> Exit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
