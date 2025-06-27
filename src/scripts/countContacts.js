const readContacts = require("../utils/readContacts");

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Кількість контактів: ${contacts.length}`);
};

countContacts();
