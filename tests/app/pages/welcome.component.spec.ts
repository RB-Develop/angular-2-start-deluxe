import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { WelcomeComponent } from '../../../src/app/pages/pages.barrel';

describe('WelcomeComponent', () => {
    let fixture: ComponentFixture<WelcomeComponent>;
    let welcomeComponent: WelcomeComponent;
    let debugElement: DebugElement;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                WelcomeComponent
            ]
        });

        fixture = TestBed.createComponent(WelcomeComponent);
        welcomeComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('initialization', () => {
        it('should show the correct title on the welcome page.', () => {
            debugElement = fixture.debugElement.query(By.css('h1'));
            element = debugElement.nativeElement;
            expect(element.textContent).toContain('My amazing title!');
        });

        it('should have set the secret value after initialization.', () => {
            let secret: string = welcomeComponent.getSecret();
            expect(secret).toContain('My secret');
        });
    });
});
