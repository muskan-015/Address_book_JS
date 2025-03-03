const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Muskan", "Gupta", "Bhopal", "India", "M.P.", "101", "1234567890", "muskan@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());