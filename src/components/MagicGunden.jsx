const MagicGunden = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-screen">
      <iframe
        src="/resources/MagicGunden/index.html"
        title="Magic Gunden"
        className="absolute inset-0 w-full h-full border-none"
        allow="autoplay; fullscreen; focus-without-user-activation"
      />
    </div>
  );
};

export default MagicGunden;
