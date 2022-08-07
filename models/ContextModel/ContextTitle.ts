export interface ContextTitleValuesInterface{
    titlePage: string;
    setTitlePage?: (value:string)=>void;
}

export interface ContextProviderInterface{
    children?:JSX.Element | JSX.Element[];
}

export type titleContextType={
    title:string;
    changeTitle:(titleName:string)=>void;
}