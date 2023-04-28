const Navbar = () => {
  return (
    <main className="fixed bg-gray-100 w-screen left-0">
      <nav className="flex justify-between p-4 container mx-auto">
        <h1>Practice 1 - Listenening Test</h1>
        <div className="flex gap-4">
          <button className="btn-secondary px-4">Instruction</button>
          <button className="btn-danger px-3 py-1">
            <i className="fa-regular fa-circle-xmark"></i> Exit
          </button>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
