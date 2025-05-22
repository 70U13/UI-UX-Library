const Card3 = ({ text, image, description }) => {
  return (
    <div className="h-auto w-full gap-4 flex flex-col outline-none border border-black bg-white shadow-lg relative overflow-hidden">
        <div className="">
            {image && <img src={image} alt="card image" className="w-full h-auto" />}
        </div>
        <div className="flex flex-col gap-6 p-6 mb-2">
            <h3 className="card-text-4 text-left">{text}</h3>
            <p className="card-description-4 text-left">{description}</p>
            <button className="mt-4 card-btn-4 btn-outline-none bg-black w-full rounded-[5px] p-5 relative overflow-hidden">
                Take Action Now
            </button>
        </div>
    </div>
  );
};

export default Card3;
