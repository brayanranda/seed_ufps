# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolEneario)__

[CODIGO FUENTE (ArbolEneario)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolEneario.java)

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

n -> Cantidad de veces a iterar.

***

## __1. Constructor Vacio (ArbolEneario)__

```java
/**
 * Crea un Arbol Eneario vacio. <br>
 * <b>post: </b> Se creo un Arbol Eneario vacio.<br>
 */
public ArbolEneario() {
              1
    this.raiz = null;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Constructor Raiz Predefinida (ArbolEneario)__

```java
/**
 * Crea un Arbol Eneario con una raiz predefinida. <br>
 * <b>post: </b> Se creo un nuevo Arbol con su raiz definida.<br>
 * @param raiz  Un objeto de tipo T que representa del dato en la raiz del Arbol.
 */
public ArbolEneario(NodoEneario < T > raiz) {
              1
    this.raiz = raiz;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Obtener Objeto de la Raíz (getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto en la raiz del Arbol Eneario. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Eneario.<br>
 * @return Un objeto de tipo NodoEneario<T> que es la raiz del Arbol Eneario.
 */
public T getObjRaiz() {
       1            1
    return raiz.getInfo();
}
```

* ### __Costo Operacional__

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Obtener Raíz Árbol (getRaiz)__

```java
/**
 * Metodo que permite conocer la raiz del Arbol Eneario. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Eneario.<br>
 * @return Un objeto de tipo NodoEneario<T> que es la raiz del Arbol Eneario.
 */
public NodoEneario < T > getRaiz() {
       1
    return raiz;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __5. Modificar Raíz Árbol (setRaiz)__

```java
/**
 * Metodo que permite modificar la raiz del Arbol Eneario. <br>
 * <b>post: </b> Se modifico la raiz del Arbol Eneario. <br>
 * @param raiz Objeto de tipo NodoEneario<T> que representa la nueva raiz del Arbol.
 */
public void setRaiz(NodoEneario < T > raiz) {
              1
    this.raiz = raiz;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __6. Insertar Hijo Árbol (insertarHijo)__

```java
/**
 * Metodo que permite insertar un nuevo NodoEneario como hijo de un NodoEneario. <br>
 * <b>post: </b> Se inserto un nuevo dato como hijo del Nodo indicado. <br>
 * @param padre Es de tipo T y representa el dato del padre del nuevo NodoEneario. <br>
 * @param dato Es de tipo T y representa el nuevo dato a insertar en el Arbol Eneario. <br>
 * @return Un valor de tipo boolean que representa el exito de la operacion indicada o la razon del error.
 */
public boolean insertarHijo(T padre, T dato) {
          1                 1           1
    NodoEneario < T > nuevo = new NodoEneario(dato);
    //El arbol se encuentra vacio
                    2    1
    if (`34¬this.esVacio()`) {
        //Mejor de los casos
                  1
        `5¬this.setRaiz(nuevo)`;
              1
        return (true);
    }
          1       1   (1T(n/2) + O(n) + 4)   
    NodoEneario p = `17¬this.buscar(padre)`;
          1       1   (1T(n/2) + O(n) + 4)
    NodoEneario n = `17¬this.buscar(dato)`;
           1       1   1
    if (n != null || p == null)
              1
        return (false); //Ya existe dato o padre no existe
                    3    1
    if (`22¬this.esHoja(p)`) {
             1
        p.setHijo(nuevo);
             1
        return (true);
    }
            1           1       1
    NodoEneario < T > q = p.getHijo();
         1
    p.setHijo(nuevo);
               1
    nuevo.setHermano(q);
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 3 + 2 + (1T(\frac{n}{2}) + O(n) + 4) + 2 + (1T(\frac{n}{2}) + O(n) + 4) + 3 + 4 + 3 + 1 + 1 + 1$

  $T({n}) = 2[1T(\frac{n}{2})] + 2[O(n)] + 31$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __7. Insertar Hermano Árbol (insertarHermano)__

```java
/**
 * Metodo que permite insertar un nuevo NodoEneario como hermano de un NodoEneario. <br>
 * <b>post: </b> Se inserto un nuevo dato como hermano del Nodo indicado. <br>
 * @param hermano Es de tipo T y representa el dato del hermano del nuevo NodoEneario. <br>
 * @param dato Es de tipo T y representa el nuevo dato a insertar en el Arbol Eneario. <br>
 * @return Un valor de tipo boolean que representa el exito de la operacion indicada o la razon del error.
 */
public boolean insertarHermano(T hermano, T dato) {
             1              1           1
    NodoEneario < T > nuevo = new NodoEneario(dato);
    //El arbol se encuentra vacio
                   2    1
    if (`34¬this.esVacio()`) {
                  1
        this.raiz = nuevo;
              1
        return (true);
    }
            1     1   (1T(n/2) + O(n) + 4)  
    NodoEneario h = `17¬this.buscar(hermano)`;
            1     1   (1T(n/2) + O(n) + 4) 
    NodoEneario n = `17¬this.buscar(dato)`;
    //Si es la raiz
                   1    1    1      1    1
    if (this.raiz == h || h == null || n != null)
               1
        return (false); //Hermano de la raiz, hermano Null o ya existe
              1            1        1
    NodoEneario < T > sigH = h.getHermano();
           1
    h.setHermano(nuevo);
               1
    nuevo.setHermano(sigH);
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 3 + 2 + (1T(\frac{n}{2}) + O(n) + 4) + 2 + (1T(\frac{n}{2}) + O(n) + 4) + 5 + 3 + 1 + 1 + 1$

  $T({n}) = 2[1T(\frac{n}{2})] + 2[O(n)] + 29$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __8. Eliminar Dato del Árbol (eliminar)__

```java
/**
 * Metodo que permite eliminar un dato del Arbol Eneario. <br>
 * <b>post: </b> Se elimino un dato del Arbol Eneario. <br>
 * @param dato Representa la informacion del dato que se desea eliminar del Arbol. <br>
 * @return Un objeto de tipo boolean con true si se elimino el dato y false en caso contrario.
 */
public boolean eliminar(T dato) {
        1   (1T(n/2) + O(n) + 6)    
    if (!`15¬this.esta(dato)`)
        //Mejor de los casos
               1
        return (false);
    //Peor de los casos
          1    (3T(n/2) + 2[O(n)] + 3n + 23)
    return (`9¬elimina(dato)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (1T(\frac{n}{2}) + O(n) + 6) + 1 + (3T(\frac{n}{2}) + 2[O(n)] + 3n + 23)$

  $T({n}) = 4T(\frac{n}{2}) + 3[O(n)] + 3n + 31$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Eliminar Dato del Árbol Privado (elimina)__

```java
/**
 * Metodo de tipo privado que permite eliminar un dato del Arbol Eneario. <br>
 * <b>post: </b> Se elimino un dato del Arbol Eneario. <br>
 * @param dato Representa la informacion del dato que se desea eliminar del Arbol. <br>
 * @return Un objeto de tipo boolean con true si se elimino el dato y false en caso contrario.
 */
private boolean elimina(T dato) {
             4
    NodoEneario < T > n, h, p, s;
      1       (1T(n/2) + O(n) + 1)  
    n = `11¬this.getPadre(dato)`;
    //Es un hijo (Primer hijo a la izquierda)
           1
    if (n != null) {
        //Mejor de los casos
          1      1
        h = n.getHijo();
        //Si tiene hijos, subo al primer hijo
                 1       1
        if (h.getHijo() != null) {
              1      1
            s = h.getHijo();
                  1
            n.setHijo(s);
              1
            p = s;
                      1
            while (s != null) {
                  1
                p = s;
                  1        1
                s = s.getHermano();
            }
                    1           1
            p.setHermano(h.getHermano());
        } else {
                 1          1
            n.setHijo(h.getHermano());
        }
              1
        return (true);
    }
    //Si es un hermano (Es un hijo pero no el primero)
      1    (2T(n/2) + O(n) + 1)      
    n = `13¬this.getHermano(dato)`;
           1
    if (n != null) {
        //Peor de los casos
          1        1
        h = n.getHermano();
        //Si tiene hijos, subo al primer hijo
                 1       1
        if (h.getHijo() != null) {
            //Peor de los casos
              1      1
            s = h.getHijo();
                    1
            n.setHermano(s);
              1
            p = s;
                      1
            while (s != null) {
                  1
                p = s;
                  1        1
                s = s.getHermano();
            }
                    1           1
            p.setHermano(h.getHermano());
        } else {
            //Mejor de los casos
                  1            1             1
            n.setHermano(n.getHermano().getHermano());
        }
              1
        return (true);
    }
    //Si es la raiz del Arbol
    //Mejor de los casos
        1      (3n + 18)      
    return (`10¬eliminaR(dato)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 4 + 1 + (1T(\frac{n}{2}) + O(n) + 1) + 1 + 1 + (2T(\frac{n}{2}) + O(n) + 1) + 1 + 2 + 2 + 2 + 1 + 1 + 1 + n(1 + 2) + 1 + 2 + 1$

  $T({n}) = 3T(\frac{n}{2}) + 2[O(n)] + 3n + 23$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Eliminar Raíz del Árbol Privado (eliminaR)__

```java
/**
 * Metodo de tipo privado que permite eliminar la raiz del Arbol Eneario, estructurando sus datos. <br>
 * <b>post: </b> Se elimino un dato que es la raiz del Arbol Eneario. <br>
 * @param dato Representa la informacion del dato que se desea eliminar del Arbol. <br>
 * @return Un objeto de tipo boolean con true si se elimino el dato y false en caso contrario.
 */
private boolean eliminaR(T dato) {
                      1      1
    if (this.raiz.getInfo() != dato)
      //Mejor de los casos
               1
        return (false);
              3
    NodoEneario < T > h, p, s;
              1                   1
    `5¬this.setRaiz(this.raiz.getHijo())`;
    //Si tenia hijos
                   1
    if (this.raiz != null) {
          1             1
        h = this.raiz.getHijo();
          1               1
        s = this.raiz.getHermano();
        //Si no tiene hijos
               1
        if (h == null) {
            //Mejor de los casos
                         1
            this.raiz.setHijo(s);
        } else {
              1
            p = h;
                      1
            while (h != null) {
                  1
                p = h;
                  1        1
                h = h.getHermano();
            }
                    1
            p.setHermano(s);
        }
    }
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 3 + 2 + 1 + 2 + 2 + 1 + 1 + 1 + n(1 + 2) + 1 + 1 + 1$

  $T({n}) = 3n + 18$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __11. Obtener Padre Árbol (getPadre)__

```java
/**
 * Metodo que permite conocer el NodoEneario padre de un dato dentro del Arbol. <br>
 * <b>post: </b> Se retorno el padre del elemento indicado. <br>
 * @param info Representa el dato del cual se quiere conocer el NodoEneario padre. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa el padre del dato consultado.
 */
private NodoEneario < T > getPadre(T info) {
        1       (1T(n/2) + O(n))
    return (`12¬gPadre(this.raiz, null, info)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1T(\frac{n}{2}) + O(n) + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __12. Obtener Padre Árbol Privado (gPadre)__

```java
/**
 * Metodo de tipo privado que permite conocer el NodoEneario padre de un dato dentro del Arbol. <br>
 * <b>post: </b> Se retorno el padre del elemento indicado. <br>
 * @param r Representa la raiz del Arbol Eneario o un subarbol del mismo. <br>
 * @param t Representa el padre del NodoEneario evaluado. Si es la raiz es NULL. <br>
 * @param dato Representa el dato del cual se quiere conocer el NodoEneario padre. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa el padre del dato consultado.
 */
private NodoEneario < T > gPadre(NodoEneario < T > r, NodoEneario < T > t, T dato) {
             2
    NodoEneario < T > q, s;
           1
    if (r == null)
               1
        return (null);
             1         2
    if (r.getInfo().equals(dato)) {
             1
        return (t);
    }
      1      1
    q = r.getHijo();
              1
    while (q != null) {
          1 //Llamado Recursivo 1
        s = gPadre(q, r, dato);
               1
        if (s != null) {
               1
            return (s);
        }
          1
        r = null;
          1        1
        q = q.getHermano();
    }
          1
    return (null);
}
```

* ### __Costo Operacional__

  $O({n}) = 2 + 1 + 3 + 2 + 1 + n(1 + 1 + 1 + 2) + 1 + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***

## __13. Obtener Hermano Árbol (getHermano)__

```java
/**
 * Metodo que permite conocer el NodoEneario hermano a la izquierda de un dato dentro del Arbol. <br>
 * <b>post: </b> Se retorno el hermano del elemento indicado. <br>
 * @param info Representa el dato del cual se quiere conocer el NodoEneario hermano. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa el hermano del dato consultado.
 */
private NodoEneario < T > getHermano(T info) {
       1     (2T(n/2) + O(n))
    return (`14¬gHermano(this.raiz, null, info)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 2T(\frac{n}{2}) + O(n) + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __14. Obtener Hermano Árbol Privado (gHermano)__

```java
/**
 * Metodo de tipo privado que permite conocer el NodoEneario hermano de un dato dentro del Arbol. <br>
 * <b>post: </b> Se retorno el hermano del elemento indicado. <br>
 * @param r Representa la raiz del Arbol Eneario o un subarbol del mismo. <br>
 * @param h Representa el hermano del NodoEneario evaluado. Si es la raiz es NULL. <br>
 * @param dato Representa el dato del cual se quiere conocer el NodoEneario hermano. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa el hermano del dato consultado.
 */
private NodoEneario < T > gHermano(NodoEneario < T > r, NodoEneario < T > h, T dato) {
               3        1 
    NodoEneario < T > p = null, q, s;
          1
    if (r == null)
             1
        return (null);
             1         2
    if (r.getInfo().equals(dato)) {
              1
        return (h);
    }
      1       1
    q = r.getHijo();
              1
    while (q != null) {
          1 //Llamada Recursiva 1
        s = gHermano(q, p, dato);
               1
        if (s != null) {
                1
            return (s);
        }
          1
        p = q;
          1 //Llamada Recursiva 2
        q = q.getHermano();
    }
           1
    return (null);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 1 + 3 + 2 + 1 + n(1 + 1 + 1 + 1) + 1 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __15. Consultar Existencia Elemento en el Árbol (esta)__

```java
/**
 * Metodo que permite evaluar la existencia un dato dentro del Arbol Eneario. <br>
 * <b>post: </b> Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo boolean que contiene un true si ubico el dato y false en caso contrario.
 */
public boolean esta(T dato) {
               2         1
    if (`34¬this.esVacio()`)
              1
        return (false);
        1       1        (1T(n/2) + O(n))
    boolean rta = (`16¬this.esta(this.raiz, dato))`;
        1
    return rta;
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + (1T(\frac{n}{2}) + O(n)) + 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n) + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __16. Consultar Existencia Elemento en el Árbol Privado (esta)__

```java
/**
 * Metodo que permite evaluar la existencia un dato dentro del Arbol Eneario. <br>
 * <b>post: </b> Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param r Representa la raiz del Arbol Eneario en el que se buscara el dato. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo boolean que contiene un true si ubico el dato y false en caso contrario.
 */
private boolean esta(NodoEneario < T > r, T dato) {
             1
    NodoEneario < T > q;
          1
    boolean s;
           1
    if (r == null)
              1
        return (false);
              1        2
    if (r.getInfo().equals(dato))
              1
        return (true);
      1       1
    q = r.getHijo();
              1
    while (q != null) {
          1 //Llamado Recursivo 1
        s = esta(q, dato);
            1
        if (s)
                  1
            return (true);
          1        1
        q = q.getHermano();
    }
           1
    return (false);
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + 1 + 3 + 2 + 1 + n(1 + 1 + 2 ) + 1 + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***

## __17. Buscar Nodo en el Árbol por Dato Privado (buscar)__

```java
/**
 * Metodo que permite buscar un dato dentro del Arbol Eneario y retornar el Nodo que lo contiene. <br>
 * <b>post: </b> Se retorno el NodoEneario<T> que representa la ubicacion del dato en el Arbol. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa la ubicacion del dato dentro del Arbol.
 */
private NodoEneario < T > buscar(T dato) {
               2     1
    if (`34¬this.esVacio()`)
        //Mejor de los casos
              1
        return (null);
        1            (1T(\frac{n}{2}) + O(n))
    return (`18¬this.buscar(this.raiz, dato)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 1 + 1T(\frac{n}{2}) + O(n)$

  $T({n}) = 1T(\frac{n}{2}) + O(n) + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __18. Buscar Nodo en el Árbol por Raiz y Dato Privado (buscar)__

```java
/**
 * Metodo que permite buscar un dato dentro del Arbol Eneario y retornar el Nodo que lo contiene. <br>
 * <b>post: </b> Se retorno el NodoEneario<T> que representa la ubicacion del dato en el Arbol. <br>
 * @param r Representa la raiz del Arbol Eneario en el que se buscara el dato. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo NodoEneario<T> que representa la ubicacion del dato dentro del Arbol.
 */
private NodoEneario < T > buscar(NodoEneario < T > r, T dato) {
              2
    NodoEneario < T > q, s;
           1
    if (r == null)
              1
        return (r);
             1        2
    if (r.getInfo().equals(dato))
             1
        return (r);
      1      1
    q = r.getHijo();
              1
    while (q != null) {
          1 //Llamado recursivo 1      
        s = buscar(q, dato);
               1
        if (s != null) {
                 1
            return (s);
        }
          1         1
        q = q.getHermano();
    }
           1
    return (null);
}
```

* ### __Costo Operacional__

  $O({n}) = 2 + 1 + 1 + 2 + 1 + 1 + 1 + n(1 + 1 + 1 + 1 ) + 1 + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***

## __19. Obtener Iterador Hijos por Padre (getHijos)__

```java
/**
 * Metodo que permite conocer los hijos de un dato insertado dentro del Arbol y retornarlos en un Iterator. <br>
 * <b>post: </b> Se retorno un Iterador con los hijos del dato evaluado. <br>
 * @param padre Representa el dato del cual se quieren conocer los hijos insertados en dicho subarbol. <br>
 * @return Un objeto de tipo Iterator con los hijos del dato evaluado.
 */
public Iterator < T > getHijos(T padre) {
           1        1       1
    ListaCD < T > l = new ListaCD < T > ();
           1      1     (1T(n/2) + O(n) + 4)
    NodoEneario p = `17¬this.buscar(this.raiz, padre)`;
           1
    if (p == null)
        //Mejor de los casos
             1        KTE
        return (l.iterator()); //Este Nodo no existe
           1      1      1
    NodoEneario q = p.getHijo();
              1
    while (q != null) {
                 KTE        1       1 
        l.insertarAlFinal((T) q.getInfo());
          1       1
        q = q.getHermano();
    }
        1        KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + (1T(\frac{n}{2}) + O(n) + 4) + 1 + 3 + 1 + n(KTE + 2 + 2) + 1 + 1 + KTE$

  $T({n}) = 1T(\frac{n}{2}) + O(n) + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __20. Obtener Iterador Hojas (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol Eneario. <br>
 * @return Un objeto Iterador con las hojas del Arbol Eneario.
 */
public Iterator < T > getHojas() {
          1          1       1
    ListaCD < T > l = new ListaCD();
        (1T(n/2) + O(n))
    `21¬getHojas(this.raiz, l)`;
        1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (1T(\frac{n}{2}) + O(n)) + 1 + KTE$

  $T({n}) = 1T(\frac{n}{2}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __21. Obtener Iterador Hojas Privado (getHojas)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con las hojas del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol Eneario.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void getHojas(NodoEneario < T > r, ListaCD < T > l) {
           1
    NodoEneario < T > q;
          1
    if (r == null)
        //Mejor de los casos
           1
        return;
      1      1
    q = r.getHijo();
           1
    if (q == null) {
        //Mejor de los casos
                KTE            1
        l.insertarAlFinal(r.getInfo());
           1
        return;
    }
              1
    while (q != null) {
        //Llamado Recursivo 1
        getHojas(q, l);
          1        1
        q = q.getHermano();
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + 2 + 1 + 1 + n( 2 ) + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***

## __22. Consultar Existencia Hoja en Nodo Privado (esHoja)__

```java
/**
 * Metodo que permite evaluar si un NodoEneario es una Hoja del Arbol Eneario. <br>
 * <b>post: </b> Se evaluo si el NodoEneario<T> es o no una hoja del Arbol. <br>
 * @param r Representa el Nodo a ser evaluado si es o no una Hoja del Arbol. <br>
 * @return Un objeto de tipo boolean que es true si el Nodo es una Hoja y false en caso contrario.
 */
private boolean esHoja(NodoEneario < T > r) {
        1         1      1
    return (r.getHijo() == null);
}
```

* ### __Costo Operacional__

  $T({n}) = 3$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(1)$

***

## __23. Consultar Número Hojas en el Árbol (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Eneario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @return El numero de hojas existentes en el Arbol Eneario.
 */
public int contarHojas() {
       1        (1T(n/2) + O(n))
    return (`24¬contarHojas(this.raiz)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1T(\frac{n}{2}) + O(n) + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __24. Consultar Número Hojas en el Árbol Privado (contarHojas)__

```java
/**
 * Metodo de tipo privado que permite determinar el numero de Nodo hojas dentro del Arbol Eneario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @return El numero de hojas existentes en el Arbol Eneario.
 */
private int contarHojas(NodoEneario < T > r) {
         1
    NodoEneario q;
           1
    if (r == null)
        //Mejor de los casos
            1
        return (0);
      1      1
    q = r.getHijo();
           1
    if (q == null) {
        //Mejor de los casos
             1
        return (1);
    }
        1    1
    int acum = 0;
              1
    while (q != null) {
             2  //Llamado Recursivo 1
        acum += contarHojas(q);
          1        1
        q = q.getHermano();
    }
        1
    return (acum);
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + 2 + 1 + 2 + 1 + n( 2 + 2 ) + 1 + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***

## __25. Obtener Iterador en Pre-Orden (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el Arbol.<br>
 * @return Un Iterador en preorden (padre->Primer Hijo en preorden -> Hermano en preorden) para el arbol Eneario.
 */
public Iterator < T > preOrden() {
              1     1           1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(n/2) + O(n))  1
    `26¬preOrden`(`4¬this.getRaiz()`, l);
        1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(n)) + 1 + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __26. Obtener Iterador en Pre-Orden Privado (preOrden)__

```java
/**
 * Metodo que tipo privado que retorna un Iterador con el recorrido preOrden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el Arbol.<br>
 * @param r representa la raiz del Arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del Arbol. <br>
 */
private void preOrden(NodoEneario < T > r, ListaCD < T > l) {
             1
    NodoEneario < T > q;
           1
    if (r != null) {
                 KTE            1
        l.insertarAlFinal(r.getInfo());
          1      1
        q = r.getHijo();
               1
        if (q != null) {
            //Llamado Recursivo 1
            preOrden(q, l);
              1        1
            q = q.getHermano();
                      1
            while (q != null) {
                //Llamado Recursivo 2
                preOrden(q, l);
                  1        1
                q = q.getHermano();
            }
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + KTE + 1 + 2 + 1 + 2 + 1 + n(2) + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __27. Obtener Iterador en In-Orden (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el Arbol.<br>
 * @return Un Iterador en inOrden (Primer hijo en InOrden->padre->Hermano en inOrden) para el arbol Eneario. <br>
 */
public Iterator < T > inOrden() {
            1       1        1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(n/2) + O(n))   1
    `28¬inOrden`(`4¬this.getRaiz()`, l);
        1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(n)) + 1 + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __28. Obtener Iterador en In-Orden Privado (inOrden)__

```java
/**
 * Metodo de tipo privado que retorna un Iterador con el recorrido in Orden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador inOrdenpara el Arbol.<br>
 * @param r representa la raiz del Arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del Arbol. <br>
 */
private void inOrden(NodoEneario < T > r, ListaCD < T > l) {
              1
    NodoEneario < T > q;
           1
    if (r != null) {
          1
        q = r.getHijo();
              1
        if (q == null) {
            //Mejor de los casos
                     KTE           1
            l.insertarAlFinal(r.getInfo());
        } else {
            //Llamado Recursivo 1
            inOrden(q, l);
                     KTE           1
            l.insertarAlFinal(r.getInfo());
              1        1
            q = q.getHermano();
                      1
            while (q != null) {
                //Llamado Recursivo 2
                inOrden(q, l);
                  1        1
                q = q.getHermano();
            }
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + 1 + 1 + KTE + 1 + 2 + 1 + n(2) + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __29. Obtener Iterador en Post-Orden (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el Arbol.<br>
 * @return Un Iterador en postOrden (Hijo en postOrden->Hermano en postOrden->padre) para el Arbol Eneario. <br>
 */
public Iterator < T > postOrden() {
            1       1           1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(\frac{n}{2}) + O(n))    1
    `30¬postOrden`(`4¬this.getRaiz()`, l);
       1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(n)) + 1 + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __30. Obtener Iterador en Post-Orden Privado (postOrden)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con el recorrido postOrden del Arbol Eneario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol.
 */
private void postOrden(NodoEneario < T > r, ListaCD < T > l) {
              1
    NodoEneario < T > q;
           1
    if (r != null) {
          1      1
        q = r.getHijo();
                  1
        while (q != null) {
            //Llamado Recursivo 1
            postOrden(q, l);
              1         1
            q = q.getHermano();
        }
                 KTE            1
        l.insertarAlFinal(r.getInfo());
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 1 + 1 + 1 + KTE + 1 + 2 + 1 + n(2) + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __31. Obtener Iterador Niveles Árbol (impNiveles)__

```java
/**
 * Metodo que permite retornar un Iterador con el recorrido por niveles del Arbol Eneario. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol Eneario.<br>
 * @return Un iterador con el recorrido por niveles del Arbol Eneario.
 */
public Iterator < T > impNiveles() {
       1           1            1      1
    Cola < NodoEneario < T >> c = new Cola();
             1      1         1
    ListaCD < T > l = new ListaCD();
                  2    1
    if (`34¬this.esVacio()`)
              1       KTE
        return (l.iterator());
             2
    NodoEneario < T > s, q;
        KTE        
    c.enColar(this.raiz);
           1     KTE
    while (!c.esVacia()) {
          1      KTE
        q = c.deColar();
               1
        if (q != null) {
                    KTE             1
            l.insertarAlFinal(q.getInfo());
              1      1
            s = q.getHijo();
                     1
            while (s != null) {
                    KTE
                c.enColar(s);
                  1        1
                s = s.getHermano();
            }
        }
    }
         1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 4 + 3 + 3 + 2 + KTE + 1 + KTE + n(1 + KTE + 1 + KTE + 1 + 2 + 1 + n(KTE + 2) + 1) + 1 + KTE + 1 + KTE$

  $T({n}) = n(KTE)^{2} + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{2}})$

***

## __32. Obtener Peso Árbol (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol Eneario. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol Eneario.<br>
 * @return Un entero con la cantidad de elementos del Arbol Eneario.
 */
public int getPeso() {
       1    (2T(n/2) + O(n))  1
    return (`33¬getPeso`(`4¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (2T(\frac{n}{2}) + O(n)) + 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n) + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __33. Obtener Peso Árbol Privado (getPeso)__

```java
/**
 * Metodo de tipo privado que permite conocer el numero de elemento del Arbol Eneario. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol.<br>
 * @param r Representa la raiz del Arbol, o raiz de subarbol. <br>
 * @return El munero de elementos que contiene el Arbol Eneario.
 */
private int getPeso(NodoEneario < T > r) {
              1
    NodoEneario < T > q;
      1      1
    int cant = 0;
           1
    if (r != null) {
            2
        cant++;
          1      1
        q = r.getHijo();
               1
        if (q != null) {
                  2 //Llamado Recursivo 1    
            cant += getPeso(q);
              1       1
            q = q.getHermano();
                      1
            while (q != null) {
                      2 //Llamado Recursivo 2
                cant += getPeso(q);
                  1         1
                q = q.getHermano();
            }
        }
    }
           1
    return (cant);
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 2 + 1 + 2 + 1 + 2 + 2 + 1 + n(2 + 2) + 1 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __34. Consultar Existencia Elementos Árbol (esVacio)__

```java
/**
 * Metodo que permite conocer si un Arbol Eneario se encuenta vacio. <br>
 * <b>post: </b> Se evaluo si el ArbolEneario se enecuenta o no vacio. <br>
 * @return Un objeto de tipo boolean, true si el Arbol se encuenta vacio, false en caso contrario
 */
public boolean esVacio() {
       1               1
    return (this.raiz == null);
}
```

* ### __Costo Operacional__

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __35. Obetener Grado Árbol (gordura)__

```java
/**
 * Metodo que permite conocer el grado del Arbol Eneario, que es su misma gordura. <br>
 * <b>post: </b> Se retorno la gordura del Arbol Eneario, es decir el mayor numero de hijos de un Nodo. <br>
 * @return Un objeto de tipo int con la gordura del Arbol Eneario.
 */
public int gordura() {
              2      1
    if (`34¬this.esVacio()`)
              1
        return (0);
        1        1
    int masGordo = -1;
       1          1                1     1             1
    Cola < NodoEneario < T >> cola = new Cola < NodoEneario < T >> ();
              1        1       1
    Cola < Integer > c = new Cola < Integer > ();
               2
    NodoEneario < T > s, q;
      1   1
    int i = 0;
      2      1        1
    int cont = 1, ant = -1;
            KTE            1
    cola.enColar(`4¬this.getRaiz()`);
        KTE
    c.enColar(i);
           1      KTE
    while (!cola.esVacia()) {
          1        KTE
        q = cola.deColar();
          1      KTE
        i = c.deColar();
               1
        if (i != ant) {
                         1
            if (masGordo < cont) {
                         1
                masGordo = cont;
            }
                 1
            cont = 0;
                1
            ant = i;
        }
           2
        cont++;
          1      1
        s = q.getHijo();
                  1
        while (s != null) {
                    KTE
            cola.enColar(s);
                KTE     1
            c.enColar(i + 1);
              1        1
            s = s.getHermano();
        }
    }
        1             1          
    return ((masGordo < cont) ? cont : masGordo);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + 5 + 3 + 2 + 2 + 4 + KTE + 1 + KTE + 1 + KTE + n(1 + KTE + 1 + KTE + 1 + 1 + 1 + 1 + 1 + 2 + 2 + 1 + n(KTE + KTE + 1 + 2) + 1) + 1 + KTE + 2$

  $T({n}) = n(KTE)^{2} + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{2}})$

***

## __36. Obtener Altura Árbol (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol Eneario. <br>
 * <b>post: </b> Se retorno la altura del Arbol Eneario.<br>
 * @return Un entero con la altura del Arbol Eneario.
 */
public int getAltura() {REVISAR
              1       1
    if (`34¬this.esVacio()`)
        //Mejor de los casos
            1
        return (0);
        1   (1T(n/2) + O(n))   1
    return (`37¬getAltura`(`4¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + (1T(\frac{n}{2}) + O(n)) + 1$
  
  $T({n}) = 1T(\frac{n}{2}) + O(n) + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __37. Obtener Altura Árbol Privado (ArbolBinario)__

```java
/**
 * Metodo de tipo privado que permite conocer la altura del Arbol Eneario. <br>
 * <b>post: </b> Se retorno la altura del Arbol Eneario. <br>
 * @param r Representa la raiz del Arbol, o raiz de subarbol. <br>
 * @return Un entero con la altura del Arbol Eneario.
 */
private int getAltura(NodoEneario < T > r) {
                  3       1
    if (`22¬this.esHoja(r)`)
        //Mejor de los casos
            1
        return (1);
           1      1
    int maxAltura = 0;
               1
    NodoEneario < T > q;
           1
    if (r != null) {
          1      1
        q = r.getHijo();
               1
        if (q != null) {
                      1
            while (q != null) {
                        1     1 //Llamado Recursivo 1
                int auxAltura = getAltura(q);
                              1
                if (auxAltura > maxAltura)
                              1
                    maxAltura = auxAltura;
                  1         1
                q = q.getHermano();
            }
        }
    }
         1            1
    return (maxAltura + 1);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 2 + 1 + 1 + 2 + 1 + 1 + n( 2 + 1 + 1 + 2 ) + 1 + 2$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n})$

***
