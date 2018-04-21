class Book {
    constructor(title, author, isbn){
        this.title = title;
        this. author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert col
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className){
        // Creaet div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent 
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Add to DOM
        container.insertBefore(div, form);
        // Remove after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();},3000)
    }
    
    deleteBook(target){
        if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();

        // show success message
        const ui = new UI();    

        ui.showAlert('Book has been removed!', 'success');
        }
    }
    
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}