const BtnStandby = ({ text, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={`btnStandby btn-outline-none w-full col-btn-text p-5 rounded-[30px] relative overflow-hidden`}>
        {text}
    </button>
  );
};

export default BtnStandby;
