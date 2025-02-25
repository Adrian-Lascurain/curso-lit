import { expect, fixture } from '@open-wc/testing';
import { UpAndDown } from './Ejercicio1';
import { Loging} from './Ejercicio2'
import { html } from 'lit';
import { InputForm } from './InputForm';
import { AppArticle } from './app-article';
import { AppFooter } from './app-footer';
import { AppHeader } from './app-header';
import { AppPage } from './app-page';
import { AppAsync } from './Ejercicio4';
import { AppCard } from './Card';
import Sinon from 'sinon';
import { pseudoFetch } from './pseudofetch';
import { data, errorMsg } from './data';

describe("Set de pruebas para los ejercicios de lit", ()=> {

    // ---------------------- Ejercicio 1 ----------------------
    // Instance tests
    it("should be instance",async () => {
        let element: UpAndDown;
        element = await fixture(html `<app-upanddown></app-upanddown>`);
        expect(element).to.be.instanceOf(UpAndDown)
    })

    // Methods tests
    it("should increase counter",async () => {
        let element: UpAndDown;
        element = await fixture(html `<app-upanddown></app-upanddown>`);
        expect(element.increaseCounter()).equal(1);
    })

    it("should decrease counter",async () => {
        let element: UpAndDown;
        element = await fixture(html `<app-upanddown></app-upanddown>`);
        expect(element.decreaseCounter()).equal(-1);
    })

    // Css tests
    it("should contain property gap",async () => {
        let element: UpAndDown;
        element = await fixture(html `<app-upanddown></app-upanddown>`);
        expect(getComputedStyle(element).gap).to.equal('5px');
    })

    it("should contain property display",async () => {
        let element: UpAndDown;
        element = await fixture(html `<app-upanddown></app-upanddown>`);
        expect(getComputedStyle(element).display).to.equal('flex');
    })

    // ---------------------- Ejercicio 2 ----------------------
    // Instance tests
    it("should be instance",async () => {
        let element: Loging;
        element = await fixture(html `<app-login></app-login>`);
        expect(element).to.be.instanceOf(Loging)
    })

    it("should be instance",async () => {
        let element: InputForm;
        element = await fixture(html `<app-input></app-input>`);
        expect(element).to.be.instanceOf(InputForm)
    })

    // Methods test
    // TODO Cómo se prueba una función cuando recibe un evento
    // it("should response to blur",async () => {
    //     let element: Loging;
    //     element = await fixture(html `<app-login></app-login>`);
    //     element.userChanged(new Event('blur'))
    // })

    // ---------------------- Ejercicio 3 ----------------------
    // Instance tests
    it("should be instance",async () => {
        let element: AppArticle;
        element = await fixture(html `<app-article></app-article>`);
        expect(element).to.be.instanceOf(AppArticle)
    })

    it("should be instance",async () => {
        let element: AppFooter;
        element = await fixture(html `<app-footer></app-footer>`);
        expect(element).to.be.instanceOf(AppFooter)
    })

    it("should be instance",async () => {
        let element: AppHeader;
        element = await fixture(html `<app-header></app-header>`);
        expect(element).to.be.instanceOf(AppHeader)
    })

    it("should be instance",async () => {
        let element: AppPage;
        element = await fixture(html `<app-page></app-page>`);
        expect(element).to.be.instanceOf(AppPage)
    })

    // Css test
    it("should contain property",async () => {
        let element: AppFooter;
        element = await fixture(html `<app-footer></app-footer>`);
        expect(getComputedStyle(element).position).equal("absolute");
    })

    // ---------------------- Ejercicio 4 ----------------------
    // Instance tests
    it("should be instance",async () => {
        let element: AppAsync;
        element = await fixture(html `<app-async></app-async>`);
        expect(element).to.be.instanceOf(AppAsync)
    })

    it("should be instance",async () => {
        let element: AppCard;
        element = await fixture(html `<app-card></app-card>`);
        expect(element).to.be.instanceOf(AppCard)
    })

    // Mock test
    it("should call fetch",async () => {
        let fetchStub = Sinon.stub(globalThis,"fetch");
        const mockResponse = data;

        fetchStub.resolves(new Response(JSON.stringify(mockResponse), {status: 200}));

        const result = await pseudoFetch(true);
        expect(result).to.deep.equal(mockResponse);

        fetchStub.restore();
    })

    it("should throw an error when fetch",async () => {
        let fetchStub = Sinon.stub(globalThis,"fetch");

        fetchStub.resolves(new Response(errorMsg, {status: 400}));

        try{
            await pseudoFetch(false)
        }catch(error: any){
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.equal(errorMsg) 
        }
    })
})