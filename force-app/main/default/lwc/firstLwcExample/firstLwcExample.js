import { LightningElement, api } from 'lwc';

export default class FirstLwcExample extends LightningElement {
    message = 'First LWC Example. This is the private property declared in the class';
    // @api - Decorator. Property is exposed to the component's template.';
    @api recordId;
}