export default function Search() {
  return (
    <>
      <input
        placeholder="Search hotels"
        required=""
        type="text"
        className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded-[.4rem] shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-black transition duration-200 rounded-[.4rem] shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        Search
      </button>
    </>
  )
}