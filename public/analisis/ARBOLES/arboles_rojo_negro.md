# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolRojiNegro)__

[CODIGO FUENTE (ArbolRojiNegro)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolRojiNegro.java)

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

## __1. Constructor Vacio (ArbolRojiNegro)__

```java
/**
 * Crea un arbol RojiNegro vacio. <br>
 * <b>post: </b> Se creo un arbol RojiNegro vacio. <br>
 */
public ArbolRojiNegro() {
       1
    super();
         1         1
    nulo = new NodoRN < T > ();
            1
    nulo.setInfo(null);
            1
    nulo.setPadre(nulo);
           1
    nulo.setIzq(nulo);
            1
    nulo.setDer(nulo);
            1
    nulo.setColor(1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 2 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Constructor Raiz Predefinida (ArbolRojiNegro)__

```java
/**
 * Crea un arbol con una raiz predefinida. <br>
 * <b>post: </b> Se creo un arbol RojiNegro con una raiz predefinida. <br>
 * @param r Representa la raiz del ArbolRojiNegro que se quiere crear.
 */
public ArbolRojiNegro(T r) {
             KTE        1
    super.setRaiz(new NodoRN < T > (r));
}
```

* ### __Costo Operacional__

  $T({n}) = KTE + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Obtener Objeto de la Raíz (getObjRaiz)__

```java
/**
 * Metodo que permite conocer el objeto raiz del Arbol RojiNegro. <br>
 * <b>post: </b> Se retorno el objeto raiz del Arbol. <br>
 * @return Un objeto de tipo T que representa el dato en la raiz del Arbol.
 */
