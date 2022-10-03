import { email, downArrow } from '../../assets/svgs';

const HeadingBar = () => {
  return (
    <div className='bg-purple w-full h-11 flex items-center'>
      <div className='flex flex-row text-white max-w-screen-screen w-full mx-auto px-2 justify-between'>
        <div>
          <li className='list-none flex flex-row items-center space-x-3'>
            <p>{email}</p>
            <p>mhhasanul@gmail.com</p>
          </li>
        </div>
        <div>
          <li className='list-none flex flex-row items-center space-x-3'>
            <p>English</p>
            <p>{downArrow}</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
