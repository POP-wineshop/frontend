import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-8 py-4 border-b">
      <div className="flex items-center gap-4 ">
        <img
          className="w-16 h-16 rounded hover:w-[68px] hover:h-[68px] hover:cursor-pointer"
          src="src/assets/logo/logo-Image.png"
          alt="로고 이미지"
          onClick={() => navigate(`/list`)}
        />
        <strong
          className="text-2xl italic hover:text-3xl hover:cursor-pointer"
          onClick={() => navigate(`/list`)}
        >
          WINEHALLE
        </strong>
      </div>
      <div className="flex items-center gap-8 text-lg">
        <span
          onClick={() => navigate(`/mypage`)}
          className="hover:underline italic cursor-pointer"
        >
          My page
        </span>
        <span
          // onClick={() => navigate(`/likes`)}
          className="hover:underline italic cursor-pointer"
        >
          Likes
        </span>
        <span
          onClick={() => navigate(`/cart`)}
          className="hover:underline italic cursor-pointer"
        >
          Cart
        </span>
      </div>
    </div>
  );
};

export default Header;
