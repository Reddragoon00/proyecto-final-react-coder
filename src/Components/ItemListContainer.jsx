import React from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  
    const [products, setProducts] = useState([]);
    const {CategoryID} = useParams();

    useEffect(() => {
        const db = getFirestore();
        let myCollection;
        
        if(CategoryID == undefined){
            myCollection = collection(db, 'products');
        }else{
            myCollection = query(
                collection(db, 'products'),  
                where("CategoryID", "==", CategoryID));
        }
        getDocs(myCollection).then((data)=>{
            const productsArr = data.docs.map(product => ({
                ...product.data(),
                id: product.id
            }));

            setProducts(productsArr);
        });
    }, [CategoryID]);
  
  
    return <ItemList products={products} />;
}
