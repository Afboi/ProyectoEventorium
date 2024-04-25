import "../../index.css";

export function CreateEvent() {
  //const [counter, setCounter] = useState(value);
  return (
    <>
      <button
        className="bg-rose-500 text-white flex place-items-center w-full place-content-center p-2 rounded-md"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        CREATE AN EVENT
      </button>
    </>
  );
}
