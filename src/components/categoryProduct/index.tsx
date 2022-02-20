import './index.scss';
import Carousel from '../carousel'


const CategoryProducts = ({ category, paginate }: any) => {
    return (
        <div className="category">
            <h2>{category}</h2>
            <hr className="mb-2" />
            <Carousel categoryName={category} paginate={paginate} />
        </div>
    )
}

export default CategoryProducts