// import { RxCross2 } from 'react-icons/rx';
// import type { IProductTypeDeclared } from './ProductDataTypes/Product';

// interface IRightSideBarProps {
//     selectedProducts: IProductTypeDeclared[];
// }

// const RightSideBar = ({ selectedProducts }: IRightSideBarProps) => {
//     return (
//         <div>
//             {selectedProducts.map((product) => (
//                 <div className=' '>
//                     <div className='ml-6 flex justify-between items-center mb-2 rounded-2xl border border-gray-300 px-[20px] py-[10px]'>
//                         <div className='flex gap-4'>
//                             <img
//                                 src={product.icon} alt="" className='h-[60px] w-[60px] ' />

//                             <div>
//                                 <h2 className='font-bold text-xl'>{product.name}</h2>
//                                 <p className='text-gray-400'>{product.category}</p>
//                             </div>
//                         </div>
//                         <div className='text-3xl text-gray-500'>
//                             <button onClick={()=>} 
//                             className=''> 
//                                 <RxCross2 />
//                             </button>
//                         </div>
//                     </div>

//                 </div>

//             ))}
//         </div>
//     );
// };

// export default RightSideBar;

import { RxCross2 } from 'react-icons/rx';
import type { Dispatch, SetStateAction } from 'react';
import type { IProductTypeDeclared } from './ProductDataTypes/Product';
import { toast } from 'react-toastify';
import Products from './Products';
import { DiLaravel } from 'react-icons/di';

interface IRightSideBarProps {
    selectedProducts: IProductTypeDeclared[];
    setSelectedProducts: Dispatch<SetStateAction<IProductTypeDeclared[]>>;
}

const RightSideBar = ({
    selectedProducts,
    setSelectedProducts
}: IRightSideBarProps) => {

if(selectedProducts.length==0){
    return(
        <div className='ml-6 items-center mb-2 rounded-2xl border border-gray-300 px-[20px] py-[10px]'>
            <div className='py-[20px]'>
                <h2 className='ml-6 font-semibold text-4xl '>Your Stack</h2>
            <p className='ml-6 mt-2 text-gray-500 '>No technologies selected yet.</p>
            <div className='ml-6 mt-4 font-bold text-gray-500 rounded-2xl border border-gray-300 flex justify-center items-center text-xl h-[80px]'>
                Your stack is empty.
            </div>
            </div>
        </div>
    )
}

    return (
        <div>
            <h2 className='ml-6  font-semibold text-3xl '>Your Stack</h2>
            <p className='ml-6 mb-6 text-gray-500 font-semibold '>{selectedProducts.length} Technology Selected</p>
            
            {selectedProducts.map((product) => (

                <div key={product.name}>

                    <div className='ml-6 flex justify-between items-center mb-2 rounded-2xl border border-gray-300 px-[20px] py-[10px]'>

                        <div className='flex gap-4'>

                            <img
                                src={product.icon}
                                alt={product.name}
                                className='h-[60px] w-[60px]'
                            />

                            <div>
                                <h2 className='font-bold text-xl'>
                                    {product.name}
                                </h2>

                                <p className='text-gray-400'>
                                    {product.category}
                                </p>
                            </div>

                        </div>

                        <div className='text-3xl text-gray-500'>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedProducts(
                                        selectedProducts.filter(
                                            (item) => item.name !== product.name));
                                            toast.success("Removed Successfully");
                                }}
                                className='cursor-pointer'
                            >
                                <RxCross2 />
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default RightSideBar;