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

// Show alert
UI.prototype.showAlert = function(message, className){
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

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value   
    // Instaniating a book
    const book = new Book(title, author, isbn);
    
    // Instantiate a UI object
    const ui = new UI();
    
    // Validate
    if(title ==='' || author ==='' || isbn ==='') {
      // Error alert
    ui.showAlert('Please fill in all fields', 'error')
 
    } else {
    // Add book to list
    ui.addBookToList(book);
    
    // Clear fields
    ui.clearFields();
        
    // Show success message
    ui.showAlert('Book has been added!', 'success')
    
    }
    
    e.preventDefault();
})


// add event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
      e.target.parentElement.parentElement.remove();
    
        // show success message
    const ui = new UI();    
    
    ui.showAlert('Book has been removed!', 'success');
    }
    
})











