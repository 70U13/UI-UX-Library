import Btn1 from '../component/buttons/Btn1';   

const Buttons = () => {
    const buttonStyles1 = [
        { className: "border-none shadow1 bg-green text-white text-13 button13", text: "Explore" },
        { className: "border-black bg-white text-white font-style-1 button10", text: "Search" },
        { className: "border-purple bg-white text-purple text-3 button3", text: "Try It Free" },
        { className: "border-none bg-red text-white font-style-1 button1", text: "Get Started" },
        
        { className: "border-yellow bg-white text-black/80 text-9 button9", text: "Learn More" },
        { className: "border-none shadow1 bg-blue text-14 button14", text: "Sign In" },
        { className: "border-none bg-orange text-black text-2 button2", text: "Continue", hasArrow: true },

        { className: "border-purple bg-white text-purple font-style-1 button8", text: "Apply Now", hasSpan: true},
        { className: "border-blue bg-white text-blue font-style-1 button4", text: "Sign In" },
        { className: "border-indigo bg-white text-indigo font-style-1 button5", text: "Join Now" },
        { className: "border-none bg-orange text-white font-style-1 button11", text: "Continue" },

        { className: "border-none bg-green text-white font-style-1 ", text: "Submit" },
        { className: "border-none bg-blue text-white font-style-1 button12", text: "Sign In" },
        { className: "border-none bg-indigo text-white font-style-1", text: "Join Now" },
        { className: "border-none bg-purple text-white font-style-1", text: "Try Free" },

        { className: "border-none bg-black text-white font-style-1", text: "Search" },
        { className: "border-none shadow1 bg-red text-white font-style-1", text: "Get Started" },
        { className: "border-none shadow1 bg-orange text-white font-style-1", text: "Continue" },
        { className: "border-none shadow1 bg-yellow text-black font-style-1", text: "Learn More" },
        
        { className: "border-none shadow1 bg-indigo text-white font-style-1", text: "Join Now" },
        { className: "border-none shadow1 bg-purple text-white font-style-1", text: "Try Free" },
        { className: "border-none shadow1 bg-black text-white font-style-1", text: "Search" },
    ];
    
    return (
        <>
            <div className="text-center justify-center items-center w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
                {buttonStyles1.map((btn, index) => (
                    <Btn1 key={index} 
                    className={`mx-auto btn-outline-none ${btn.className}`} 
                    text={btn.text}  
                    hasSpan={btn.hasSpan} 
                    hasArrow={btn.hasArrow}/>
                ))}
            </div>
        </>
    );
};

export default Buttons;