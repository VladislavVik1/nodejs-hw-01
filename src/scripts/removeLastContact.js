const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
