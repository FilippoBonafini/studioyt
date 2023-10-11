'use clients'

const Searchbar = ({ value, onChange, onSubmit }) => {
    return (
        <div className="md:max-w-lg">
            <form onSubmit={onSubmit}> {/* Aggiunto un form per gestire l'invio */}
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-sm  border-neutral-300 bg-white shadow-md text-lg  bg-clip-padding px-3 py-4  font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-blue-700 dark:text-blue-700 dark:placeholder:text-blue-700 dark:focus:border-primary"
                        placeholder="Cerca"
                        aria-label="Search"
                        value={value} // Aggiunto il valore
                        onChange={onChange} // Aggiunto l'evento di cambio
                    />
                    <div className="flex justify-center items-center ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search text-neutral-700"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>


                </div>
            </form>
        </div>
    );
};

export default Searchbar;