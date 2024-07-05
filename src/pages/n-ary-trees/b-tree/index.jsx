import Section from "@/components/ui/Section";
import { consArbolB } from "@/utilities/aside/arboles_enearios/arbol_b";
import React, { useState, useEffect } from 'react';
import BTreeDownloads from "./BTreeDownloads";
import Template from "@/components/Layout/Template";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_A_B } from "@/store/services/servicios";

export default function BTree () {
    const [bTree, setBTree] = useState(consArbolB);

    useEffect(() => {
        setBTree(consArbolB)
    }, [consArbolB]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/b-tree/description.md" first={true}/>,
        ope: 
            <Section
                // showBtnModal={true}
                titleBtn="InOrden"
                typeModal="/code-runner/arbolB/Insertar.java"
            
                url="/markdown/b-tree/operaciones.md"
                first={true}
            />,
        impl: <Section url="/markdown/b-tree/implementation.md" first={true}/>,
        cosCom: <Analisis
            id={0}
            servicio_markdown={getAnalisis_A_B}
            title="Árbol B en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }

    return(
        <Template
            data={bTree}
            setData={setBTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <BTreeDownloads/>
        </Template>
    )
}