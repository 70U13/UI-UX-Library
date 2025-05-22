const BtnActive = ({ text }) => {
  return (
    <button className={`btnActive btn-outline-none w-full col-btn-text bg-white p-5 rounded-[30px] shadow-lg relative overflow-hidden`}>
        {text}
    </button>
  );
};

export default BtnActive;
