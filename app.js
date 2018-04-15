// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create TR
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;
    
    list.appendChild(row);
 
}

// Show Alert
UI.prototype.showAlert = function(message, className){
    // Create a div
    const div = document.createElement('div');
    // Add class name 
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Disapear after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove()
    }
}


// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){ 
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // Instanitaing book
    const book = new Book(title, author, isbn);
    
    // Instantiatee UI
    const ui = new UI()
    
    // Validate 
    if (title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
    } else {
        
        
    // Add book to list
    ui.addBookToList(book);
        
    // Show success
    ui.showAlert("Book added!", "success");
    
    // Clear fields
    ui.clearFields();
    
    }
    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiatee UI
    const ui = new UI()
    // Delete book
    ui.deleteBook(e.target);
    
    // Show message
    ui.showAlert('Book removed!', 'success');
    
    
    e.preventDefault();
})



















