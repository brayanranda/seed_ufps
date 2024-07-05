# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolB)__

[CODIGO FUENTE (ArbolB)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolB.java)

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

## __1. Constructor Vacio (ArbolB)__

```java
/**
 * Crea un arbol B  vacio con orden por defecto de 2. <br>
 * <b>post: </b> Se creo un arbol B vacio por defecto. <br>
 */
public ArbolB() {
              1
    this.raiz = null;
           1
    this.n = 2;
            1   1
    this.m = n * 2;
            1          1
    this.m1 = (this.m) + 1;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 2 + 2$

    $T({n}) = 6$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __2. Constructor Vacio con Orden Especifico (ArbolB)__

```java
/**
 * Crea un arbol B vacio con orden especifico. <br>
 * <b>post: </b> Se creo un arbol B vacio con orden especifico. <br>
 * @param n de tipo entero que indica el numero el orden del arbol B. <br>
 */
public ArbolB(int n) {
           1
    if (n <= 0) {
        //Mejor de los casos
                  1
        System.err.println("Tamano del orden del arbol no es válido");
           1
        return;
    }
               1
    this.raiz = null;
           1
    this.n = n;
           1   1
    this.m = n * 2;
             1          1
    this.m1 = (this.m) + 1;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + 2 + 2$

    $T({n}) = 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __3. Metodo que permite conocer la raiz del Arbol B (getRaiz)__

```java
/**
 * Metodo que permite conocer la raiz del Arbol B. <br>
 * <b>post: </b> Se obtuvo la raiz del Arbol B. <br>
 * @return Un objeto de tipo Pagina que es la raiz del Arbol B. <br>
 */
public Pagina getRaiz() {
         1
    return raiz; // Costo operacional: O(1)
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __4. Metodo que permite modificar la raiz del Arbol B (setRaiz)__

```java
/**
 * Metodo que permite modificar la raiz del Arbol B. <br>
 * <b>post: </b> Se modifico la raiz del Arbol B. <br>
 * @param raiz Objeto de tipo NodoB<T> que representa la nueva raiz del Arbol. <br>
 */
protected void setRaiz(Pagina raiz) {
              1
    this.raiz = raiz;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __5. Metodo que permite saber el numero de orden del arbol (getN)__

```java
/**
 * Metodo que permite saber el numero de orden del arbol. <br>
 * <b>post: </b> Se retorno el numero de orden del arbol. <br>
 * @return el numero de orden del arbol.
 */
public int getN() {
         1
    return n;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __6. Metodo que permite saber el numero maximo de elementos que puede almacenar el arbol por pagina (getM)__

```java
/**
 * Metodo que permite saber el numero maximo de elementos que puede almacenar el arbol por pagina. <br>
 * <b>post: </b> Se retorno el numero maximo de elementos que puede almacenar el arbol por pagina. <br>
 * @return el numero maximo de elementos que puede almacenar el arbol por pagina.
 */
public int getM() {
         1
    return m;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __7. Metodo que permite saber el numero maximo de apuntadores que puede almacenar el arbol por pagina (getM1)__

```java
/**
 * Metodo que permite saber el numero maximo de apuntadores que puede almacenar el arbol por pagina. <br>
 * <b>post: </b> Se retorno el numero maximo de apuntadores que puede almacenar el arbol por pagina. <br>
 * @return el numero maximo de apuntadores que puede almacenar el arbol por pagina.
 */
public int getM1() {
          1
    return m1;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __8. Metodo que permite modificar el numero de orden del arbol (setN)__

```java
/**
 * Metodo que permite modificar el numero de orden del arbol. <br>
 * <b>post: </b> Se modifico el numero de orden del arbol. <br>
 * @param n nuevo orden del arbol
 */
public void setN(int n) {
           1
    this.n = n;
}
```

* ### __Costo Operacional__

    $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __9. Metodo que permite insertar un nuevo dato en el arbol B (insertar)__

```java
/**
 * Metodo que permite insertar un nuevo dato en el arbol B. <br>
 * <b>post: </b> Se inserto un nuevo dato al arbol B. <br>
 * @param x dato a insertar en el arbol.  <br>
 * @return la pagina donde se inserto x, o null sino se inserto correctamente
 */
public boolean insertar(T x) {
    //pila para guarddar el camino desde la raiz hasta la pagina donde se inserta x
      1      1            1     1      1
    Pila < Pagina > pila = new Pila < Pagina > ();
    //Para trabajar subir y subir1 por referencia se usa si la pagina se rompe
        1     1        1   
    T[] subir = (T[]) new Object[1];
         1      1        1
    T[] subir1 = (T[]) new Object[1];
    //variables auxiliares 
        4         1      1   
    int posicion = 0, i = 0, terminar, separar;
         3   1             1   
    Pagina p = null, nuevo = null, nuevo1;
                 1
    if (this.raiz == null) {
        //Mejor de los casos
                  1          (4n + 11)
        this.raiz = `13¬this.crearPagina(x)`;
    } else {
        //Peor de los casos
                 1        (n^{2}(KTE) + n(KTE) + 15)
        posicion = `17¬this.buscar(this.raiz, x, pila)`;
                      1
        if (posicion == -1)
            //Mejor de los casos
                   1
            return (false);
        else {
            //Peor de los casos
                     1         1
            terminar = separar = 0;
                    1         KTE    1             1
            while ((!pila.esVacia()) && (terminar == 0)) {
                   1         KTE
                p = pila.desapilar();
                          1      1
                if (p.getCont() == this.m) {
                    //Peor de los casos
                                1
                    if (separar == 0) {
                        //Mejor de los casos
                              1     (28n + n(KTE) + 45)
                        nuevo = `19¬this.romper(p, null, x, subir)`;
                                1
                        separar = 1;
                    } else {
                        //Peor de los casos
                               1            (28n + n(KTE) + 45)
                        nuevo1 = `19¬this.romper(p, nuevo, subir[0], subir1)`;
                                 1
                        subir[0] = subir1[0];
                              1
                        nuevo = nuevo1;
                    }
                } else {
                    //Mejor de los casos
                                1
                    if (separar == 1) {
                        //Peor de los casos
                                1
                        separar = 0;
                          1         (n(KTE) + KTE)
                        i = `18¬this.donde(p, subir[0])`;
                          1           (6n + KTE)
                        i = `10¬this.insertar(p, subir[0], i)`;
                                    (6n + 5)
                        `21¬this.cderechaApunt(p, i + 1)`;
                                  1         1     1
                        p.getApuntadores()[i + 1] = nuevo;
                    } else {
                        //Mejor de los casos
                                 1                (6n + KTE)
                        posicion = `10¬this.insertar(p, x, posicion)`;
                    }
                             1
                    terminar = 1;
                }
            }
                          1    1            1
            if ((separar == 1) && (terminar == 0)) {
                         1                     (4n + 11)
               `4¬this.setRaiz`(`13¬this.crearPagina(subir[0])`);
                                1              1
                this.raiz.getApuntadores()[0] = p;
                               1              1
                this.raiz.getApuntadores()[1] = nuevo;
            }
        }
    }
          1
    return (true);
}
```

* ### __Costo Operacional__

    $T({n}) = 5 + 3 + 3 + 6 + 5 + 1 + 1 + (n^{2}(KTE) + n(KTE) + 15) + 1 + 2 + 3 + KTE + n(1 + KTE + 2 + 1 + 1 + (28n + n(KTE) + 45) + 1 + 1) + 3 + KTE + 3 + 1 + (4n + 11) + 2 + 2 + 1$

    $T({n}) = n^{2}(KTE) + n(KTE) + 4n + n(KTE) + 28n^{2} + n^{2}(KTE) + KTE$

    $T({n}) = 28n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __10. Metodo que permite insertar una pagina en el arbol B (insertar)__

```java
/**
 *  Metodo que permite insertar una pagina en el arbol B. <br>
 * <b>post: </b> Se inserto un nuevo dato al arbol B. <br>
 * @param p pagina en donde inserta el dato. <br>
 * @param x apuntador a una pagina del arbol. <br>
 * @param i indicando la posicion donde se desea insertar el dato. <br>
 * @return la posicion donde se inserto el dato.
 */
private int insertar(Pagina p, T x, int i) {
       1
    int j;
              1      1
    if (p.getCont() != 0) {
           1         1      1           1                KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                   1
        if (compara < 0)
            //Mejor de los casos
             2
            i++;
        else {
            //Peor de los casos
              1       1     1
            j = p.getCont() - 1;
                     1
            while (j >= i) {
                      1       1    1       1
                p.getInfo()[j + 1] = p.getInfo()[j];
                   1  1
                j = j - 1;
            }
        }
    }
         1         1       1
    p.setCont(p.getCont() + 1);
         1         1
    p.getInfo()[i] = x;
         1
    return (i);
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 2 + 3 + KTE + 1 + 3 + 1 + n(4 + 2) + 1 + 3 + 2 + 1$

    $T({n}) = 6n + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __11. Metodo que permite eliminar una dato del arbol B (eliminar)__

```java
/**
 * Metodo que permite eliminar una dato del arbol B. <br>
 * <b>post: </b> Se elimino el dato del arbol B. <br>
 * @param x dato que se desea eliminar. <br>
 * @return el dato que se elimino o null en caso de no haberse eliminado el dato.
 */
public boolean eliminar(T x) {
        3
    int posicion, i, k;
         4      1
    Pagina p, q = null, r, t;
         1      1           1      1             1
    Pila < Componente > pila = new Pila < Componente > ();
            1         1          1
    Componente objeto = new Componente();
              1      ((n^{2}(KTE) + n(KTE) + 14))
    posicion = `16¬this.esta(this.raiz, x, pila)`;
                  1
    if (posicion == -1)
               1
        return (false); //la llave no existe en el arbol
    else {
                1      KTE
        objeto = pila.desapilar();
          1         1
        p = objeto.getP();
          1         1
        i = objeto.getV();
                     (2n + 17)  1
        if (!`28¬this.esHoja(p)`) {
              1
            t = p;
              1
            k = i;
                    KTE        1            1
            pila.apilar(new Componente(p, i + 1));
              1           1          1
            p = p.getApuntadores()[i + 1];
                      1
            while (p != null) {
                       KTE       1
                pila.apilar(new Componente(p, 0));
                  1            1
                p = p.getApuntadores()[0];
            }
                   1           KTE
            objeto = pila.desapilar();
              1          1
            p = objeto.getP(); // p pagina que contiene el dato a eliminar
              1          1
            i = objeto.getV();
                 1         1      1
            t.getInfo()[k] = p.getInfo()[0];
              1          1
            x = (T) p.getInfo()[0];
                      1
            posicion = 0;
        }
                 1       1
        if (p.getCont() > this.n)
                     (6n + 9)
            `12¬this.retirar(p, posicion)`;
        else {
                1       KTE
            if (!pila.esVacia()) {
                       1        KTE
                objeto = pila.desapilar();
                  1          1
                q = objeto.getP(); //q pagina que contiene el puntero de la pagina donde esta el dato
                  1          1
                i = objeto.getV();
                      1       1
                if (i < q.getCont()) {
                       1           1         1
                    r = q.getApuntadores()[i + 1];
                              1      1
                    if (r.getCont() > this.n) {
                                (6n + 9)
                        `12¬this.retirar(p, posicion)`;
                                 (12n + KTE)
                        `22¬this.cambio(p, q, r, i, x)`;
                    } else {
                               1
                        if (i != 0) {
                              1           1          1
                            r = q.getApuntadores()[i - 1];
                                     1       1
                            if (r.getCont() > this.n) {
                                         (6n + 9)
                                `12¬this.retirar(p, posicion)`;
                                      (12n + KTE)           1
                                `22¬this.cambio(p, q, r, (i - 1), x);
                            } else {
                                (8n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE)     1
                                `23¬this.unir(q, r, p, (i - 1), pila, x, posicion)`;
                            }
                        } else {
                            (8n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE)
                            `23¬this.unir(q, r, p, i, pila, x, posicion)`;
                        }
                    }
                } else {
                      1         1           1
                    r = q.getApuntadores()[i - 1];
                                    1
                    if (r.getCont() > this.n) {
                                    (6n + 9)
                        `12¬this.retirar(p, posicion)`;
                               (12n + KTE)          1
                        `22¬this.cambio(p, q, r, (i - 1), x)`;
                    } else
                         (8n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE) 1
                        `23¬this.unir(q, r, p, (i - 1), pila, x, posicion)`;
                }
            } else {
                        (6n + 9)
                `12¬this.retirar(p, posicion)`;
                            1    1
                if (p.getCont() == 0) {
                             1
                    `4¬this.setRaiz(null)`;
                }
            }
        }
    }
          1
    return true;
}
```

* ### __Costo Operacional__

    $T({n}) = 5 + 3 + 3 + 6 + 5 + 1 + 1 + (n^{2}(KTE) + n(KTE) + 15) + 1 + 2 + 3 + KTE + n(1 + KTE + 2 + 1 + 1 + (28n + n(KTE) + 45) + 1 + 1) + 3 + KTE + 3 + 1 + (4n + 11) + 2 + 2 + 1$

    $T({n}) = n^{2}(KTE) + n(KTE) + 4n + n(KTE) + 28n^{2} + n^{2}(KTE) + KTE$

    $T({n}) = 28n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __12. Metodo que permite retirar un dato del arbol indicada (retirar)__

```java
/**
 * Metodo que permite retirar un dato del arbol indicada. <br>
 * <b>post: </b> Se elimino el dato del arbol B. <br>
 * @param p pagina de la que se desea retirar el dato.  <br>
 * @param i posicion del dato en el arbol. <br>
 */
