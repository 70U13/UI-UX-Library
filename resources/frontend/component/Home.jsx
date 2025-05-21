import Btn0 from '../component/buttons/Btn0';
import Btns from '../component/Buttons'

const Home = () => {
    const tabs = [
        { text: "Buttons" },
    ];
    return (
    <>
        <div className="h-[700px] flex flex-row gap-10 m-[100px] ">
            <div className="overflow:hidden flex flex-col h-full w-full max-w-[300px] bg-violet-200 rounded-[20px] full-shadow gap-8 p-12">
                {tabs.map((btn, index) => (
                    <Btn0 
                        key={index} 
                        text={btn.text} 
                    />
                ))}
            </div>
            <div className="overflow-y-auto h-full w-full border-2 border-violet-300 rounded-[20px] col-left full-shadow scrollable-conteiner p-6">
                <Btns />
            </div>
        </div>
    </>
    );
};

export default Home;