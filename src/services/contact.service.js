import { DbService } from './db-service.js';
import { utils } from './utils.service.js';
const KEY = 'contacts';

export default {
    query,
    get,
    remove,
    save,
    getEmptyContact
};

async function query() {
    let contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Contact');
    }
    return contact;
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact);
}


function getEmptyContact() {
    return {
        "name": "",
        "email": "",
        "phone": ""

    };
}

function _createDefaultContacts() {
    return [
        _createContact("Ochoa Hyde", "ochoa@gmail.com", "+1 (968) 593-3824"),
        _createContact("Lee Segal", "segalee17@gmail.com", "+(972) 506-947954"),
        _createContact("May Elgarat", "mayyy@gmail.com", "+(972) 593-3824"),

    ];
}

function _createContact(name, email, phone) {
    return {
        "_id": utils.getRandomId(),
        name,
        email,
        phone
    };
}