import { useState } from 'react';

import Btn0 from '../component/buttons/Btn0';
import Buttons from '../component/Buttons'
import Cards from '../component/Cards';
import BtnActive from '../component/buttons/BtnActive';
import BtnStandby from '../component/buttons/BtnStandby';

const Home = () => {
    const tabs = ['Buttons', 'Cards'];
    const [activeTab, setActiveTab] = useState('Buttons');

    const renderContent = () => {
        switch (activeTab) {
        case 'Buttons':
            return <Buttons />;
        case 'Cards':
            return <Cards />;
        default:
            return <div>Select a tab</div>;
        }
    };

    return (
    <>
        <div className="h-[700px] flex flex-row gap-10 m-[100px] ">
            <div className="overflow-hidden flex flex-col h-full w-full max-w-[300px] bg-violet-200 rounded-[30px] gap-8 p-12">
                {tabs.map((tab, index) =>
                    tab === activeTab ? (
                        <BtnActive 
                            key={index} 
                            text={tab} 
                        />
                    ) : (
                        <BtnStandby
                            key={index}
                            text={tab}
                            onClick={() => setActiveTab(tab)}
                        />
                    )
                )}
            </div>
            <div className="w-full rounded-[20px] px-1 py-2 border-2 border-[#d8b4fe] overflow-hidden full-shadow">
                <div 
                    key={activeTab}
                    className="tab-content overflow-y-auto h-full w-full p-6 scrollable-conteiner">
                    {renderContent()}
                </div>
            </div>

        </div>
    </>
    );
};

export default Home;