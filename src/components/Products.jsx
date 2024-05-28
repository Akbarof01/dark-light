import { useEffect, useState } from 'react'

function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((result) => setData(result));
    }, [])

    return (
        <div className='mx-auto grid grid-cols-3 m-5 '>
            {
                data.length ? data.map(({ id, title, price, images }) => (
                 
                <div key={id} className="card w-72 bg-base-100 shadow-xl mb-10">
                    <figure><img src={images} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions justify-between">
                        <h4 className='mt-4 font-medium'>Price:{price/10}$</h4>
                            <div className="btn rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 48 48"><defs><mask id="ipSShoppingCartAdd0"><g fill="none"><path fill="#fff" d="M39 32H13L8 12h36z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z" /><circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" /><circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" /><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22h8m-4 4v-8" /></g></mask></defs><path fill="#454F5B" d="M0 0h48v48H0z" mask="url(#ipSShoppingCartAdd0)" /></svg>
                            </div>
                        </div>
                    </div>
                </div>)) : <h1>Loader...</h1>
            }

        </div>
    )
}

export default Products