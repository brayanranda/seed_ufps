# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolAVL)__

[CODIGO FUENTE (ArbolAVL)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolAVL.java)


Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura y aplicando el Teorema Maestro.

![alt text](/analisis/ARBOLES/teorema-maestro.png)

KTE -> Constante

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

Los valores del costo operacional serán reemplazados en la formula TM:

![alt text](/analisis/ARBOLES/formula-tm.png)

Donde,

A -> Llamadas recursivas.

B -> Divisiones del problema.

C -> Todo aquello que no sea recursivo.

n -> Cantidad de inputs.

***

## __1. Metodo Constructor vacio()__

```java
/**
 * Crea un Arbol AVL vacio. <br>
 * <b>post: </b> Se creo un Arbol AVL vacio.<br>
 */
public ArbolAVL() {
      1
    super();
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Metodo Constructor con una raiz predefinida()__

```java
/**
 * Crea un Arbol AVL con una raiz predefinida. <br>
 * <b>post: </b> Se creo un nuevo Arbol AVL con raiz predeterminada.<br>
 * @param r  Un tipo <T> , almacena la direccion de memoria de un nodo de un Arbol AVL<br>
 */
public ArbolAVL(T r) {
         1         1 
    super.setRaiz(new NodoAVL < T > (r));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Conocer el objeto raiz del Arbol AVL(getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto raiz del Arbol AVL. <br>
 * <b>post: </b> Se retorno el objeto raiz del Arbol. <br>
 * @return Un objeto de tipo T que representa el dato en la raiz del Arbol.
 */
@Override
public T getObjRaiz() {
      1          1
    return (super.getObjRaiz());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Insertar un nuevo dato dentro del Arbol AVL sin perder balance(insertar)__

```java
/**
 * Metodo que permite insertar un nuevo dato dentro del Arbol AVL sin que se pierda el balance. <br>
 * <b>post: </b> Se inserto un nuevo dato dentro del Arbol AVL. <br>
 * @param nuevo Representa el nuevo que se pretende ingresar al Arbol AVL. <br>
 * @return true o false dependiendo si se pudo o no insertar el nuevo elemento dentro del Arbol
 */
@Override
public boolean insertar(T nuevo) {
       1            1  1  
    NodoAVL < T > n = new NodoAVL < T > (nuevo);
       1       T(n/2)+O(n)   1                  1
    return (`5¬insertaAVL((NodoAVL < T > ) super.getRaiz(), n))`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + T(n/2)+O(n) + 1 + 1$

  $T({n}) = T(n/2)+O(n) + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __5. Metodo privado: Insertar un nuevo dato dentro del Arbol AVL sin perder balance(insertaAVL)__

```java
/**
 * Metodo que permite insertar un nuevo dato dentro del Arbol AVL sin que se pierda el balance. <br>
 * <b>post: </b> Se inserto un nuevo dato dentro del Arbol AVL. <br>
 * @param p Representa la raiz del Arbol AVL en el cual se inserta el nuevo dato. <br>
 * @param q Representa el Nodo<T> que sera insertado dentro del Arbol AVL. <br>
 * @return true o false dependiendo si se pudo o no insertar el nuevo elemento dentro del Arbol
 */
private boolean insertaAVL(NodoAVL < T > p, NodoAVL < T > q) {
    //Si el Arbol se encuentra vacio
           1   KTE
    if (`28¬this.esVacio()`) {
           1
        setRaiz(q);
           1
        return (true);
    }
     1       1       1        1          1           1
    int comp = ((Comparable) q.getInfo()).compareTo(p.getInfo());
             1
    if (comp == 0)
           1
        return (false); //Esta nodo ya existe
             1
    if (comp < 0) {
             1          1
        if (p.getIzq() == null) {
             1
            p.setIzq(q);
             1
            q.setPadre(p);
            24T(n/2)+O(1) + 85
            `6¬balancear(p)`;
             1
            return (true);
        } else {
             1                  1
            return (insertaAVL(p.getIzq(), q));
        }
    } else
             1
    if (comp > 0) {
             1          1
        if (p.getDer() == null) {
             1
            p.setDer(q);
             1
            q.setPadre(p);
            //El nodo ha sido insertado, ahora se balancea.
            24T(n/2)+O(1) + 85
            `6¬balancear(p)`;
             1
            return (true);
        } else {
                   //lamado recursivo
             1                  1
            return (insertaAVL(p.getDer(), q));
        }
    }
      1
    return false;
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = T(n/2)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{C}})$

  $Big O = O({n})$

***

## __6. Metodo Privado: Balancear el Arbol AVL (balancear)__

```java
/**
 * Metodo que permite balancear el Arbol AVL de manera que siga manteniendo sus propiedades. <br>
 * <b>post: </b> EL Arbol AVL ha sido balanceado, por lo que sigue cumpliendo con sus propiedades. <br>
 * @param r Representa el Nodo del Arbol desde el cual se quiere realizar el balance.
 */
private void balancear(NodoAVL < T > r) {
    // Se actualiza el factor de balance del Nodo
    4T(n/2)+O(1) + 4
    `9¬setBalance(r)`;
     1          1  1
    int balance = r.getBal();
    // Se evaua el balance
                 1
    if (balance == -2) {
                2T(n/2)+O(1)   1        1           1     2T(n/2)+O(1)   1        1
        if (`10¬getAlturaNodo(r.getIzq().getIzq())` >= `10¬getAlturaNodo(r.getIzq().getDer())`) {
              1  8T(n/2)+O(1) + 32
            r = `15¬rDerecha(r)`;
        } else {
              1 16T(n/2)+O(1) + 67
            r = `12¬drIzqDer(r)`;
        }
    } else
                1
    if (balance == 2) {
                2T(n/2)+O(1)   1        1           1      2T(n/2)+O(1)   1        1
        if (`10¬getAlturaNodo(r.getDer().getDer())` >= `10¬getAlturaNodo(r.getDer().getIzq())`) {
              1  8T(n/2)+O(1) + 32
            r = `14¬rIzquierda(r)`;
        } else {
              1 16T(n/2)+O(1) + 67
            r = `13¬drDerIzq(r)`;
        }
    }
    // Se modifica el padre
         1           1
    if (r.getPadre() != null) {
        //llamada recursiva
                   1
        balancear(r.getPadre());
    } else {
            1
        this.setRaiz(r);
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 4T(n/2)+O(1) + 4 + 1 + 1 + 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + 1 + 1 + 16T(n/2)+O(1) + 67 + 1 + 1 + 1$

  $T({n}) = 4T(n/2)+O(1) + 9 + 2T(n/2)+O(1) + 3 + 2T(n/2)+O(1) + 3 + 16T(n/2)+O(1) + 70$

  $T({n}) = 24T(n/2)+O(1) + 85$

* ### __Complejidad (Notación Asintótica)__

  //Caso especial, no se puede aplicar el metodo maestro; aplicando el metodo de sustitucion tomando la ecuacion como 24T(n/2)+cn donde en cada recursion n-1 segun la cantidad de nodos, se obtiene que:

  $Big O = O({n})$

***

## __7. Metodo Privado: Balancear el Arbol AVL (balancearAltura)__

```java
/**
 * Metodo que permite Balancear la altura el Arbol AVL.
 */
public void balancearAltura() {
        2T(n/2)+O(n)      1                  1
    `8¬balancearAltura((NodoAVL < T > ) super.getRaiz())`;
}
```

* ### __Costo Operacional__

  $T({n}) = 2T(n/2)+O(n) + 1 + 1$

  $T({n}) = 2T(n/2)+O(n) + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __8. Metodo Privado: Balancear el Arbol AVL (balancearAltura)__

```java
/**
 * Metodo de tipo privado que permite balancear la altura del ArbolAVL.
 * @param r Representa la raiz del Arbol o subArbol.
 */
private void balancearAltura(NodoAVL < T > r) {
           1
    if (r == null)
           1
        return;
     4T(n/2)+O(1) + 4
    `9¬this.setBalance(r)`;
    //llamado recursivo 1
                     1
    balancearAltura(r.getIzq());
    //llamado recursivo 2
                     1
    balancearAltura(r.getDer());
}
```

* ### __Costo Operacional__

  $({A}) = 2$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = 2T(n/2)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{C}\log n})$

  $Big O = O({n \log n})$

***

## __9. Modificar el factor de balance de un Nodo de acuerdo a sus nuevas condiciones(setBalance)__

```java
/**
 * Metodo que permite modificar el factor de balance de un Nodo de acuerdo a sus nuevas condiciones. <br>
 * <b>post: </b> Se ha modificado el factor de balance del NodoAVL<T> indicado. <br>
 * @param r Representa el NodoAVL<T> el cual sera recalculado su nuevo factos de balance.
 */
private void setBalance(NodoAVL < T > r) {
     1            2T(n/2)+O(1)  1           1      2T(n/2)+O(1)  1
    r.setBal(`10¬getAlturaNodo(r.getDer())` - `10¬getAlturaNodo(r.getIzq()))`;;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 2T(n/2)+O(1) + 1 + 1 + 2T(n/2)+O(1) + 1$

  $T({n}) = 2T(n/2)+O(1) + 2T(n/2)+O(1) + 4$

  $T({n}) = 4T(n/2)+O(1) + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Metodo Privado: Conocer la altura de un Nodo dentro del Arbol AVl  (getAlturaNodo)__

```java
/**
 * Metodo que permite conocer la altura de un Nodo dentro del Arbol AVl para determinar su balance. <br>
 * <b>post: </b> Se retorno la altura del Nodo dentro del ArbolAVL. <br>
 * @param r Representa el NodoAVL<T> del cual se pretende conocer su altura. <br>
 * @return Un objeto de tipo int con la altura del Nodo dentro del ArbolAVL.
 */
private int getAlturaNodo(NodoAVL < T > r) {
           1
    if (r == null)
           1
        return -1;
         1         1        1  1         1
    if (r.getIzq() == null && r.getDer() == null)
           1
        return 0;
         1         1
    if (r.getIzq() == null)
           1     1                1
        return 1 + getAlturaNodo(r.getDer());
         1          1
    if (r.getDer() == null)
           1     1                1
        return 1 + getAlturaNodo(r.getIzq());
                      //llamado recursivo 1       //llamado recursivo 2
       1     1        2                   1                          1
    return 1 + `11¬getMax`(getAlturaNodo(r.getIzq()), getAlturaNodo(r.getDer()));
}
```

* ### __Costo Operacional__

  $({A}) = 2$

  $({B}) = 2$

  $({C}) =O(1)->0$

  $T({n}) = 2T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __11. Obtener el valor maximo entre dos valores a evaluar (getMax)__

```java
/**
 * Metodo que permite obtener el valor maximo entre dos valores a evaluar. <br>
 * <b>post: </b> Se retorno el valor maximo de dos datos evaluados. <br>
 * @param a Representa el primer valor a evaluar. <br>
 * @param b Representa el segundo valor a evaluar. <br>
 * @return Un objeto de tipo int con el dato de Mayor valor entre los datos evaluados.
 */
private int getMax(int a, int b) {
           1
    if (a >= b)
           1
        return a;
       1
    return b;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __12. Metodo Privado: Efectuar una doble rotacion hacia la derecha de un Nodo (drIzqDer)__

```java
/**
 * Metodo que permite efectuar una doble rotacion hacia la derecha de un Nodo. <br>
 * <b>post: </b> Se realizo una doble rotacion a la derecha. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoAVL<T> con las rotaciones ya realizadas. <br>
 */
private NodoAVL < T > drIzqDer(NodoAVL < T > r) {
     1    8T(n/2)+O(1) + 32  1
    r.setIzq(`14¬rIzquierda(r.getIzq())`);
     1    8T(n/2)+O(1) + 32
    return `15¬rDerecha(r)`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 8T(n/2)+O(1) + 32 + 1 + 1 + 8T(n/2)+O(1) + 32$

  $T({n}) = 1 + 8T(n/2)+O(1) + 34 + 8T(n/2)+O(1) + 32$

  $T({n}) = 16T(n/2)+O(1) + 67$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __13. Metodo Privado: Efectuar una doble rotacion hacia la izquierda de un Nodo (drDerIzq)__

```java
/**
 * Metodo que permite efectuar una doble rotacion hacia la izquierda de un Nodo. <br>
 * <b>post: </b> Se realizo una doble rotacion a la izquierda. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoAVL<T> con las rotaciones ya realizadas. <br>
 */
private NodoAVL < T > drDerIzq(NodoAVL < T > r) {
     1   8T(n/2)+O(1) + 32  1
    r.setDer(`15¬rDerecha`(r.getDer()));
      1     8T(n/2)+O(1) + 32
    return `14¬rIzquierda(r)`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 8T(n/2)+O(1) + 32 + 1 + 1 + 8T(n/2)+O(1) + 32$

  $T({n}) = 1 + 8T(n/2)+O(1) + 34 + 8T(n/2)+O(1) + 32$

  $T({n}) = 16T(n/2)+O(1) + 67$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __14. Rotacion simple hacia la izquierda de un Nodo (rIzquierda)__

```java
/**
 * Metodo que permite efectuar una rotacion simple hacia la izquierda de un Nodo. <br>
 * <b>post: </b> Se realizo una rotacion simple a la izquierda. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoAVL<T> con las rotaciones ya realizadas. <br>
 */
private NodoAVL < T > rIzquierda(NodoAVL < T > r) {
       1            1  1
    NodoAVL < T > v = r.getDer();
     1          1
    v.setPadre(r.getPadre());
     1        1  
    r.setDer(v.getIzq());
         1          1
    if (r.getDer() != null) {
         1        1
        r.getDer().setPadre(r);
    }
     1
    v.setIzq(r);
     1
    r.setPadre(v);
         1            1
    if (v.getPadre() != null) {
             1          1         1
        if (v.getPadre().getDer() == r) {
             1          1
            v.getPadre().setDer(v);
        } else
             1          1          1
        if (v.getPadre().getIzq() == r) {
             1          1
            v.getPadre().setIzq(v);
        }
    }
    4T(n/2)+O(1) + 4
    `9¬setBalance(r)`;
    4T(n/2)+O(1) + 4
    `9¬setBalance(v)`;
       1
    return (v);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4T(n/2)+O(1) + 4 + 4T(n/2)+O(1) + 4 + 1$

  $T({n}) = 23 + 4T(n/2)+O(1) + 4 + 4T(n/2)+O(1) + 5$

  $T({n}) = 8T(n/2)+O(1) + 32$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __15. Rotacion simple hacia la derecha de un Nodo (rDerecha)__

```java
/**
 * Metodo que permite efectuar una rotacion simple hacia la derecha de un Nodo. <br>
 * <b>post: </b> Se realizo una rotacion simple a la derecha. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoAVL<T> con las rotaciones ya realizadas. <br>
 */
private NodoAVL < T > rDerecha(NodoAVL < T > r) {
       1            1  1
    NodoAVL < T > v = r.getIzq();
     1          1
    v.setPadre(r.getPadre());
     1        1  
    r.setIzq(v.getDer());
         1          1
    if (r.getIzq() != null) {
         1        1
        r.getIzq().setPadre(r);
    }
     1
    v.setDer(r);
     1
    r.setPadre(v);
         1            1
    if (v.getPadre() != null) {
             1          1         1
        if (v.getPadre().getDer() == r) {
             1          1
            v.getPadre().setDer(v);
        } else
             1          1          1
        if (v.getPadre().getIzq() == r) {
             1          1
            v.getPadre().setIzq(v);
        }
    }
    4T(n/2)+O(1) + 4
    `9¬setBalance(r)`;
    4T(n/2)+O(1) + 4
    `9¬setBalance(v)`;
      1
    return (v);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4T(n/2)+O(1) + 4 + 4T(n/2)+O(1) + 4 + 1$

  $T({n}) = 23 + 4T(n/2)+O(1) + 4 + 4T(n/2)+O(1) + 5$

  $T({n}) = 8T(n/2)+O(1) + 32$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __16. Eliminar un dato del ArbolAVL (eliminar)__

```java

/**
 * Metodo que permite eliminar un dato del ArbolAVL; manteniendo el Arbol sus propiedades de balanceado. <br>
 * <b>post: </b> Se elimino un elemento del ArbolAVL y este ha mantenido sus propiedades.
 * @param dato Representa el Objeto de tipo T que se desea eliminar del Arbol.
 * @return Un objeto de tipo boolean con true si el dato ha sido eliminado correctamente.
 */
@Override
public boolean eliminar(T dato) {
            1  KTE          1          KTE
    if (`28¬this.esVacio()` || `20¬!this.esta(dato)`)
          1
        return (false);
      1         T(n/2)+O(n)    1                  1
    return (`17¬eliminarAVL((NodoAVL < T > ) super.getRaiz(), dato)`);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + KTE + 1 + KTE + 1 + T(n/2)+O(n) + 1 + 1$

  $T({n}) = T(n/2)+O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __17. Eliminar un dato del ArbolAVL (eliminarAVL)__

```java
/**
 * Metodo que permite eliminar un dato del ArbolAVL; manteniendo el Arbol sus propiedades de balanceado. <br>
 * <b>post: </b> Se elimino un elemento del ArbolAVL y este ha mantenido sus propiedades. <br>
 * @param p Representa la raiz del ArbolAVL sobre el cual se va a realizar la eliminacion. <br>
 * @param q Rerpesenta el Objeto de tipo T que desea ser eliminado del Arbol. <br>
 * @return true o false dependiendo se si se puedo eliminar el dato del Arbol.
 */
private boolean eliminarAVL(NodoAVL < T > p, T q) {
     1       1      1         1          1
    int comp = ((Comparable) p.getInfo()).compareTo(q);
             1
    if (comp == 0)
          1   24T(n/2)+O(1) + 7n + 125$
        return (`18¬eliminaAVL(p)`);
             1
    if (comp > 0)
          1                  1
        return (eliminarAVL(p.getIzq(), q));
    else
                   //llamado recursivo
          1                  1
        return (eliminarAVL(p.getDer(), q));
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = T(n/2)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{C}})$

  $Big O = O({n})$

***

## __18. Metodo Privado: Eliminar un dato del ArbolAVL (eliminaAVL)__ 

```java
/**
 * Metodo que permite eliminar un dato del ArbolAVL; manteniendo el Arbol sus propiedades de balanceado. <br>
 * <b>post: </b> Se elimino un elemento del ArbolAVL y este ha mantenido sus propiedades. <br>
 * @param q Representa el NodoAVL<T> que debe ser eliminado del Arbol. <br>
 * @return true o false dependiendo se si se puedo eliminar el dato del Arbol.
 */
private boolean eliminaAVL(NodoAVL < T > q) {
       1
    NodoAVL < T > s;
    //Si el Nodo es una hoja
         1         1       1   1         1
    if (q.getIzq() == null || q.getDer() == null) {
        //Si el Nodo es la raiz
             1           1
        if (q.getPadre() == null) {
            if (q.getIzq() != null) {
                q.getIzq().setPadre(null);
                this.setRaiz(q.getIzq());
            } else {
                if (q.getDer() != null) {
                    q.getDer().setPadre(null);
                    this.setRaiz(q.getDer());
                } else
                    setRaiz(null);
            }
            return (true);
        }
          1
        s = q;
    } else {
        // Se recupera el hijo sucesor al Nodo
          1     7n + 14
        s = `19¬getSucesor(q)`;
         1         1
        q.setInfo(s.getInfo());
    }
       1
    NodoAVL < T > p;
         1          1
    if (s.getIzq() != null) {
        p = s.getIzq();
    } else {
          1  1
        p = s.getDer();
    }
           1
    if (p != null) {
         1          1
        p.setPadre(s.getPadre());
    }
         1            1
    if (s.getPadre() == null) {
        this.setRaiz(p);
    } else {
              1   1          1
        if (s == s.getPadre().getIzq()) {
            s.getPadre().setIzq(p);
        } else {
             1          1
            s.getPadre().setDer(p);
        }
        // Se realiza el balanceo del Arbol
        24T(n/2)+O(1) + 85
        `6¬balancear(s.getPadre()`);
    }
      1
    s = null;
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 7n + 14 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 24T(n/2)+O(1) + 85 + 1 + 1$

  $T({n}) = 7 + 7n + 31 + 24T(n/2)+O(1) + 87$

  $T({n}) = 24T(n/2)+O(1) + 7n + 125$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __19. Encontrar el Nodo sucesor al Nodo que se pretende eliminar (getSucesor)__

```java
/**
 * Metodo que permite encontrar el Nodo sucesor al Nodo que se pretende eliminar. <br>
 * <b>post: </b> Se retorno el sucesor al NodoAVL<T> que se desea eliminar de Arbol. <br>
 * @param q Representa el NodoAVL<T> sobre el cual se desea evaluar su sucesor. <b>
 * @return Un objeto de tipo NodoAVL<T> que representa el sucesor al Nodo que se pretende elimianr.
 */
private NodoAVL < T > getSucesor(NodoAVL < T > q) {
         1          1
    if (q.getDer() != null) {
          1             1  1
        NodoAVL < T > r = q.getDer();
                1          1
        while (r.getIzq() != null) {
              1  1
            r = r.getIzq();
        }
          1
        return r;
    } else {
          1             1  1
        NodoAVL < T > p = q.getPadre();
                 1        1   1   1
        while (p != null && q == p.getDer()) {
              1
            q = p;
              1  1
            p = q.getPadre();
        }
          1
        return p;
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 +n( 1 + 1 + 1 +1 + 1 + 1 + 1) + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 9 +n(7) + 5$

  $T({n}) = 7n + 14$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __20. Evaluar la existencia de un objeto dentro del Arbol AVL (esta)__

```java
/**
 * Metodo que permite evaluar la existencia de un objeto dentro del Arbol AVL. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el Arbol.<br>
 * @param x Representa el elemento el cual se desea evaluar su existencia en el Arbol. <br>
 * @return Un boolean , true si el dato esta o false en caso contrario.
 */
@Override
public boolean esta(T x) {
       1         KTE
    return (super.estaABB(x));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Retorna un iterador con las hojas del Arbol AVL (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol AVL. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol.<br>
 * @return un iterador con las hojas delArbol.
 */
@Override
public Iterator < T > getHojas() {
       1         KTE
    return (super.getHojas());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __22. Determinar el numero de Nodo hojas dentro del Arbol (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @return El numero de hojas existentes en el Arbol.
 */
@Override
public int contarHojas() {
       1         KTE
    return (super.contarHojas());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __23. Retorna un iterador con el recorrido preOrden del Arbol (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un iterador en preorden (padre->hijoIzq->hijoDer) para el Arbol AVL.
 */
@Override
public Iterator < T > preOrden() {
       1         KTE
    return (super.preOrden());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __24. Retorna un iterador con el recorrido in Orden del Arbol (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol.<br>
 * @return un iterador en inOrden (hijoIzq->padre->hijoDer) para el Arbol AVL. <br>
 */
@Override
public Iterator < T > inOrden() {
       1         KTE
    return (super.inOrden());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __25. Retorna un iterador con el recorrido postOrden del Arbol (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @return un iterador en postOrden (hijoIzq->hijoDer->padre) para el Arbol AVL. <br>
 */
@Override
public Iterator < T > postOrden() {
       1         KTE
    return (super.postOrden());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __26. Retornar un iterador con el recorrido por niveles del Arbol (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol AVL.<br>
 * @return un un iterador con el recorrido por niveles del Arbol AVL.
 */
@Override
public Iterator < T > impNiveles() {
       1         KTE
    return (super.impNiveles());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __27. Obtener el peso del Arbol AVL (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol AVL. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol AVL.<br>
 * @return Un entero con la cantidad de elementos del Arbol AVL.
 */
@Override
public int getPeso() {
       1         KTE
    return (super.getPeso());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __28. Saber si el Arbol AVL se encuentra vacio (esVacio)__

```java
/**
 * Metodo que permite saber si el Arbol AVL se encuentra vacio. <br>
 * <b>post: </b> Se retorno true si el arbol no contiene elementos.<br>
 * @return true si no hay datos en el Arbol AVL.
 */
@Override
public boolean esVacio() {
      1         KTE
    return (super.esVacio());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __29. Obtener la altura del Arbol AVL (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol AVL. <br>
 * <b>post: </b> Se retorno la altura del Arbol AVL.<br>
 * @return Un entero con la altura del Arbol AVL.
 */
@Override
public int getAltura() {
       1         1
    return (super.getAltura());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __30. Mostrar informacion del Arbol (imprime)__

```java
/**
 * Metodo que permite conocer por consola la informacion del Arbol Binario.
 */
@Override
public void imprime() {
          1
    System.out.println(" ----- Arbol AVL ----- ");
    2T(n/2)+O(1)  1                  1
    imprimeAVL((NodoAVL < T > ) super.getRaiz());
}
```

* ### __Costo Operacional__

  $T({n}) = 2T(n/2)+O(1) + 3$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __31. Mostrar informacion del Arbol (imprimeAVL)__

```java
/**
 * Metodo de tipo privado que permite mostrar por consola la informacion del Arbol AVL. <br>
 * @param n Representa la raiz del ArbolAVL o de alguno de sus subarboles.
 */
public void imprimeAVL(NodoAVL < T > n) {
     1    1
    int l = 0;
     1    1
    int r = 0;
     1    1    
    int p = 0;
           1
    if (n == null)
           1
        return;
         1          1
    if (n.getIzq() != null) {
          1        1          1        1         1
        l = Integer.parseInt(n.getIzq().getInfo().toString());
    }
         1          1
    if (n.getDer() != null) {
          1        1          1        1         1
        r = Integer.parseInt(n.getDer().getInfo().toString());
    }
         1          1
    if (n.getPadre() != null) {
          1        1          1        1         1
        p = Integer.parseInt(n.getPadre().getInfo().toString());
    }
          1                        1   1             1  1          1                1   1              1   1                1  1
    System.out.println("NodoIzq: " + l + "\t Info: " + n.getInfo() + "\t NodoDer: " + r + "\t Padre: " + p + "\t Balance: " + n.getBal());
         1          1
    if (n.getIzq() != null) {
        //llamado recursivo 1
        imprimeAVL(n.getIzq());
    }
         1          1
    if (n.getDer() != null) {
        //llamado recursivo 2
        imprimeAVL(n.getDer());
    }
}
```

* ### __Costo Operacional__

  $({A}) = 2$

  $({B}) = 2$

  $({C}) =O(1)->0$

  $T({n}) = 2T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***