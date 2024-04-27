import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ProductItem from './product-item';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products/")
            .then(res => {
                setProducts(res.data.data); 
            })
            .catch(err => console.log("ERROR" + err));
    }, []);

    const DataTable = () => {
        return products.map((res, i) => {
            return <ProductItem product={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover style={{ backgroundColor: '#ffffe0' }}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody>
            </Table>
        </div>
    );
}

