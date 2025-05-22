const Card1 = ({ text, image, description }) => {
  return (
    <div className="h-auto w-full gap-6 p-6 flex flex-col  outline-none bg-white shadow-lg relative overflow-hidden">
        {image && <img src={image} alt="card image" className="w-full rounded-[10px] h-auto" />}
        <div className="flex flex-col gap-6 p-2 mb-4">
            <h3 className="card-text-1 text-left">{text}</h3>
            <p className="card-description-1 text-left">{description}</p>
        </div>
        
    </div>
  );
};

export default Card1;
