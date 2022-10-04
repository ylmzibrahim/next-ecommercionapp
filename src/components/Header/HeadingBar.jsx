import Link from 'next/link';
import {
  email,
  phone,
  downArrow,
  user,
  heart,
  basket,
} from '../../assets/svgs';

const HeadingBar = () => (
  <div className='bg-purple w-full h-11 flex items-center'>
    <div className='flex flex-row text-white max-w-screen-screen w-full mx-auto px-2 justify-between'>
      <div className='flex flex-row space-x-6 mr-6'>
        <Link href='mailto:mhhasanul@gmail.com'>
          <li className='list-none flex flex-row items-center space-x-2 cursor-pointer'>
            <p>{email}</p>
            <p>mhhasanul@gmail.com</p>
          </li>
        </Link>
        <Link href='tel:(12345)67890'>
          <li className='list-none flex flex-row items-center space-x-2 cursor-pointer'>
            <p>{phone}</p>
            <p>(12345)67890</p>
          </li>
        </Link>
      </div>
      <div className='flex flex-row space-x-6'>
        <li className='list-none flex flex-row items-center space-x-1 cursor-pointer'>
          <p>English</p>
          <p>{downArrow}</p>
        </li>
        <li className='list-none flex flex-row items-center space-x-1 cursor-pointer'>
          <p>USD</p>
          <p>{downArrow}</p>
        </li>
        <Link href='/login'>
          <li className='list-none flex flex-row items-center space-x-1 cursor-pointer'>
            <p>Login</p>
            <p>{user}</p>
          </li>
        </Link>
        <Link href='/wishlist'>
          <li className='list-none flex flex-row items-center space-x-1 cursor-pointer'>
            <p>Wishlist</p>
            <p>{heart}</p>
          </li>
        </Link>
        <Link href='/basket'>
          <li className='list-none flex flex-row items-center space-x-1 cursor-pointer'>
            <p>{basket}</p>
          </li>
        </Link>
      </div>
    </div>
  </div>
);

export default HeadingBar;