private void retirar(Pagina p, int i) {
              1        1    1
    while (i < p.getCont() - 1) {
             1          1      1        1
        p.getInfo()[i] = p.getInfo()[i + 1];
         2
        i++;
    }
         1        1       1
    p.setCont(p.getCont() - 1);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + n(4 + 2) + 3 + 3$

    $T({n}) = 6n + 9$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __13. Metodo que permite crear fisicamente una pagina en memoria (crearPagina)__

```java
/**
 * Metodo que permite crear fisicamente una pagina en memoria. <br>
 * <b>post: </b> Se creo fisicamente una pagina en memoria. <br>
 * @param x informacion que tendra la nueva hoja. <br>
 * @return la pagina creada.
 */
private Pagina crearPagina(T x) {
         1    1     1
    Pagina p = new Pagina(n);
           (4n + 4)
    `14¬this.inicializar(p)`;
         1
    p.setCont(1);
         1          1
    p.getInfo()[0] = x;
           1
    return (p);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 4n + 4 + 1 + 2 + 1$

    $T({n}) = 4n + 11$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __14. Metodo que permite inicializar una pagina (inicializar)__

```java
/**
 * Metodo que permite inicializar una pagina. <br>
 * <b>post: </b> Se inicializo una pagina en el arbol. <br>
 * @param p apuntador a una pagina aun si inicializar. <br>
 */
private void  inicializar(Pagina p) {
          1
    int i = 0;
          1
    p.setCont(0);
            1 
    while (i < this.m1)
                1           2    1
        p.getApuntadores()[i++] = null;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 1 + n(4) + 1$

    $T({n}) = 4n + 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __15. Metodo que permite evaluar la existencia un dato dentro del Arbol B (esta)__

```java
/**
 * Metodo que permite evaluar la existencia un dato dentro del Arbol B. <br>
 * <b>post: </b> Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo boolean que contiene un true si ubico el dato y false en caso contrario.
 */
public boolean esta(T dato) {
         1  1    1
    Pila pi = new Pila();
        1          (n^{2}(KTE) + n(KTE) + 14)    1
    return (`16¬this.esta(this.raiz, dato, pi)` != (-1));
}
```

* ### __Costo Operacional__

    $T({n}) = n^{2}(KTE) + n(KTE) + 19$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __16. Metodo que permite determinar si un elemento se encuentra en el arbol (esta)__

```java
/**
 * Metodo que permite determinar si un elemento se encuentra en el arbol. <br>
 * <b>post: </b>  Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param p pagina que contiene las paginas de la busqueda. <br>
 * @param x posicion del apuntador de las paginas. <br>
 * @param pi estructura que almacenara el camino de la busqueda de X. <br>
 * @return posicion de X dentro de la pagina donde se encontro, de no ser asi retorna -1.
 */
private int esta(Pagina p, T x, Pila < Componente > pila) {
       1  1
    int i = 0;
            1       1
    boolean encontro = false;
      1          1
    int posicion = -1;
               1       1   1
    while ((p != null) && !encontro) {
          1
        i = 0;
            1        1      KTE           1            KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                    1        1     1        1      1
        while ((compara < 0) && (i < (p.getCont() - 1))) {
              2
            i++;
                    1        1            1            KTE
            compara = ((Comparable) p.getInfo()[i]).compareTo(x);
        }
                     1
        if ((compara > 0)) {
                   KTE         1
            pila.apilar(new Componente(p, i));
              1           1
            p = p.getApuntadores()[i];
        } else
                    1
        if ((compara < 0)) {
                   KTE           1          1
            pila.apilar(new Componente(p, i + 1));
              1       1              1
            p = p.getApuntadores()[i + 1];
        } else {
                    KTE           1
            pila.apilar(new Componente(p, i));
                     1
            encontro = true;
        }
    }
           1
    if (encontro) {
                 1
        posicion = i;
    }
           1
    return (posicion);
}
```

* ### __Costo Operacional__

    $T({n}) = 6 + 3 + n(KTE + 5 + n(KTE) + 5) + 3 + 1 + 1$

    $T({n}) = n^{2}(KTE) + n(KTE) + 14$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __17. Metodo que permite determinar si un elemento se encuentra en el arbol (buscar)__

```java
/**
 * Metodo que permite encontrar un elemento se encuentra en el arbol. <br>
 * <b>post: </b> Se realizo una busqueda de X en el arbol. <br>
 * @param p pagina que contiene las paginas de la busqueda. <br>
 * @param x posicion del apuntador de las paginas. <br>
 * @param pi estructura que conteniene el camino de la busqueda de X. <br>
 * @return posicion de X dentro de la pagina donde se encontro, de no ser asi retorna -1
 */
private int buscar(Pagina p, T x, Pila pila) {
       2  1   
    int i = -1, posicion;
           1         1
    boolean encontro = false;
             1
    posicion = -1;
               1       1   1
    while ((p != null) && !(encontro)) {
               KTE
        pila.apilar(p);
          1
        i = 0;
             1      1        1           1             KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                       1      1    1        1      1
        while ((compara < 0) && (i < (p.getCont() - 1))) {
             2
            i++;
                    1       1            1              KTE
            compara = ((Comparable) p.getInfo()[i]).compareTo(x);
        }
                     1
        if ((compara > 0))
            //Mejor de los casos
              1           1
            p = p.getApuntadores()[i];
        else {
            //Peor de los casos
                        1
            if (compara < 0)
                //Peor de los casos
                  1           1          1
                p = p.getApuntadores()[i + 1];
            else
                //Mejor de los casos
                         1
                encontro = true;
        }
    }
           1
    if (!encontro)
                1
        posicion = i;
           1
    return (posicion);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 2 + 1 + 3 + n(KTE + 1 + 4 + KTE + 4 + n(2 + 3 + KTE) + 4 + 1 + 1 + 1 + 3) + 3 + 1 + 1 + 1$

    $T({n}) = n^{2}(KTE) + n(KTE) + 15$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __18. Metodo que indica el lugar fisico donde se debe insertar el dato x (donde)__

```java
/**
 * Metodo que indica el lugar fisico donde se debe insertar el dato x. <br>
 * <b>post: </b> Se indica la posicion de un dato en una pagina determinada del arbol. <br>
 * @param p pagina posible a insertar. <br>
 * @param x dato a insertar. <br>
 * @return indice que indica el lugar fisico donde se debe insertar el dato.
 */
protected int donde(Pagina p, T x) {
       1
    int i;
       1
    i = 0;
        1                1             1             KTE
    int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                    1     1      1    1        1
    while ((compara < 0) && (i < (p.getCont() - 1))) {
          2
        i++;
               1         1           1              KTE
        compara = ((Comparable) p.getInfo()[i]).compareTo(x);
    }
        1
    return i;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 1 + 3 + KTE + 5 + n(2 + 3 + KTE) + 5 + 1$

    $T({n}) = n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __19. Metodo que permite romper una pagina del arbol en dos, para mantener su orden (romper)__

```java
/**
 * Metodo que permite romper una pagina del arbol en dos, para mantener su orden. <br>
 * <b>post: </b> Se dividio una pagina del arbol en dos, para mantener sus caracteristicas. <br>
 * @param p pagina a romper. <br>
 * @param t apuntador de que ser null la pagina es una hoja del arbol. <br>
 * @param x dato a insertar en el arbol. <br>
 * @param subir contenedor de la pagina a ascender en el arbol. <br>
 * @return la nueva pagina del arbol.
 */
private Pagina romper(Pagina p, Pagina t, T x, T[] subir) {
       1   1        1 
    T[] a = (T[]) new Object[m1];
      1   1
    int i = 0;
        1     1
    boolean s = false;
           1   1       1            1
    Pagina[] b = new Pagina[this.m1 + 1];
             1         1  1
    while (i < this.m && !s) {
            1        1       1            1            KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                  1      
        if (compara < 0) { //<-- X es mayor que el dato del arbol
            //Peor de los casos
                 1          1
            a[i] = (T) p.getInfo()[i];
                 1           1
            b[i] = p.getApuntadores()[i];
                      1         2   1
            p.getApuntadores()[i++] = null;
        } else
            //Mejor de los casos
              1
            s = true;
    }
         1
    a[i] = x;
         1          1
    b[i] = p.getApuntadores()[i];
              1           1
    p.getApuntadores()[i] = null;
       2   1
    b[++i] = t;
               1
    while ((i <= this.m)) {
              1         1        1
        a[i] = (T) p.getInfo()[i - 1];
            1    1              1
        b[i + 1] = p.getApuntadores()[i];
                 1          2    1
        p.getApuntadores()[i++] = null;
    }
         1    1        1
    Pagina q = new Pagina(this.n);
            (4n + 4)
    `14¬this.inicializar(q)`;
         1
    p.setCont(n);
         1
    q.setCont(n);
      1
    i = 0;
             1
    while (i < this.n) {
              1         1
        p.getInfo()[i] = a[i];
                 1             1
        p.getApuntadores()[i] = b[i];
              1         1    1   1
        q.getInfo()[i] = a[i + n + 1];
                  1           1     1   1
        q.getApuntadores()[i] = b[i + n + 1];
          2
        i++;
    }
            1             1
    p.getApuntadores()[n] = b[n];
               1          1
    q.getApuntadores()[n] = b[m1];
              1
    subir[0] = a[n];
         1
    return (q);
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 2 + 2 + 4 + 3 + n(4 + KTE + 1 + 2 + 2 + 4) + 3 + 1 + 2 + 2 + 3 + 1 + n(3 + 3 + 4) + 1 + 3 + (4n + 4) + 1 + 1 + 1 + 1 + n(2 + 2 + 4 + 4 + 2) + 1 + 2 + 2 + 1 + 1$

    $T({n}) = 28n + n(KTE) + 45$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __20. Correr Apuntadores Izquierda Árbol (cizquierda_apunt)__

```java
/**
 * Metodo que permite correr los apuntadores hacia la izquierda. <br>
 * <b>post: </b> Se corrieron los apuntadores de la pagina hacia la izquierda. <br>
 * @param p apuntador de la pagina a recorrer. <br>
 * @param i variable entera que indica en donde se comienza a correr. <br>
 * @param j  
 */
protected void cizquierda_apunt(Pagina p, int i, int j) {
            1
    while (i < j) {
                 1            1             1         1
        p.getApuntadores()[i] = p.getApuntadores()[i + 1];
         2
        i++;
    }
              1          1
    p.getApuntadores()[i] = null;
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + n(4 + 2) + 1 + 2$

    $T({n}) = 6n + 4$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __21. Correr Apuntadores Derecha Árbol (cderechaApunt)__

```java
/**
 * Metodo que permite correr los apuntadores hacia la derecha. <br>
 * <b>post: </b> Se corrieron los apuntadores de la pagina hacia la derecha. <br>
 * @param p apuntador de la pagina a recorrer. <br>
 * @param i variable entera que indica en donde se comienza a correr. <br>
 */
protected void cderechaApunt(Pagina p, int i) {
       1
    int j;
      1      1
    j = p.getCont();
             1
    while (j > i) {
                  1          1            1          1
        p.getApuntadores()[j] = p.getApuntadores()[j - 1];
          2
        j--;
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 1 + 2 + 1 + n(4 + 2) + 1$

    $T({n}) = 6n + 5$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __22. Metodo que permite realizar las modificaciones al eliminar un dato, para que el arbol conserve sus caracteristicas (cambio)__

```java
/**
 *  Metodo que permite realizar las modificaciones al eliminar un dato, para que el arbol conserve sus caracteristicas. <br>
 * <b>post: </b> Se cambiaron las paginas, para realizar la eliminacion de un dato. <br>
 * @param p apuntador de la pagina donde se encuentra el dato a eliminar. <br>
 * @param q pagina que contiene el apuntador a la pagina donde se encuentra el dato a eliminar. <br>
 * @param r apuntador a pagina hermana del apuntador de la pagina donde se encuentra el dato a eliminar. <br>
 * @param i posicion en la que se encuentra el dato en la pagina. <br>
 * @param x dato que se desea eliminar. <br>
 */
protected void cambio(Pagina p, Pagina q, Pagina r, int i, T x) {
       1
    int k;
      1
    T t;
        1        1     KTE            1           1      1       KTE
    int compara = ((Comparable) r.getInfo()[r.getCont() - 1]).compareTo(x);
               1
    if (compara < 0) {
        //Mejor de los casos
           1        1 
        t = (T) q.getInfo()[i];
                (6n + 9)
        `12¬this.retirar(q, i)`;
          1
        k = 0;
          1            (6n + KTE)
        k = `10¬this.insertar(p, t, k)`;
          1         1            1       1
        t = (T) r.getInfo()[r.getCont() - 1];
                   (6n + 9)      1      1
        `12¬this.retirar(r, r.getCont() - 1)`;
          1
        k = i;
               1
        if (k == -1)
               1
            k = 0;
          1           (6n + KTE)
        k = `10¬this.insertar(q, t, k)`;
    } else {
        //Peor de los casos
          1           1
        t = (T) q.getInfo()[i];
                 (6n + 9)
        `12¬this.retirar(q, i);
          1     1        1
        k = p.getCont() - 1;
              1
        if (k == -1)
              1
            k = 0;
          1            (6n + KTE)
        k = `10¬this.insertar(p, t, k)`;
           1       1 
        t = (T) r.getInfo()[0];
                (6n + 9)
        `12¬this.retirar(r, 0);
          1
        k = i;
                   1    1
        if (q.getCont() != 0)
                  1     1       1
            if (k > q.getCont() - 1)
                  1      1       1
                k = q.getCont() - 1;
           1            (6n + KTE)
        k = `10¬this.insertar(q, t, k)`;
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 12n + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __23. Metodo que permite unir dos paginas, para conservar las caracteristicas del arbol B (unir)__

```java
/**
 * Metodo que permite unir dos paginas, para conservar las caracteristicas del arbol B. <br>
 * <b>post: </b> Se unio dos paginas para mantener las caracteristicas de arbol B. <br>
 * @param q pagina que contiene apuntadores hacia las paginas r y p. <br> 
 * @param r pagina que tendra la la informacion de la paginas. <br>
 * @param p pagina que contiene la llave que se desea eliminar
 * @param i posicion en r donde se debe incoporar la llave que se retira de q
 * @param pi almacena el camino entre q y la raiz del arbol
 * @param x dato que se desea eliminar
 * @param posicion posicion donde se encuentra la llave que se retirada de la pagina
 */
private void unir(Pagina q, Pagina r, Pagina p, int i, Pila < Componente > pila, T x, int posicion) {
         3        1      1   
    int terminar = 0, j = 0, k;
          1   1
    Pagina t = null;
            1         1        1
    Componente objeto = new Componente();
               (6n + 9)
    `12¬this.retirar(p, posicion)`;
          1     1       1             1            KTE
    int compara = ((Comparable) r.getInfo()[0]).compareTo(x);
              1
    if (compara > 0) {
           1
        t = p;
          1
        p = r;
           1
        r = t;
    }
                    1
    while (terminar == 0) {
        /*1*/     1       1         1        1      1
        if ((r.getCont() < this.n) && (p.getCont() > this.n)) {
            //Mejor de los casos
                    (12n + KTE)
            `22¬this.cambio(r, q, p, i, x)`;
                     1              1       1           1
            r.getApuntadores()[r.getCont()] = p.getApuntadores()[0];
                      (6n + 4)                  1       1
            `20¬this.cizquierda_apunt(p, 0, p.getCont() + 1)`;
                      1
            terminar = 1;
        }
        /*2*/
        else
        //Peor de los casos
                  1      1          1        1      1
        if ((p.getCont() < this.n) && (r.getCont() > this.n)) {
            //Mejor de los casos
                     (12n + KTE)
            `22¬this.cambio(p, q, r, i, x)`;
                    (6n + 5)
           `21¬this.cderechaApunt(p, 0)`;
                      1           1          1              1      1
            p.getApuntadores()[0] = r.getApuntadores()[r.getCont() + 1];
                    1               1       1    1
            r.getApuntadores()[r.getCont() + 1] = null;
                     1
            terminar = 1;
        } else {
            //Peor de los casos
              1        1
            j = r.getCont();
                 1       2   1        1
            r.getInfo()[j++] = q.getInfo()[i];
              1
            k = 0;
                      1     1        1
            while (k <= p.getCont() - 1) {
                     1       2   1           1      2
                r.getInfo()[j++] = (T) p.getInfo()[k++];
            }
                1
            r.setCont(j);
                    (6n + 9)
            `12¬this.retirar(q, i)`;
              1
            k = 0;
              1        1     1
            j = this.m - p.getCont();
                          1              1
            while (p.getApuntadores()[k] != null) {
                         1          2   1          1          2
                r.getApuntadores()[j++] = p.getApuntadores()[k++];
            }
              1
            p = null;
            /*3*/
                     1      1 
            if (q.getCont() == 0) {
                //Mejor de los casos
                          1          1    1
                q.getApuntadores()[i + 1] = null;
                /*4*/
                         KTE
                if (pila.esVacia()) {
                      1
                    q = null;
                }
            } else
                //Peor de los casos
                             (6n + 4)           1          1    1
                `20¬this.cizquierda_apunt(q, i + 1, q.getCont() + 1)`;

            /*5*/
                  1
            if (q != null) {
                /*6*/
                       1        1
                if (q.getCont() >= this.n) {
                             1
                    terminar = 1;
                } else {
                       1
                    t = q;
                    /*7*/
                        1       KTE
                    if (!pila.esVacia()) {
                                1        KTE
                        objeto = pila.desapilar();
                          1         1
                        q = objeto.getP();
                           1         1
                        i = objeto.getV();
                           1    1       1           1            KTE
                        compara = ((Comparable) q.getInfo()[0]).compareTo(x);
                                     1
                        if (compara <= 0) {
                               1
                            p = t;
                               1          1          1
                            r = q.getApuntadores()[i - 1];
                              1   1
                            i = i - 1;
                        } else {
                              1
                            r = t;
                              1           1           1
                            p = q.getApuntadores()[i + 1];
                        }
                    } else
                                 1
                        terminar = 1;
                }
            } else {
                         1
                terminar = 1;
                         1
                `4¬this.setRaiz(r)`;
            }
        }
    }
}
```

* ### __Costo Operacional__

    $T({n}) = 5 + 3 + 3 + 6 + 5 + 1 + 1 + (n^{2}(KTE) + n(KTE) + 15) + 1 + 2 + 3 + KTE + n(1 + KTE + 2 + 1 + 1 + (28n + n(KTE) + 45) + 1 + 1) + 3 + KTE + 3 + 1 + (4n + 11) + 2 + 2 + 1$

    $T({n}) = n^{2}(KTE) + n(KTE) + 4n + n(KTE) + 28n^{2} + n^{2}(KTE) + KTE$

    $T({n}) = 28n^{2} + 2n^{2}(KTE) + 2n(KTE) + 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __24. Metodo que retorna un iterador con las hojas del Arbol B (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol B. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol B. <br>
 * @return Un objeto Iterador con las hojas del Arbol B.
 */
public Iterator < T > getHojas() {
          1          1      1
    ListaCD < T > l = new ListaCD();
        (nT(n/n) + O(n))
    `25¬this.getHojas(this.raiz, l)`;
        1        KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __25. Metodo de tipo privado que retorna un iterador con las hojas del Arbol B. (getHojas)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con las hojas del Arbol B. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol B.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private void getHojas(Pagina < T > r, ListaCD < T > l) {
          1
    if (r == null)
        //Mejor de los casos
           1
        return;
            (2n + 17)    1
    if (`28¬this.esHoja(r)`) {
                  2        1              2
        for (int j = 0; j < r.getCont(); j++)
                   KTE             1
            l.insertarAlFinal(r.getInfo()[j]);
    }
               2      1             1      2
    for (int i = 0; i < r.getCont() + 1; i++) {
            /*Llamado Recursivo 1*/    1
        this.getHojas(r.getApuntadores()[i], l);
    }
}
```

* ### __Costo Operacional__

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __26. Metodo que retorna un iterador con las hojas del Arbol B. (contarHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol B. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol B. <br>
 * @return Un objeto Iterador con las hojas del Arbol B.
 */
public int contarHojas() {
       1        (nT(n/n) + O(n))
    return `27¬this.contarHojas(this.raiz)`;
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + 1$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __27. Metodo de tipo privado que retorna un iterador con las hojas del Arbol B. (contarHojas)__

```java
/**
 * Metodo de tipo privado que retorna un iterador con las hojas del Arbol B. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol B.<br>
 * @param r representa la raiz del arbol, o raiz de subarbol. <br>
 * @param l Lista para el almacenamiento de los datos del arbol. <br>
 */
private int contarHojas(Pagina < T > r) {
           1
    if (r == null)
        //Mejor de los casos
           1
        return 0;
        1    1
    int cont = 0;
            (2n + 17)    1
    if (`28¬this.esHoja(r)`)
           2
        cont++;
              2       1              1    2
    for (int i = 0; i < r.getCont() + 1; i++) {
              2 /*Llamado Recursivo 1*/   1
        cont += this.contarHojas(r.getApuntadores()[i]);
    }
         1
    return (cont);
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 2 + 2n + 18 + 2 + 3 + n(3) + 3 + 1$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __28. Metodo que permite determinar si una pagina es hoja. (esHoja)__

```java
/**
 * Metodo que permite determinar si una pagina es hoja. <br>
 * <b>post: </b> Se determino si una pagina es hoja. <br>
 * @param p pagina a determinar si es hoja. <br>
 * @return true en caso de que la pagina sea hoja.
 */
protected boolean esHoja(Pagina p) {
       1   1
    int j = 0;
                   1                1      1      1      1       1
    while ((p.getApuntadores()[j] == null) && (j < (p.getCont() - 1)))
         2
        j++;
        1             1            1
    return (p.getApuntadores()[j] == null);
}
```

* ### __Costo Operacional__

    $T({n}) = 2 + 6 + n(2) + 6 + 3$

    $T({n}) = 2n + 17$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __29. Metodo que permite conocer si un Arbol B se encuenta vacio. (esVacio)__

```java
/**
 * Metodo que permite conocer si un Arbol B se encuenta vacio. <br>
 * <b>post: </b> Se evaluo si el Arbol B se enecuenta o no vacio. <br>
 * @return Un boolean, true si el Arbol se encuenta vacio, false en caso contrario
 */
public boolean esVacio() {
        1             1
    return (this.raiz == null);
}
```

* ### __Costo Operacional__

    $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({1})$

***

## __30. Metodo que permite obtener el peso del Arbol B. (getPeso)__

```java
/**
 * Metodo que permite obtener el peso del Arbol B. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol B.<br>
 * @return Un entero con la cantidad de elementos del Arbol B.
 */
public int getPeso() {
                2        1
    if (`29¬this.esVacio()`)
        return (0);
        1      (nT(n/n) + O(n))   1
    return (`31¬this.getPeso`( `3¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + 5$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __31. Metodo de tipo privado que permite conocer el numero de elemento del Arbol B. (getPeso)__

```java
/**
 * Metodo de tipo privado que permite conocer el numero de elemento del Arbol B. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol.<br>
 * @param r Representa la raiz del Arbol, o raiz de subarbol. <br>
 * @return El numero de elementos que contiene el Arbol B.
 */
private int getPeso(Pagina < T > r) {
           1
    if (r == null)
        //Mejor de los casos
            1
        return 0;
        1    1
    int cont = 0;
          2       1
    cont += r.getCont();
               2      1              1    2
    for (int i = 0; i < r.getCont() + 1; i++) {
              2 /*Llamado Recursivo 1*/  1 
        cont += this.getPeso(r.getApuntadores()[i]);
    }
          1
    return (cont);
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 2 + 3 + 3 + n(3) + 3 + 1$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __32. Metodo que permite obtener la altura del Arbol B. (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol B. <br>
 * <b>post: </b> Se retorno la altura del Arbol B.<br>
 * @return Un entero con la altura del Arbol B.
 */
public int getAltura() {
         1            (4n + 5)           1
    return (`33¬this.getAltura`(`3¬this.getRaiz()`));
}
```

* ### __Costo Operacional__

    $T({n}) = 4n + 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __34. Metodo de tipo privado que permite conocer la altura del Arbol B (getAltura)__

```java
/**
 * Metodo de tipo privado que permite conocer la altura del Arbol B. <br>
 * <b>post: </b> Se retorno la altura del Arbol B. <br>
 * @param r Representa la raiz del Arbol, o raiz de subarbol. <br>
 * @return Un entero con la altura del Arbol B.
 */
private int getAltura(Pagina < T > r) {
         1   1
    int alt = 0;
              1
    while (r != null) {
           2
        alt++;
          1      1
        r = r.getApuntadores()[0];
    }
          1
    return (alt);
}
```

* ### __Costo Operacional__

    $T({n}) = 2 + 1 + n(2 + 2) + 1 + 1$

    $T({n}) = 4n + 5$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __34. Metodo que permite imprimir el arbol B. (imprime)__

```java
/**
 * Metodo que permite imprimir el arbol B. <br>
 * <b>post: </b> Se imprimio los datos que contiene el arbol. <br>
 * @return 
 */
public String imprime() {
           1    1
    String msg = "";
          1        (nT(n/n) + O(n^{2}))
    return (`35¬this.imprime(this.raiz, msg)`);
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n^{2}) + 3$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n^{2})$

***

## __35. Metodo que permite imprimir el arbol B. (imprime)__

```java
/**
 * Metodo que permite imprimir el arbol B. <br>
 * <b>post: </b> Se imprimio los datos que contiene el arbol. <br>
 * @param r raiz o pagina no hoja del arbol B
 */
private String imprime(Pagina r, String msg) {
      1   1
    int i = 0;
              1      1
    while (i <= r.getCont()) {
             2       KTE    1                1  1           1         1                KTE      1
        msg += r.toString() + "  pagina = " + i + "   ES =" + r.getApuntadores()[i].toString() + "\n";
            1        (2n + 17)          1
        if (!`28¬this.esHoja(r.getApuntadores()[i])`)
                2  /*Llamado Recursivo 1*/  1  
            msg += this.imprime(r.getApuntadores()[i], msg);
         2
        i++;
    }
         1
    return msg;
}
```

* ### __Costo Operacional__

    $O({n}) = 2 + 2 + n(KTE + 2n) + 2 + 1$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n^{2}) -> 2$

    $T({n}) = nT(\frac{n}{n}) + O(n^{2})$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n^{2})$

***

## __36. Metodo que permite clonar la informacion de un Arbol B. (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol B. <br>
 * @return Un nuevo ArbolB con la informacion del Arbol duplicada. <br>
 */
public ArbolB < T > clonar() {
           1          1         1                1
    ArbolB < T > clon = new ArbolB < T > (this.getN());
             1
    if (raiz == null)
        //Mejor de los casos
             1
        return (clon);
            1        (nT(n/n) + O(n))
    clon.setRaiz(`36¬this.clonar(this.raiz)`);
         1
    return (clon);
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + 7$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __36. Metodo que permite clonar la informacion de un Arbol B. (clonar)__

```java
private Pagina clonar(Pagina r) {
           1
    if (r == null)
        //Mejor de los casos
              1
        return (null);
    else {
        //Peor de los casos
           1      1          1         1
        T info[] = (T[]) new Object[r.getM()];
                2         1               2
        for (int i = 0; i < r.getCont(); i++) {
                    1          1
            info[i] = (T) r.getInfo()[i];
        }
              1    1       1         1
        Pagina aux = new Pagina(r.getN());
                1
        aux.setInfo(info);
                1          1
        aux.setCont(r.getCont());
                  2       1               1     2
        for (int i = 0; i < aux.getCont() + 1; i++) {
                      1             1   /*Llamado Recursivo 1*/   1
            aux.getApuntadores()[i] = `36¬this.clonar(r.getApuntadores()[i])`;
        }
               1
        return (aux);
    }
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 4 + 3 + n(2) + 3 + 4 + 1 + 2 + 3 + n(3) + 3 + 1$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __37. Metodo que retorna un iterador con el recorrido preOrden del Arbol. (preOrden)__

```java
/**
 *  Metodo que retorna un iterador con el recorrido preOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador en preOrden para el arbol.<br>
 * @return un iterador en preorden para el Arbol AVL.
 */
public Iterator < T > preOrden() {
        1           1      1
    ListaCD < T > l = new ListaCD();
        (nT(n/n) + O(n))
    `38¬this.preOrden(this.raiz, l)`;
       1        KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __38. Metodo que retorna un iterador con el recorrido preOrden del Arbol. (preOrden)__

```java
private void preOrden(Pagina < T > r, ListaCD < T > l) {
           1
    if (r == null)
        //Mejor de los casos
           1
        return;
             2         1              2
    for (int j = 0; j < r.getCont(); j++)
                KTE             1
        l.insertarAlFinal(r.getInfo()[j]);
              2        1            1    2
    for (int i = 0; i < r.getCont() + 1; i++) {
        /*Llamado Recursivo 1*/   1
        this.preOrden(r.getApuntadores()[i], l);
    }
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 3 + n(KTE + 1) + 3 + 3 + n(1) + 3$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __39. Metodo que retorna un iterador con el recorrido in Orden del Arbol. (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el arbol.<br>
 * @return un iterador en inOrden para el Arbol AVL. <br>
 */
public Iterator < T > inOrden() {
            1        1    1
    ListaCD < T > l = new ListaCD();
        (nT(n/n) + O(n))
    `40¬this.inOrden(this.raiz, l)`;
       1         KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __40. Metodo que retorna un iterador con el recorrido in Orden del Arbol. (inOrden)__

```java
private void inOrden(Pagina < T > r, ListaCD < T > l) {
           1
    if (r == null)
        //Mejor de los casos
            1
        return;
    /*Llamado Recursivo 1*/  1         
    this.inOrden(r.getApuntadores()[0], l);
             2         1              2
    for (int j = 0; j < r.getCont(); j++)
               KTE              1
        l.insertarAlFinal(r.getInfo()[j]);
              2       1              1    2
    for (int i = 1; i < r.getCont() + 1; i++) {
        /*Llamado Recursivo 2*/  1
        this.inOrden(r.getApuntadores()[i], l);
    }
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 1 + 3 + n(KTE + 1) + 3 + 3 + n(1) + 3$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __41. Metodo que retorna un iterador con el recorrido postOrden del Arbol. (postOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido postOrden del Arbol. <br>
 * <b>post: </b> Se retorno un iterador preOrden para el arbol.<br>
 * @return un iterador en postOrden para el Arbol AVL. <br>
 */
public Iterator < T > postOrden() {
        1           1       1
    ListaCD < T > l = new ListaCD();
        (nT(n/n) + O(n))
    `42¬this.postOrden(this.raiz, l)`;
        1      KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

    $T({n}) = nT(\frac{n}{n}) + O(n) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O(n \log n)$

***

## __42. Metodo que retorna un iterador con el recorrido postOrden del Arbol. (postOrden)__

```java
private void postOrden(Pagina < T > r, ListaCD < T > l) {
          1
    if (r == null)
        //Mejor de los casos
          1
        return;
            1  1       1            1     2
    for (int i = 0; i < r.getCont() + 1; i++) {
        /*Llamado Recursivo 1*/     1
        this.postOrden(r.getApuntadores()[i], l);
    }
             1  1     1               2
    for (int j = 0; j < r.getCont(); j++)
              KTE               1
        l.insertarAlFinal(r.getInfo()[j]);
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 4 + n(1) + 4 + 3 + n(KTE + 1) + 3$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***

## __43. Metodo que permite retornar un iterador con el recorrido por niveles del Arbol. (impNiveles)__

```java
/**
 * Metodo que permite retornar un iterador con el recorrido por niveles del Arbol. <br>
 * <b>post: </b> Se retorno el recorrido por niveles del Arbol AVL.<br>
 * @return un un iterador con el recorrido por niveles del Arbol AVL.
 */
public Iterator < T > impNiveles() {
           1       1         1      
    ListaCD < T > l = new ListaCD < T > ();
        1         2
    if (!`29¬this.esVacio()`) {
          1     1               1        1      1
        Cola < Pagina < T >> c = new Cola < Pagina < T >> ();
           KTE             1
        c.enColar(`3¬this.getRaiz()`);
            1
        Pagina < T > x;
                1   KTE
        while (!c.esVacia()) {
              1      KTE
            x = c.deColar();
                    1
            if (x != null) {
                         2          1             2
                for (int i = 0; i < x.getCont(); i++)
                       KTE                1
                    l.insertarAlFinal(x.getInfo()[i]);
                        1  1      1             1    2
                for (int j = 0; j < x.getCont() + 1; j++)
                        KTE              1
                    c.enColar(x.getApuntadores()[j]);
            }
        }
    }
       1          KTE
    return (l.iterator());
}
```

* ### __Costo Operacional__

    $T({n}) = 3 + 3 + 5 + KTE + 1 + 1 + 1 + KTE + n(1 + KTE + 1 + 3 + n(KTE + 1) + 3 + 4 + n(KTE + 1) + 4) + 1 + KTE + 1 + KTE$

    $T({n}) = n^{2}(KTE) + 2n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n})$

***

## __44. Metodo que permite podar las paginas Hoja de un Arbol B. (podar)__

```java
/**
 * Metodo que permite podar las paginas Hoja de un Arbol B.
 */
public void podar() {
                (2n + 17)   1
    if (`28¬this.esHoja(raiz)`)
                  1
        `4¬this.setRaiz(null)`;
        (nT(n/n) + O(n))
    `45¬this.podar(this.raiz)`;
}
```

* ### __Costo Operacional__

    $T({n}) = 2n + 17 + 1 + 1 + nT(\frac{n}{n}) + O(n)$

    $T({n}) = nT(\frac{n}{n}) + O(n) + 2n + 19$

* ### __Complejidad (Notación Asintótica)__

    $Big O = O({n \log n})$

***

## __45. Metodo que permite podar las paginas Hoja de un Arbol B. (podar)__

```java
private void podar(Pagina < T > r) {
           1
    if (r == null)
        //Mejor de los casos
          1
        return;
              2        1            1     2
    for (int i = 0; i < r.getCont() + 1; i++) {
              1      1          1
        Pagina apunt = r.getApuntadores()[i];
                  (2n + 17)      1
        if (`28¬this.esHoja(apunt)`)
                     1            1
            r.getApuntadores()[i] = null;
    }
              2        1             1    2
    for (int j = 0; j < r.getCont() + 1; j++) {
                   1               1
        if (r.getApuntadores()[j] != null) {
            /*Llamado Recursivo 1*/ 1
            this.podar(r.getApuntadores()[j]);
        }
    }
}
```

* ### __Costo Operacional__

    $O({n}) = 1 + 3 + n(3 + 2n + 17 + 1 + 2) + 3 + 3 + n(2 + 1) + 3$

    $({A}) = n$

    $({B}) = n$

    $({C}) = O(n) -> 1$

    $T({n}) = nT(\frac{n}{n}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

    $\log_n(n) = 1$

    $Big O = O(n \log n)$

***
