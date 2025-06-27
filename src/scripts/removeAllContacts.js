const writeContacts = require("../utils/writeContacts");

const removeAllContacts = async () => {
  await writeContacts([]);
};

removeAllContacts();
