const Card4 = ({ text, image, description, subtext }) => {
  return (
    <div className="h-auto w-full flex flex-col p-6 gap-4 outline-none bg-[#4C585B] rounded-[10px] shadow-lg relative overflow-hidden">
      <p className="card-text-5 text-left">{description}</p>
      <div className="flex flex-row justify-center gap-6 p-2">
            <button className="card-btn-5 btn-outline-none w-full rounded-[5px] p-5 relative overflow-hidden">
                Interested
            </button>
            <button className="card-btn-5 btn-outline-none w-full rounded-[5px] p-5 relative overflow-hidden">
                Not Interested
            </button>
        </div>
    </div>
  );
};

export default Card4;
