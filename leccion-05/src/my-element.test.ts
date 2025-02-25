import { expect, fixture } from "@open-wc/testing";
import { MyElement } from "./my-element";
import { html } from "lit";
import Sinon from "sinon";
import { fetchPackageInfo } from "./impl-fetch";

export const msgError: string = "[001]-Parametros incorrectos"

describe("Set de pruebas del componente My-Element", () => {

    // Pruebas a componentes

    // Verificar que el componente se instancie (Se recomienda que sea una de las primeras en hacer para web)
    it("should be instance",async () => {
        let element: MyElement;
        element = await fixture(html `<my-element></my-element>`);
        expect(element).to.be.instanceOf(MyElement)
    })

    // Pruebas a funciones

    // Prueba de que la configuración está funcionando correctamente
    it("should be true",() => {
        expect(true).to.eqls(true);
    })


    it("should add two numbers",async () => {
        let element: MyElement;
        element = await fixture(html `<my-element></my-element>`);
        let result = element.sum(10,5);
        expect(result).eqls(15);
    });


    // Prueba para lanzar errores
    it("should throw an error",async ()=>{
        let element: MyElement;
        element = await fixture(html `<my-element></my-element>`);
        let num2: any = "cinco";
        expect(() => element.sum(10,num2)).to.throw(msgError)
    });

    it("should contain HTML",async ()=>{
        let element: MyElement;
        element = await fixture(html `<my-element></my-element>`);
        expect(element).shadowDom.equal("<p>Hola, Mundo!</p>")
    });

    // Probando vistas

    // it("should contain padding of 16px",async () => {
    //     let element: MyElement;
    //     element = await fixture(html `<my-element></my-element>`);
    //     await element.updateComplete;
    //     expect(getComputedStyle(element).padding).equal("16px")
    // })

    it("should call fetch",async () => {
        let fetchStub = Sinon.stub(globalThis,"fetch");
        let abortController = new AbortController();

        const mockResponse = {name: "mock-package",version: "1.0.1"};

        fetchStub.resolves(new Response(JSON.stringify(mockResponse), {status: 200}));

        const result = await fetchPackageInfo("mock-package",abortController.signal);

        expect(result).to.deep.equal(mockResponse)
        fetchStub.restore()
    })

    // it("should throw an error when response status is not 200",async () => {
    //     let fetchStub = Sinon.stub(globalThis,"fetch");
    //     let abortController = new AbortController();

    //     //const mockResponse = {name: "mock-package",version: "1.0.1"};

    //     fetchStub.resolves(new Response(msgError, {status: 400}));

    //     expect(
    //         async () => {
    //             await fetchPackageInfo("unknow-package",abortController.signal)
    //         }
    //     ).to.throw("Expected an error to be thrown but none was.")
    //     fetchStub.restore()
    // })
});
