//Suponemos que la siguiente informacion esta ubicada en un servidor
//y no te van a llegar de inmediato

const usersList = [
    {id:1,name: 'user1', city: 1},
    {id:2,name: 'user2', city: 2},
    {id:3,name: 'user3', city: 3},
    {id:4,name: 'user4', city: 4},
]

const citiesList = {
    1: "Murcia",
    2: "Cartagena",
    3: "Alicante",
    4: "Ciudad Real"
}

function getUsers(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(usersList)
        }, 3000);
    })
}

function getCities(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(citiesList)
        }, 1000);
    })
}