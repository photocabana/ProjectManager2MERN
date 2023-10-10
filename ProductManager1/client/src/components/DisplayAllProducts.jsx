import React, { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const DisplayAll = (props) => {

    const { productItems, setProductItems} = props
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res)
                setProductItems(res.data.products)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <header>All Products: </header>
            {productItems.map((product, index) => (
                <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll