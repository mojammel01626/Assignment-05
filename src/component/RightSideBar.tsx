
import type { IProductTypeDeclared } from './ProductDataTypes/Product';

interface IRightSideBarProps  {
    fetchDataProductsPushinRightSideBar:IProductTypeDeclared[];
}

const RightSideBar = ({fetchDataProductsPushinRightSideBar}:IRightSideBarProps) => {
    console.log(fetchDataProductsPushinRightSideBar);
    return (
        <div>
            
        </div>
    );
};

export default RightSideBar;