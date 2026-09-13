import React, { use, useState } from 'react';
import type { IProductTypeDeclared } from './ProductDataTypes/Product';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

interface IProductsPropsType {
    fetchDataPushInProducts: Promise<IProductTypeDeclared[]>
}

const Products = ({ fetchDataPushInProducts }: IProductsPropsType) => {
    const fetchDataProducts = use(fetchDataPushInProducts);
    const [selectedPlayer, setSelectedPlayer] = useState<IProductTypeDeclared[]>([]);

    return (
        <div>
            <div className='container mx-auto ]'>
                <h1 className='font-black text-4xl'>Explore the <span className='text-blue-600'>Technologies</span></h1>
                <p className='font-light text-xl text-gray-500 mt-[20px]'>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className=' container mx-auto grid grid-cols-12'>
                <div className=' col-span-9 '>
                    <LeftSideBar
                        fetchDataProductsPushinLeftSideBar={fetchDataProducts}
                        selectedPlayerPushLeftBar={selectedPlayer}
                        selectedPlayerPushRightBar={setSelectedPlayer}
                    />
                </div>

                <div className=' col-span-3'>
                    <RightSideBar
                        selectedProducts={selectedPlayer}
                        setSelectedProducts={setSelectedPlayer}
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;

