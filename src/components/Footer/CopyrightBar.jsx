import { facebook, instagram, twitter } from '../../assets/svgs';

const CopyrightBar = () => {
  return (
    <div className='w-full bg-copyright-bar'>
      <div className='flex flex-row items-center p-4 max-w-screen-screen mx-auto'>
        <div className='flex flex-row items-center space-x-2 w-1/2'>
          <div className='text-copyright-text font-lato-400'>
            ©Webecy - All Rights Reserved
          </div>
        </div>
        <div className='w-1/2'>
          <div className='flex flex-row items-center space-x-2.5 w-fit mx-auto '>
            <p className='bg-off-blue p-1 rounded-full'>{facebook}</p>
            <p className='bg-off-blue p-1 rounded-full'>{instagram}</p>
            <p className='bg-off-blue p-1 rounded-full'>{twitter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightBar;
