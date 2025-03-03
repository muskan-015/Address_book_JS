const AddressBook = require('./services/AddressBook');
const Contact = require('./model/Contact');

const addressBook = new AddressBook();

try {
   
    const contact1 = new Contact(
    "Muskan", "Gupta", "Bhopal", "India", "M.P.", "101", "9876543210", "muskan@gmail.com"
    );
    console.log(addressBook.addContact(contact1)); 

    
const contact2 = new Contact(
    "Khushi", "Gupta", "Bhopal", "India", "M.P.", "100", "9876541110", "khushi@gmail.com"
);
console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Khushi", { address: "Mumbai", city: "New York", phone: "9238867890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
    console.log(addressBook.deleteContact("Khushi"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());
    console.log("Total Contacts:", addressBook.countContacts()); 

    const duplicateContact = new Contact(
        "Muskan", "Gupta", "Bhopal", "India", "M.P.", "101", "9876543210", "muskan@gmail.com"
    ); console.log(addressBook.addContact(duplicateContact));  

    console.log("Contacts in India:");
    console.log(addressBook.searchByCityOrState("India")); 

    console.log("Viewing Persons by City or State:");
    console.log(addressBook.viewPersonsByCityOrState());

    console.log("Count of Contacts by City and State:");
    console.log(addressBook.countByCityOrState()); 

    console.log("\nContacts Sorted Alphabetically:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));
}  catch (error) {
console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "ab", "cd", "abc", "In", "I", "10001", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}

