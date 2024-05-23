// Import Swiper styles
import '../homepage_components/styles.css';
// Import required modules

export function Search() {
    return (
        <div className='w-full bg-white my-4 dark:bg-dark-blue'>
            <div className='flex items-center justify-center rounded-full h-20 bg-blue-600'>
                <div className="flex w-full h-14 mx-10 rounded-full bg-light-gray sm:w-[70%] dark:bg-not-so-dark-blue">
                    <input className=" w-full text-[1.5rem] border-none rounded-full bg-light-gray px-4 py-1 text-blue outline-none focus:outline-none dark:bg-not-so-dark-blue dark:text-white" type="search" name="search" placeholder="Search..." />
                    <button type="submit" className="h-14 rounded-full bg-blue px-4  text-white dark:bg-orange">
                {/* <div className="flex w-full h-14 mx-10 rounded-full bg-light-gray sm:w-[70%]">
                    <input className=" w-full text-[1.5rem] border-none rounded-full bg-light-gray px-4 py-1 text-blue outline-none focus:outline-none " type="search" name="search" placeholder="Search..." />
                    <button type="submit" className="h-14 rounded-full bg-green px-4  text-white"> */}
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}