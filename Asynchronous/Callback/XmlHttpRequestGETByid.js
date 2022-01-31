const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        const usersJson = this.responseText
        const usersObject = JSON.parse(usersJson)

        const usuariosSelect = document.querySelector('#usuariosSelect')

        for (const user of usersObject){
            const opt = document.createElement('option')
            opt.value = user.id
            opt.textContent = user.name
            usuariosSelect.appendChild(opt)
        }
    }
}
xhr.open("get","https://jsonplaceholder.typicode.com/users")
xhr.send();