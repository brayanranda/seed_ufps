import Section from "@/components/ui/Section";
import React, { useState, useEffect } from 'react';
import BPlusTreeDownloads from "./BPlusTreeDownloads";
import { consArbolBPlus } from "@/utilities/aside/arboles_enearios/arbol_b+";
import Template from "@/components/Layout/Template";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_ABMAS } from "@/store/services/servicios";

export default function BPlusTree () {
    const [bPlusTree, setBPlusTree] = useState(consArbolBPlus);

    useEffect(() => {
        setBPlusTree(consArbolBPlus)
    }, [consArbolBPlus]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/b-plus-tree/description.md" first={true}/>,
        ope: 
            <Section
                // showBtnModal={true}
                titleBtn="InOrden"
                typeModal="/code-runner/arbolBPlus/Insertar.java"
                url="/markdown/b-plus-tree/operaciones.md"
                first={true}
            />,
        impl: <Section url="/markdown/b-plus-tree/implementation.md" first={true}/>,
        cosCom: <Analisis
            id={0}
            servicio_markdown={getAnalisis_ABMAS}
            title="Árbol BMAS en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }

    return(
        <Template
            data={bPlusTree}
            setData={setBPlusTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <BPlusTreeDownloads/>
        </Template>
    )
}