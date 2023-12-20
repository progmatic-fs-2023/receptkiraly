function Banner() {
  return (
    <div className="relative">
      <img src="banner.png" alt="Banner" className="banner-image w-full h-64 object-cover" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-7xl font-bold text-white">Recept Király</h1>
      </div>
    </div>
  );
}

export default Banner;
