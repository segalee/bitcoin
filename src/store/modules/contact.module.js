import contactService from '../../services/contact.service.js'

export default {
    state: {
        contacts: null
    },
    getters: {
        contacts(state) {
            return state.contacts
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { id }) {
            const idx = state.contacts.findIndex((contact) => contact._id === id);
            state.contacts.splice(idx, 1);
        },
        saveContact(state, { contact }) {
            console.log('contactToSave:', contact);

            const idx = state.contacts.findIndex((c) => c._id === contact._id);
            if (idx !== -1) state.contacts.splice(idx, 1, contact);
            else state.contacts.push(contact);
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query();
            commit({ type: 'setContacts', contacts });
        },
        async removeContact({ commit }, { id }) {
            await contactService.remove(id);
            commit({ type: 'removeContact', id })
        },
        async saveContact({ commit }, { contact }) {
            const contactToSave = await contactService.save(contact);
            commit({ type: 'saveContact', contact: contactToSave })
        }
    }
}