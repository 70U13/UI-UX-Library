const Card2 = ({ text, image, description }) => {
  return (
    <div className="h-auto w-full gap-6 p-6 flex flex-col outline-none bg-white shadow-lg relative overflow-hidden">
        {image && <img src={image} alt="card image" className="w-full rounded-[10px] h-auto" />}
        <div className="flex flex-col gap-6 p-2">
            <h3 className="card-text-3 text-left">{text}</h3>
            <p className="card-description-3 text-left">{description}</p>
        </div>
        <div className="flex flex-row justify-center gap-6 p-2">
            <button className="card-btn-3-standby btn-outline-none w-full max-w-[150px] rounded-[5px] p-5 relative overflow-hidden">
                Cancel
            </button>
            <button className="card-btn-3-active btn-outline-none w-full max-w-[150px] rounded-[5px] p-5 relative overflow-hidden">
                Continue
            </button>
        </div>
        
    </div>
  );
};

export default Card2;
