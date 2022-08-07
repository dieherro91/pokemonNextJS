import { createContext, useEffect, useMemo, useState, FC } from 'react';
import { ContextProviderInterface, ContextTitleValuesInterface, titleContextType } from '../models/ContextModel';

//Context
export const TitleContext = createContext<titleContextType>({
    title: 'assss',
    changeTitle: () => { }
});

//Provider
export const TitleContextProvider: FC<ContextProviderInterface> = (
    { children }: ContextProviderInterface) => {
    const [title, setTitle] = useState<string>('');

    //ComponentDidMouunt
    useEffect(() => {

    }, []);

    const changeTitle = (valueString: string) => {
        setTitle(valueString)
    }
    //
    
    const values= useMemo(() => (
        {
            title,      // States que seran visibles en el contexto.
            changeTitle,   // Funciones que son exportadas para manejo externo.
        }),
        [title]);   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <TitleContext.Provider value={values} >{children}</TitleContext.Provider>;
}


