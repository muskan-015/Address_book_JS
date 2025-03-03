const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Muskan", "Gupta", "Bhopal", "India", "M.P.", "101", "9876543210", "muskan@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    const contact2 = new Contact(
        "Khushi", "Gupta", "Bhopal", "India","M.P.","100","9197979988","khushi@gmail.com"
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "ab", "cd", "abc", "In", "mp", "1001", "12345", "muskan-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}