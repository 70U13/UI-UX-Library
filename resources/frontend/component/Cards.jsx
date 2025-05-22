import cardData from '../component/cards/CardData'; // Adjust path if necessary

const Cards = () => {
  return (
    <div className="grid w-full max-w-[1400px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto">
      {cardData.map((card, index) => {
        const Component = card.Component;
        return (
            <div className='flex justify-center items-center bg-violet-100 border border-gray-200 rounded-[20px] p-6'>
                <Component
                    text={card.text}
                    image={card.image}
                    description={card.description}
                    subtext={card.subtext}
                />
            </div>
        );
      })}
    </div>
  );
};

export default Cards;
