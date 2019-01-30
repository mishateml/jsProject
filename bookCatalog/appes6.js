class Book {
    constructor(title, author, isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}
class UI {
    addBookToList(book){
        const  list = document.getElementById('book--list');
        // Crate tr Element
        const row = document.createElement('tr');
        // insert col's
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
`;
        list.appendChild(row);
    };

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    };

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };

    showAlert(msg, className){
        // grub elements
        const cls = (className === true)? 'sucsess': 'error';
        const bookForm = document.querySelector('#book--form');
        const conteiner = document.querySelector('.container');
        // create div
        const div = document.createElement('div');
        div.className = `alert ${cls}`;
        div.appendChild(document.createTextNode(msg));
// insert div
        conteiner.insertBefore(div, bookForm);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        },3000)
    }



}
// Event Listeners for add book
document.getElementById('book--form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // instantiating book list

    const book = new Book(title, author, isbn);

    // instantiating UI
    const ui = new UI();
    // Validation
    if(title === '' || author === '' || isbn == ''){
        ui.showAlert('Fill all fields', false);
    }else {

        ui.addBookToList(book);
        ui.showAlert('Book Added', true);
        ui.clearFields();
    }
    e.preventDefault();
})
// Event Listeners for delete book
document.getElementById('book--list').addEventListener('click', function (e) {
// instantiating UI
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Deleted', true);
    e.preventDefault();
})