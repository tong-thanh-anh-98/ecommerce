import ProductImg from '../../assets/images/mens/eight.jpg';

const LatesProducts = () => {
    return (
        <section className='section-2 py-5'>
            <div className='container'>
                <h2>New Arrivals</h2>
                <div className='row mt-4'>
                    <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg} alt='' className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=''>Product name in category</a>
                                <div className='price'>$999 <span className='text-decoration-line-through'>$1499</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg} alt='' className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=''>Product name in category</a>
                                <div className='price'>$999 <span className='text-decoration-line-through'>$1499</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg} alt='' className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=''>Product name in category</a>
                                <div className='price'>$999 <span className='text-decoration-line-through'>$1499</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-6'>
                        <div className='product card border-0'>
                            <div className='card-img'>
                                <img src={ProductImg} alt='' className='w-100' />
                            </div>
                            <div className='card-body pt-3'>
                                <a href=''>Product name in category</a>
                                <div className='price'>$999 <span className='text-decoration-line-through'>$1499</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatesProducts

// import ProductImg from '../../assets/images/mens/eight.jpg';
// const products = [
//     {
//         id: 1,
//         name: 'Product 1',
//         image: ProductImg,
//         price: 999,
//         originalPrice: 1499,
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         image: ProductImg,
//         price: 799,
//         originalPrice: 1299,
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         image: ProductImg,
//         price: 599,
//         originalPrice: 999,
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         image: ProductImg,
//         price: 1099,
//         originalPrice: 1599,
//     },
// ];

// const LatesProducts = () => {
//     return (
//         <section className='section-2 py-5'>
//             <div className='container'>
//                 <h2>New Arrivals</h2>
//                 <div className='row mt-4'>
//                     {products.map((product) => (
//                         <div className='col-md-3' key={product.id}>
//                             <div className='product card border-0'>
//                                 <div className='card-img'>
//                                     <img src={product.image} alt={product.name} className='w-100' />
//                                 </div>
//                                 <div className='card-body pt-3'>
//                                     <a href=''>{product.name}</a>
//                                     <div className='price'>
//                                         ${product.price}{' '}
//                                         <span className='text-decoration-line-through'>${product.originalPrice}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LatesProducts;
