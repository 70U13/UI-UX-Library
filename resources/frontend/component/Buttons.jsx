import Btn1 from '../component/buttons/Btn1';   

const Buttons = () => {
    const buttonStyles1 = [
        { className: "text-16 button16", text: "Join Now" },
        { className: "text-blue text-4 button4", text: "Sign In" },
        { className: "text-9 button9", text: "Learn More" },
        { className: "text-white text-15 button15 ", text: "Submit" },
        
        { className: "text-13 button13", text: "Explore" },
        { className: "text-purple text-8 button8", text: "Say Hello!", hasSpan: true},
        { className: "text-14 button14", text: "Search" },
        { className: "text-17 button17", text: "Contact Me!" },

        { className: "text-10 button10", text: "Proceed" },
        { className: "text-12 button12", text: "Confirm" },
        { className: "font-style-1 button1", text: "Get Started" },
        { className: "text-black text-2 button2", text: "Continue", hasArrow: true },
        
        { className: "text-3 button3", text: "Try It Free" },
        { className: "text-19 button19", text: "Finish" },
        { className: "text-18 button18", text: "Show More" },
        { className: "text-white text-11 button11", text: "Discover More" },
    ];
    
    return (
        <>
        <div className="text-center justify-center items-center w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
            {buttonStyles1.map((btn, index) => (
                <div
                    key={index}
                    className="h-full border border-gray-200 rounded-xl flex justify-center items-center"
                    >
                    <Btn1
                        className={`mx-auto btn-outline-none ${btn.className}`}
                        text={btn.text}
                        hasSpan={btn.hasSpan}
                        hasArrow={btn.hasArrow}
                    />
                </div>
            ))}
        </div>
        </>
    );
};

export default Buttons;