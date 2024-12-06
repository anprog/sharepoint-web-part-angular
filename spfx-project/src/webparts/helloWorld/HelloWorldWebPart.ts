import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IHelloWorldWebPartProps {
    description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

    public render(): void {
        this.domElement.innerHTML = `
            <div id="angular-container"></div>
        `;

        // Carica i file Angular
        this._loadAngularApp();
    }

    private _loadAngularApp(): void {
        // Definizione degli script Angular
        const angularScripts = [
            `${this.context.pageContext.site.absoluteUrl}/angularApp/runtime.6d013a6c0da44134.js`,
            `${this.context.pageContext.site.absoluteUrl}/angularApp/polyfills.5cdf16dc2688a42d.js`,
            `${this.context.pageContext.site.absoluteUrl}/angularApp/main.e05e29894a2d650c.js`
        ];

        // Caricamento sequenziale degli script Angular
        angularScripts.forEach((scriptUrl, index) => {
            const script = document.createElement('script');
            script.src = scriptUrl;
            script.async = false; // Mantiene l'ordine di caricamento
            script.onload = () => {
                if (index === angularScripts.length - 1) {
                    console.log('Angular app fully loaded.');
                }
            };
            script.onerror = () => {
                console.error(`Failed to load script: ${scriptUrl}`);
            };
            document.body.appendChild(script);
        });
    }

    protected onInit(): Promise<void> {
        return Promise.resolve();
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: "Configuration"
                    },
                    groups: [
                        {
                            groupName: "Settings",
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: "Description"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
