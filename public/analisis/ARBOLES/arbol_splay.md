# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolSplay)__

[CODIGO FUENTE (ArbolSplay)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolSplay.java)

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

## __1. Metodo Constructor, Arbol Splay vacio con sus datos Nulos ()__

```java
/**
 * Crea un Arbol Splay vacio con sus datos Nulos. <br>
 * <b>post: </b> Se creo un Arbol Splay vacio. <br>
 */
public ArbolSplay() {
      1
    super();
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Metodo Constructor, Arbol Splay con una raiz predefinida ()__

```java
/**
 * Crea un Arbol Splay con una raiz predefinida. <br>
 * <b>post: </b> Se creo un Arbol con raiz predeterminada. <br>
 * @param raiz Un objeto de tipo T , almacena la direccion de memoria de un nodo de un Arbol. <br>
 */
public ArbolSplay(T raiz) {
      1
    super(raiz);
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Conocer el objeto almacenado en la raiz del Arbol Splay (getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto almacenado en la raiz del Arbol Splay. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Splay.<br>
 * @return la raiz del Arbol Binario.
 */
@Override
public T getObjRaiz() {
       1         KTE
    return (super.getObjRaiz());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + KTE$

  $T({n}) =  KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Insertar un dato en el Arbol Splay de manera que este se ubique en la raiz (insertar)__

```java
/**
 * Metodo que permite insertar un dato en el Arbol Splay de manera que este se ubique en la raiz. <br>
 * <b>post: </b> Se inserto un nuevo dato al Arbol Splay. <br>
 * @param dato un elemento tipo T que se desea almacenar en el arbol. <br>
 * @return true si el elemento fue insertado exitosamente o false en caso contrario
 */
@Override
public boolean insertar(T dato) {
    //Si el arbol se encuentra vacio
             1    KTE
    if `18¬(esVacio())` {
             1         1 
        super.setRaiz(new NodoBin < T > (dato));
           1
        return (true);
    }
         1         T(n/2)+O(1) + KTE
    super.setRaiz`9¬(buscarAS(dato))`;
     1      1       1            1               1         1
    int cmp = ((Comparable) dato).compareTo(super.getRaiz().getInfo());
    // Si el dato es menor a la raiz
            1
    if (cmp < 0) {
            1           1  1 
        NodoBin < T > n = new NodoBin < T > (dato);
         1            1         1
        n.setIzq(super.getRaiz().getIzq());
         1            1  
        n.setDer(super.getRaiz());
             1         1
        super.getRaiz().setIzq(null);
             1
        super.setRaiz(n);
          1
        return (true);
    }
    // Si el dato es mayor a la raiz
                 1
    else if (cmp > 0) {
           1            1  1
        NodoBin < T > n = new NodoBin < T > (dato);
         1            1         1
        n.setDer(super.getRaiz().getDer());
         1            1     
        n.setIzq(super.getRaiz());
             1         1
        super.getRaiz().setDer(null);
             1
        super.setRaiz(n);
          1
        return (true);
    }
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + KTE + 1 + T(n/2)+O(1) + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) =  KTE + T(n/2)+O(1) + KTE$

  $T({n}) =  T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$

***

## 5. Trasladar un nodo x, que es el nodo al que se accede, a la raíz (biselar)__

```java
/**
 * Metodo que permite trasladar un nodo x, que es el nodo al que se accede, a la raíz. <br>
 * <b>post: </b> Se realizo la reestructuracion del Arbol Splay deacuerdo al dato accedido recientemente. <br>
 * @param r Representa la raiz del Arbol desde la cual arranca la busqueda del dato. <br>
 * @param dato Un elemento tipo T que se desea ser accedido y que sera ascendio a la raiz. <br>
 * @return Un objeto de tipo NodoBin<T> que representa la nueva raiz del Arbol a cual debera ser actualizada.
 */
private NodoBin < T > biselar(NodoBin < T > r, T dato) {
           1
    if (r == null)
           1
        return (null);
     1       1       1            1           1
    int cmp1 = ((Comparable) dato).compareTo(r.getInfo());
    //Si el dato es menor a la raiz
             1
    if (cmp1 < 0) {
             1          1
        if (r.getIzq() == null) {
             1
            return (r);
        }
         1       1       1            1           1        1
        int cmp2 = ((Comparable) dato).compareTo(r.getIzq().getInfo());
        //Si es dato es menor que el hijo
                 1
        if (cmp2 < 0) {
             1        1                1        1    
            r.getIzq().setIzq(biselar(r.getIzq().getIzq(), dato));
              1       7
            r = `6¬rDerecha(r)`;
        }
        //Si el dato es mayor que el hijo
                      1
        else if (cmp2 > 0) {
             1        1                1        1
            r.getIzq().setDer(biselar(r.getIzq().getDer(), dato));
                 1        1          1
            if (r.getIzq().getDer() != null)
                 1         7         1
                r.setIzq(rIzquierda(r.getIzq()));
        }    1          1
        if (r.getIzq() == null)
             1
            return (r);
        else
             1            7
            return (`6¬rDerecha(r)`);
    }
    //El dato es menor a la raiz
                  1
    else if (cmp1 > 0) {
        // dato not in tree, so we're done
             1          1
        if (r.getDer() == null) {
               1
            return (r);
        }
         1       1       1            1           1        1
        int cmp2 = ((Comparable) dato).compareTo(r.getDer().getInfo());
        //Si el dato es menor que el hijo
                 1
        if (cmp2 < 0) {
                               //llamado recursivo
             1        1                1        1
            r.getDer().setIzq(biselar(r.getDer().getIzq(), dato));
                 1        1          1
            if (r.getDer().getIzq() != null)
                 1          7      1
                r.setDer(`6¬rDerecha(r.getDer())`);
        }
        //Si el dato es mayor que el hijo
                      1
        else if (cmp2 > 0) {
             1        1                1        1 
            r.getDer().setDer(biselar(r.getDer().getDer(), dato));
              1     7
            r = `7¬rIzquierda(r)`;
        }
             1          1
        if (r.getDer() == null)
               1
            return (r);
        else
               1         7
            return (`7¬rIzquierda(r)`);
              1
    } else return (r);
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(1)->0$

  $T({n}) = T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^0 \log n})$

  $Big O = O({\log n})$

***

## __6. Efectuar una rotacion simple hacia la derecha de un Nodo (rDerecha)__

```java
/**
 * Metodo que permite efectuar una rotacion simple hacia la derecha de un Nodo. <br>
 * <b>post: </b> Se realizo una rotacion simple a la derecha. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoBin<T> con las rotaciones ya realizadas. <br>
 */
private NodoBin < T > rDerecha(NodoBin < T > r) {
       1            1  1
    NodoBin < T > x = r.getIzq();
     1        1
    r.setIzq(x.getDer());
     1   
    x.setDer(r);
     1
    return x;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __7. Efectuar una rotacion simple hacia la izquierda de un Nodo  (rIzquierda)__

```java
/**
 * Metodo que permite efectuar una rotacion simple hacia la izquierda de un Nodo. <br>
 * <b>post: </b> Se realizo una rotacion simple a la izquierda. <br>
 * @param r Nodo que se encuentra desbalanceado y no cumple la propiedad. <br>
 * @return Un objeto de tipo NodoBin<T> con las rotaciones ya realizadas. <br>
 */
private NodoBin < T > rIzquierda(NodoBin < T > r) {
       1            1  1
    NodoBin < T > x = r.getDer();
     1        1
    r.setDer(x.getIzq());
     1
    x.setIzq(r);
     1
    return x;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __8. Eliminar un dato del Arbol Splay (eliminar)__

```java
/**
 * Metodo que permite eliminar un dato del Arbol Splay; El dato mas proximo al eliminado se pone en la raiz. <br> 
 * <b>post: </b> Se ha eliminado el dato accedido y el Arbol Splay ha sido biselado de manera correcta. <br>
 * @param dato Un elemento de tipo T que es ascendido a la raiz y posteriormente eliminado. <br>
 * @return Un objeto de tipo boolean con true si el dato ha sido eliminado correctamente.
 */
@Override
public boolean eliminar(T dato) {
             1  KTE
    if (`18¬esVacio()`)
           1
        return (false);
         1        T(n/2)+O(1) + KTE
    super.setRaiz(`9¬buscarAS(dato)`);
     1      1       1            1               1         1
    int cmp = ((Comparable) dato).compareTo(super.getRaiz().getInfo());
    //Si se encontro el elemento
             1
    if (cmp == 0) {
                 1         1          1
        if (super.getRaiz().getIzq() == null) {
                 1             1         1
            super.setRaiz(super.getRaiz().getDer());
        } else {
               1            1      1         1
            NodoBin < T > x = super.getRaiz().getDer();
                 1             1         1
            super.setRaiz(super.getRaiz().getIzq());
                 1     T(n/2)+O(1)     1
            super.setRaiz(biselar(super.getRaiz(), dato));
                 1         1
            super.getRaiz().setDer(x);
        }
           1
        return (true);
    }
    //El dato no fue encontrado
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + T(n/2)+O(1) + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + T(n/2)+O(1) + 1 + 1 + 1 + 1$

  $T({n}) = KTE + T(n/2)+O(1) + KTE + T(n/2)+O(1) + 4$

  $T({n}) = T(n/2)+O(1) + T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$ 

***

## __9. Hallar un elemento dentro del Arbol Splay (buscarAS)__

```java
/**
 * Metodo que permite hallar un elemento dentro del Arbol Splay; Una vez ubicado el dato se
 * realiza el proceso de biselacion sobre el Arbol de manera que el dato consultado queda en la raiz.<br>
 * <b>post: </b> Se retorno un Objeto de tipo NodoBin<T> que representa la raiz de Arbol Splay una vez biscelado.<br>
 * @param dato Representa el elemento el cual se desea evaluar su existencia en el Arbol. <br>
 * @return un Objeto de tipo NodoBin<T> que representa la raiz de Arbol Splay una vez biselado.
 */
private NodoBin < T > buscarAS(T dato) {
         1 KTE
    if (`18¬esVacio()`)
          1
        return (null);
      1       T(n/2)+O(1)    1
    return (`5¬biselar`(super.getRaiz(), dato));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE + 1 + T(n/2)+O(1) + 1$

  $T({n}) = T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({\log n})$ 

***

## __10. Evaluar la existencia de un objeto dentro del Arbol Splay (estaAS)__

```java
/**
 * Metodo que permite evaluar la existencia de un objeto dentro del Arbol Splay; 
 * El elemento es ubicado en la raiz de Arbol y se realiza proceso de biselacion. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el Arbol.<br>
 * @param dato Representa el elemento el cual se desea evaluar su existencia en el Arbol. <br>
 * @return Un boolean , true si el dato esta o false en caso contrario.
 */
public boolean estaAS(T dato) {
            1  KTE
    if (`18¬esVacio()`)
           1
        return (false);
         1
    super.setRaiz(`9¬buscarAS(dato)`);
    return (super.getRaiz().getInfo().equals(dato));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __11. Retornar un iterador con las hojas del Arbol Splay (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol Splay. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol.<br>
 * @return Un iterador con las hojas delArbol.
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

## __12. Determinar el numero de Nodo hojas dentro del Arbol (contarHojas)__

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

## __13. Retornar un iterador con el recorrido preOrden del Arbol (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un iterador en preorden (padre->hijoIzq->hijoDer) para el Arbol Splay.
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

## __14. Retornar un iterador con el recorrido inOrden del Arbol (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol.<br>
 * @return un iterador en inOrden (hijoIzq->padre->hijoDer) para el Arbol Splay. <br>
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

## __15. Retornar un iterador con el recorrido postOrden del Arbol (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador preOrden para el arbol.<br>
 * @return un iterador en postOrden (hijoIzq->hijoDer->padre) para el Arbol Splay. <br>
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

## __16. Retornar un iterador con el recorrido por niveles del Arbol (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol Splay.<br>
 * @return un un iterador con el recorrido por niveles del Arbol Splay.
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

## __17. Obtener el peso del Arbol Splay (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol Splay. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol Splay.<br>
 * @return Un entero con la cantidad de elementos del Arbol Splay.
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

## __18. Saber si el Arbol Splay se encuentra vacio (esVacio)__

```java
/**
 * Metodo que permite saber si el Arbol Splay se encuentra vacio. <br>
 * <b>post: </b> Se retorno true si el arbol no contiene elementos.<br>
 * @return true si no hay datos en el Arbol Splay.
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

## __19. Obtener la altura del Arbol Splay (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol Splay. <br>
 * <b>post: </b> Se retorno la altura del Arbol Splay.<br>
 * @return Un entero con la altura del Arbol Splay.
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

## __20. Clonar la informacion de un Arbol Splay en un nuevo objeto ArbolSplay (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol Splay en un nuevo objeto ArbolSplay. <br>
 * @return Un objeto de tipo ArbolSplay con la informacion del Arbol duplicada.
 */
@Override
public ArbolSplay < T > clonar() {
        1              1  1 
    ArbolSplay < T > t = new ArbolSplay < T > ();
      1          2T(n/2)+O(1)  1
    t.setRaiz(`21¬clonarAS(this.getRaiz())`);
      1
    return (t);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 2T(n/2)+O(1) + 1 + 1$

  $T({n}) = 4 + 2T(n/2)+O(1) + 2$

    $T({n}) = 2T(n/2)+O(1) + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __21. Metodo Privado: Clonar la informacion de un Arbol Splay en un nuevo objeto ArbolSplay (clonarAS)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol Splay en un nuevo objeto ArbolSplay. <br>
 * @param r Representa a raiz del Arbol Splay. <br>
 * @return Un objeto de tipo ArbolSplay con la informacion del Arbol duplicada.
 */
private NodoBin < T > clonarAS(NodoBin < T > r) {
           1
    if (r == null)
           1
        return r;
    else {
                                                        //llamado recursivo 1     //llamado recursivo 2
           1              1  1                  1                     1                     1
        NodoBin < T > aux = new NodoBin < T > (r.getInfo(), clonarAS(r.getIzq()), clonarAS(r.getDer()));
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

  $Big O = O({n})$

***

## __22. Conocer por consola la informacion del Arbol Binario (imprime)__

```java
/**
 * Metodo que permite conocer por consola la informacion del Arbol Binario.
 */
@Override
public void imprime() {
            KTE  
    System.out.println(" ----- Arbol Splay ----- ");
     2T(n/2)+O(1)  1
    `23¬imprimeAS(super.getRaiz())`;
}
```

* ### __Costo Operacional__

  $T({n}) = KTE + 2T(n/2)+O(1) + 1$

  $T({n}) = 2T(n/2)+O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __23. Conocer el objeto almacenado en la raiz del Arbol Splay (imprimeAS)__

```java
/**
 * Metodo que permite conocer el objeto almacenado en la raiz del Arbol Splay. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol Splay.<br>
 * @return la raiz del Arbol Binario.
 */
/**
 * Metodo de tipo privado que permite mostrar por consola la informacion del Arbol Splay. <br>
 * @param n Representa la raiz del ArbolSplay o de alguno de sus subarboles.
 */
public void imprimeAS(NodoBin < T > n) {
     1    1
    int l = 0;
     1    1
    int r = 0;
          1
    if (n == null)
          1
        return;
         1          1
    if (n.getIzq() != null) {
          1        KTE        1        1        KTE
        l = Integer.parseInt(n.getIzq().getInfo().toString());
    }
         1         1
    if (n.getDer() != null) {
          1        KTE        1        1        KTE
        r = Integer.parseInt(n.getDer().getInfo().toString());
    }
             KTE                   1   1             1  1          1                1
    System.out.println("NodoIzq: " + l + "\t Info: " + n.getInfo() + "\t NodoDer: " + r);
         1          1
    if (n.getIzq() != null) {
        //llamado recursivo 1
                    1
        imprimeAS(n.getIzq());
    }
         1          1
    if (n.getDer() != null) {
        //llamado recursivo 2
                    1
        imprimeAS(n.getDer());
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