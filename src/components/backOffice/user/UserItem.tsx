import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

type UserItemProps = {
  userId: string;
  password: string;
  name: string;
};

const UserItem = ({ userId, password, name }: UserItemProps) => {
  return (
    <>
      <tr className="group border-b hover:bg-gray-100 cursor-pointer">
        <td className="py-2 px-4 text-center w-1/3">{userId}</td>
        <td className="py-2 px-4 text-center w-1/3">{password}</td>
        <td className="py-2 px-4 text-center w-1/3 relative">
          {name}
          <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
        </td>
      </tr>
    </>
  );
};

// const UserItem = () => {
//   const [userName, setUserName] = useState<string>('');
//   const [name, setName] = useState<string>('');
//   const [password, setPassword] = useState<string>('');

//   const handleViewOrderInfo = () => {};

//   return (
//     <>
//       <div className="userItem-container flex border rounded p-4 mb-4 shadow bg-grey-50 cursor-pointer">
//         <table className="w-full">
//           <tbody>
//             <tr>
//               <td colSpan={2}>
//                 <span>아이디 : testUser01</span>
//               </td>
//               <td colSpan={2}>
//                 <span>패스워드 : qwert1234!!</span>
//               </td>
//               <td>
//                 <span>이름 : 김예시</span>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <img src="" alt="상세 아이콘" />
//       </div>
//     </>
//   );
// };

export default UserItem;
