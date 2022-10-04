import Link from 'next/link';
import { useRouter } from 'next/router';
import { search } from '../../assets/svgs';

const NavBar = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row h-10 items-center text-black max-w-screen-screen w-full mx-auto px-2 justify-between py-10'>
      <div className='w-1/2 flex flex-row justify-between'>
        <div>
          <Link href='/'>
            <h3 className='font-josefinsans-700 text-4xl cursor-pointer mr-5'>
              Hekto
            </h3>
          </Link>
        </div>
        <div className='flex flex-row space-x-3'>
          <Link href='/'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer ${
                router.pathname === '/' ? 'text-pink' : ''
              }`}
            >
              <p>Home</p>
            </li>
          </Link>
          <Link href='/pages'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer  ${
                router.pathname === '/pages' ? 'text-pink' : ''
              }`}
            >
              <p>Pages</p>
            </li>
          </Link>
          <Link href='/products'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer  ${
                router.pathname === '/products' ? 'text-pink' : ''
              }`}
            >
              <p>Products</p>
            </li>
          </Link>
          <Link href='/blog'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer  ${
                router.pathname === '/blog' ? 'text-pink' : ''
              }`}
            >
              <p>Blog</p>
            </li>
          </Link>
          <Link href='/shop'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer  ${
                router.pathname === '/shop' ? 'text-pink' : ''
              }`}
            >
              <p>Shop</p>
            </li>
          </Link>
          <Link href='/contact'>
            <li
              className={`list-none flex flex-row items-center space-x-1 cursor-pointer  ${
                router.pathname === '/contact' ? 'text-pink' : ''
              }`}
            >
              <p>Contact</p>
            </li>
          </Link>
        </div>
      </div>
      <div>
        <div className='px-5 py-3 bg-pink'>{search}</div>
      </div>
    </div>
  );
};

export default NavBar;
