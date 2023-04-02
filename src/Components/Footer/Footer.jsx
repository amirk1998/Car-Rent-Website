const Footer = () => {
  return (
    <footer className='bottom-0 bg-page-bg md:bg-primary-000 md:mt-20 px-6 md:px-16 h-[480px]'>
      {/* Bottom Page Title */}
      <div className='sm:flex sm:justify-between sm:border-b sm:border-b-secondary-200 sm:pb-9 '>
        <div className='flex flex-col w-[216px] md:w-[292px] h-24 md:h-28 gap-y-4 mt-12 '>
          <p className='text-primary-500 font-bold uppercase md:text-3xl'>
            Morent
          </p>
          <p className='text-xs md:text-base font-medium text-secondary-300'>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        {/* Resources */}
        <div className='flex mt-12 gap-x-16'>
          <div className='flex flex-col gap-y-12 sm:flex-row sm:gap-y-0 sm:gap-x-16'>
            {/* Resource #1 */}
            <div className='flex flex-col'>
              <p className='mb-4 text-secondary-500 font-semibold text-xl'>
                About
              </p>
              <ul className='flex flex-col list-none text-secondary-300 font-medium text-base cursor-pointer gap-y-4'>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
            {/* Resource #2 */}
            <div className='flex flex-col'>
              <p className='mb-4 text-secondary-500 font-semibold text-xl'>
                Community
              </p>
              <ul className='flex flex-col list-none text-secondary-300 font-medium text-base cursor-pointer gap-y-4'>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            {/* Resource #3 in Desktop  */}
            <div className='hidden sm:flex sm:flex-col'>
              <p className='mb-4 text-secondary-500 font-semibold text-xl'>
                Socials
              </p>
              <ul className='flex flex-col list-none text-secondary-300 font-medium text-base cursor-pointer gap-y-4'>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          {/* Resource #3 */}
          <div className='flex flex-col sm:hidden'>
            <p className='mb-4 text-secondary-500 font-semibold text-xl'>
              Socials
            </p>
            <ul className='flex flex-col list-none text-secondary-300 font-medium text-base cursor-pointer gap-y-4'>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Privacy - Terms */}
      <div className='flex items-center justify-between w-full mt-12'>
        <p className='hidden sm:inline-block sm:text-base text-secondary-500 font-semibold text-xs w-full'>
          ©2022 MORENT. All rights reserved
        </p>

        <div className='flex sm:items-center justify-between w-full sm:justify-end sm:gap-x-16 '>
          <p className='text-secondary-500 font-semibold sm:text-base text-xs'>
            Privacy & Policy
          </p>
          <p className='text-secondary-500 font-semibold sm:text-base text-xs'>
            Terms & Condition
          </p>
        </div>
      </div>
      <p className='text-secondary-500 font-semibold text-xs mt-8 sm:hidden'>
        ©2022 MORENT. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
