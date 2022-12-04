import React from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  
    const [product, setProduct] = useState({});
    const {itemID} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'products', itemID)

        getDoc(docRef).then((item)=>{
            const productDetail = {
                ...item.data(),
                id: item.id,
            }; 

            setProduct(productDetail);
        });
    }, [itemID]);
  
  
    return <ItemDetail product={product}/>;
}
