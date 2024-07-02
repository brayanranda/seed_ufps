# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolHeap)__

[CODIGO FUENTE (ArbolHeap)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolHeap.java)

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

## __1. Metodo Constructor vacio con un tamaño predefinido()__

```java
/**
 * Crea un Arbol Heap vacio con un tamaño predefinido. <br>
 * <b>post: </b> Se creo un Arbol Heap vacio.<br>
 */
public ArbolHeap() {
    //def es un tamaño por defecto para el Arbol.
      1      1   1    1
    T[] temp = (T[]) new Object[def];
        1      1
    this.datos = temp;
        1     1
    this.peso = 0;
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) =  8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Metodo Constructor vacio con un tamaño ingresado()__

```java
/**
 * Crea un Arbol Heap vacio, y se le define un tamaño ingresado. <br>
 * <b>post: </b> Se creo un Arbol Heap vacio.<br>
 * @param cap Representa la capacidad para almacenar datos del Heap.
 */
public ArbolHeap(int cap) {
     1       1   1     1
    T[] temp = (T[]) new Object[cap];
        1      1
    this.datos = temp;
        1     1
    this.peso = 0;
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) =  8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Obtener la raiz del Arbol Heap(getRaiz)__

```java
/**
 * Metodo que permite obtener la raiz del Arbol Heap; Es decir, el dato de MAYOR valor dentro del Arbol. <br>
 * <b>post: </b> Se retorno la raiz del Heap, es decir el dato mayor. <br>
 * @return Un objeto de tipo T que representa la raiz del Heap.
 */
public T getRaiz() {
    1   1
    T r = null;
             3
    if `14¬(!this.esVacio())`
          1     1
        r = this.datos[0];
        1
    return (r);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 3 + 1 + 1 + 1$

  $T({n}) =  8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Insertar un nuevo elemento dentro del Arbol Heap(insertar)__

```java
/**
 * Metodo que permite insertar un nuevo elemento dentro del Arbol Heap. <br>
 * <b>post: </b> Se ha insertado un nuevo elemento dentro del Heap.<br>
 * @param nuevo Representa el dato a insertar dentro del Heap.
 */
