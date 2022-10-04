import Link from 'next/link';

const FooterSection = () => {
    const categories = [
      { title: 'Latops & Computers', link: '/' },
      { title: 'Cameras & Photography', link: '/' },
      { title: 'Smartphones & Tablets', link: '/' },
      { title: 'Video Games & Consoles', link: '/' },
      { title: 'Waterproof Headphones', link: '/' },
    ];
    const customerCares = [
      { title: 'My Account', link: '/' },
      { title: 'Discount', link: '/' },
      { title: 'Returns', link: '/' },
      { title: 'Order History', link: '/' },
      { title: 'Order Tracking', link: '/' },
    ];
    const pages = [
      { title: 'Blog', link: '/' },
      { title: 'Browse the Shop', link: '/' },
      { title: 'Caregory', link: '/' },
      { title: 'Pre-Built Pages', link: '/' },
      { title: 'Visual Composer Elements', link: '/' },
      { title: 'WooCommerce Pages', link: '/' },
    ];
  return (
    <div className='w-full bg-footer-section'>
      <div className='flex flex-row items-start py-24 max-w-screen-screen mx-auto space-x-20 font-lato-400 text-sub-text'>
        <div className='flex flex-col'>
          <h2 className='text-4xl font-josefinsans-700 text-black mb-6'>
            Hekto
          </h2>
          <div className='flex flex-row items-center bg-sky-blue w-96 h-11 rounded-sm p-1'>
            <input
              type='text'
              placeholder='Enter Email Address'
              className='w-56 bg-sky-blue outline-none'
            />
            <button className='bg-pink rounded-sm ml-auto px-10 h-full text-white'>
              Sign Up
            </button>
          </div>
          <br />
          <p>Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div className='flex flex-col space-y-2'>
          <h6 className='text-xl font-josefinsans-500 text-black mb-6'>
            Categories
          </h6>
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <p className='cursor-pointer'>{category.title}</p>
            </Link>
          ))}
        </div>
        <div className='flex flex-col space-y-2'>
          <h6 className='text-xl font-josefinsans-500 text-black mb-6'>
            Customer Care
          </h6>
          {customerCares.map((customerCare, index) => (
            <Link key={index} href={customerCare.link}>
              <p className='cursor-pointer'>{customerCare.title}</p>
            </Link>
          ))}
        </div>
        <div className='flex flex-col space-y-2'>
          <h6 className='text-xl font-josefinsans-500 text-black mb-6'>
            Pages
          </h6>
          {pages.map((page, index) => (
            <Link key={index} href={page.link}>
              <p className='cursor-pointer'>{page.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
