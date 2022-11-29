import toast from 'react-hot-toast';
export const ProductAdd = (product) => {
    fetch('https://carbs-server.vercel.app/products', {
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