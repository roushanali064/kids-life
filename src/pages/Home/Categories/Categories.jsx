import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [category, setCategory] = useState("Racing Cars");
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://kid-life-server-roushanali064.vercel.app/products/${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])
    
    const categoryCards = <div className='flex justify-center mt-10 gap-5'>
        {
            toys.map(toy=><CategoryCard
            key={toy._id}
            toy={toy}
            ></CategoryCard>)
        }
    </div>

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    return (
        <div className='mt-24 mb-24'>
            <h2 className='mb-20 text-4xl font-bold text-center text-[#E0035D]'>Shop by categories</h2>
            <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                <TabList className="flex justify-center border-none bg-yellow-500 rounded-xl">
                    {/* tabs 1 */}
                    <Tab className="p-4 text-white font-bold">
                        <button onClick={() => setCategory("Racing Cars")}
                            className="focus:outline-none">Racing Cars</button>
                    </Tab>
                    {/* tabs 2 */}
                    <Tab className="p-4 text-white font-bold">
                        <button onClick={() => setCategory("Classic Cars")} className="focus:outline-none"
                        >Classic Cars</button>
                    </Tab>
                    {/* tabs 3 */}
                    <Tab className="p-4 text-white font-bold">
                        <button onClick={() => { setCategory("Off-Road Cars") }} className="focus:outline-none"
                        >Off-Road Cars</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    {categoryCards}
                </TabPanel>

                <TabPanel>
                {categoryCards}
                </TabPanel>

                <TabPanel>
                {categoryCards}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;