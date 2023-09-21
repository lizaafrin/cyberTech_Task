import React from 'react';

const Maincontent = () => {
    return (
            <div className='flex'>
                <div className='hidden md:block lg:w-1/5 bg-[#9398bf] min-h-[800px]'>
                    <h3 className='font-bold mt-14'>Sidebar</h3>
                    <select className="select select-bordered w-[80%] max-w-xs mt-4">
                        <option disabled selected>Item 1</option>
                        <option className='bg-[#b8b5b5]'>Item A</option>
                        <option className='bg-[#b8b5b5]'>Item B</option>
                    </select>
                    <select className="select select-bordered w-[80%] max-w-xs my-6">
                        <option disabled selected>Item 2</option>
                        <option className='bg-[#b8b5b5]'>Item A</option>
                        <option className='bg-[#b8b5b5]'>Item B</option>
                    </select>
                    <select className="select select-bordered w-[80%] max-w-xs">
                        <option disabled selected>Item 3</option>
                        <option className='bg-[#b8b5b5]'>Item A</option>
                        <option className='bg-[#b8b5b5]'>Item B</option>
                    </select>
                </div>
                <div className='w-4/5 mt-10 mx-auto'>
                    <h1 className='text-3xl font-bold'>Main Content</h1>
                    <p className='text-justify mt-4 w-full md:w-[85%] mx-auto'>My country’s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area. <br /> <br />

                        But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers’ blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide. <br /> <br />

                        But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country. </p>
                </div>
            </div>
    );
};

export default Maincontent;