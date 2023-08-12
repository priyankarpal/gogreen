import Search from './utility/Search';
import { Cards } from '@/components/Cards';
export const Header = () => {
  return (
    <div className="flex flex-col items-center bg-[url(https://images-ext-1.discordapp.net/external/NZah49UOAc4aglCdm4o3Rc67PLWKvsl5CMwQI3CBylg/https/github.com/SrijanShovit/carbonops-v2/assets/115932772/f0d3a11b-df95-4c01-b414-98b54f17d592?width=931&height=662)] bg-no-repeat bg-cover ">
      <div className="flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>

          </div>
          <h2 className=" mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto pt-10">
            <span className="relative inline-block">

            </span>{' '}
            Find Best Green Hotels
          </h2>
          <p className="text-base text-white md:text-lg">
            It&apos;s time to enjoy your life 🚀 💚
          </p>
        </div>
        <div className="flex flex-col items-center w-full mb-4 md:flex-row">
          <Search />
        </div>

      </div>

      <Cards />
    </div>
  );
};