import axios from "axios";

export class ContactService{
    // static serverURL = `http://localhost:9000/`;

    // Fonction de consultation de tous les contacts
    static getAllContacts(){
        let dataURL = `http://localhost:9000/contacts`;
        return axios.get(dataURL);
    }

    // Fonction de consultation d'un seul contact
    static getContact(contactId){
        let dataURL = `http://localhost:9000/contacts/${contactId}`;
        return axios.get(dataURL);
    }
   
     // Fonction de creation contact
    static createContact(contact){
        let dataURL = `http://localhost:9000/contacts/`;
        return axios.post(dataURL,contact);
    }
   
     // Fonction de modification contact
    static updateContact(contact, contactId){
        let dataURL = `http://localhost:9000/contacts/${contactId}`;
        return axios.put(dataURL,contact);
    }

    // Fonction de suppression contact
    static deleteContact(contactId){
        let dataURL = `http://localhost:9000/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

    // Fonction de consultation de tous les groupes
    static getAllGroups(){
        let dataURL = `http://localhost:9000/groups`;
        return axios.get(dataURL);
    }

    // Fonction de consultation d'un groupe
    static getGroup(contact){
        let groupId = contact.groupId;
        let dataURL = `http://localhost:9000/groups/${groupId}`;
        return axios.get(dataURL);
    }
}