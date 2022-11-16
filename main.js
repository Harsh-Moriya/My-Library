const add = document.querySelector('.btn-add');
const addBook = document.querySelector('.add-name');
const authorInput = document.querySelector('.author');
const genreInput = document.querySelector('.genre');
const manageBook = document.querySelector('.manage-name');
const user = document.querySelector('.user');
const issue = document.querySelector('.btn-issue');
const retur = document.querySelector('.btn-return');
const search = document.querySelector('.searchbar');
const table = document.querySelector('.table')


window.addEventListener('DOMContentLoaded', ()=>{
    let body = localStorage.getItem('Books');
    let tableBody = document.querySelector('.table-content');

    tableBody.innerHTML = body;
})

class book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class display {
    add(newBook) {
        let tableBody = document.querySelector('.table-content');
        tableBody.innerHTML += `<tr class="row">
                                    <th class="title">${newBook.name}</th>
                                    <th>${newBook.author}</th>
                                    <th>${newBook.genre}</th>
                                    <th class="status">Available</th>
                                    <th class="username">----</th>
                                </tr>`
    }

    clear() {
        addBook.value = '';
        authorInput.value = '';
        genreInput.value = '';
    }

    saveToLocalStorage(Content) {
        localStorage.setItem('Books', Content);
    }
}

add.addEventListener('click', ()=>{
    let bookName = addBook.value;
    let author = authorInput.value;
    let genre = genreInput.value;

    let newBook = new book(bookName, author, genre);
    let dis = new display()

    dis.add(newBook);
    dis.clear()

    let tableBody = document.querySelector('.table-content');
    let content = tableBody.innerHTML
    dis.saveToLocalStorage(content)
    
})

issue.addEventListener('click', ()=>{
    let bookTitle = manageBook.value;
    let newUser = user.value;

    let titles = document.querySelectorAll('.title');
    let usernames = document.querySelectorAll('.username');
    let status = document.querySelectorAll('.status');
    titles.forEach(function(currTitle, index){
        if(currTitle.textContent === `${bookTitle}`) {
            usernames[index].textContent = `${newUser}`
            status[index].textContent = 'Issued'
            manageBook.value = '';
            user.value = '';
        }
    })
    let dis = new display()
    let tableBody = document.querySelector('.table-content');
    let content = tableBody.innerHTML
    dis.saveToLocalStorage(content)
})

retur.addEventListener('click', ()=>{
    let bookTitle = manageBook.value;
    let newUser = user.value;

    let titles = document.querySelectorAll('.title');
    let usernames = document.querySelectorAll('.username');
    let status = document.querySelectorAll('.status');
    titles.forEach(function(currTitle, index){
        if(currTitle.textContent === `${bookTitle}` && usernames[index].textContent === `${newUser}`) {
            usernames[index].textContent = '----'
            status[index].textContent = 'Available'
            manageBook.value = '';
            user.value = '';
        }
    })
    let dis = new display()
    let tableBody = document.querySelector('.table-content');
    let content = tableBody.innerHTML
    dis.saveToLocalStorage(content)
})

search.addEventListener('input', ()=>{
    let rows = document.querySelectorAll('.row');
    let item = search.value;

    rows.forEach(function(row, index){
        if(!row.children[0].textContent.includes(item)) {
            row.classList.add('hide-row');
        } else {
            row.classList.remove('hide');
        }
    })

})



