import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class WireAdaptorExample extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PHONE_FIELD] })
    getRecordData;

    get name() {
        return this.getRecordData.data ? getFieldValue(this.getRecordData.data, NAME_FIELD) : '';
    }

    get phone() {
        return this.getRecordData.data ? getFieldValue(this.getRecordData.data, PHONE_FIELD) : '';
    }
}