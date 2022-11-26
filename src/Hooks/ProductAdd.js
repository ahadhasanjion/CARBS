import toast from 'react-hot-toast';
export const ProductAdd = (product) => {
    fetch('http://localhost:5000/products', {
        method: 'POST', 
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
          toast.success('Product Added Successfully');
        }
    })
   

}