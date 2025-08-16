import { api, LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/contactController.getContacts';

export default class WireWithClassExample extends LightningElement {
    @api recordId;

    @wire(getContacts, { acctId: '$recordId' })
    contacts;
}