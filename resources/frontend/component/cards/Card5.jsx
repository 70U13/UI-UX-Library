const Card5 = ({ text, image, description }) => {
  return (
    <div className="h-auto w-full gap-8 flex flex-col outline-none rounded-[40px] bg-white shadow-lg relative overflow-hidden">
        <div className="">
            {image && <img src={image} alt="card image" className="w-full h-[400px]" />}
        </div>
        <div className="flex flex-row gap-6 mb-8 justify-center items-center">
            <p className="card-description-6 text-left">{description}</p>
            <button className="card-btn-6 btn-outline-none bg-[#7F8CAA] w-auto rounded-[10px] px-4 py-2 relative overflow-hidden">
                Apply Now
            </button>
        </div>
    </div>
  );
};

export default Card5;
