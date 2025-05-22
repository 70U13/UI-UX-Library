const Btn1 = ({ className = "", text, hasIcon = false, hasSpan = false, hasArrow = false }) => {
  return (
    <button className={`justify-center items-center btn1 my-20 mx-12 py-6 px-10 relative overflow-hidden ${className}`}>
        {hasSpan && <span className="absolute left-0 top-0 w-full h-full bg-transparent z-[-1]"></span>}
        {hasIcon && 
        <svg
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          height="40"
          width="40"
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
          <path d="M7 11l5 5l5 -5"></path>
          <path d="M12 4l0 12"></path>
        </svg>}
        {text}
        {hasArrow && 
          <div className="arrow-wrapper">
              <div className="arrow"></div>
          </div>
        }
    </button>
  );
};

export default Btn1;
