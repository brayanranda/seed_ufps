# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolBinarioBusqueda)__

[CODIGO FUENTE (ArbolBinarioBusqueda)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolBinarioBusqueda.java)

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
 * Crea un Arbol Binario de Busqueda vacio. <br>
 * <b>post: </b> Se creo un Arbol Binario de Busqueda vacio. <br>
 */
public ArbolBinarioBusqueda() {
      1
    super();
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Metodo Constructor con raiz predeterminada()__

```java
/**
 * Crea un arbol con una raiz predefinida. <br>
 * <b>post: </b> Se creo un Arbol Binario de Busqueda con raiz predeterminada. <br>
 * @param raiz  un tipo T, almacena la direccion de memoria de un nodo de un Arbol Binario de Busqueda. <br>
 */
public ArbolBinarioBusqueda(T raiz) {
      KTE
    super(raiz);
}
```

* ### __Costo Operacional__

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Objeto la raiz del Arbol (getRaiz)__

```java
@Override
public NodoBin < T > getRaiz() {
       1         1
    return (super.getRaiz());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Conocer el objeto raiz del Arbol AVL (getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto raiz del Arbol AVL. <br>
 * <b>post: </b> Se retorno el objeto raiz del Arbol. <br>
 * @return Un objeto de tipo T que representa el dato en la raiz del Arbol.
 */
@Override
public T getObjRaiz() {
       1        KTE
    return super.getObjRaiz();
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __5. Insertar un dato en el Arbol Binario de Busqueda (insertar)__

```java
/**
 * Metodo que permite insertar un dato en el Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se inserto un nuevo dato al Arbol Binario de Busqueda. <br>
 * @param dato un elemento tipo T que se desea almacenar en el arbol. <br>
 * @return  true si el elemento fue insertado o false en caso contrario
 */
public boolean insertar(T dato) {
       1             1   1T(n/2)+O(1)  1           1T(n/2)+O(1) 1
    NodoBin < T > rr = this.esta(dato) ? null : `6¬insertar(this.getRaiz(), dato)`;
           1
    if (rr != null)
            1
        this.setRaiz(rr);
       1        1
    return (rr != null);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1T(n/2)+O(1) + 1 + 1T(n/2)+O(1) + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 1T(n/2)+O(1) + 1T(n/2)+O(1) + 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$

***

## __6. Metodo Privado: Insertar un dato en el Arbol Binario de Busqueda segun factor de ordenamiento(insertar)__

```java
/**
 * Metodo que permite insertar un dato en el Arbol Binario de Busqueda segun factor de ordenamiento. <br>
 * <b>post: </b> Se inserto ordenado un nuevo dato al Arbol Binario de Busqueda. <br>
 * @param r de tipo NoboBin<T> que representa la raiz del arbol. <br>
 * @param dato elemento a insertar en el arbol de forma ordenada. <br>
 * @return true si el elemento fue insertado o false en caso contrario
 */
private NodoBin < T > insertar(NodoBin < T > r, T dato) {
           1
    if (r == null)
           1     1                   
        return (new NodoBin < T > (dato, null, null));
     1                  1        1          1
    int compara = ((Comparable) r.getInfo()).compareTo(dato);
                1
    if (compara > 0)
         1                 1
        r.setIzq(insertar(r.getIzq(), dato));
    else
    //Peor de los casos
                1
    if (compara < 0)
                 //llamado recursivo 1
         1                 1 
        r.setDer(insertar(r.getDer(), dato));
    else {
                1                                  1     1
        System.err.println("Error dato duplicado:" + dato.toString());
    }
       1
    return r;
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(1)->0$

  $T({n}) = 1T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$

***

## __7. Borrar un elmento del Arbol Binario de Busqueda(eliminar)__

```java
/**
 * Metodo que permite borrar un elmento del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se elimino el elemento en el Arbol Binario de Busqueda. <br>
 * @param x dato que se desea eliminar. <br>
 * @return  el dato borrado o null si no lo encontro
 */
@Override
public boolean eliminar(T x) {
        1    1T(n/2)+O(1)
    if (!this.esta(x)) {
          1
        return (false);
    }
       1            1     1T(n/2)+O(n)   1
    NodoBin < T > z = `8¬eliminarABB(this.getRaiz(), x)`;
        1
    this.setRaiz(z);
       1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1T(n/2)+O(n) + 1 + 1 + 1T(n/2)+O(n) + 1 + 1 + 1$

  $T({n}) = 1T(n/2)+O(n) + 1T(n/2)+O(n) + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __8. Metodo Private: Eliminar un dato en el Arbol Binario de Busqueda segun factor de ordenamiento(eliminarABB)__

```java
/**
 * Metodo de tipo privado que permite eliminar un dato en el Arbol Binario de Busqueda segun factor de ordenamiento, manteniendo su propiedad de orden,
 * para esto se busca el menor de los derechos y lo intercambia por el dato que desea eliminar. La idea del algoritmo es que el dato a eliminar 
 * se coloque en una hoja o en un nodo que no tenga una de sus ramas. <br>
 * <b>post: </b> Se elimino el elemento Arbol Binario de Busqueda. <br>
 * @param r de tipo NoboBin<T> que representa la raiz del arbol. <br>
 * @param dato elemento que se desea eliminar del arbol. <br>
 * @return el dato borrado o null si no lo encontro
 */
private NodoBin < T > eliminarABB(NodoBin < T > r, T x) {
          1
    if (r == null)
          1
        return null; //<--Dato no encontrado		
     1          1       1        1          1
    int compara = ((Comparable) r.getInfo()).compareTo(x);
                1
    if (compara > 0)
         1                    1
        r.setIzq(eliminarABB(r.getIzq(), x));
    else
                1   
    if (compara < 0)
         1                    1
        r.setDer(eliminarABB(r.getDer(), x));
    else {
        //Peor de los casos
             1          1       1  1          1
        if (r.getIzq() != null && r.getDer() != null) {
               1                  1      4n + 5           1
            NodoBin < T > cambiar = `9¬this.masIzquierda(r.getDer())`;
            1     1        1
            T aux = cambiar.getInfo();
                   1         1
            cambiar.setInfo(r.getInfo());
             1
            r.setInfo(aux);
                    //llamado recursivo 1
             1                    1
            r.setDer(eliminarABB(r.getDer(), x));
        } else {
              1   1          1       1  1            1
            r = (r.getIzq() != null) ? r.getIzq() : r.getDer();
        }
    }
      1
    return r;
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = 1T(n/2)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Metodo Protected: Busca el menor dato del arbol(masIzquierda)__

```java
/**
 * Metodo que busca el menor dato del arbol. El menor dato del arbol se encuentra en el nodo mas izquierdo. <br>
 * <b>post: </b> Se retorno el nodo mas izquierdo del arbol. <br>
 * @param r reprenta la raiz del arbol. <br>
 * @return el nodo mas izquierdo del arbol
 */
@SuppressWarnings("empty-statement")
protected NodoBin < T > masIzquierda(NodoBin < T > r) {
            1          1         1  1
    for (; r.getIzq() != null; r = r.getIzq());
       1    
    return (r);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + n(1 + 1 + 1 + 1) + 1 + 1 + 1$

  $T({n}) = 4n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Permite evaluar la existencia de un dato dentro del Arbol Binario de Busqueda(estaABB)__

```java
/**
 * Metodo que permite evaluar la existencia de un dato dentro del Arbol Binario de Busqueda es necesario para que el metodo funcione 
 * que los objetos almacenados en el arbol tengan sobreescrito el metodo equals. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el Arbol. <br>
 * @param x representa la informacion del elemento que se encontrar en el arbol. <br>
 * @return un boolean , true si el dato esta o false en caso contrario.
 */
public boolean estaABB(T x) {
      1  1T(n/2)+O(1) 1
    return `11¬(esta(this.getRaiz(), x))`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1T(n/2)+O(1) + 1$

  $T({n}) = 1T(n/2)+O(1) + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$

***

## __11. Metodo private: conocer si un elemento especifico se encuentra en el arbol(esta)__

```java
/**
 * Metodo que permite conocer si un elemento especifico se encuentra en el arbol. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el arbol. <br>
 * @param r representa la raiz del arbol. <br>
 * @param x representa la informacion del elemento que se encontrar en el arbol. <br>
 * @return un boolean , true si el dato esta o false en caso contrario.
 */
private boolean esta(NodoBin < T > r, T x) {
           1
    if (r == null)
           1
        return (false);
      1                  1       1          1
    int compara = ((Comparable) r.getInfo()).compareTo(x);
                1
    if (compara > 0)
           1           1
        return (esta(r.getIzq(), x));
    else
    //Peor de los casos
                1
    if (compara < 0)
                //llamada recursiva 1
           1          1
        return (esta(r.getDer(), x));
    else
           1
        return (true);
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(1)->0$

  $T({n}) = 1T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$

***

## __12. Consultar un elemento existente dentro del Arbol Binario de Busqueda (buscar)__

```java
/**
 * Metodo que permite consultar un elemento existente dentro del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno un NodoBin<T> perteneciente al dato buscado. <br>
 * @param info Elemento a ubicar dentro del Arbol Binario de Busqueda. <br>
 * @return Un objeto de tipo NodoBin<T> que representa el objeto buscado.
 */
protected NodoBin < T > buscar(T info) {
      1   2T(n/2)+O(1) 1
    return `13¬(buscar(this.getRaiz(), info))`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 2T(n/2)+O(1) + 1$

    $T({n}) = 2T(n/2)+O(1) + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

***

## __13. Metodo protected: Consultar un elemento existente dentro del Arbol Binario de Busqueda (buscar)__

```java
/**
 * Metodo que permite consultar un elemento existente dentro del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno un NodoBin<T> perteneciente al dato buscado. <br>
 * @param info Elemento a ubicar dentro del Arbol Binario de Busqueda. <br>
 * @param r Representa la raiz del Arbol. <br>
 * @return Un objeto de tipo NodoBin<T> que representa el objeto buscado.
 */
protected NodoBin < T > buscar(NodoBin < T > r, T info) {
           1
    if (r == null)
           1
        return (null);
         1         1
    if (r.getInfo().equals(info))
           1
        return r;
    else {
                                                          //llamado recursivo 1
           1              1   1         1        1                1
        NodoBin < T > aux = (r.getIzq() == null) ? null : buscar(r.getIzq(), info);
                1
        if (aux != null)
               1
            return (aux);
        else   
                                                 //llamado recursivo 2
              1      1          1       1                1    
            return (r.getDer() == null) ? null : buscar(r.getDer(), info);
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

***

## __14. Retornar iterador con las hojas del Arbol Binario de Busqueda (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol Binario de Busqueda.<br>
 * @return un iterador con las hojas del Arbol Binario de Busqueda.
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

## __15. Determinar el numero de Nodo hojas dentro del Arbol Binario de Busqueda (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol de Busqueda. <br>
 * @return El numero de hojas existentes en el Arbol Binario de Busqueda.
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

## __16. Retornar iterador con recorrido Pre Orden del Arbol Binario de Busqueda (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol. <br>
 * @return un iterador en preorden (primero la raiz luego los hijos) para el  Arbol Binario de Busqueda.
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

## __17. Retornar iterador con recorrido In Orden del Arbol Binario de Busqueda (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol. <br>
 * @return un iterador en inOrden (primero el hijo izquierdo luego la raiz y despues el hijo derecho) para el  Arbol Binario de Busqueda. <br>
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

## __18. Retornar iterador con recorrido Post Orden del Arbol Binario de Busqueda (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido pos Orden del  Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @return un iterador en postOrden (primero los hijos y luego la raiz) para el  Arbol Binario de Busqueda. <br>
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

## __19. Retornar iterador con recorrido por niveles del Arbol Binario de Busqueda (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol Binario de Busqueda. <br>
 * @return un un iterador con el recorrido por niveles del Arbol Binario de Busqueda.
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

## __20. obtener el peso del Arbol Binario de Busqueda (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol Binario de Busqueda. <br>
 * @return Un entero con la cantidad de elementos del Arbol Binario de Busqueda.
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

## __21. Saber si el arbol se encuentra vacio(esVacio)__

```java
/**
 * Metodo que permite saber si el arbol se encuentra vacio. <br>
 * <b>post: </b> Se retorno true si el arbol no contiene elementos. <br>
 * @return true si no hay datos en el arbol
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

## __22. Obtener Altura del Arbol Binario de Busqueda (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol Binario de Busqueda. <br>
 * <b>post: </b> Se retorno la altura del Arbol Binario de Busqueda.<br>
 * @return Un entero con la altura del Arbol Binario de Busqueda.
 */
@Override
public int getAltura() {
       1         KTE
    return (super.getAltura());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __23. clonar la informacion de un Arbol Binario de Busqueda (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un ArbolBinario de Busqueda y retornarla en un nuevo Arbol. <br>
 * @return Un nuevo ArbolBinarioBusqueda con la informacion clonada del actual Arbol.
 */
@Override
public ArbolBinarioBusqueda < T > clonar() {
            1                    1  1
    ArbolBinarioBusqueda < T > t = new ArbolBinarioBusqueda < T > ();
     1        2T(n/2)+O(1)  1
    `24¬t.setRaiz(clonarABB(this.getRaiz()))`;
    return (t);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 +2T(n/2)+O(1) + 1$

  $T({n}) = 2T(n/2)+O(1) + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

***

## __24. Metodo Privado: clonar la informacion de un Arbol Binario de Busqueda (clonar)__

```java
private NodoBin < T > clonarABB(NodoBin < T > r) {
           1
    if (r == null)
           1
        return r;
    else {
                                                          //llamado recursivo 1    //llamado recursivo 2
           1              1  1                  1                      1                      1
        NodoBin < T > aux = new NodoBin < T > (r.getInfo(), clonarABB(r.getIzq()), clonarABB(r.getDer()));
           1
        return aux;
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


***

## __25. Mostrar informacion del Arbol (imprimeABB)__

```java
/**
 * Metodo que permite conocer por consola la informacion del Arbol Binario.
 */
@Override
public void imprime() {
            1
    System.out.println(" ----- Arbol Binario de Busqueda ----- ");
      2T(n/2)+O(1)       1
    `26¬this.imprimeABB(super.getRaiz())`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 2T(n/2)+O(1) + 1$

  $T({n}) = 2T(n/2)+O(1) + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

***

## __26. Mostrar informacion del Arbol (imprimeABB)__

```java
/**
 * Metodo de tipo privado que permite mostrar por consola la informacion del Arbol Binario. <br>
 * @param n Representa la raiz del ArbolBinario o de alguno de sus subarboles.
 */
public void imprimeABB(NodoBin < T > n) {
    1   1
    T l = null;
    1   1
    T r = null;
          1
    if (n == null)
          1
        return;
         1          1
    if (n.getIzq() != null) {
          1  1        1
        l = n.getIzq().getInfo();
    }
         1          1
    if (n.getDer() != null) {
          1  1        1
        r = n.getDer().getInfo();
    }
            1                      1   1             1  1          1                1
    System.out.println("NodoIzq: " + l + "\t Info: " + n.getInfo() + "\t NodoDer: " + r);
         1          1
    if (n.getIzq() != null) {
        //llamado Recursivo 1
                    1
        imprimeABB(n.getIzq());
    }
         1          1
    if (n.getDer() != null) {
        //llamado Recursivo 2
                    1
        imprimeABB(n.getDer());
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

***