/**
 * Component of the welcome page. Contains
 * a configurable title that is shown on the page.
 *
 * @module PagesBarrel
 */ /** */
import { Component, OnInit } from '@angular/core';

/**
 * The welcome component handles the value of the title
 * on the welcome page. It also contains secret information!
 *
 * @author René Bulsing
 */
@Component({
    selector: 'starter-welcome',
    template: require('./welcome.component.html')
})
export class WelcomeComponent implements OnInit {
    /**
     *  The title that will be shown on the welcome page.
     */
    public title: string;

    /**
     * A very highly confidential piece of information.
     */
    private secret: string;

    /**
     * Sets the value of the title on creation.
     */
    constructor() {
        this.title = 'My amazing title!';
    }

    /**
     * Sets the secretive value on initialization.
     */
    ngOnInit(): void {
        this.secret = 'My secret';
    }

    /**
     * Returns the contents of the highly confidential
     * field.
     */
    public getSecret(): string {
        return this.secret;
    }
}
