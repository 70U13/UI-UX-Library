const Card7 = ({ text, image, description }) => {
  return (
    <div className="h-auto w-full gap-4 p-6 flex flex-col outline-none bg-[#1B1C25] rounded-[20px] shadow-lg relative overflow-hidden">
        {image && <img src={image} alt="card image" className="w-full rounded-[10px] h-auto" />}
        <div className="flex flex-col gap-6 p-6 mb-2">
            <h3 className="card-text-8 text-left">{text}</h3>
            <p className="card-description-8 text-left">{description}</p>
            <div className="flex justify-end">
                <button className="mt-4 card-btn-8 btn-outline-none bg-[#B2B2B2] w-full max-w-[150px] rounded-[5px] p-5 relative overflow-hidden">
                    Buy Now
                </button>
            </div>
            
        </div>
    </div>
  );
};

export default Card7;
