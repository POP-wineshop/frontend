const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b">
      <div className="flex items-center gap-4 ">
        <img
          className="w-16 h-16 rounded"
          src="src/assets/logo/logo-Image.png"
          alt="로고 이미지"
        />
        <strong className="text-2xl italic">WINEHALLE</strong>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <span className="hover:underline italic cursor-pointer">My page</span>
        <span className="hover:underline italic cursor-pointer">Likes</span>
        <span className="hover:underline italic cursor-pointer">Cart</span>
      </div>
    </div>
  );
};

export default Header;
