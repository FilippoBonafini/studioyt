'use clients'

const Searchbar = () => {
    return (
        <div className="md:max-w-lg">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-sm  border-neutral-300 bg-white shadow-md text-lg  bg-clip-padding px-3 py-4  font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-blue-700 dark:text-blue-700 dark:placeholder:text-blue-700 dark:focus:border-primary"
                    placeholder="Cerca"
                    aria-label="Search"
                />
            </div>
        </div>
    );
};

export default Searchbar;