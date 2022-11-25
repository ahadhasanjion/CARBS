export const saveUser = (userBody) => {
    fetch('http://localhost:5000/users', {
        method: 'POST', 
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(userBody)
    })
    .then(res => res.json())
    .then(data => {

    })
   

}