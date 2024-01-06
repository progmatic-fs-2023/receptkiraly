function Banner() {
  return (
    <div className="flex items-center justify-between bg-indigo-500 p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white ml-2">Recept Király</h1>
        <input
          type="text"
          placeholder="Keresés..."
          className="px-2 py-1 mr-2 rounded border"
        />
      </div>
      <div className="flex items-center">
        <button type="button" className="px-3 py-1 bg-white text-indigo-500 rounded">Gomb 1</button>
        <button type="button" className="px-3 py-1 bg-white text-indigo-500 rounded ml-2">Gomb 2</button>
      </div>
    </div>
  );
}

export default Banner;