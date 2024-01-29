import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IIfcSimpleWebPartProps {
    description: string;
}
export default class IfcSimpleWebPart extends BaseClientSideWebPart<IIfcSimpleWebPartProps> {
    listaObjetos: any[];
    listaUrl: any[];
    listaNombres: any[];
    listaTypes: any[];
    listaObjetosPrevia: any[];
    listaNombresPrevia: any[];
    listaTypesPrevia: any[];
    render(): void;
    protected onInit(): Promise<void>;
    protected ListarCarpetas(url: string): Promise<void>;
    protected ListarArchivos(url: string): Promise<void>;
    protected CarpetaPadre(url: string): Promise<void>;
    protected CargarModelo(url: string, nombre: string): Promise<void>;
    protected LoadIfcFiles(): Promise<void>;
}
//# sourceMappingURL=IfcSimpleWebPart.d.ts.map