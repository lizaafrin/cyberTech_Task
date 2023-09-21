import React from 'react';

const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id='check' />
            <div className='sidebar'>
                <div className='my-6'>
                    <h1 className='font-bold text-xl'>Sidebar</h1>
                    {/* <span className='font-bold'>Sidebar <FontAwesomeIcon className='ms-20' id='cancel' icon={faXmark} /></span> */}
                </div>
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
        </>
    );
};

export default Sidebar;