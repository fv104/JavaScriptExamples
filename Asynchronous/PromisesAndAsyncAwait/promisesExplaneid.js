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

function getUsers(dato,intervalo){
    return new Promise((resolve,reject) =>{

        if(dato == '' || typeof dato !== 'object'){
            reject("El dato esta vacio o no es el objeto")
        }else if(intervalo < 0 || typeof intervalo !== 'number'){
            reject("El intervalo no puede ser negativo y tiene que ser numericoo")
        }else{
            setTimeout(() => {
                resolve(dato)
            }, intervalo);
        }
        
    })
}

function getCities(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(citiesList)
        }, 2000);
    })
}

//Para consumir las promesas

const usersPromise = getUsers(usersList,3000);
const citiesPromise = getCities()

// usersPromise.then(users => console.log(users))
// citiesPromise.then(cities => console.log(cities))



//Las promesas se pueden encadenar, para garantizar que su procesamiento sea en un order correcto

// usersPromise.then(users =>{
//     console.log("Users ->", users)
//     return getCities()
// }).then(cities =>{
//     console.log("Cities ->",cities)
// }).catch(e =>{
//     console.log("Se ha producido un error")
// })

/** Async Await, implica "No more then". Permite tratar el codigo asincrono con una apariencia sincronica
 * porque internamente se continua con las promesas
 */

const getInfo = async () =>{
    let users = await getUsers(usersList,3000)
    let cities = await getCities()
    console.log("Users ->", users)
    console.log("Cities ->",cities)
}

getInfo();
