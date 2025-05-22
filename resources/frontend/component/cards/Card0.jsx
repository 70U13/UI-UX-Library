const Card0 = ({ text, image, description, subtext }) => {
  return (
    <div className="h-auto w-full flex flex-col outline-none bg-white rounded-[10px] shadow-lg relative overflow-hidden">
      <div className="">
        {image && <img src={image} alt="card image" className="w-full h-auto" />}
      </div>
      
      <div className="flex flex-col p-6 gap-6">
        <h3 className="card-text-2 text-left">{text}</h3>
        <p className="card-description-2 text-left">{description}</p>
        <p className="card-subtext-2 text-left">{subtext}</p>
      </div>
    </div>
  );
};

export default Card0;
