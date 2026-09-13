import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IProductTypeDeclared } from './ProductDataTypes/Product';
import { toast } from 'react-toastify';

interface ILeftSideBarProps {
    fetchDataProductsPushinLeftSideBar: IProductTypeDeclared[];
    selectedPlayerPushLeftBar: IProductTypeDeclared[];
    selectedPlayerPushRightBar: Dispatch<SetStateAction<IProductTypeDeclared[]>>;
}

const LeftSideBar = ({fetchDataProductsPushinLeftSideBar,selectedPlayerPushLeftBar,selectedPlayerPushRightBar
}: ILeftSideBarProps) => {

    
    return (
        <div className='grid grid-cols-3 gap-10'>
            {fetchDataProductsPushinLeftSideBar.map((product) => {
                const isSelected = selectedPlayerPushLeftBar.some(
                    (item) => item.name === product.name
                );

                return (

                    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">


                        <div className="flex items-start justify-between gap-4">

                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 transition group-hover:bg-cyan-50">
                                <img
                                    src={product.icon}
                                    alt={product.name}
                                    className="h-10 w-10 object-contain"
                                />
                            </div>


                            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600">
                                {product.badge}
                            </span>
                        </div>



                        <div className="mt-5">


                            <h2 className="text-2xl font-bold text-slate-900 transition group-hover:text-cyan-600">
                                {product.name}
                            </h2>


                            <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                                {product.description}
                            </p>

                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4">
                            <div>
                                <p className="  mt-1 text-sm font-semibold text-slate-700">
                                    {product.category}
                                </p>
                            </div>


                            <div>
                                <p className="mt-1 flex justify-center  text-sm font-semibold text-slate-700">
                                    {product.difficulty}
                                </p>
                            </div>


                            <div>
                                <p className="mt-1  flex justify-end  gap-1 text-sm font-semibold text-slate-700">
                                    <span className="text-yellow-400">★</span>
                                    {product.rating}
                                </p>
                            </div>

                        </div>

                        <div className="mt-5 flex items-center justify-between">

                            <button
                                onClick={() => {
                                    selectedPlayerPushRightBar([
                                        ...selectedPlayerPushLeftBar,
                                        product]);

                                    toast.success("Technology added to stack!");
                                }}
                                className="btn btn-neutral"
                                disabled={isSelected}>
                                {isSelected ? "Selected" : "Add to Stack"}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default LeftSideBar;