public void insertar(T nuevo) {
             1      
    if (peso >= this.datos.length)
           1
        return; //El Arbol se encuentra lleno.   
            3     
    if (`14¬this.esVacio()`) {
                      2    1
        this.datos[peso++] = nuevo;
          1
        return;
    }
     1         1    2
    int indice = peso++;
                       1
    this.datos[indice] = nuevo;
                   1      1        1                          1                         4                       1                  
    while ((indice != 0) && (((Comparable) this.datos[indice]).compareTo(this.datos[`18¬this.getPosPadre(indice)`])) > 0) {
                   1      5                               4 
        this.datos = `9¬intercambiar`(this.datos, indice, `18¬this.getPosPadre(indice)`);
               1     4
        indice = `18¬this.getPosPadre(indice)`;
    }
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 3 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 4 + 1 + n( 1 + 5 + 4 + 1 + 4 + 1 + 1 + 1 + 1 + 4 + 1 ) + 1 + 1 + 1 + 1 + 4 + 1 $

  $T({n}) =  18 + n(24) + 9$

  $T({n}) =  24n + 27$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __5. Eliminar el primer elemento (raiz) de Arbol Heap(eliminarRaiz)__

```java
/**
 * Metodo que permite eliminar el primer elemento (raiz) de Arbol Heap; El elemento MAYOR. <br>
 * <b>post: </b> Se retorno y elimino el elemento raiz del Arbol. El dato MAYOR. <br>
 * @return El elemento Mayor del Arbol que se ubica en la raiz.
 */
public T eliminarRaiz() {
              1
    if (peso <= 0)
           1
        return (null);
               1        5                     2
    this.datos = `9¬intercambiar(this.datos, 0, --peso)`;
              1
    if (peso != 0)
          22n + 15
        reorganiza(0);
    1   1           
    T x = this.datos[peso];
                     1
    this.datos[peso] = null;
        1
    return (x);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 5 + 2 + 1 + 22n + 15 + 1 + 1 + 1 + 1$

  $T({n}) = 10 + 22n + 19$

  $T({n}) = 22n + 29$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __6. Reorganizar los datos del Arbol despues de una eliminacion(reorganiza)__

```java
/**
 * Metodo que permite reorganizar los datos del Arbol despues de una eliminacion. <br>
 * <b>post: </b> Se reorganizaron los datos del Arbol Heap. 
 */
private void reorganiza(int pos) {
            1    1     1
    if (pos < 0 || pos > peso) {
           1
        return;
    }
              1   5
    while (`7¬!esHoja(pos)`) {
         1    1     3
        int j = getHijoIzq(pos);
               1       1     1          1                    1                       1     1
        if ((j < (peso - 1)) && (((Comparable) this.datos[j]).compareTo(this.datos[j + 1]) < 0))
              2
            j++;
                  1                       1                         1        1
        if (((Comparable) this.datos[pos]).compareTo(this.datos[j]) >= 0) return;
                   1      5
        this.datos = `9¬intercambiar(this.datos, pos, j)`;
            1
        pos = j;
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 5 + n(1 + 1 + 3 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 5 + 1) + 1 + 5$

  $T({n}) = 9 + n(22) + 6$

  $T({n}) =  22n + 15$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __7. Saber si un elemento ingresado es una hoja del Arbol Heap(esHoja)__

```java
/**
 * Metodo que permite saber si un elemento ingresado es una hoja del Arbol Heap. <br>
 * @param pos Posicion del elemento dentro del Arbol Heap. <br>
 * @return true o false si el elemento es o no una hoja dentro del Arbol Heap.
 */
private boolean esHoja(int pos) {
       1          1      1     1      1
    return ((pos >= peso / 2) && (pos < peso));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1$

  $T({n}) = 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __8. Eliminar un elemento cualquiera del Arbol Heap(eliminar)__

```java
/**
 * Metodo que permite eliminar un elemento cualquiera del Arbol Heap. <br>
 * <b>post: </b> Se retorno y elimino el elemento eliminado del Heap. <br>
 * @param info Representa el dato que se desea eliminar del Heap. <br>
 * @return El elemento eliminado del Arbol Heap.
 */
public T eliminar(T info) {
     1      1       4n + 5
    int pos = `21¬this.getPos(info)`;
    1
    T x;
             1
    if (pos == (-1))
          1
        return (null);
             1       1
    if (pos == (peso - 1)) {
          1                 1
        x = this.datos[peso - 1];
                 2
        this.peso--;
                         1
        this.datos[peso] = null;
          1
        return (x);
    } else {
                   1      5                         2
        this.datos = `9¬intercambiar(this.datos, pos, --peso)`;
                    1    1         1                       1                              4              1
        while ((pos > 0) && (((Comparable) this.datos[pos]).compareTo(this.datos[`18¬this.getPosPadre(pos)`]) > 0)) {
                       1      5                                  4
            this.datos = `9¬intercambiar`(this.datos, pos, `18¬this.getPosPadre(pos)`);
                1           4
            pos = `18¬this.getPosPadre(pos)`;
        }
                  1
        if (peso != 0)
              22n + 15
            `6¬reorganiza(pos)`;
    }
      1 
    x = this.datos[peso];
                     1
    this.datos[peso] = null;
      1
    return (x);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 5 + 1 + 1 + 1 + 1 + 1 + 5 + 2 + 1 + 1 + 1 + 1 + 4 + 1 + n(1 + 5 + 4 + 1 + 4) + 1 + 1 + 1 + 1 + 4 + 1 + 1 + 22n + 15 + 1 + 1 + 1$

  $T({n}) = 2 + 4n + 26 + n(15) + 10 + 22n + 18$

  $T({n}) = 41n + 56$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Metodo privado: Intercambiar la informacion de un vector dadas sus posiciones(intercambiar)__

```java
/**
 * Metodo de tipo privado que permite intercambiar la informacion de un vector dadas sus posiciones. <br>
 * <b>post: </b> Se cambio la informacion de cada una de las posicion del vector indicadas. <br>
 * @param h Vector que representa el Heap que se pretende editar la informacion. <br>
 * @param p1 Posicion del primer elemento al que se le desea cambiar la informacion. <br>
 * @param p2 Posicion del segundo elemento al que se le desea cambiar la informacion. <br>
 * @return Un objeto de tipo T[] que representa el Heap con la informacion modificada. <br>
 */
private T[] intercambiar(T[] h, int p1, int p2) {
    1      1
    T temp = h[p1];
          1
    h[p1] = h[p2];
          1
    h[p2] = temp;
       1
    return (h);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1$

  $T({n}) =  5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __10. Obtener los datos existentes dentro del Arbol Heap(getDatos)__

```java
/**
 * Metodo que permite obtener los datos existentes dentro del Arbol Heap. <br>
 * <b>post: </b> Se retornaron los datos del Heap en un objeto T[]. <br>
 * @return Un objeto de tipo T[] con los elementos insertados dentro del Heap.
 */
public T[] getDatos() {
       1
    return (this.datos);
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __11. Conocer si un dato se encuentra dentro del Arbol Heap(esta)__

```java
/**
 * Metodo que permite conocer si un dato se encuentra dentro del Arbol Heap. <br>
 * <b>post: </b> Se evaluo la existencia de un elemento dentro del Heap. <br>
 * @param info Representa el objeto que se desea consultar dentro del Heap. <br>
 * @return true o false dependiendo se si el dato se encuentra dentro del Heap. <br>
 */
public boolean esta(T info) {
          1    1      1             2
    for (int i = 0; i < this.peso; i++)
                         1
        if (this.datos[i].equals(info))
               1
            return (true);
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + n(1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) = 3 + n(4) + 4$

  $T({n}) = 4n + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __12. Obtener un Iterador para recorrer el Arbol Heap por niveles(impNiveles)__

```java
/**
 * Metodo que permite obtener un Iterador para recorrer el Arbol Heap por niveles. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Heap por medio de un Iterados. <br>
 * @return Un objeto de tipo Iterator con el recorrido por niveles del Heap.
 */
public Iterator < T > impNiveles() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
          1    1      1             2
    for (int i = 0; i < this.peso; i++) {
               KTE 
        l.insertarAlFinal(this.datos[i]);
    }
       1        KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + n(KTE + 2 + 1) + 2 + 1 + 1 + KTE$

  $T({n}) = 6 + n(KTE) + KTE$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __13. Conocer el peso del Arbol Heap(getPeso)__

```java
/**
 * Metodo que permite conocer el peso del Arbol Heap, es decir el numero de elementos insertados. <br>
 * <b>post: </b> Se retorno el peso del Heap. <br>
 * @return Un objeto de tipo int con el peso del Heap.
 */
public int getPeso() {
       1        
    return (this.peso);
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __14. Conocer si un Arbol Heap se encuentra vacio(esVacio)__

```java
/**
 * Metodo que permite conocer si un Arbol Heap se encuentra vacio; no posee elementos. <br>
 * <b>post: </b> Se evaluo si el Heap se encuentra vacio. <br>
 * @return true o false dependiendo de si el Arbol Heap se encuentra vacio o no.
 */
public boolean esVacio() {
       1              1
    return (this.peso < 1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __15. Conocer la altura del Arbol Heap(getAltura)__

```java
/**
 * Metodo que permite conocer la altura del Arbol Heap. <br>
 * <b>post: </b> Se retorno la altura del Heap. <br>
 * @return Un objeto de tipo int con la altura del Arbol Heap.
 */
public int getAltura() {
     1      1
    int alt = 0;
               KTE           1
    while (Math.pow(2, alt) <= peso)
          2
        alt++;
       1
    return (alt);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE + 1 + n(2 + KTE + 1) + KTE + 1 + 1$

  $T({n}) = KTE + n(KTE) + KTE$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __16. Utilizar un Arbol Heap para ordenar un vector por HeapSort(heapSort)__

```java
/**
 * Metodo que permite utilizar un Arbol Heap para ordenar un vector por HeapSort. <br>
 * <b>post: </b> Se retorno un vector con los datos ordenados. <br>
 * @return Un objeto de tipo T[] con la informacion (datos) ordenados.
 */
public T[] heapSort() {
    1       1   1    1 
    T aux[] = (T[]) new Object[this.datos.length];
          1    1           1      1      2
    for (int i = this.peso - 1; i >= 0; i--) {
               1    22n + 29
        aux[i] = `5¬this.eliminarRaiz()`;
    }
       1
    return (aux);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 22n + 29 + 2 + 1) + 2 + 1 + 1$

  $T({n}) = 8 + n(22n + 33) + 4$

  $T({n}) = 22n^2 + 33n + 12$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __17. Limpiar la informacion de los datos ingresados al Heap(limpiar)__

```java
/**
 * Metodo que permite limpiar la informacion de los datos ingresados al Heap. <br>
 * <b>post: </b> Se ha limpiado la informacion del Heap. <br>
 */
public void limpiar() {
                      1             2
    for (; this.peso >= 0; this.peso--)
                              1
        this.datos[this.peso] = null;
              1
    this.peso = 0;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + n(1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) = 1 + n(4) + 4$

  $T({n}) = 4n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __18. Conocer la posicion del padre de un elemento dentro del Heap(getPosPadre)__

```java
/**
 * Metodo que permite conocer la posicion del padre de un elemento dentro del Heap. <br>
 * @param hijo Representa el dato del cual se quiere conocer la posicion del padre. <br>
 * @return Un objeto de tipo int con la posicion del padre del elemento consultado.
 */
private int getPosPadre(int hijo) {
              1
    if (hijo <= 0)
           1
        return (-1);
       1         1     1
    return (hijo - 1) / 2;
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __19. Permite conocer el Hijo izquierdo de un elemento dentro del Heap(getHijoIzq)__

```java
/**
 * Metodo que permite conocer el Hijo izquierdo de un elemento dentro del Heap.
 */
private int getHijoIzq(int posPadre) {
       1       1           1
    return ((2 * posPadre) + 1);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1$

  $T({n}) =  3$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __20. Permite conocer el Hijo derecho de un elemento dentro del Heap(getHijoDer)__

```java
/**
 * Metodo que permite conocer el Hijo derecho de un elemento dentro del Heap.
 */
private int getHijoDer(int posPadre) {
       1       1           1
    return ((2 * posPadre) + 2);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1$

  $T({n}) =  3$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Permite conocer la posicion de un dato dentro del Heap(getPos)__

```java
/**
 * Metodo que permite conocer la posicion de un dato dentro del Heap. <br>
 */
private int getPos(T info) {
          1    1      1             2
    for (int i = 0; i < this.peso; i++) {
                         1
        if (this.datos[i].equals(info))
               1
            return (i);
    }
       1
    return (-1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + n(1 + 1 + 2) + 1 + 1$

  $T({n}) = 3 + n(4) + 2$

  $T({n}) = 4n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __22. Contar la Hojas de un Arbol Heap(contarHojas)__

```java
/**
 * Metodo que permite contar la Hojas de un Arbol Heap. <br>
 * @return Un objeto de tipo int con la cantidad de elemenos Hoja existente en el Arbol.
 */
public int contarHojas() {
     1       1
    int cant = 0;
          1    1      1             2
    for (int i = 0; i < this.peso; i++) {
                 5
        if (`7¬this.esHoja(i)`)
              2
            cant++;
    }
       1
    return (cant);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + n(5 + 2 + 2 + 1)+ 2 + 1 + 1$

  $T({n}) = 5 + n(10) + 4$

  $T({n}) = 10n + 9$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __23. Conocer la Hojas del Arbol heap y retornarla en un listado(getHojas)__

```java
/**
 * Metodo que permite conocer la Hojas del Arbol heap y retornarla en un listado. <br>
 * @return Un objeto iterador de la lista con las hojas del Arbol Heap.
 */
public Iterator getHojas() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
          1    1      1             2
    for (int i = 0; i < this.peso; i++) {
                5
        if (`7¬this.esHoja(i)`)
                 KTE
            l.insertarAlFinal(this.datos[i]);
    }
      1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + n(5 + KTE + 2 + 1) + 2 + 1 + 1 + KTE$

  $T({n}) = 6 + n(KTE) + KTE$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __24. Eliminar los elementos Hoja del Arbol heap(podar)__

```java
/**
 * Metodo que permite eliminar los elementos Hoja del Arbol heap.
 */
public void podar() {
     1       1
    int cant = 0;
          1    1      1             2
    for (int i = 0; i < this.peso; i++) {
                5
        if (`7¬this.esHoja(i)`) {
                          1
            this.datos[i] = null;
               2
            cant++;
        }
    }
              1           1
    this.peso = this.peso - cant;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + n(5 + 1 + 2 + 2 + 1) + 2 + 1 + 1 + 1$

  $T({n}) = 5 + n(11) + 5$

  $T({n}) = 11n + 10$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __25. Conocer el recorrido en preOrden del arbol Heap(preOrden)__

```java
/**
 * Metodo que permite conocer el recorrido en preOrden del arbol Heap.
 * @return Un iterador con el listado del recorrido en preorden del Arbol heap.
 */
public Iterator < T > preOrden() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
      2T(n/2)+O(1)
    `26¬preOrden(0, l);`
      1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + KTE$

  $T({n}) = 2T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __26. Metodo Privado: Conocer el recorrido en preOrden del arbol Heap(preOrden)__

```java
private void preOrden(int pos, ListaCD < T > l) {
    1   1
    T r = this.datos[pos];
           1
    if (r != null) {
          KTE
        l.insertarAlFinal(r);
        //llamado recursivo 1
                     3
        preOrden(this.getHijoIzq(pos), l);

        //llamado recursivo 2
                     3
        preOrden(this.getHijoDer(pos), l);
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

## __27. Conocer el recorrido en inOrden del arbol Heap(inOrden)__

```java
/**
 * Metodo que permite conocer el recorrido en inOrden del arbol Heap.
 * @return Un iterador con el listado del recorrido en inorden del Arbol heap.
 */
public Iterator < T > inOrden() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
    2T(n/2)+O(1)
    `28¬inOrden(0, l);`
       1      KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + KTE$

  $T({n}) = 2T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __28. Metodo Privado: Conocer el recorrido en inOrden del arbol Heap(inOrden)__

```java
private void inOrden(int pos, ListaCD < T > l) {
    1   1
    T r = this.datos[pos];
           1
    if (r != null) {
        //llamado recursivo 1
                    3
        inOrden(this.getHijoIzq(pos), l);
         KTE
        l.insertarAlFinal(r);
        //llamado recursivo 1
                    3
        inOrden(this.getHijoDer(pos), l);
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

## __29. Conocer el recorrido en postOrden del arbol Heap(postOrden)__

```java
/**
 * Metodo que permite conocer el recorrido en postOrden del arbol Heap.
 * @return Un iterador con el listado del recorrido en postorden del Arbol heap.
 */
public Iterator < T > postOrden() {
       1            1  1
    ListaCD < T > l = new ListaCD < T > ();
    2T(n/2)+O(1)
    `30¬postOrden(0, l);`
       1     KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + KTE$

  $T({n}) = 2T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __30. Metodo Privado: Conocer el recorrido en postOrden del arbol Heap(postOrden)__

```java
private void postOrden(int pos, ListaCD < T > l) {
    1   1
    T r = this.datos[pos];
           1
    if (r != null) {
        //llamado recursivo 1
                      3
        postOrden(this.getHijoIzq(pos), l);

        //llamado recursivo 2
                      3
        postOrden(this.getHijoDer(pos), l);
          KTE
        l.insertarAlFinal(r);
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

## __31. Convertir el Heap a una cadena de String(toString)__

```java
/**
 * Convierte el Heap a una cadena de String. <br>
 * <b>post: </b> Se retorno la representacion en String del Arbol heap. 
 * @return La representacion en String del Heap.
 */
@Override
public String toString() {
       1       1
    String cad = "";
          1    1      1              2
    for (int i = 0; i < this.peso; i++) {
            2               KTE         1
        cad += this.datos[i].toString() + "-";
    }
      1
    return (cad);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + n ( 2 + KTE + 1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) = 5 + n (KTE) + 4$

  $T({n}) = n (KTE) + 9$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***