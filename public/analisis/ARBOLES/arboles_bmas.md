# __COSTO OPERACIONAL Y COMPLEJIDAD (ArbolBMas)__

[CODIGO FUENTE (ArbolBMas)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/ArbolBMas.java)

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

## __1. Constructor Vacio (ArbolBMas)__

```java
/**
 * Crea un arbol B  vacio con orden especifico. <br>
 * <b>post: </b> Se creo un arbol B vacio con orden especifico. <br>
 */
public ArbolBMas() {
      1
    super();
              1          KTE
    this.vsam = super.getRaiz();
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Constructor Orden Especifico (ArbolBMas)__

```java
/**
 * Crea un arbol B  vacio con orden especifico. <br>
 * <b>post: </b> Se creo un arbol B vacio con orden especifico. <br>
 * @param n de tipo entero que indica el numero el orden del arbol B. <br>
 */
public ArbolBMas(int n) {
       1
    super(n);
              1          KTE
    this.vsam = super.getRaiz();
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Apuntador Árbol (getVsam)__

```java
/**
 * Metodo el apuntador hacia los datos almacenados en el arbol. <br>
 *<b>post: </b> Se retorno el apuntador hacia los datos almacenados en el arbol. <br>
 * @return el apuntador hacia los datos almacenados en el arbol. 
 */
public Pagina < T > getVsam() {
          1
    return vsam;
}
```

* ### __Costo Operacional__

  $T({n}) = 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Insertar Elemento Árbol (insertarBMas)__

```java
/**
 * Metodo que permite insertar un nuevo dato en el arbol B +. <br>
 * <b>post: </b> Se inserto un nuevo dato al arbol B+. <br>
 * @param x dato a insertar en el arbol.  <br>
 * @return la pagina donde se inserto x, o null sino se inserto correctamente
 */
public boolean insertarBMas(T x) {
    //pila para guarddar el camino desde la raiz hasta la pagina donde se inserta x
          1   1    1
    Pila pila = new Pila();
    //Para trabajar subir y subir1 por referencia se usa si la pagina se rompe
       1      1         1
    T[] subir = (T[]) new Object[1];
       1       1        1
    T[] subir1 = (T[]) new Object[1];
    //variables auxiliares 
      4          1      1
    int posicion = 0, i = 0, terminar, separar;
        3    1             1              1
    Pagina p = null, nuevo = null, nuevo1 = null;

                1      1
    if (super.getRaiz() == null) {
        //Mejor de los casos
                 1               (4n + 14)       1  
        super.setRaiz(`8¬this.crearPagina(super.getN(), x)`);
             1         1
        vsam = super.getRaiz();
               1
        return (true);
    } else {
        //Peor de los casos
                 1     (n^{2}(KTE) + n(KTE) + 15)  1
        posicion = `12¬buscar(super.getRaiz(), x, pila)`;
                      1
        if (posicion == -1)
            //Mejor de los casos
                   1
            return (false);
        else {
            //Peor de los casos
                     1         1
            terminar = separar = 0;
                     1       KTE      1            1
            while ((!pila.esVacia()) && (terminar == 0)) {
                   1   1            KTE
                p = (Pagina) pila.desapilar();
                          1      1        1
                if (p.getCont() == super.getM()) {
                    //Mejor de los casos
                                 1
                    if (separar == 0) {
                              1     (n(KTE) + 29n + 83)
                        nuevo = `13¬romper(p, null, x, subir, separar)`;
                                1
                        separar = 1;
                    } else { 
                               1     (n(KTE) + 29n + 83)
                        nuevo1 = `13¬romper(p, nuevo, subir[0], subir1, separar)`;
                                 1
                        subir[0] = subir1[0];
                              1
                        nuevo = nuevo1;
                    }
                } else {
                    //Peor de los casos
                                 1
                    if (separar == 1) {
                        //Peor de los casos
                                1
                        separar = 0;
                          1   KTE    
                        i = donde(p, subir[0]);
                          1 (6n + KTE)
                        i = `5¬insertar(p, subir[0], i)`;
                                   KTE           1
                        super.cderechaApunt(p, i + 1);
                                1            1    1
                        p.getApuntadores()[i + 1] = nuevo;
                    } else
                        //Mejor de los casos
                                 1    (6n + KTE)
                        posicion = `5¬insertar(p, x, posicion)`;
                             1
                    terminar = 1;
                }
            }
                          1     1            1 
            if ((separar == 1) && (terminar == 0)) {
                         1           (4n + 14)           1
                this.setRaiz(`8¬this.crearPagina(super.getN(), subir[0])`);
                         1                1         1
                super.getRaiz().getApuntadores()[0] = p;
                         1                1         1
                super.getRaiz().getApuntadores()[1] = nuevo;
            }
        }
    }
         1
    return true;
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 3 + 3 + 6 + 6 + 2 + 2 + (n^{2}(KTE) + n(KTE) + 15) + 1 + 2 + 3 + KTE + n(2 + KTE + 3 + 1 + 1 + 1 + KTE + 1 + (6n + KTE) + KTE + 1 + 3) + 3 + KTE + 3 + 2 + (4n + 14) + 3 + 3 + 1$

  $T({n}) = [n^{2}(KTE) + n(KTE) + 15] + [6n^{2} + n(KTE)] + 4n + KTE$

  $T({n}) = 6n^{2} + n^{2}(KTE) + 2n(KTE) + 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __5. Insertar Elemento Página Árbol (insertar)__

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
               1    1         1          1              KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                    1
        if (compara < 0) {
            //Mejor de los casos
             2
            i++;
        } else {
            //Peor de los casos
              1       1     1
            j = p.getCont() - 1;
                      1
            while (j >= i) {
                      1       1    1       1
                p.getInfo()[j + 1] = p.getInfo()[j];
                  1   1
                j = j - 1;
            }
        }
    }
         1         1
    p.getInfo()[i] = x;
         1         1      1
    p.setCont(p.getCont() + 1);
        1
    return i;
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 2 + 4 + KTE + 1 + 3 + 1 + n(4 + 2) + 1 + 2 + 3 + 1$

  $T({n}) = 6n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __6. Eliminar Elemento Árbol (eliminarBMas)__

```java
/**
 * Metodo que permite eliminar una dato del arbol B. <br>
 * <b>post: </b> Se elimino el dato del arbol B. <br>
 * @param x dato que se desea eliminar. <br>
 * @return el dato que se elimino o null en caso de no haberse eliminado el dato.
 */
public boolean eliminarBMas(T x) {
      3
    int posicion, i, k;
       1   1
    T temp = null;
       4     1         1         1 
    Pagina p = null, q = null, r = null, t;
                 1           1    1
    Pila < Componente > pila = new Pila();
            1         1
    Componente objeto = null;
             1  (n^{2}(KTE) + n(KTE) + 15)  1
    posicion = `11¬estaBMas(super.getRaiz(), x, pila)`;
                  1
    if (posicion == -1)
        //Mejor de los casos
             1
        return false; //la llave no existe en el arbol
           1         KTE
    objeto = pila.desapilar();
      1          1
    p = objeto.getP();
      1          1
    i = objeto.getV();
             1      1        1
    if (p.getCont() > super.getN()) {
        //Mejor de los casos
           (6n + 12)
        `7¬retirar(p, posicion)`;
              1
        return true;
    }
               KTE
    if (pila.esVacia()) {
        //Mejor de los casos
           (6n + 12)
        `7¬retirar(p, posicion)`;
                  1      1
        if (p.getCont() == 0) {
                      1
            super.setRaiz(null);
                  1         1
            vsam = super.getRaiz();
        }
              1
        return true;
    }
           1       1               KTE
    objeto = (Componente) pila.desapilar();
      1          1
    q = objeto.getP(); //q pagina que contiene el puntero de la pagina donde esta el dato
      1          1
    i = objeto.getV();
          1       1
    if (i < q.getCont()) {
          1           1          1
        r = q.getApuntadores()[i + 1];
                  1     1         1
        if (r.getCont() > super.getN()) {
             (6n + 12)
            `7¬retirar(p, posicion)`;
                 1           1
            temp = (T) r.getInfo()[0];
             (6n + 12)
            `7¬retirar(r, 0)`;
             (6n + 12)
            `7¬retirar(q, i)`;
              1   KTE
            k = donde(p, temp);
             (6n + KTE)
            `5¬insertar(p, temp, k)`;
              1   KTE              1
            k = donde(q, (T) r.getInfo()[0]);
             (6n + KTE)            1 
            `5¬insertar(q, (T) r.getInfo()[0], k)`;
                  1
            return true;
        }
    }
          1
    if (i > 0) {
          1           1          1
        r = q.getApuntadores()[i - 1];
                  1     1         1
        if (r.getCont() > super.getN()) {
             (6n + 12)
            `7¬retirar(p, posicion)`;
                 1          1           1      1
            temp = (T) r.getInfo()[r.getCont() - 1];
             (6n + 12)          1      1
            `7¬retirar(r, r.getCont() - 1)`;
             (6n + 12)      1
            `7¬retirar(q, i - 1)`;
              1       KTE
            k = this.donde(p, temp);
             (6n + KTE)
            `5¬insertar(p, temp, k)`;
              1        KTE
            k = this.donde(q, temp);
             (6n + KTE)
            `5¬insertar(q, temp, k)`;
                  1
            return true;
        }
    }
          1
    if (i > 0)
         2
        i--;
        (20n^{2} + n(KTE) + 6n + KTE)
    `14¬unirBMas(q, r, p, i, pila, x, posicion)`;
           1
    return true;
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 2 + 7 + 3 + 2 + 2 + (n^{2}(KTE) + n(KTE) + 15) + 1 + 1 + KTE + 2 + 2 + 3 + KTE + 2 + KTE + 2 + 2 + 2 + 1 + 3 + 3 + (6n + 12) + 4 + (6n + 12) + 2 + (6n + 12) + 1 + 1 + KTE + (6n + KTE) + 1 + KTE + (6n + KTE) + 1 + 1 + 2 + (20n^{2} + n(KTE) + 6n + KTE) + 1$

  $T({n}) = n^{2}(KTE) + 20n^{2} + 2n(KTE) + 36n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __7. Retirar Elemento Página Árbol (retirar)__

```java
/**
 * Metodo que permite retirar un dato del arbol indicada. <br>
 * <b>post: </b> Se elimino el dato del arbol B. <br>
 * @param p pagina de la que se desea retirar el dato.  <br>
 * @param i posicion del dato en el arbol. <br>
 */
private void retirar(Pagina p, int i) {
             1       1     1
    while (i < p.getCont() - 1) {
             1         1      1        1
        p.getInfo()[i] = p.getInfo()[i + 1];
         2
        i++;
    }
          1         1     1
    p.setCont(p.getCont() - 1);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + n(4 + 2) + 3 + 3$

  $T({n}) = 6n + 12$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __8. Crear Página Árbol (crearPagina)__

```java
/**
 * Metodo que permite crear fisicamente una pagina en memoria. <br>
 * <b>post: </b> Se creo fisicamente una pagina en memoria. <br>
 * @param x informacion que tendra la nueva hoja. <br>
 * @return la pagina creada.
 */
private Pagina crearPagina(int n, T x) {
        1    1      1
    Pagina p = new Pagina(n);
      (4n + 7) 
    `9¬inicializar(p)`;
          1 
    p.setCont(1);
         1         1 
    p.getInfo()[0] = (x);
         1
    return p;
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + (4n + 7) + 1 + 2 + 1$

  $T({n}) = 4n + 14$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Inicializar Página Árbol (inicializar)__

```java
/**
 * Metodo que permite inicializar una pagina. <br>
 * <b>post: </b> Se inicializo una pagina en el arbol. <br>
 * @param p apuntador a una pagina aun si inicializar. <br>
 */
private void inicializar(Pagina p) {
       1  1
    int i = 0;
        1
    p.setCont(0);
              1        1
    while (i < super.getM1())
                1           2   1
        p.getApuntadores()[i++] = null;
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 1 + 1 + n(4) + 1 + 1$

  $T({n}) = 4n + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Consultar Existencia Elemento Árbol (estaBMas)__

```java
/**
 * Metodo que permite evaluar la existencia un dato dentro del Arbol B+. <br>
 * <b>post: </b> Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param dato Representa el dato que se quiere localizar dentro del Arbol Eneario. <br>
 * @return Un objeto de tipo boolean que contiene un true si ubico el dato y false en caso contrario.
 */
public boolean estaBMas(T dato) {
        1                  1     1
    Pila < Componente > pi = new Pila();
         1   (n^{2}(KTE) + n(KTE) + 15)   1               1
    return (`11¬this.estaBMas(super.getRaiz(), dato, pi) != (-1)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 3 + 3 + (n^{2}(KTE) + n(KTE) + 15)$

  $T({n}) = n^{2}(KTE) + n(KTE) + 21$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __11. Consultar Existencia Elemento Página Árbol (estaBMas)__

```java
/**
 * Metodo que permite determinar si un elemento se encuentra en el arbol. <br>
 * <b>post: </b>  Se evaluo la existencia de un dato dentro del Arbol. <br>
 * @param p pagina que contiene las paginas de la busqueda. <br>
 * @param x posicion del apuntador de las paginas. <br>
 * @param pi estructura que almacenara el camino de la busqueda de X. <br>
 * @return posicion de X dentro de la pagina donde se encontro, de no ser asi retorna -1.
 */
private int estaBMas(Pagina p, T x, Pila < Componente > pi) {
       1  1
    int i = 0;
          1          1
    boolean encontro = false;
       1         1
    int posicion = -1;
               1       1    1
    while ((p != null) && (!encontro)) {
          1
        i = 0;
             1      1       1            1              KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                        1     1    1       1      1
        while ((compara < 0) && (i < (p.getCont() - 1))) {
             2
            i++;
                    1        1           1               KTE
            compara = ((Comparable) p.getInfo()[i]).compareTo(x);
        }
                     1
        if ((compara > 0)) {
            //Mejor de los casos
            pi.apilar(new Componente(p, i));
            p = p.getApuntadores()[i];
        } else
        //Peor de los casos
                     1
        if ((compara < 0)) {
            //Mejor de los casos
                  1          1            1
            pi.apilar(new Componente(p, i + 1));
                        1              1
            if (p.getApuntadores()[0] != null)
                //Peor de los casos
                  1           1          1
                p = p.getApuntadores()[i + 1];
            else
                //Mejor de los casos
                  1
                p = null;
        } else {
            //Peor de los casos
                         1             1
            if (p.getApuntadores()[0] != null) {
                //Peor de los casos
                     1            1           1
                pi.apilar(new Componente(p, i + 1));
                   1          1          1
                p = p.getApuntadores()[i + 1];
            } else {
                //Mejor de los casos
                      1             1  
                pi.apilar(new Componente(p, i));
                         1
                encontro = true;
            }
        }
    }
            1
    if (encontro) {
                 1
        posicion = i;
    }
            1
    return posicion;
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 2 + 2 + 3 + n(1 + 4 + KTE + 5 + n(2 + 3 + KTE) + 5 + 1 + 1 + 2 + 3 + 3) + 3 + 1 + 1 + 1$

  $T({n}) = n[KTE + n(KTE)] + 15$

  $T({n}) = n^{2}(KTE) + n(KTE) + 15$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __12. Buscar Elemento Página Árbol (buscar)__

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
      1   1
    int i = 0;
          1          1
    boolean encontro = false;
       1         1
    int posicion = -1;
               1        1       1
    while ((p != null) && (!encontro)) {
                KTE
        pila.apilar(p);
          1
        i = 0;
          1          1      1            1              KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                       1      1     1      1      1
        while ((compara < 0) && (i < (p.getCont() - 1))) {
             2
            i++;
                    1        1           1              KTE
            compara = ((Comparable) p.getInfo()[i]).compareTo(x);
        }
                    1
        if ((compara > 0))
            //Mejor de los casos
              1          1
            p = p.getApuntadores()[i];
        else
                    1
        if (compara < 0)
            //Peor de los casos
                        1            1
            if (p.getApuntadores()[0] != null)
                  1          1         1
                p = p.getApuntadores()[i + 1];
            else
                //Mejor de los casos
                  1
                p = null;
                         1            1
        else if (p.getApuntadores()[0] != null)
              1          1         1
            p = p.getApuntadores()[i + 1];
        else
                     1
            encontro = true;
    }
            1
    if (!encontro)
                 1
        posicion = i;
          1
    return posicion;
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 2 + 2 + 3 + n(KTE + 1 + 4 + KTE + 5 + n(2 + 3 + KTE) + 5 + 1 + 1 + 1 + 1 + 2 + 1) + 3 + 1 + 1 + 1$

  $T({n}) = n(KTE + n(KTE)) + 15$

  $T({n}) = n^{2}(KTE) + n(KTE) + 15$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __13. Dividir Página Árbol (romper)__

```java
/**
 * Metodo que permite romper una pagina del arbol en dos, para mantener su orden. <br>
 * <b>post: </b> Se dividio una pagina del arbol en dos, para mantener sus caracteristicas. <br>
 * @param p pagina a romper. <br>
 * @param t apuntador de que ser null la pagina es una hoja del arbol. <br>
 * @param q nueva pagina. <br>
 * @param x dato a insertar en el arbol. <br>
 * @param subir contenedor de la pagina a ascender en el arbol. <br>
 * @param separar variable que ajusta el ultimo apuntador. <br>
 * @return la nueva pagina del arbol.
 */
private Pagina romper(Pagina p, Pagina t, T x, T[] subir, int separar) {
      1   1         1                1
    T[] a = (T[]) new Object[super.getM1()];
      1   1
    int i = 0;
         1    1
    boolean s = false;
         1     1      1             1     1
    Pagina[] b = new Pagina[super.getM1() + 1];
        1       1
    Pagina temp = null;
                 1
    if (separar == 0) {
             1          1                1
        temp = p.getApuntadores()[super.getM()];
                1                 1      1
        p.getApuntadores()[super.getM()] = null;
    }
              1        1       1  1
    while ((i < super.getM()) && (!s)) {
           1        1        1           1              KTE
        int compara = ((Comparable) p.getInfo()[i]).compareTo(x);
                    1
        if (compara < 0) { //<-- X es mayor que el dato del arbol
            //Peor de los casos
                 1           1
            a[i] = (T) p.getInfo()[i];
                 1           1 
            b[i] = p.getApuntadores()[i];
                     1          2   1
            p.getApuntadores()[i++] = null;
        } else
            //Mejor de los casos
              1
            s = true;
    }
        1
    a[i] = x;
         1           1 
    b[i] = p.getApuntadores()[i];
             1            1
    p.getApuntadores()[i] = null;
       2   1
    b[++i] = t;
              1          1
    while ((i <= super.getM())) {
             1           1       1
        a[i] = (T)(p.getInfo()[i - 1]);
            1    1          1 
        b[i + 1] = p.getApuntadores()[i];
                1           2   1
        p.getApuntadores()[i++] = null;
    }
        1    1     1             1
    Pagina q = new Pagina(super.getN());
         (4n + 7)
    `9¬inicializar(q)`;
      1
    i = 0;
                 1
    if (separar == 0) {
        //Peor de los casos
             1            1
        p.setCont(super.getN());
             1            1     1
        q.setCont(super.getN() + 1);
             1         1           1
        q.getInfo()[0] = a[super.getN()];
                  1        1
        while (i < super.getN()) {
                  1        1
            p.getInfo()[i] = a[i];
                       1          1
            p.getApuntadores()[i] = b[i];
                 1         1   1      1        1    1
            q.getInfo()[i + 1] = a[i + super.getN() + 1];
                   1              1     1         1    1
            q.getApuntadores()[i] = b[i + super.getN() + 1];
             2
            i++;
        }
                1                  1     1
        q.getApuntadores()[super.getM()] = temp;
                1                  1     1
        p.getApuntadores()[super.getM()] = q;
    } else {
        //Mejor de los casos
              1           1
        p.setCont(super.getN());
              1           1
        q.setCont(super.getN());
                  1       1
        while (i < super.getN()) {
                  1        1
            p.getInfo()[i] = a[i];
                  1               1
            p.getApuntadores()[i] = b[i];
                  1        1      1        1    1
            q.getInfo()[i] = a[i + super.getN() + 1];
                   1              1     1         1    1
            q.getApuntadores()[i] = b[i + super.getN() + 1];
             2
            i++;
        }
    }
             1                 1     1          1
    p.getApuntadores()[super.getN()] = b[super.getN()];
             1                 1     1          1
    q.getApuntadores()[super.getN()] = b[super.getM1()];
             1          1
    subir[0] = a[super.getN()];
        1
    return q;
}
```

* ### __Costo Operacional__

  $T({n}) = 4 + 2 + 2 + 5 + 2 + 1 + 3 + 3 + 4 + n(4 + KTE + 1 + 2 + 2 + 4) + 4 + 1 + 2 + 2 + 3 + 2 + n(3 + 3 + 4) + 2 + 4 + (4n + 7) + 1 + 1 + 2 + 3 + 3 + 2 + n(2 + 2 + 6 + 5) + 2 + 3 + 3 + 4 + 4 + 2 + 1$

  $T({n}) = n(KTE) + 10n + 4n + 15n + 83$

  $T({n}) = n(KTE) + 29n + 83$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __14. Unir Páginas Árbol (unirBMas)__

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
private void unirBMas(Pagina q, Pagina r, Pagina p, int i, Pila pi, T x, int posicion) {
        3        1      1
    int terminar = 0, j = 0, k;
          1  1
    Pagina t = null;
           1           1       1
    Componente objeto = new Componente();
       (6n + 12)
    `7¬retirar(p, posicion)`;
         1      1        1           1              KTE
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
        /*1*/
                   1     1         1      1        1     1         1
        if ((r.getCont() < super.getN()) && (p.getCont() > super.getN())) {
            //Mejos de los casos
                    KTE
            super.cambio(r, q, p, i, x);
                     1              1       1           1
            r.getApuntadores()[r.getCont()] = p.getApuntadores()[0];
                      KTE                    1      1
            this.cizquierda_apunt(p, 0, p.getCont() + 1);
                     1
            terminar = 1;
        }
        /*2*/
        else
        //Peor de los casos
                  1      1         1      1        1     1         1
        if ((p.getCont() < super.getN()) && (r.getCont() > super.getN())) {
            //Mejor de los casos
                    KTE  
            super.cambio(p, q, r, i, x);
                      KTE
            this.cderechaApunt(p, 0);
                     1            1          1               1     1
            p.getApuntadores()[0] = r.getApuntadores()[r.getCont() + 1];
                      1             1       1   1
            r.getApuntadores()[r.getCont() + 1] = null;
                     1
            terminar = 1;
        } else {
            //Peor de los casos
              1      1
            j = r.getCont();
                         1            1
            if (r.getApuntadores()[0] == null)
                //Peor de los casos
                          1                 1    1           1                1
                r.getApuntadores()[super.getM()] = p.getApuntadores()[super.getM()];
            else
                //Mejor de los casos
                     1        2  1      1
                r.getInfo()[j++] = q.getInfo()[i];
              1
            k = 0;
                      1      1       1
            while (k <= p.getCont() - 1)
                      1       2  1          1       2
                r.getInfo()[j++] = (T) p.getInfo()[k++];
                  1
            r.setCont(j);
              (6n + 12)
            `7¬retirar(q, i)`;
              1
            k = 0;
              1         1    1       1
            j = super.getM() - p.getCont();
                            1             1
            while (p.getApuntadores()[k] != null)
                         1          2   1          1          2
                r.getApuntadores()[j++] = p.getApuntadores()[k++];
              1
            p = null;
            /*3*/
                      1      1
            if (q.getCont() == 0) {
                //Mejor de los casos
                         1           1    1
                q.getApuntadores()[i + 1] = null;
                /*4*/
                          KTE
                if (pi.esVacia()) {
                      1
                    q = null;
                }
            } else
                //Peor de los casos
                          KTE              1          1     1
                this.cizquierda_apunt(q, i + 1, q.getCont() + 1);
            /*5*/
                   1
            if (q != null)
                //Peor de los casos
                /*6*/
                          1      1         1
                if (q.getCont() >= super.getN())
                    //Mejor de los casos
                             1
                    terminar = 1;
                else {
                    //Peor de los casos -------------
                      1
                    t = q;
                    /*7*/
                        1     KTE
                    if (!pi.esVacia()) {
                        //Peor de los casos
                               1       1              KTE
                        objeto = (Componente) pi.desapilar();
                          1         1
                        q = objeto.getP();
                          1         1
                        i = objeto.getV();
                                 1       1            1             KTE
                        compara = ((Comparable) q.getInfo()[0]).compareTo(x);
                                    1
                        if (compara <= 0) {
                            //Peor de los casos
                              1
                            p = t;
                              1            1         1
                            r = q.getApuntadores()[i - 1];
                             2
                            i--;
                        } else {
                            //Mejor de los casos
                              1
                            r = t;
                              1          1           1
                            p = q.getApuntadores()[i + 1];
                        }
                    } else
                        //Mejor de los casos
                                 1
                        terminar = 1;
                }

            else {
                //Mejor de los casos
                         1
                terminar = 1;
                         1
                super.setRaiz(r);
            }
        }
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 5 + 2 + 3 + (6n + 12) + 4 + KTE + 1 + 3 + 1 + n(7 + 7 + 2 + 2 + 5 + 1 + 3 + n(7) + 3 + 1 + (6n + 12) + 1 + 4 + 2 + n(7) + 2 + 1 + 2 + KTE + 3 + 1 + 3 + 1 + 1 + KTE + 2 + KTE + 2 + 2 + 3 + KTE + 1 + 1 + 3 + 2) + 1$

  $T({n}) = 20n^{2} + n(KTE) + 6n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __15. Obtener Iterador Hojas Árbol (getHojas)__

```java
/**
 * Metodo que retorna un iterador con las hojas del Arbol B+. <br>
 * <b>post: </b> Se retorno un iterador con las hojas del Arbol B+. <br>
 * @return Un objeto Iterador con las hojas del Arbol B+.
 */
@Override
public Iterator < T > getHojas() {
        1            KTE
    return (super.getHojas());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __16. Consultar Existencia Elementos Árbol (esVacio)__

```java
/**
 * Metodo que permite conocer si un Arbol B+ se encuenta vacio. <br>
 * <b>post: </b> Se evaluo si el Arbol B+ se enecuenta o no vacio. <br>
 * @return Un boolean, true si el Arbol se encuenta vacio, false en caso contrario
 */
@Override
public boolean esVacio() {
        1            KTE
    return (super.esVacio());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __17. Obtener Iterador In-Orden Árbol (inOrden)__

```java
/**
 * Metodo que retorna un iterador con el recorrido in Orden del Arbol B+. <br>
 * <b>post: </b> Se retorno un iterador inOrden para el Arbol.<br>
 * @return Un Iterador en inOrden (Primer apuntador->Primera nformacion de Pagina->Segundo apuntador. estodepende del orden del arbol) para el arbol B. <br>
 */
@Override
public Iterator < T > inOrden() {
        1            KTE
    return (super.inOrden());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __18. Obtener Peso Árbol (getPesoBMas)__

```java
/**
 * Metodo que permite obtener el peso del Arbol B+. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol B+.<br>
 * @return Un entero con la cantidad de elementos del Arbol B+.
 */
public int getPesoBMas() {
         1       (7n + 9)            1
    return (`19¬getPesoBMas(super.getRaiz())`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (7n + 9) + 1$

  $T({n}) = 7n + 11$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __19. Obtener Peso Árbol Privado (getPesoBMas)__

```java
/**
 * Metodo de tipo privado que permite conocer el numero de elemento del Arbol B+. <br>
 * <b>post: </b> Se retorno el numero de elementos en el Arbol.<br>
 * @param r Representa la raiz del Arbol, o raiz de subarbol. <br>
 * @return El numero de elementos que contiene el Arbol B+.
 */
private int getPesoBMas(Pagina < T > r) {
        1     1
    int cant = 0;
                    1             1
    while (r.getApuntadores()[0] != null) {
           1          1
        r = r.getApuntadores()[0];
    }
              1
    while (r != null) {
              1      1
        cant += r.getCont();
          1           1                1
        r = r.getApuntadores()[super.getM()];
    }
          1
    return (cant);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 2 + n(2) + 2 + 1 + n(2 + 3) + 1 + 1$

  $T({n}) = 7n + 9$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __20. Obtener Altura Árbol (getAltura)__

```java
/**
 * Metodo que permite obtener la altura del Arbol B+. <br>
 * <b>post: </b> Se retorno la altura del Arbol B+.<br>
 * @return Un entero con la altura del Arbol B+.
 */
@Override
public int getAltura() {
        1             KTE
    return (super.getAltura());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Listar Información Lista VSAM (listar_vsam)__

```java
/**
 * Metodo que permite listar la informacion de la Lista VSAM del Arbol B+. <br>
 * @return Una cadena con la informacion de la lista VSAM. <br>
 */
public String listar_vsam() {
        1       (n^{2}(KTE) + 8n + 6)
    return (`22¬listar_vsam(this.vsam)`);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + (n^{2}(KTE) + 8n + 6)$

  $T({n}) = n^{2}(KTE) + 8n + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __22. Listar Información Lista VSAM Página (listar_vsam)__

```java
/**
 * etodo que permite listar la informacion de la Lista VSAM del Arbol B+. <br>
 * @param vsam Pagina que representa el comienzo de la lista VSAM.
 * @return Una cadena con la informacion de la lista VSAM. <br>
 */
public String listar_vsam(Pagina vsam) {
            1  1
    String msg = "";
       1
    int i;
                1
    while (vsam != null) {
          1
        i = 0;
                 1          1
        while (i < vsam.getCont())
                 1          1       2      KTE    1
            msg += vsam.getInfo()[i++].toString() + "-->";
             1             1                 1
        vsam = vsam.getApuntadores()[super.getM()];
    }
         1
    return msg;
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 1 + n(1 + 2 + n(5 + KTE) + 2 + 3) + 1 + 1$

  $T({n}) = n^{2}(KTE) + 8n + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __23. Imprimir Árbol (imprime)__

```java
/**
 * Metodo que permite imprimir el arbol B+. <br>
 * <b>post: </b> Se imprimio los datos que contiene el arbol. <br>
 * @return Una cadena con la informacion del Arbol B+.
 */
@Override
public String imprime() {
        1           KTE
    return (super.imprime());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __24. Clonar Árbol (clonar)__

```java
/**
 * Metodo que permite clonar la informacion de un Arbol B+. <br>
 * @return Un nuevo Arbol B+ con la informacion duplicada del Arbol.
 */
@Override
public ArbolBMas < T > clonar() {
         1                1         1                  1
    ArbolBMas < T > clon = new ArbolBMas < T > (this.getN());
                 1       1
    if (super.getRaiz() == null)
        //Mejor de los casos
              1
        return (clon);
            1       (1T(n/2) + O(n))   1
    clon.setRaiz(`25¬clonar(super.getRaiz())`);
          1
    return (clon);
}
```

* ### __Costo Operacional__

  $T({n}) = 4 + 2 + 2 + (1T(\frac{n}{2}) + O(n)) + 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n) + 9$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __25. Clonar Árbol Privado (clonar)__

```java
private Pagina clonar(Pagina r) {
           1
    if (r == null)
        //Mejor de los casos
              1
        return (null);
    else {
        //Peor de los casos
                 1            1         1
        T info[] = (T[]) new Object[r.getM()];
              1    1      1        1      2  
        for (int i = 0; i < r.getCont(); i++) {
                    1           1
            info[i] = (T) r.getInfo()[i];
        }
              1     1         1      1
        Pagina aux = new Pagina(r.getN());
                1
        aux.setInfo(info);
                1         1
        aux.setCont(r.getCont());
               1    1     1         1      1    2
        for (int i = 0; i < aux.getCont() + 1; i++) {
                       1            1 //Llamado Recursivo 1
            aux.getApuntadores()[i] = clonar(r.getApuntadores()[i]);
        }
             1
        return (aux);
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 3 + 4 + n(2) + 4 + 4 + 1 + 2 + 4 + n(2) + 4 + 1$

  $({A}) = 1$

  $({B}) = 2$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{2}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_2(1) = 0$

  $Big O = O({n^{1}})$

  $Big O = O({n})$

***

## __26. Limpiar Árbol (limpiarBMas)__

```java
/**
 * Metodo que permite limpiar la informacion de Arbol B+. <br>
 */
public void limpiarBMas() {
             KTE
    super.setRaiz(null);
              1          KTE
    this.vsam = super.getRaiz();
}
```

* ### __Costo Operacional__

  $T({n}) = KTE + 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***
