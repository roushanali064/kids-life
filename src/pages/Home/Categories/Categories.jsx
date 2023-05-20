import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);

  const categories = ['Racing Cars', 'Classic Cars', 'Off-Road Cars'];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
    return (
        <div className='mt-24 mb-24'>
            <h2 className='mb-20 text-4xl font-bold text-center text-[#E0035D]'>Shop by categorys</h2>
            <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                <TabList className="flex justify-center border-none bg-yellow-500 rounded-xl">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            className="p-4 text-white font-bold"
                        >
                            <button className="focus:outline-none">{category}</button>
                        </Tab>
                    ))}
                </TabList>

                <TabPanel>
                    <h1>hello</h1>
                </TabPanel>

                <TabPanel>
                    {/* Content for Classic Cars */}
                </TabPanel>

                <TabPanel>
                    {/* Content for Off-Road Cars */}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;