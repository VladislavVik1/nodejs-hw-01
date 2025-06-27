const createFakeContact = require("../utils/createFakeContact");
const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  await writeContacts([...contacts, newContact]);
};

addOneContact();
