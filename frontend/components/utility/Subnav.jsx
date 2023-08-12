import { AiTwotoneHome } from 'react-icons/ai'
import { PiCarSimpleDuotone } from 'react-icons/pi'

export const SubNav = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-center  ">
        <ul className="flex items-center justify-center space-x-8 lg:flex">
          <li>
            <a
              href="/dashboard"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-black transition-colors duration-200 "
            >
              <AiTwotoneHome />
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-black transition-colors duration-200 "
            >
              <PiCarSimpleDuotone />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