@Override
public T getObjRaiz() {
       1              KTE
    return (super.getObjRaiz());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Insertar Dato Árbol (insertar)__

```java
/**
 *  Metodo que permite insertar un dato en el arbol Rojinegro. <br>
 * <b>post: </b> Se inserto un nuevo dato al arbol Rojinegro. <br>
 * @param dato un elemento tipo T que se desea almacenar en el arbol. <br>
 * @return  true si el elemento fue insertado o false en caso contrario.
 */
@Override
public boolean insertar(T dato) {

    //Insertarlo como en ABB y con color 0.
               1   1       1      
    NodoRN < T > z = new NodoRN < T > (dato, nulo, nulo, nulo);
    //codigo del PDF
           1       1
    NodoRN < T > y = nulo;
           1       1         1              KTE
    NodoRN < T > x = (NodoRN < T > ) super.getRaiz();
              1      1       1       1
    while (x != null && x.getInfo() != null) {
          1
        y = x;
            1       1        1            1          KTE         1
        int compara = ((Comparable) z.getInfo()).compareTo(x.getInfo());
                    1
        if (compara < 0)
              1      1
            x = x.getIzq();
        else
              1      1
            x = x.getDer();
    }
           1
    z.setPadre(y);
              1      1
    if (y.getInfo() == null)
        //Mejor de los casos
                KTE
        super.setRaiz(z);
    else {
        //Peor de los casos
              1     1       1             1         KTE         1
        int compara = ((Comparable) z.getInfo()).compareTo(y.getInfo());
                    1
        if (compara < 0)
                 1
            y.setIzq(z);
        else
                 1
            y.setDer(z);
    }
         1
    z.setIzq(nulo);
        1
    z.setDer(nulo);
        1
    z.setColor(0);
         (61(n) + KTE)
    `5¬corregirInsercion(z)`;
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + 3 + KTE + 4 + n(1 + 5 + KTE + 1 + 2) + 4 + 1 + 2 + 5 + KTE + 1 + 1 + 1 + 1 + 1 + [61(n) + KTE] + 1$

  $T({n}) = n(61) + n(KTE) + KTE$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __5. Corregir Inserción Propiedades Árbol (corregirInsercion)__

```java
/**
 * Metodo que permite corregir las propiedades del ArbolRojiNegro despues de realizada la insercion del dato. <br>
 * @param z Representa la raiz del Arbol del arbol RojiNegro. <br>
 */
private void corregirInsercion(NodoRN < T > z) {
            1
    NodoRN < T > y;
                 1         1        1
    while (z.getPadre().getColor() == 0) {
                  1      1       1          1          1
        if (z.getPadre() == z.getPadre().getPadre().getIzq()) {
              1       1          1         1
            y = z.getPadre().getPadre().getDer();
                      1       1
            if (y.getColor() == 0) {
                //Mejor de los casos
                      1          1
                z.getPadre().setColor(1);
                      1
                y.setColor(1);
                      1          1          1
                z.getPadre().getPadre().setColor(0);
                  1       1          1
                z = z.getPadre().getPadre();
            } else {
                //Peor de los casos
                      1        1         1
                if (z == z.getPadre().getDer()) {
                      1      1
                    z = z.getPadre();
                          19
                    `12¬rotarIzq(z)`;
                }
                      1          1
                z.getPadre().setColor(1);
                      1          1          1
                z.getPadre().getPadre().setColor(0);
                       19           1        1 
                `13¬rotarDer(z.getPadre().getPadre())`;
            }
        } else {
              1       1          1          1
            y = z.getPadre().getPadre().getIzq();
                      1       1
            if (y.getColor() == 0) {
                //Mejor de los casos
                      1         1
                z.getPadre().setColor(1);
                      1
                y.setColor(1);
                      1          1          1
                z.getPadre().getPadre().setColor(0);
                  1       1          1
                z = z.getPadre().getPadre();
            } else {
                //Peor de los casos
                       1       1         1
                if (z == z.getPadre().getIzq()) {
                      1       1
                    z = z.getPadre();
                         19
                    `13¬rotarDer(z)`;
                }
                      1          1
                z.getPadre().setColor(1);
                      1          1          1
                z.getPadre().getPadre().setColor(0);
                    19            1           1
                `12¬rotarIzq(z.getPadre().getPadre())`;
            }
        }
    }
           1                 KTE          1
    ((NodoRN < T > ) super.getRaiz()).setColor(1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 3 + n(5 + 4 + 2 + 3 + 2 + 19 + 2 + 3 + 21) + 3 + 2 + KTE$

  $T({n}) = 61(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __6. Buscar Nodo Árbol (buscarRN)__

```java
/**
 * Metodo que permite buscar un Nodo RojiNegro y conocer su informacion y direccion de memoria. <br>
 * @param r Representa la raiz del Arbol o subarbol del rojinegro. <br>
 * @param info Representa la informacion del Nodo que se quieren ubicar. <br>
 * @return Un objeto de tipo NodoRN<T> con el Nodo que contiene la informacion que desea buscar.
 */
private NodoRN < T > buscarRN(NodoRN < T > r, T info) {
           1      1       1       1
    if (r == null || r.getInfo() == null)
        //Mejor de los casos
              1
        return (nulo);
             1         2
    if (r.getInfo().equals(info))
        //Mejor de los casos
            1
        return r;
    else {
        //Peor de los casos
                 1       1       1        1        1        /*Llamado Recursivo 1*/ 1
        NodoRN < T > aux = ((r.getIzq().getInfo() == null)) ? nulo : buscarRN(r.getIzq(), info);
                 1       1        1       1
        if (aux != nulo && aux.getInfo() != null)
            //Mejor de los casos
                 1
            return (aux);
        else
                1         1        1       1         /*Llamado Recursivo 2*/  1
            return ((r.getDer().getInfo() == null)) ? nulo : buscarRN(r.getDer(), info);
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 3 + 6 + 4 + 5$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}}) -> O({n})$

***

## __7. Eliminar Dato del Árbol (eliminar)__

```java
/**
 * Metodo de tipo publico que permite eliminar un dato del Arbol RojiNegro. <br>
 * @param x Representa el dato de tipo T que desea ser eliminado del ArbolRojinegro.
 * @return Un objeto de tipo boolean con true si se pudo elimianar exitosamente y false en caso contrario.
 */
@Override
public boolean eliminar(T x) {
            1      1 (2T(n/2) + O(1))     1             KTE
    NodoRN < T > n = `6¬buscarRN((NodoRN < T > ) super.getRaiz(), x)`;
           1      1       1       1
    if (n == nulo || n.getInfo() == null)
        //Mejor de los casos
        return (false); //No encontrado
    
    `8¬eliminarRN(n)`;
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

## __8. Eliminar Dato del Árbol (eliminarRN)__

```java
/**
 * Metodo que permite eliminar un dato de un Arbol Rojinegro. <br>
 * @param z Representa la raiz del Arbol Rojingro. <br>
 * @return Un objeto de tipo NodoRN<T> con la informacion del Nodo desconectado del Arbol. <br>
 */
public NodoRN < T > eliminarRN(NodoRN < T > z) {
            2
    NodoRN < T > x, y;
            1          1      1      1      1         1       1
    if (z.getIzq().getInfo() != null && z.getDer().getInfo() != null)
        //Peor de los casos
          1 (1T(n/2) + O(1))    1
        y = `11¬getMayor(z.getIzq())`; //también sirve buscarMin(z.getDer())
    else
        //Mejor de los casos
          1
        y = z;
             1         1     1
    if (y.getIzq().getInfo() != null)
          1      1
        x = y.getIzq();
    else
          1      1
        x = y.getDer();
          1          1
    x.setPadre(y.getPadre());
             1           1      1
    if (y.getPadre().getInfo() == null)
        //Mejor de los casos
                KTE
        super.setRaiz(x);
    else {
              1        1         1
        if (y == y.getPadre().getIzq())
                 1          1
            y.getPadre().setIzq(x);
        else
                  1         1
            y.getPadre().setDer(x);
    }
             1       1       1
    if (y.getInfo() != z.getInfo())
             1          1
        z.setInfo(y.getInfo()); //copiar datos adicionales si aplica
              1       1
    if (y.getColor() == 1)
           (n(KTE) + KTE)
        `9¬corregirBorrado(x)`;
        1
    return (y);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 7 + 2 + (1T(n/2) + O(1)) + 3 + 2 + 2 + 3 + 3 + 2 + 3 + 2 + 2 + (n(KTE) + KTE) + 1$

  $T({n}) = 1T(n/2) + O(1) + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n∗log(n)})$

***

## __9. Corregir Borrado Propiedades Árbol (corregirBorrado)__

```java
/**
 * Metodo que permite corregir laas propiedades del ArbolRojinegro despues de realizada la eliminacion del dato. <br>
 * @param x Representa el NodoRN desde el cual se desea corregir las propiedades del Arbol.
 */
private void corregirBorrado(NodoRN < T > x) {
           1
    NodoRN < T > w;
            1
    NodoRN < T > padre;
              1         1               KTE        1       1      1
    while (x != ((NodoRN < T > ) super.getRaiz()) && x.getColor() == 1) {
               1       1         1
        if (x == x.getPadre().getIzq()) {
            //Peor de los casos
              1       1         1
            w = x.getPadre().getDer();
                      1       1
            if (w.getColor() == 0) {
                      1
                w.setColor(1);
                      1           1
                x.getPadre().setColor(0);
                            19          1
                `12¬this.rotarIzq(x.getPadre())`;
                  1       1         1
                w = x.getPadre().getDer();
            }
                    1          1       1   1      1          1       1
            if (w.getIzq().getColor() == 1 && w.getDer().getColor() == 1) {
                //Mejor de los casos
                      1
                w.setColor(0);
                  1      1
                x = x.getPadre();
            } else {
                //Peor de los casos
                      1       1
                padre = x.getPadre();
                         1         1       1
                if (w.getDer().getColor() == 1) {
                         1        1
                    w.getIzq().setColor(1);
                          1
                    w.setColor(0);
                          19
                    `13¬this.rotarDer(w)`;
                      1          1
                    w = padre.getDer();
                }
                      1              1
                w.setColor(padre.getColor());
                          1
                padre.setColor(1);
                    1          1
                w.getDer().setColor(1);
                        19
                `12¬this.rotarIzq(padre)`;
                  1          1              KTE
                x = ((NodoRN < T > ) super.getRaiz());
            }
        } else {
            //lo mismo, pero intercambiando izq y der
              1       1         1
            w = x.getPadre().getIzq();
                     1        1
            if (w.getColor() == 0) {
                      1
                w.setColor(1);
                      1          1
                x.getPadre().setColor(0);
                        19         1
                `13¬this.rotarDer(x.getPadre())`;
                  1       1         1
                w = x.getPadre().getIzq();
            }
                    1           1      1    1      1          1      1
            if (w.getDer().getColor() == 1 && w.getIzq().getColor() == 1) {
                     1
                w.setColor(0);
                  1      1
                x = x.getPadre();
            } else {
                      1      1
                padre = x.getPadre();
                        1         1       1
                if (w.getIzq().getColor() == 1) {
                        1         1
                    w.getDer().setColor(1);
                        1
                    w.setColor(0);
                          19
                    `12¬this.rotarIzq(w)`;
                      1         1
                    w = padre.getIzq();
                }
                      1              1
                w.setColor(padre.getColor());
                         1
                padre.setColor(1);
                    1         1
                w.getIzq().setColor(1);
                          19
                `13¬this.rotarDer(padre)`;
                  1          1               KTE
                x = ((NodoRN < T > ) super.getRaiz());
            }
        }
    }
         1
    x.setColor(1);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 5 + KTE + n(3 + 3 + 2 + 1 + 2 + 20 + 3 + 7 + 2 + 3 + 2 + 1 + 19 + 2 + 2 + 1 + 2 + 19 + 2 + KTE) + 5 + KTE + 1$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __10. Obtener Elemento Menor Árbol (getMenor)__

```java
/**
 * Metodo que permite conocer el elemento menor al NodoRN recibido. <br>
 * @param r Representa el NodoRn del cual se desea hallar el Nodo menor. <br>
 * @return El Nodo menor por la Izquierda del NodoRn recibido.
 */
private NodoRN < T > getMenor(NodoRN < T > r) {
        1       1      1      /*Llamado Recursivo 1*/ 1
    return r.getIzq() == nulo ? r : getMenor(r.getIzq());
}
```

* ### __Costo Operacional__

  $O({n}) = 4$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 1T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n^{0}*\log_2(n)})$

  $Big O = O({n*\log(n)})$

***

## __11. Obtener Elemento Mayor Árbol (getMayor)__

```java
/**
 * Metodo que permite conocer el elemento mayor al NodoRN recibido. <br>
 * @param r Representa el NodoRn del cual se desea hallar el Nodo mayor. <br>
 * @return El Nodo mayor por la Derecha del NodoRn recibido.
 */
private NodoRN < T > getMayor(NodoRN < T > r) {
        1       1        1       1     /*Llamado Recursivo 1*/  1
    return r.getDer().getInfo() == null ? r : getMayor(r.getDer());
}
```

* ### __Costo Operacional__

  $O({n}) = 5$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 1T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n^{0}*\log_2(n)})$

  $Big O = O({n*\log(n)})$

***

## __12. Rotar Izquierda Árbol (rotarIzq)__

```java
/** Metodo que permite rotar hacia la izquierda para mantaner la altura negra. <br>
 * <b>post: </b> Se realizao una rotacion hacia la izquierda en el arbol RojiNegro. <br>
 * @param t representa la raiz del arbol <br>
 */
public void rotarIzq(NodoRN < T > t) {
            1       1      1
    NodoRN < T > t2 = t.getDer();
         1         1
    t.setDer(t2.getIzq());
         1         1
    t2.getIzq().setPadre(t);
         1         1
    t2.setPadre(t.getPadre());
             1          1       1
    if (t.getPadre().getInfo() == null) {
        //Mejor de los casos
                 KTE
        super.setRaiz(t2);
               1 
        t2.setPadre(nulo);
    } else {
        //Peor de los casos
               1       1         1
        if (t == t.getPadre().getIzq())
            //Peor de los casos
                 1         1
            t.getPadre().setIzq(t2);
        else
                 1         1
            t.getPadre().setDer(t2);
    }
         1
    t2.setIzq(t);
         1
    t.setPadre(t2);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + 2 + 2 + 3 + 3 + 2 + 1 + 1$

  $T({n}) = 19$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({19})$

***

## __13. Rotar Derecha Árbol (rotarDer)__

```java
/** Metodo que permite rotar hacia la derecha para mantaner la altura negra. <br>
 * <b>post: </b> Se realizo una rotacion hacia la derecha en el arbol RojiNegro. <br>
 * @param t representa la raiz del arbol. <br>
 */
public void rotarDer(NodoRN < T > t) {
            1       1     1
    NodoRN < T > t2 = t.getIzq();
         1         1
    t.setIzq(t2.getDer());
         1         1
    t2.getDer().setPadre(t);
        1           1
    t2.setPadre(t.getPadre());
              1         1       1
    if (t.getPadre().getInfo() == null) {
        //Mejor de los casos
                KTE
        super.setRaiz(t2);
               1
        t2.setPadre(nulo);
    } else {
              1         1        1
        if (t == t.getPadre().getIzq())
                 1          1
            t.getPadre().setIzq(t2);
        else
                 1          1
            t.getPadre().setDer(t2);
    }
          1
    t2.setDer(t);
          1
    t.setPadre(t2);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + 2 + 2 + 3 + 3 + 2 + 1 + 1$

  $T({n}) = 19$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({19})$

***

## __14. Consultar Existencia Dato en el Árbol (esta)__

```java
/**
 * Metodo que permite saber si existe un dato en el arbol RojiNegro. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el arbol RojiNegro. <br>
 * @param x 
 * @return un boolean , true si el dato esta o false en caso contrario.
 */
@Override
public boolean esta(T x) {
       1                       1                 KTE
    return (`15¬estaRN((NodoRN < T > ) super.getRaiz(), x)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + () + KTE$

  $T({n}) = 19$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({19})$

***

## __15. Consultar Existencia Dato en el Árbol Private (esta)__

```java
/**
 * Metodo que permite conocer si un elemento especifico se encuentra en el arbol. <br>
 * <b>post: </b> Se retorno true si el elemento se encuentra en el arbol. <br>
 * @param r representa la raiz del arbol. <br>
 * @param x representa la informacion del elemento que se encontrar en el arbol. <br>
 * @return un boolean , true si el dato esta o false en caso contrario.
 */
private boolean estaRN(NodoRN < T > r, T x) {
           1       1      1       1
    if (r == null || r.getInfo() == null)
        //Mejor de los casos
               1
        return (false);
         1      1       1             1          KTE
    int compara = ((Comparable) r.getInfo()).compareTo(x);
                1
    if (compara > 0)
          1  /*Llamado Recursivo 1*/ 1
        return (estaRN(r.getIzq(), x));
    else
                1
    if (compara < 0)
          1  /*Llamado Recursivo 2*/ 1
        return (estaRN(r.getDer(), x));
    else
        //Mejor de los casos
        return (true);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 4 + KTE + 1 + 1 + 2$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 1T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n^{0}*\log_2(n)})$

  $Big O = O({n*\log(n)})$

***

## __16. Obtener Iterador Hojas Árbol (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del arbol binario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del arbol binario.<br>
 * @return un iterador con las hojas del arbol binario 
 */
@Override
public Iterator < T > getHojas() {
            1       1        1
    ListaCD < T > l = new ListaCD < T > ();
        (2T(n/2) + O(1))                 KTE
    `17¬getHojas((NodoRN < T > ) super.getRaiz(), l)`;
         1       KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(1)) + KTE + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __17. Obtener Iterador Hojas Árbol Privado (getHojas)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con las hojas del arbol binario. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del arbol binario.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void getHojas(NodoRN < T > r, ListaCD < T > l) {
          1        1      1       1
    if (r != null && r.getInfo() != null) {
                      19      1
        if (`20¬this.esHoja(r)`)
                      KTE           1
            l.insertarAlFinal(r.getInfo());
        /*LLamado Recursivo 1*/ 1
        getHojas(r.getIzq(), l);
        /*LLamado Recursivo 2*/ 1
        getHojas(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 20 + KTE + 1 + 2 $

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __18. Obtener Número Hojas en el Árbol (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @return El numero de hojas existentes en el Arbol Binario.
 */
@Override
public int contarHojas() {
        1       (2T(n/2) + O(1))            KTE
    return (`19¬contarHojas((NodoRN) super.getRaiz())`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (2T(n/2) + O(1)) + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __19. Obtener Número Hojas en el Árbol Privado (contarHojas)__

```java
/**
 * Metodo que permite determinar el numero de Nodo hojas dentro del Arbol Binario. <br>
 * <b>post: </b> Se retorno el numero de hojas del Arbol. <br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @return El numero de hojas existentes en el Arbol Binario.
 */
private int contarHojas(NodoRN < T > r) {
           1       1       1      1
    if (r == null || r.getInfo() == null)
        //Mejor de los casos
              1
        return (0);
                  19      1
    if (`20¬this.esHoja(r)`)
        //Mejor de los casos
              1
        return (1);
        1   1 /*Llamado Recursivo 1*/ 1
    int chi = contarHojas(r.getIzq());
        1   1 /*Llamado Recursivo 2*/ 1
    int chd = contarHojas(r.getDer());
         1      1
    return (chi + chd);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 20 + 3 + 3 + 2$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __20. Valida Hoja en el Árbol (esHoja)__

```java
private boolean esHoja(NodoRN < T > n) {
        1      1       1      1       1       1       1     1       1       1        1      1         1       1     1       1     1          1      1
    return (n != null && n.getInfo() != null && (n.getIzq() == null || n.getIzq().getInfo() == null) && (n.getDer() ==null || n.getDer().getInfo() == null));
}
```

* ### __Costo Operacional__

  $T({n}) = 19$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Obtener Iterador Pre-Orden (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un iterador en preorden (padre->hijoIzq->hijoDer) para el arbol binario.
 */
@Override
public Iterator < T > preOrden() {
              1     1         1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(n/2) + O(1))    KTE
    `22¬preOrden(this.getRaiz(), l)`;
        1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(1)) + KTE + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE $

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __22. Obtener Iterador Pre-Orden Privado (preOrden)__

```java
/**
 * Metodo que tipo privado que retorna un iterador con el recorrido preOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void preOrden(NodoBin < T > r, ListaCD < T > l) {
           1       1      1       1
    if (r != null && r.getInfo() != null) {
                KTE             1
        l.insertarAlFinal(r.getInfo());
        /*Llamado Recursivo 1*/  1
        preOrden(r.getIzq(), l);
        /*Llamado Recursivo 2*/  1
        preOrden(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + KTE + 1 + 1 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __23. Obtener Iterador In-Orden (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol.<br>
 * @return un iterador en inOrden (hijoIzq->padre->hijoDer) para el arbol binario. <br>
 */
@Override
public Iterator < T > inOrden() {
               1    1          1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(n/2) + O(1))      KTE
    `24¬inOrden(this.getRaiz(), l)`;
        1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(1)) + KTE + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __24. Obtener Iterador In-Orden Privado (inOrden)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con el recorrido in Orden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador inOrdenpara el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void inOrden(NodoBin < T > r, ListaCD < T > l) {
           1       1      1       1
    if (r != null && r.getInfo() != null) {
        /*Llamado Recursivo 1*/ 1
        inOrden(r.getIzq(), l);
                  KTE          1
        l.insertarAlFinal(r.getInfo());
        /*Llamado Recursivo 2*/ 1
        inOrden(r.getDer(), l);
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 1 + KTE + 1 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __25. Obtener Iterador en Post-Orden (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @return un iterador en postOrden (hijoIzq->hijoDer->padre) para el arbol binario. <br>
 */
@Override
public Iterator < T > postOrden() {
            1       1           1
    ListaCD < T > l = new ListaCD < T > ();
    (2T(n/2) + O(1))   KTE
    postOrden(this.getRaiz(), l);
         1        KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (2T(\frac{n}{2}) + O(1)) + KTE + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __26. Obtener Iterador en Post-Orden Private (postOrden)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con el recorrido postOrden del Arbol Binario. <br>
 * <b>post: </b> Se retorno un iterador postOrden para el arbol.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol
 */
private void postOrden(NodoBin < T > r, ListaCD < T > l) {
          1        1      1       1
    if (r != null && r.getInfo() != null) {
        /*Llamado Recursivo 1*/  1
        postOrden(r.getIzq(), l);
        /*Llamado Recursivo 2*/  1
        postOrden(r.getDer(), l);
                 KTE            1
        l.insertarAlFinal(r.getInfo());
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 1 + 1 + KTE + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __27. Obtener Iterador por Niveles Árbol (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol RojiNegro. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol RojiNegro. <br>
 * @return un un iterador con el recorrido por niveles del Arbol RojiNegro.
 */
@Override
public Iterator < T > impNiveles() {
              1     1        1
    ListaCD < T > l = new ListaCD < T > ();
        1      KTE
    if (!`30¬this.esVacio()`) {
            1        1         1      1           1
        Cola < NodoRN < T >> c = new Cola < NodoRN < T >> ();
            KTE           1              KTE
        c.enColar((NodoRN < T > ) this.getRaiz());
                  1
        NodoRN < T > x;
               1    KTE
        while (!c.esVacia()) {
              1      KTE
            x = c.deColar();
                     KTE           1
            l.insertarAlFinal(x.getInfo());
                    1       1       1      1        1       1
            if (x.getIzq() != null && x.getIzq().getInfo() != null)
                    KTE        1
                c.enColar(x.getIzq());
                     1     1        1      1        1       1
            if (x.getDer() != null && x.getDer().getInfo() != null)
                    KTE        1
                c.enColar(x.getDer());
        }
    }
      1          KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 1 + KTE + 5 + KTE + 1 + KTE + 1 + 1 + KTE + n(1 + KTE + KTE + 1 + 6 + KTE + 1 + 6 + KTE + 1) + 1 + KTE + 1 + KTE$

  $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __28. Obtener Peso Árbol (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol RojiNegro. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol RojiNegro. <br>
 * @return Un entero con la cantidad de elementos del Arbol RojiNegro.
 */
@Override
public int getPeso() {
       1       (2T(n/2) + O(1))       1               KTE
    return `29¬this.getPesoRN((NodoRN < T > ) super.getRaiz())`;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (2T(\frac{n}{2}) + O(1)) + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __29. Obtener Peso Árbol Privado (getPesoRN)__

```java
private int getPesoRN(NodoRN < T > r) {
           1       1       1      1
    if (r == null || r.getInfo() == null)
        //Mejor de los casos
            1
        return 0;
        1 /*Llamado Recursivo 1*/ 1 1 1 /*Llamado Recursivo 2*/ 1
    return (getPesoRN(r.getIzq()) + 1 + getPesoRN(r.getDer()));
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 5$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __30. Consultar Existencia Elementos Árbol (esVacio)__

```java
/**
 * Metodo que permite saber si el arbol se encuentra vacio. <br>
 * <b>post: </b> Se retorno true si el arbol no contiene elementos. <br>
 * @return true su no hay datos en el arbol.
 */
@Override
public boolean esVacio() {
         1           1                KTE      1       1        1                  KTE        1       1
    return (((NodoRN < T > ) super.getRaiz()) == null || ((NodoRN < T > ) super.getRaiz()).getInfo() == null);
}
```

* ### __Costo Operacional__

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __31. Obtener Altura Árbol (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol RojiNegro. <br>
 * <b>post: </b> Se retorno la altura del Arbol RojiNegro.<br>
 * @return Un entero con la altura del Arbol RojiNegro.
 */
@Override
public int getAltura() {
               KTE       1       1         KTE        1       1
    if (super.getRaiz() == null || super.getRaiz().getInfo() == null)
        //Mejor de los casos
            1
        return (0);
        1       (2T(n/2) + O(1))    1            KTE
    return (`32¬getAltura((NodoRN < T > ) this.getRaiz())`);
}
```

* ### __Costo Operacional__

  $T({n}) = KTE + 4 + KTE + 1 + (2T(\frac{n}{2}) + O(1)) + 1 + KTE$

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __32. Obtener Altura Árbol Private (getAltura)__

```java
private int getAltura(NodoRN < T > r) {
       2   1       1
    int ai = 0, ad = 0;
             1         1      1
    if (r.getIzq().getInfo() != null)
           1 /*Llamado Recursivo 1*/  1
        ai = getAltura(r.getIzq());
            1          1      1
    if (r.getDer().getInfo() != null)
           1 /*Llamado Recursivo 2*/  1
        ad = getAltura(r.getDer());
           1
    if (ai >= ad)
           1       1
        return (ai + 1);
      1        1
    return (ad + 1);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 3 + 2 + 3 + 2 + 1 + 2$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __33. Limpiar Árbol (limpiar)__

```java
/**
 * Metodo que permite limpiar la informacion del Arbol Rojinegro.
 */
public void limpiar() {
            KTE
    super.setRaiz(null);
}
```

* ### __Costo Operacional__

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __34. Clonar Árbol (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol Rojinegro en un nuevo Arbol Rojinegro con la misma informacion. <br>
 * @return Un nuevo ArbolRojiNegro con la misma informacion del ArbolRojiNegro actual. <br>
 */
@Override
public ArbolRojiNegro < T > clonar() {
           1               1        1   
    ArbolRojiNegro < T > t = new ArbolRojiNegro < T > ();
        1     (2T(n/2) + O(1))     1           KTE
    t.setRaiz(`35¬clonarRN((NodoRN < T > ) getRaiz(), nulo)`);
         1
    return (t);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 1 + (2T(n/2) + O(1)) + 1 + KTE + 1$

  $T({n}) = 2T(n/2) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __35. Clonar Árbol Private (clonarRN)__

```java
private NodoBin < T > clonarRN(NodoRN < T > r, NodoRN < T > p) {
           1       1       1      1
    if (r == null || r.getInfo() == null)
        //Mejor de los casos
            1
        return (r);
    else {
                 1       1         1              1
        NodoRN < T > aux = new NodoRN < T > (r.getInfo());
                1          1
        aux.setColor(r.getColor());
                1
        aux.setPadre(p);
               1   /*Llamado Recursivo 1*/  1
        aux.setIzq(clonarRN(r.getIzq(), aux));
               1   /*Llamado Recursivo 2*/  1
        aux.setDer(clonarRN(r.getDer(), aux));
             1
        return aux;
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + 4 + 2 + 1 + 2 + 2 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***

## __36. Imprimir Árbol (imprime)__

```java
/**
 * Metodo que permite imprimir los datos que contiene el Arbol RojiNegro. <br>
 * <b>post: </b> Se imprimio los datos que contiene el Arbol RojiNegro. <br>
 */
@Override
public void imprime() {
    (2T(n/2) + O(1))       1          KTE
    `37¬this.imprimeRN((NodoRN < T > ) getRaiz())`;
}
```

* ### __Costo Operacional__

  $T({n}) = 2T(\frac{n}{2}) + O(1) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __37. Imprimir Árbol Privado (imprimeRN)__

```java
/**
 * Metodo que permite imprimir los datos que contiene el Arbol RojiNegro. <br>
 * <b>post: </b> Se imprimio los datos que contiene el Arbol RojiNegro. <br>
 * @param n representa la raiz o subraiz del Arbol RojiNegro. <br>
 */
public void imprimeRN(NodoRN < T > n) {
       1  1
    int l = -1;
       1  1
    int r = -1;
       1  1
    int p = -1;
            1       1
    if (n.getIzq() != nulo) {
          1            KTE        1        1          KTE
        l = Integer.parseInt(n.getIzq().getInfo().toString());
    }
            1       1
    if (n.getDer() != nulo) {
          1            KTE        1        1          KTE
        r = Integer.parseInt(n.getDer().getInfo().toString());
    }
            1        1
    if (n.getPadre() != nulo) {
          1            KTE        1        1          KTE
        p = Integer.parseInt(n.getPadre().getInfo().toString());
    }
                KTE                  1   1           1     1       1             1    1            1   1            1      1       1
    System.out.println("Izquierdo: " + l + " Info: " + n.getInfo() + " Derecha: " + r + " Padre: " + p + " Color: " + n.getColor() + "\n");
            1       1
    if (n.getIzq() != nulo) {
        /*Llamado Recursivo 1*/  1
        imprimeRN(n.getIzq());
    }
            1       1
    if (n.getDer() != nulo) {
        /*Llamado Recursivo 2*/  1
        imprimeRN(n.getDer());
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 2 + 2 + 2 + 2 + 3 + KTE + KTE + 2 + 3 + KTE + KTE + 2 + 3 + KTE + KTE + KTE + 12 + 2 + 1 + 2 + 1$

  $({A}) = 2$

  $({B}) = 2$

  $({C}) = O(1) -> 0$

  $T({n}) = 2T(\frac{n}{2}) + O(1)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(2) = 1$

  $Big O = O({n^{\log_2(2)}})$

  $Big O = O({n})$

***
