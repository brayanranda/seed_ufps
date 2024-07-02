import Section from "@/components/ui/Section";
import { useEffect, useState } from "react";
import AvlTreeDownloads from "./AvlTreeDownloads";
import { constAvlTree } from "@/utilities/aside/arboles_binarios/avlTree";
import Template from "@/components/Layout/Template";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_AVL } from "@/store/services/servicios";

export default function AVLTree () {
    const [asideAvlTree, setAsideAvlTree] = useState(constAvlTree);

    useEffect(() => {
        setAsideAvlTree(constAvlTree)
    }, [constAvlTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/avl-tree/description.md" first={true}/>,
        balA: 
            <Section
                // showBtnModal={true}
                titleBtn="Balancear - Árbol AVL"
                typeModal="/code-runner/arbolAVL/Balancear.java"
                url="/markdown/avl-tree/balancer.md"
                first={true}
            />,
        eliD: 
            <Section
                // showBtnModal={true}
                titleBtn="Eliminar - Árbol AVL"
                typeModal="/code-runner/arbolAVL/Eliminar.java"
                url="/markdown/avl-tree/eliminar.md"
                first={true}
            />,
        impl: <Section url="/markdown/avl-tree/implementation.md" first={true}/>,
        cosCom: <Analisis
            id={0}
            servicio_markdown={getAnalisis_AVL}
            title="Árbol AVL en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }
    
    return(
        <Template
            data={asideAvlTree}
            setData={setAsideAvlTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <AvlTreeDownloads/>
        </Template>
    );
}