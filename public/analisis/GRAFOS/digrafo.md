# __COSTO OPERACIONAL Y COMPLEJIDAD (Digrafo)__

[CODIGO FUENTE (Digrafo)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/Digrafo.java)


Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

***

## __1. Metodo Constructor que inicializa el Listado de Vertices y Aristas (Digrafo)__

```java
/**
 * Metodo constructor del Digrafo que inicializa el Listado de Vertices y Aristas. <br>
 * <b> post: </b> Se creo un nuevo Digrafo sin Vertices y Aristas.
 */
public Digrafo() {
                  1  1
    this.vertices = new ListaCD < Vertice > ();
                  1  1
    this.aristas = new ListaCD < Arista > ();
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Conocer el listado de Vertices del Grafo (getVertices)__

```java
/**
 * Metodo que permite conocer el listado de Vertices del Grafo. <br>
 * <b> post: </b> Se retorno el listado de Vertices del Grafo. <br>
 * @return Una ListaCD con el conjunto de Vertices del Grafo.
 */
public ListaCD < Vertice > getVertices() {
      1
    return vertices;
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __3. Conocer el listado de Aristas del Grafo (getAristas)__

```java
/**
 * Metodo que permite conocer el listado de Aristas del Grafo. <br>
 * <b> post: </b> Se retorno el listado de Aristas del Grafo. <br>
 * @return Una ListaCD con el conjunto de Aristas del Grafo.
 */
public ListaCD < Arista > getAristas() {
       1
    return aristas;
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __4. Editar el listado de Vertices del Grafo (setVertices)__

```java
/**
 * Metodo que permite editar el listado de Vertices del Grafo. <br>
 * <b> post: </b> Se edito el listado de Vertices del Grafo. <br>
 * @param l Representa el nuevo listado de Vertices a reemplazar.
 */
public void setVertices(ListaCD < Vertice > l) {
                  1
    this.vertices = l;
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __5. Editar el listado de Aristas del Grafo (setAristas)__

```java
/**
 * Metodo que permite editar el listado de Aristas del Grafo. <br>
 * <b> post: </b> Se edito el listado de Aristas del Grafo. <br>
 * @param l Representa el nuevo listado de Aristas a reemplazar.
 */
public void setAristas(ListaCD < Arista > l) {
                 1
    this.aristas = l;
}
```

* ### __Costo Operacional__

  $T({n}) =  1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __6. Insertar un nuevo Vertice dentro en el listado del Grafo (insertarVertice)__

```java
/**
 * Metodo que permite insertar un nuevo Vertice dentro en el listado del Grafo. <br>
 * <b> post: </b> Se inserto un Vertice dentro del Grafo. <br>
 * @param info Representa la informacion del Vertice que se desea ingresar al Grafo. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarVertice(T info) {
       1      1  1
    Vertice v = new Vertice(info);
         1  3n + 5
    if (`13¬esta(v)`)
           1
        return (false);
                 KTE
    this.vertices.insertarAlFinal(v);
       1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 3n + 5 + KTE + 1$

  $T({n}) =  3n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __7. Insertar una nueva Arista en el Listado del Grafo (insertarArista)__

```java
/**
 * Metodo que permite insertar una nueva Arista en el Listado del Grafo. <br>
 * <b> post: </b> Se inserto una nueva Arista dentro del Listado del Grafo. <br>
 * @param orig Representa el Vertice origen de la Arista del Grafo. <br>
 * @param dest Representa el Vertice destino de la Arista del Grafo. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarArista(T orig, T dest) {
       1            1         4n + 6
    Vertice < T > o = `11¬this.buscarVertice(orig)`;
       1            1         4n + 6
    Vertice < T > d = `11¬this.buscarVertice(dest)`;
          1       1     1
    if (o == null || d == null)
          1
        return (false);
     KTE
    o.insertarVecino(d);
                KTE               1
    this.aristas.insertarAlFinal(new Arista < T > (o, d, -1));
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + KTE + KTE + 1 + 1$

  $T({n}) =  8n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __8. Insertar una nueva Arista con peso en el Listado del Grafo (insertarAristaP)__

```java
/**
 * Metodo que permite insertar una nueva Arista con peso en el Listado del Grafo. <br>
 * <b> post: </b> Se inserto una nueva Arista dentro del Listado del Grafo. <br>
 * @param orig Representa el Vertice origen de la Arista del Grafo. <br>
 * @param dest Representa el Vertice destino de la Arista del Grafo. <br>
 * @param peso Representa el peso de la Arista que se desea ingresar. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarAristaP(T orig, T dest, int peso) {
       1            1      4n + 6
    Vertice < T > o = `11¬this.buscarVertice(orig)`;
       1            1      4n + 6
    Vertice < T > d = `11¬this.buscarVertice(dest)`;
           1       1    1      1       1
    if (o == null || d == null || peso < 0)
           1
        return (false);
     KTE
    o.insertarVecino(d);
                KTE               1
    this.aristas.insertarAlFinal(new Arista < T > (o, d, peso));
       1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + 1 + KTE + KTE + 1 + 1$

  $T({n}) =  8n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Eliminar un Vertice del listado del Grafo (eliminarVertice)__

```java
/**
 * Metodo que permite eliminar un Vertice del listado del Grafo; Se eliminan tambien sus relaciones. <br>
 * <b> post: </b> Se elimino el Vertice del grafo, incluso sus relaciones en el mismo. <br>
 * @param info Representa la informacion del Vertice que se desea eliminar. <br>
 */
public void eliminarVertice(T info) {
       1                     1  1
    ListaCD < Vertice > vaux = new ListaCD < Vertice > ();
       1                     1  1
    ListaCD < Arista > aaux = new ListaCD < Arista > ();
       1      1        4n + 6
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
           1
        return;
    //Eliminar todos los vertices
            1
    for (Arista a: this.aristas) {
         1  1  1       2          1  1   1          2 
        if (!a.getVertA().equals(v) && !a.getVertB().equals(v))
                KTE
            aaux.insertarAlFinal(a);
    }
    //Actualizado el listado de aristas
                 1
    this.aristas = aaux;
           1
    for (Vertice vert: this.vertices) {
          1 1    2
        if (!vert.equals(v))
                KTE
            vaux.insertarAlFinal(vert);
        else
                KTE
            vert.eliminarVecino(v);
    }
    //Actualizo el listado de Vertices
                  1
    this.vertices = vaux;
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + 1 + n(1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 + KTE) + 1 + 1 + KTE + 2 + 1 + 1 + KTE + 2 + 1 + 1 + n(1 + 1 + 2 + KTE) + 1 + 1 + 2 + 1$

  $T({n}) =  8 + 4n + 8 + n(KTE) + KTE + n(KTE) + 5$

  $T({n}) =  4n + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Eliminar una Arista dentro del Grafo (eliminarArista)__

```java
/**
 * Metodo que permite eliminar una Arista dentro del Grafo. <br>
 * <b> post: </b> Se elimino la Arista del Grafo. <br>
 * @param orig Representa la informacion del Vertice origen de la Arista. <br>
 * @param dest Representa la informacion del Vertice destino de la Arista. <br>
 * @return  
 */
public boolean eliminarArista(T orig, T dest) {
       1                    1  1
    ListaCD < Arista > aaux = new ListaCD < Arista > ();
       1       1       4n + 6
    Vertice v1 = `11¬this.buscarVertice(orig)`;
       1       1       4n + 6
    Vertice v2 = `11¬this.buscarVertice(dest)`;
           1        1    1
    if (v1 == null || v2 == null)
           1
        return false;
    //Eliminar todos los vertices
            1
    for (Arista a: this.aristas) {
            1         1  1
        Vertice vOrig = a.getVertA();
            1         1  1
        Vertice vDest = a.getVertB();
            1      1      2            1      2
        boolean es = vOrig.equals(v1) && vDest.equals(v2);
             2
        if (!es)
                KTE
            aaux.insertarAlFinal(a);
        else {
              KTE
            v1.eliminarVecino(v2);
        }
    }
                 1
    this.aristas = aaux;
       1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1+ n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 2 + 2 + KTE) + 1 + 1$

  $T({n}) = 5 + 4n + 8 + 4n + 10 + n(KTE) + 2$

  $T({n}) = 8n + n(KTE) + 25$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __11. Buscar un Vertice dentro del listado de Vertices en el Grafo (buscarVertice)__

```java
/**
 * Metodo que permite buscar un Vertice dentro del listado de Vertices en el Grafo. <br>
 * <b> post: </b> Se retorno el Vertice consultado dentro del Listado. <br>
 * @param info Representa la informacion del Vertice consultado. <br>
 * @return Un Objeto de tipo Vertice que representa el Vertice consultado. <br>
 */
public Vertice buscarVertice(T info) {
            1
    for (Vertice v: this.vertices) {
         1   1         2
        if (v.getInfo().equals(info))
              1
            return (v);
    }
       1
    return (null);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 1 + 2) + 1 + 1 + 2 + 1$

  $T({n}) =  4n + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __12. Buscar una Arista dentro del listado de Aristas en el Grafo (buscarArista)__

```java
/**
 * Metodo que permite buscar una Arista dentro del listado de Aristas en el Grafo. <br>
 * <b> post: </b> Se retorno la Arista consultada dentro del Listado. <br>
 * @param info1 Representa la informacion del Vertice en un extremo de la Arista. <br>
 * @param info2 Representa la informacion del Vertice en un extremo de la Arista. <br>
 * @return Un Objeto de tipo Arista que representa la Arista consultada. <br>
 */
public Arista buscarArista(T info1, T info2) {
            1
    for (Arista a: this.aristas) {
         1   2         1          1                   1                  
        if (a.equalsD(new Arista(new Vertice(info1), new Vertice(info2), -1)))
              1
            return (a);
    }
      1
    return (null);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 2 + 1 + 1 + 1 ) + 1 + 2 + 1 + 1 + 1 + 1$

  $T({n}) =  6n + 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __13. Evaluar la existencia de un Vertice dentro del Grafo (esta)__

```java
/**
 * Metodo que permite evaluar la existencia de un Vertice dentro del Grafo. <br>
 * <b> post: </b> Se evaluo la existencia de un Vertice dentro del Grafo. <br>
 * @param x Representa el Vertice que se desea consultar. <br>
 * @return Un Objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean esta(Vertice x) {
            1
    for (Vertice v: this.vertices) {
         1   2
        if (v.equals(x))
              1
            return (true);
    }
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 2) + 1 + 2 + 1$

  $T({n}) =  3n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __14. Conocer la matriz de adyacencia del Grafo (getMatrizAdyacencia)__

```java
/**
 * Metodo que permite conocer la matriz de adyacencia del Grafo, que es una de sus representaciones; <br>
 * La primera fila y columna de la matriz representan la informacion de los Vertices, por lo que no posee valores. <br>
 * <b> post: </b> Se retorno la representacion de la matriz de adyacencia del Grafo. <br>
 * @return Una matriz de Object con la representacion del Grafo en su matriz de Adyacencia.
 */
public Object[][] getMatrizAdyacencia() {
       1         1  1                      1             1                 1             1
    Object m[][] = new Object[this.vertices.getTamanio() + 1][this.vertices.getTamanio() + 1];
    //Coloco los datos
     1    1
    int k = 1;
            1 
    for (Vertice v: this.vertices) {
                1  1         1
        m[0][k] = v.getInfo().toString();
                  1  1         1
        m[k++][0] = v.getInfo().toString();
    }
          1    1      1               2
    for (int i = 1; i < m[0].length; i++)
              1    1      1            2
        for (int j = 1; j < m.length; j++)
                    1
            m[i][j] = 0;
    //Creo la relacion entre los vertices
            1
    m[0][0] = 0;
            1 
    for (Arista a: this.aristas) {
         1    1         1           1            1
        int i = vertices.getIndice(a.getVertA()) + 1;
         1    1         1           1            1
        int j = vertices.getIndice(a.getVertB()) + 1;
                1       1             1
        m[i][j] = ((Integer) m[i][j]) + 1;
    }
       1
    return (m);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n( 1 + 1 + 1 + 1 + 1 + 1) + 1 + 1 + 1 + n(1 + 1 + 1 + n(1 + 2 + 1) + 2 + 1 + 2 + 1) + 2 + 1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1) + 1$

  $T({n}) =  10 + n(6) + 3 + n(3 + n(4) + 6) + 5 + n(13) + 1$

  $T({n}) =  n(6) + n(n(4) + 9) + n(13) + 19$

  $T({n}) =  4n^2 + 28n + 19$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __15. Conocer la Lista de Adyacencia de Grafo (getListaAdyacencia)__

```java
/**
 * Metodo que permite conocer la Lista de Adyacencia de Grafo; Es una mas de sus representacione; <br>
 * Se ha implementado de manera que se represente atravez de un Arreglo de ListasCD de Vertices. <br>
 * <b> post: </b> Se retorno la lista de Adyacencias del Grafo. <br>
 * @return Un Objecto de tipo Array de Listas (ListaCD[]) que representa el grado como Lista de Adyacencias.
 */
public ListaCD[] getListaAdyacencia() {
       1          1  1                       1
    ListaCD lad[] = new ListaCD[this.vertices.getTamanio()];
     1    1
    int i = 0;
             1              1
    while (i < this.vertices.getTamanio()) {
           1      1              1
        Vertice v = this.vertices.get(i);
         1    1
        int j = 0;
           1                       1  1
        ListaCD < Vertice < T >> l = new ListaCD < Vertice < T >> ();
         KTE
        l.insertarAlFinal(v);
                 1   1           1
        while (j < v.getVecinos().getTamanio()) {
             KTE                                1            1     2
            l.insertarAlFinal((Vertice < T > ) v.getVecinos().get(j++));
        }
             2   1
        lad[i++] = l;
    }
      1
    return (lad);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1+ n( 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + 1 + n(KTE + 1 + 1 + 2 + 1 + 1 + 1) + 1 + 1 + 1 + 2 + 1 + 1 + 1) + 1 + 1 + 1$

  $T({n}) =  8 + n( KTE + n(KTE) + 8) + 3$

  $T({n}) =  n^2(KTE) + n(KTE) + 11$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __16. Conocer la Matriz de Incidencia del Grafo (getMatrizIncidencia)__

```java
/**
 * Metodo que permite conocer la Matriz de Incidencia del Grafo; Otra de sus representaciones; <br>
 * La primera fila y columna representan la informacion de los Vertices y Aristas, debe tenerse en cuenta. <br>
 * <b> post: </b> Se retorno el Grafo representado por su matriz de Incidencia. <br>
 * @return Una matriz de Object con la representacion del Grafo en su matriz de Incidencia.
 */
public Object[][] getMatrizIncidencia() {
       1         1  1                      1             1                1             1
    Object m[][] = new Object[this.vertices.getTamanio() + 1][this.aristas.getTamanio() + 1];
    //Coloco los datos de los vertices
     1    1
    int k = 1;
            1
    for (Vertice v: this.vertices) {
           2      1   1        1
        m[k++][0] = v.getInfo().toString();
    }
      1
    k = 1;
    //Coloco el peso de las aristas
           1
    for (Arista a: this.aristas) {
                1     1
        m[0][k] = "e" + k;
         2
        k++;
    }
          1    1      1            2
    for (int i = 1; i < m.length; i++)
              1    1      1               2
        for (int j = 1; j < m[0].length; j++)
                    1
            m[i][j] = 0;
    //Creo la relacion entre los vertices
            1
    m[0][0] = 0;
      1
    k = 1;
            1
    for (Arista a: this.aristas) {
         1    1         1           1            1
        int i = vertices.getIndice(a.getVertA()) + 1;
         1    1         1           1            1
        int j = vertices.getIndice(a.getVertB()) + 1;
               1
        if (i == j)
                  2   1
            m[i][k++] = 2;
        else {
                    1
            m[i][k] = 1;
                  2   1
            m[j][k++] = -1;
        }
    }
      1
    return (m);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(2 + 1 + 1 + 1) + 1 + 1 + n(1 + 1 + 2) + 1 + 1 + 1 + n(1 + 1 + 1+ n(1 + 2 + 1) + 2 + 1) + 2 + 1 + 1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1) + 1$

  $T({n}) =  10 + n(5) + 2 + n(4) + 3 + n(3 + n(4) +3) + 6 + n(15) + 1$

  $T({n}) =  4n^2 + 33n + 22$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$
  
***

## __17. Evaluar si el Grafo es un Multigrado (esMultigrafo)__

```java
/**
 * Metodo que permite evaluar si el Grafo es un Multigrado; es decir, si existen mas de <br>
 * una relacion entre dos Vertices A y B. <br>
 * <b> post: </b> Se evaluo si el Grafo creado es un Multigrafo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esMultigrafo() {
       1         1       4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
          1    1      1               2
    for (int i = 1; i < m[0].length; i++) {
              1    1      1            2
        for (int j = 1; j < m.length; j++) {
                   1    1      1              1
            if (i != j && ((Integer) m[i][j]) > 1)
                   1
                return (true);
        }
    }
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + n(1 + 1 + 1 + n(1 + 1 + 1 + 1 + 2 + 1) + 2 + 1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) =  4n^2 + 28n + 24 + n(n(7) + 9) + 4$

  $T({n}) =  11n^2 + 37n + 28$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __18. Evaluar si el Grafo es un PseudoGrafo (esPseudoGrafo)__

```java
/**
 * Metodo que permite evaluar si el Grafo es un PseudoGrafo; es decir, si existe una<br>
 * relacion entre el mismo Vertice. <br>
 * <b> post: </b> Se evaluo si el Grafo creado es un Pseudografo.<br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esPseudoGrafo() {
       1         1         4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
     1    1
    int i = 0;
             1
    while (i < m.length) {
                1            2     1
        if (((Integer) m[i][i++]) != 0)
               1
            return (true);
    }
       1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + n(1 + 2 + 1 + 1) + 1 + 1$

  $T({n}) =  4n^2 + 28n + 24 + n(5) + 2$

  $T({n}) =  4n^2 + 33n + 26$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __19. Conocer si un Grafo evaluado es SImple (esDigrafoSimple)__

```java
/**
 * Metodo que permite conocer si un Grafo evaluado es SImple; Un Grafo es simple cuando <br>
 * No es un Pseudografo ni un Multigrafo. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Simple. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esDigrafoSimple() {
      1           11n^2 + 37n + 28     1        4n^2 + 33n + 26
    return (`17¬!this.esMultigrafo()` && `18¬!this.esPseudoGrafo()`);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 11n^2 + 37n + 28 + 1 + 4n^2 + 33n + 26$

  $T({n}) =  15n^2 + 70n + 56$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __20. Conocer si un Grafo es Ponderado (esGrafoPonderado)__

```java
/**
 * Metodo que permite conocer si un Grafo es Ponderado; Un Grafo es ponderado cuando <br>
 * sus Aristas poseen un valor que representa costos, tiempos, distancias. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Ponderado. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoPonderado() {
            1
    for (Arista a: this.aristas) {
              1          1
        if (a.getPeso() == -1)
              1
            return (false);
    }
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 1) + 1$

  $T({n}) =  2n + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __21. Conocer si un Grafo es Nulo (esGrafoNulo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Nulo; Un Grafo es Nulo cuando <br>
 * posee una cantidad de Vertices que no se encuentran relacionados NINGUNO, Para el caso <br>
 * se dice que el Arbol es N(n), donde n es el numero de Vertices.
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo NUlo. <br>
 * @return Un objeto de int con el numero de vertices NULOS, o -1 si no es NULO
 */
public int esGrafoNulo() {
     1  1            KTE
    if (!this.aristas.esVacia())
          1
        return (-1);
      1                  1
    return (this.vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + KTE + 1 + 1$

  $T({n}) =  KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __22. Conocer el listado de Vertices del Grafo (esConexo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Conexo; Un Grafo es conexo cuando <br>
 * se puede acceder a cada uno de sus vertices de alguna forma. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Conexo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esConexo() {
          n + 1
    `25¬this.limpiaVisitasV()`;
       1
    boolean x;
       1      1              1
    Vertice v = this.vertices.get(0);
     1
    v.setVisit(true);
      T(n/2)+O(1)
    `23¬this.visitarVecinos(v)`;
      1      3n + 2
    x = `24¬this.visitadosTodos()`;
          n + 1
    `25¬this.limpiaVisitasV()`;
      1
    return (x);
}
```

* ### __Costo Operacional__

  $T({n}) =  n + 1 + 1 + 1 + 1 + 1 + 1 + T(n/2)+O(1) + 1 + 3n + 2n + 1`$

  $T({n}) =  T(n/2)+O(1) + 6n + 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __23. Metodo privado: Visitar los Vecinos de un Vertice y marcalos como visitados (visitarVecinos)__

```java
/**
 * Metodo de tipo privado que permite visitar los Vecinos de un Vertice y marcalos como visitados. <br>
 * @param v Representa el Vertice del cual se quieren visitar sus vecinos. <br>
 */
private void visitarVecinos(Vertice v) {
       1      1  1
    ListaCD l = v.getVecinos();
           1
    for (Object obj: l) {
           1       1 
        Vertice v2 = (Vertice) obj;
           1      4n + 6             1    1
        v2 = `11¬this.buscarVertice((T) v2.getInfo())`;
               1        1  1 1
        if (v2 != null && !v2.getVisit()) {
              1
            v2.setVisit(true);
             1       3n + 2   
            if (`24¬this.visitadosTodos()`)
                   1
                return;
            //llamado recursivo
            this.visitarVecinos(v2);
        }
    }
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __24. Metodo privado: Permite evaluar si todos los vertices del Grafo han sido visitados (visitadosTodos)__

```java
/**
 * Metodo de tipo privado que permite evaluar si todos los vertices del Grafo han sido visitados. <br>
 * @return Un objeto de tipo boolean qeu es true= si ha visitado todos los Vertices en el recorrido.
 */
private boolean visitadosTodos() {
            1
    for (Vertice v: this.vertices)
        1   1 1
        if (!v.getVisit())
              1
            return (false);
       1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 1 + 1) + 1$

  $T({n}) =  3n + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __25. Metodo privado: Permite limpiar la visita de los Vertices dentro de un recorrido (limpiaVisitasV)__

```java
/**
 * Metodo de tipo privado que permite limpiar la visita de los Vertices dentro de un recorrido. <br>
 */
private void limpiaVisitasV() {
            1
    for (Vertice v: this.vertices)
         1
        v.setVisit(false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1)$

  $T({n}) =  n + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __26. Metodo privado: Permite limpiar la visita de las Aristas dentro de un recorrido (limpiaVisitasA)__

```java
/**
 * Metodo de tipo privado que permite limpiar la visita de las Aristas dentro de un recorrido. <br>
 */
private void limpiaVisitasA() {
            1
    for (Arista a: this.aristas)
         1
        a.setVisit(false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1)$

  $T({n}) =  n + 1$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __27. Conocer si un Grafo es Fuertemente Conexo (esFuertementeConexo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Fuertemente Conexo; Un Grafo es Fuertemente conexo cuando <br>
 * se puede acceder a cada uno de sus vertices desde cada uno de ellos. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Fuertemente Conexo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esFuertementeConexo() {
            1
    for (Vertice v1: this.vertices) {
                1
        for (Vertice v2: this.vertices) {
             1  1  2           1  1 nT(n/n)+O(n) + 10n + 24  1    1            1    1  
            if (!v1.equals(v2) && !`44¬this.existeRutaEntre((T) v1.getInfo(), (T) v2.getInfo())`)
                   1
                return (false);
        }
    }
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  n + 1 + 1 + 1 + 2 + 1 + 1 + nT(n/n)+O(n) + 10n + 24 + 1 + 1 + 1 + 1 + 1$

  $T({n}) =  nT(n/n)+O(n) + 11n + 36$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __28. Conocer si un Grafo es Regular (esGrafoRegular)__

```java
/**
 * Metodo que permite conocer si un Grafo es Regular; Un Grafo es Regular cuando <br>
 * el grado de todos sus vertices el mismo. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Regular. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoRegular() {
           11n^2 + 37n + 28       1        4n^2 + 33n + 26
    if (`17¬this.esMultigrafo()` || `18¬this.esPseudoGrafo()`)
          1
        return (false);
     1        1
    int grado = -2;
            1
    for (Vertice v: this.vertices) {
                  1
        if (grado == -2)
                  1    4n^2 + 38n + 39            1   1            1    4n^2 + 38n + 39           1   1
            grado = `66¬this.getGradoEntradaVert((T) v.getInfo())` + `65¬this.getGradoSalidaVert((T) v.getInfo())`;
         1        1      4n^2 + 38n + 39            1   1            1    4n^2 + 38n + 39           1   1
        if (grado != (`66¬this.getGradoEntradaVert((T) v.getInfo())` + `65¬this.getGradoSalidaVert((T) v.getInfo())`))
               1
            return (false);
    }
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  11n^2 + 37n + 28 + 1 + 4n^2 + 33n + 26 + 1 + 1 + 1 + n(1+ 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1) + 1$

  $T({n}) =  11n^2 + 37n + 29 + 4n^2 + 33n + 29 + n(16n^2 + 152n + 169) + 1$

  $T({n}) =  16n^3 + 167n^2 + 239n + 59$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^3})$

***

## __29. Conocer si un Grafo es Completo (esCompleto)__

```java
/**
 * Metodo que permite conocer si un Grafo es Completo; Un Grafo es Completo cuando <br>
 * se posee una (y sola una) Arista entre cada uno de los Vertices del Grafo, se representa por K(n). <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Completo. <br>
 * @return Un objeto de tipo int con el Numero de vertices del Grafo completo o -1 si no lo es.
 */
public int esCompleto() {
       1         1      4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
          1    1      1               2
    for (int i = 1; i < m[0].length; i++) {
              1    1      1            2
        for (int j = 1; j < m.length; j++) {
                   1    1       1              1     1     1    1      1               1
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) != 1))
                   1
                return (-1);
        }
    }
      1             1
    return (vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + n(1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1) + 2 + 1 + 2 + 1) + 2 + 1 + 1 + 1$

  $T({n}) =  4n^2 + 28n + 24 + n(3 + n(12) + 6) + 5$

  $T({n}) =  16n^2 + 37n + 29$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __30. Conocer si un Grafo Dirigido es Simetrico (esSimetrico)__

```java
/**
 * Metodo que permite conocer si un Grafo Dirigido es Simetrico; Un Digrafo es Simetrico cuando <br>
 * existe una Arista entre cada unos de sus vertices y en ambos sentidos; Ej: A->B, B->A. <br>
 * <b>post:</b> Se evaluo si el Digrafo creado es un Grafo Simetrico. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esSimetrico() {
       1         1    4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
          1    1      1               2
    for (int i = 1; i < m[0].length; i++) {
              1    1      1             2
        for (int j = 1; j < m.length; j++) {
                    1    1     1                1    1     1     1     1               1 
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) != (Integer) m[j][i]))
                   1
                return (false);
        }
    }
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + n(1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1) + 2 + 1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) =  4n^2 + 28n + 24 + n(3 + n(12) + 6) + 4$

  $T({n}) =  16n^2 + 37n + 28$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __31. Conocer si un Grafo es un Ciclo (esGrafoCiclo)__

```java
/**
 * Metodo que permite conocer si un Grafo es un Ciclo; Un Grafo es un ciclo cuando <br>
 * sus Vertices y Aristas forman un figura que se asemeja a un polígono de n lados; <br>
 * Se representa con C(n) donde n es el numero de Vertices. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Ciclico. <br>
 * @return Un Objeto de tipo int que representa el numero de Vertices o -1 si no es ciclo.
 */
public int esGrafoCiclo() {
     1    1              1
    int c = this.vertices.getTamanio();
          1    1    1             1
    if (c < 3 || c != this.aristas.getTamanio())
          1
        return (-1);
        1        1      4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
          1    1      1                2
    for (int i = 1; i < m[0].length; i++) {
              1    1      1             2
        for (int j = 1; j < m.length; j++) {
            //si es pseudografo o es multigrafo
                    1    1      1              1      1     1    1     1               1
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) > 1))
                   1 
                return (-1);
                     4n^2 + 38n + 39     1          1      1   1            1     1
            if (`66¬getGradoEntradaVert((T) vertices.get(j - 1).getInfo())` != 1 ||
                    4n^2 + 38n + 39     1          1      1   1             1
                `65¬getGradoSalidaVert((T) vertices.get(j - 1).getInfo())` != 1) {
                   1
                return (-1);
            }
        }
    }
       1
    return (c);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + n(1 + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 1 + 1 + 2 + 1) + 2 + 1 + 2 + 1) + 2 + 1 + 1$

  $T({n}) =  4n^2 + 28n + n(n(4n^2 + 38n + 4n^2 + 38n + 101) + 9) + 35$

  $T({n}) =  8n^4 + 76n^3 + 105n^2 + 37n + 35$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^K})$

***

////////////////////////////////////////////////////////////
// Digrafo - Recorrido para Grafos Conexos /////////////////
////////////////////////////////////////////////////////////

## __32. Conocer si un Grafo es GrafoHamiltoniano (esGrafoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoHamiltoniano, es decir, represente un circuito Hamiltoniano; <br>
 * Un Grafo es Hamiltoniano si existe  una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Hamiltoniano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoHamiltoniano() {
                     1             1
    if (this.vertices.getTamanio() < 3)
           1
        return (false);
      1     1    nT(n/n)+O(n) + 2n + KTE    KTE
    return (!`32¬this.getCicloHamiltoniano()`.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + nT(n/n)+O(n) + 2n + KTE + KTE$

  $T({n}) =  nT(n/n)+O(n) + 2n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __33. Conocer si un Grafo es GrafoHamiltoniano (getCicloHamiltoniano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoHamiltoniano, es decir, represente un circuito Hamiltoniano; <br>
 * Un Grafo es Hamiltoniano si existe  una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se retorno el Ciclo Hamiltoniano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el recorrido del Grafo Hamiltoniano.
 */
public ListaCD < Vertice > getCicloHamiltoniano() {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
       1      1              1
    Vertice v = this.vertices.get(0);
          n + 1
    `25¬this.limpiaVisitasV()`;
     KTE
    l.insertarAlInicio(v);
     1  1    nT(n/n)+O(n)
    if (!`34¬getCHamiltoniano(v, l, v)`)
         KTE        1             1
        l.eliminar(l.getTamanio() - 1);
    else
         KTE
        l.insertarAlFinal(v);
          n + 1
    `25¬this.limpiaVisitasV()`;
       1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + 1 + 1 + n + 1 + KTE + 1 + 1 + nT(n/n)+O(n) + KTE + n + 1 + 1$

  $T({n}) =  nT(n/n)+O(n) + 2n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __34. Metodo privado: Generar el recorrido del Arbol Hamiltoniano (getCHamiltoniano)__

```java
/**
 * Metodo de tipo privado que permite generar el recorrido del Arbol Hamiltoniano. <br>
 * @param v2 Representa el Vertice sobre el cual se encuentra iterando durante el recorrido. <br>
 * @param l Representa la lista donde se almacena el recorrido del Grafo. <br>
 * @param orig Representa el vertics desde el cual comienza el recorrido. <br>
 * @return Un objeto de tipo boolean dependiendo si existe el Grafo Hamiltoniano.
 */
private boolean getCHamiltoniano(Vertice v2, ListaCD < Vertice > l, Vertice orig) {
         1              1         1              1    KTE
    if (l.getTamanio() == vertices.getTamanio() && v2.esAdyacente(orig))
          1
        return (true);
       1      1      4n + 6             1    1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
           1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
         1  1    1
        if (!vert.getVisit()) {
             KTE
            l.insertarAlFinal(vert);
            //llamado recursivo
            if (getCHamiltoniano(vert, l, orig))
                   1
                return (true);
                  KTE        1             1
            else l.eliminar(l.getTamanio() - 1);
        }
    }
     1
    v.setVisit(false);
      1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __35. Conocer si existe un camino Hamiltoniano en el Grafo (hayCaminoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si existe un camino Hamiltoniano en el Grafo; <br>
 * Un camino Hamiltoniano es una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado posee un camino Hamiltoniano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean hayCaminoHamiltoniano() {
      1   n(nT(n/n)+O(n)) + n^2 + n(KTE) + 7  KTE
    return (!`36¬this.getCaminoHamiltoniano()`.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(nT(n/n)+O(n)) + n^2 + n(KTE) + 7 + KTE$

  $T({n}) =  n(nT(n/n)+O(n)) + n^2 + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __36. Conocer si existe un camino Hamiltoniano en el Grafo (getCaminoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si existe un camino Hamiltoniano en el Grafo; <br>
 * Un camino Hamiltoniano es una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se retorno el camino Hamiltoniano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el camino del Grafo Hamiltoniano.
 */
public ListaCD < Vertice > getCaminoHamiltoniano() {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
          n + 1
    `25¬this.limpiaVisitasV()`;
            1
    for (Vertice v: vertices) {
         KTE
        l.insertarAlFinal(v);
         1    nT(n/n)+O(n)
        if (`37¬getCamHamiltoniano(v, l)`)
               1
            return (l);
        else {
             KTE
            l.vaciar();
                  n + 1
            `25¬this.limpiaVisitasV()`;
        }
    }
          n + 1
    `25¬this.limpiaVisitasV()`;
      1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + n + 1 + 1 + n(KTE + nT(n/n)+O(n) + KTE + n + 1) + n + 1 + 1$

  $T({n}) =  n(nT(n/n)+O(n)) + n^2 + n(KTE) + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __37. Conocer si existe un camino Hamiltoniano en el Grafo (getCamHamiltoniano)__

```java
/**
 * Metodo que permite conocer si existe un camino Hamiltoniano en el Grafo; <br>
 * Un camino Hamiltoniano es una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado posee un camino Hamiltoniano. <br>
 * @param v2 Representa el Vertice sobre el cual se esta iterando en el momento del recorrido. <br>
 * @param l Representa el listado donde se almacena el camino Hamiltoniano del Grafo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
private boolean getCamHamiltoniano(Vertice v2, ListaCD < Vertice > l) {
         1             1          1
    if (l.getTamanio() == vertices.getTamanio()) {
          1
        return (true);
    }
        1     1      4n + 6             1    1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
           1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
         1  1    1
        if (!vert.getVisit()) {
             KTE
            l.insertarAlFinal(vert);
            //llamado recursivo
            if (getCamHamiltoniano(vert, l))
                  1
                return (true);
                  KTE        1             1
            else l.eliminar(l.getTamanio() - 1);
        }
    }
     1
    v.setVisit(false);
     1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __38. Conocer si un Grafo es GrafoEuleriano (esGrafoEuleriano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoEuleriano, es decir, representa un circuito Euleriano; <br>
 * Un Grafo es Euleriano si posee un camino que recorre todas las aristas de un grafo tan solo una única vez, <br>
 * comenzando y terminando en el mismo Vertice. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Euleriano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoEuleriano() {
            1
    for (Vertice v: this.vertices) {
         1        1      4n^2 + 38n + 39          1   1            1          4n^2 + 38n + 39     1   1
        int grado = `66¬this.getGradoEntradaVert((T) v.getInfo())` + `65¬this.getGradoSalidaVert((T) v.getInfo())`;
                  1    1
        if (grado % 2 != 0)
               1
            return (false);
    }
      1     1 n^2 + (n) T(n/2)+O(n) + n(KTE) + 6 KTE
    return (!`39¬this.getCicloEuleriano()`.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + n(1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 1) + 1 + 1 + n^2 + (n) T(n/2)+O(n) + n(KTE) + 6 + KTE$

  $T({n}) =  n(4n^2 + 38n + 4n^2 + 38n + 87) + n^2 + (n) T(n/2)+O(n) + n(KTE) + KTE$

  $T({n}) =  8n^3 + 77n^2 + (n) T(n/2)+O(n) + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^3})$

***

## __39. Conocer si un Grafo es GrafoEuleriano (getCicloEuleriano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoEuleriano, es decir, representa un circuito Euleriano; <br>
 * Un Grafo es Euleriano si posee un camino que recorre todas las aristas de un grafo tan solo una única vez, <br>
 * comenzando y terminando en el mismo Vertice. <br>
 * <b>post:</b> Se retorno el ciclo Euleriano del grafo.. <br>
 * @return Un objeto de tipo ListaCD que representa el recorrido del Grafo Euleriano.
 */
public ListaCD < Vertice > getCicloEuleriano() {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
            1
    for (Vertice v: vertices) {
              n + 1
        `26¬this.limpiaVisitasA()`;
         KTE
        l.insertarAlFinal(v);
         1      T(n/2)+O(n)
        if (`40¬getCEuleriano(v, l)`)
              1
            return (l);
        else
             KTE
            l.vaciar();
    }
          n + 1
    `26¬this.limpiaVisitasA()`;
       1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1 + n(n + 1 + KTE + 1 + T(n/2)+O(n) + KTE) + n + 1 + 1$

  $T({n}) =  4 + n(n + T(n/2)+O(n) + KTE) + n + 2$

  $T({n}) =  n^2 + (n) T(n/2)+O(n) + n(KTE) + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __40. Metodo privado: Generar el recorrido del Arbol Euleriano (getCEuleriano)__

```java
/**
 * Metodo de tipo privado que permite generar el recorrido del Arbol Euleriano. <br>
 * @param v2 Representa el Vertice sobre el cual se encuentra iterando durante el recorrido. <br>
 * @param l Representa la lista donde se almacena el recorrido del Grafo. <br>
 * @return Un objeto de tipo boolean dependiendo si existe el Grafo Euleriano.
 */
private boolean getCEuleriano(Vertice v2, ListaCD < Vertice > l) {
       1         1  1
    Vertice orig = l.get(0);
       1      1      4n + 6             1    1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
       1       1      6n + 8            1   1            1      1
    Arista ari = `12¬this.buscarArista((T) v.getInfo(), (T) orig.getInfo())`;
           1
    if (v == null)
          1
        return (false);
         1             1         1             1    KTE                1      1       1  1   1
    if (l.getTamanio() == aristas.getTamanio() && v2.esAdyacente(orig) && ari != null && !ari.getVisit()) {
         KTE
        l.insertarAlFinal(orig);
          1
        return true;
    }
          1          1
    for (Object v3: v.getVecinos()) {
          1          1     1
        Vertice vert = (Vertice) v3;
          1      1      6n + 8            1   1            1      1
        Arista a = `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`;
        //Si la Arista no ha sido visitada.
         1  1  1
        if (!a.getVisit()) {
             1
            a.setVisit(true);
             KTE               1     
            l.insertarAlFinal(a.getVertB());
            //llamado recursivo
                               1
            if (getCEuleriano(a.getVertB(), l))
                  1
                return true;
            else {
                 1
                a.setVisit(false);
                 KTE        1             1
                l.eliminar(l.getTamanio() - 1);
            }
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

  $Big O = O({n})$

***

## __41. Conocer si existe un camino Euleriano en el Grafo (hayCaminoEuleriano)__

```java
/**
 * Metodo que permite conocer si existe un camino Euleriano en el Grafo; <br>
 * Un camino Euleriano posee un camino que recorre todas las aristas de un grafo tan solo una única vez. <br>
 * <b>post:</b> Se retorno el camino Euleriano del grafo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean hayCaminoEuleriano() {
      1         1
    int impares = 0;
          n + 1
    `26¬this.limpiaVisitasA()`;
            1
    for (Vertice v: this.vertices) {
         1        1     4n^2 + 38n + 39           1   1            1    4n^2 + 38n + 39           1   1
        int grado = `66¬this.getGradoEntradaVert((T) v.getInfo())` + `65¬this.getGradoSalidaVert((T) v.getInfo())`;
                  1   1
        if (grado % 2 != 0)
                2
            impares++;
                    1
        if (impares > 2)
               1
            return (false);
    }
                1    1          1
    if (impares != 2 && impares != 0)
           1
        return (false);
       1      1     n(nT(n/n)+O(n)) + n^2 + n(KTE) + 7
    boolean x = `42¬this.getCaminoEuleriano().esVacia()`;
          n + 1
    `26¬this.limpiaVisitasA()`;
      1
    return (!x);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + n + 1 + 1 + n(1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 4n^2 + 38n + 39 + 1 + 1 + 1 + 1 + 2 + 1) + 1 + 1 + 1 + 1 + 1 + n(nT(n/n)+O(n)) + n^2 + n + (KTE) + 7 n + 1 + 1$

  $T({n}) = n(nT(n/n)+O(n)) + 8n^3 + 77n^2 + n(KTE) + 18$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^3})$

***

## __42. Conocer si existe un camino Euleriano en el Grafo (getCaminoEuleriano)__

```java
/**
 * Metodo que permite conocer si existe un camino Euleriano en el Grafo; <br>
 * Un camino Euleriano posee un camino que recorre todas las aristas de un grafo tan solo una única vez. <br>
 * <b>post:</b>  Se retorno el camino Euleriano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el camino del Grafo Euleriano.
 */
public ListaCD < Vertice > getCaminoEuleriano() {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
          n + 1
    `26¬this.limpiaVisitasA()`;
           1
    for (Vertice v: vertices) {
              n + 1
        `26¬this.limpiaVisitasA()`;
         KTE
        l.insertarAlFinal(v);
                nT(n/n)+O(n)
        if (`43¬getCamEuleriano(v, l)`)
              1
            return (l);
              KTE
        else l.vaciar();
    }
          n + 1
    `26¬this.limpiaVisitasA()`;
      1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + n + 1 + 1 + n(n + 1 + KTE + nT(n/n)+O(n) + KTE) + n + 1 + 1$

  $T({n}) = n(nT(n/n)+O(n)) + n^2 + n(KTE) + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __43. Conocer si existe un camino Euleriano en el Grafo (getCamEuleriano)__

```java
/**
 * Metodo que permite conocer si existe un camino Euleriano en el Grafo; <br>
 * Un camino Euleriano posee un camino que recorre todas las aristas de un grafo tan solo una única vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado posee un camino Euleriano. <br>
 * @param v2 Representa el Vertice sobre el cual se esta iterando en el momento del recorrido. <br>
 * @param l Representa el listado donde se almacena el camino Euleriano del Grafo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
private boolean getCamEuleriano(Vertice v2, ListaCD < Vertice > l) {
       1      1      4n + 6             1    1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
          1
    if (v == null)
          1
        return (false);
          1             1    1         1
    if ((l.getTamanio() - 1) == aristas.getTamanio()) {
          1
        return true;
    }
          1          1
    for (Object v3: v.getVecinos()) {
          1          1
        Vertice vert = (Vertice) v3;
          1      1      6n + 8            1   1            1      1
        Arista a = `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`;
        //Si la Arista no ha sido visitada.
         1  1 1 
        if (!a.getVisit()) {
             1
            a.setVisit(true);
             KTE               1
            l.insertarAlFinal(a.getVertB());
              //llamado recursivo 
                                 1
            if (getCamEuleriano(a.getVertB(), l))
                  1
                return true;
            else {
                 1
                a.setVisit(false);
                 KTE        1             1
                l.eliminar(l.getTamanio() - 1);
            }
        }
    }
      1
    return false;
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __44. Evaluar la existencia de un camino entre dos vertices del Grafo Conexo (existeRutaEntre)__

```java
/**
 * Metodo que permite evaluar la existencia de un camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se evaluo la existencia de una ruta entre dos vertices. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo boolean que es true si existe ruta entre los vertices.
 */
public boolean existeRutaEntre(T orig, T dest) {
          n + 1
    `25¬this.limpiaVisitasV()`;
        1      1      4n + 6
    Vertice v1 = `11¬this.buscarVertice(orig)`;
        1      1      4n + 6
    Vertice v2 = `11¬this.buscarVertice(dest)`;
            1      1      1
    if (v1 == null || v2 == null)
           1
        return (false);
       1        1    nT(n/n)+O(n)
    boolean rta = `45¬existeRuta(v1, v2)`;
          n + 1
    `25¬this.limpiaVisitasV()`;
       1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) =  n + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + 1 + nT(n/n)+O(n) + n + 1 + 1$

  $T({n}) =  nT(n/n)+O(n) + 10n + 24$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __45. Metodo privado para evaluar la existencia de un camino entre dos vertices del Grafo Conexo (existeRuta)__

```java
/**
 * Metodo de tipo privado que permite evaluar la existencia de un camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se evaluo la existencia de una ruta entre dos vertices. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo boolean que es true si existe ruta entre los vertices.
 */
private boolean existeRuta(Vertice orig, Vertice dest) {
     1      KTE
    if (orig.esAdyacente(dest))
           1
        return (true);
        1     1      4n + 6             1      1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
           1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
        1   1    1
        if (!vert.getVisit()) {
            //llamada recursiva
             1
            if (existeRuta(vert, dest))
                   1
                return (true);
        }
    }
     1 
    v.setVisit(false);
     1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{C}{\log_n(n)}})$

  $Big O = O({n \log n})$

***

## __46. Devolver el camino entre dos vertices del Grafo Conexo (getRutaEntre)__

```java
/**
 * Metodo que permite devolver el camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return La ruta entre los dos vertices indicados, representados en una Lista.
 */
public ListaCD < Vertice > getRutaEntre(T orig, T dest) {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
          n + 1
    `25¬this.limpiaVisitasV()`;
       1       1      4n + 6
    Vertice v1 = `11¬this.buscarVertice(orig)`;
       1       1      4n + 6
    Vertice v2 = `11¬this.buscarVertice(dest)`;
     1     1       1     1
    if (v1 == null || v2 == null)
           1
        return (l);
     KTE
    l.insertarAlInicio(v1);
     1  1   T(n/2)+O(1)
    if (!`47¬getRuta(v1, v2, l)`)
         KTE        1             1
        l.eliminar(l.getTamanio() - 1);
    else
         KTE
        l.insertarAlFinal(v2);
          n + 1
    `25¬this.limpiaVisitasV()`;
       1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + n + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + KTE + 1 + 1 + T(n/2)+O(1) + KTE + n + 1$

  $T({n}) = 3 + n + 3 + 4n + 8 + 4n + KTE + T(n/2)+O(1) + KTE + n + 1$

  $T({n}) = T(n/2)+O(1) + 10n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __47. Metodo privado: Devolver el camino entre dos vertices del Grafo Conexo (getRuta)__

```java
/**
 * Metodo de tipo privado que permite devolver el camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param l Representa la ruta entre los dos Vertices indicados. <br>
 * @return La ruta entre los dos vertices indicados, representados en una Lista.
 */
private boolean getRuta(Vertice orig, Vertice dest, ListaCD < Vertice > l) {
     1      KTE
    if (orig.esAdyacente(dest))
           1
        return (true);
       1      1      4n + 6             1      1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
           1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
         1  1    1
        if (!vert.getVisit()) {
             KTE
            l.insertarAlFinal(vert);
            //llamado recursivo 
            if (getRuta(vert, dest, l))
                   1
                return (true);
                  KTE        1             1
            else l.eliminar(l.getTamanio() - 1);
        }
    }
     1
    v.setVisit(false);
     1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = 1$

  $({B}) = 2$

  $({C}) =O(n)->1$

  $T({n}) = T(n/2)+O(1)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __48. Conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo (getLongitudDeCamino)__

```java
/**
 * Metodo que permite conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public int getLongitudDeCamino(T orig, T dest) {
     1          1
    int longi[] = {
        0
    };
          n + 1
    `25¬this.limpiaVisitasV()`;
       1       1      4n + 6
    Vertice v1 = `11¬this.buscarVertice(orig)`;
       1       1      4n + 6
    Vertice v2 = `11¬this.buscarVertice(dest)`;
           1       1     1
    if (v1 == null || v2 == null)
           1
        return (-1);
         nT(n/n)+O(n)
    if (!`49¬longitudDeCam(v1, v2, longi)`)
           1
        return (-1);
          n + 1
    `25¬this.limpiaVisitasV()`;
      1
    return (longi[0]);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + n + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + nT(n/n)+O(n) + n + 1 + 1$

  $T({n}) = nT(n/n)+O(n) + 10n + 24$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __49. Conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo (longitudDeCam)__

```java
/**
 * Metodo que permite conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param longi Representa las longitud de camino para cada uno de los Vertices. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
private boolean longitudDeCam(Vertice orig, Vertice dest, int longi[]) {
     1      KTE
    if (orig.esAdyacente(dest)) {
                2
        longi[0]++;
          1
        return (true);
    }
       1      1      4n + 6             1      1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
           1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
            1    1
        if (!vert.getVisit()) {
                    2
            longi[0]++;
            //llamado recursivo
            if (longitudDeCam(vert, dest, longi))
                   1
                return (true);
                         2
            else longi[0]--;
        }
    }
     1
    v.setVisit(false);
     1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __50. Conocer la longitud ponderada de camino entre dos vertices del Grafo Conexo (getLongitudPonderadaDeCamino)__

```java
/**
 * Metodo que permite conocer la longitud ponderada de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public int getLongitudPonderadaDeCamino(T orig, T dest) {
     1  1    2n + 2
    if (!`20¬esGrafoPonderado()`)
           1
        return (-1);
      1         1  
    int longi[] = {
        0
    };
          n + 1
    `25¬this.limpiaVisitasV()`;
        1      1      4n + 6
    Vertice v1 = `11¬this.buscarVertice(orig)`;
        1      1      4n + 6
    Vertice v2 = `11¬this.buscarVertice(dest)`;
           1       1     1
    if (v1 == null || v2 == null)
           1
        return (-1);
     1  1      nT(n/n)+O(n)
    if (!`51¬longitudPondeDeCam(v1, v2, longi)`)
           1
        return (-1);
          n + 1
    `25¬this.limpiaVisitasV()`;
      1
    return (longi[0]);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 2n + 2 + 1 + 1 + n + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + 1 + nT(n/n)+O(n)n + 1 + 1$

  $T({n}) = nT(n/n)+O(n)n + 11n + 30$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __51. Longitud en sumatoria del peso de aristas de camino entre dos vertices del Grafo Conexo (longitudPondeDeCam)__

```java
/**
 * Metodo que permite conocer la longitud en sumatoria del peso de aristas de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param longi Representa las longitud de camino para cada uno de los Vertices. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
private boolean longitudPondeDeCam(Vertice orig, Vertice dest, int longi[]) {
     1      KTE
    if (orig.esAdyacente(dest)) {
                 1     1              1     1           6n + 8            1      1            1      1          1
        longi[0] = (Integer) longi[0] + ((Integer) `12¬this.buscarArista((T) orig.getInfo(), (T) dest.getInfo()).getPeso()`);
           1
        return (true);
    }
       1      1      4n + 6             1      1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
     1     1
    if (v == null)
           1
        return (false);
     1
    v.setVisit(true);
           1         1
    for (Object v3: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v3;
         1  1    1
        if (!vert.getVisit()) {
                     1     1              1     1           6n + 8            1   1            1      1          1
            longi[0] = (Integer) longi[0] + ((Integer) `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo()).getPeso()`);
            //lamado recursivo   
            if (longitudPondeDeCam(vert, dest, longi))
                   1
                return (true);
            else
                         1          1     1           6n + 8            1   1            1      1          1
                longi[0] = longi[0] - ((Integer) `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo()).getPeso()`);
        }
    }
     1
    v.setVisit(false);
     1
    return (false);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __52. Calcular el peso de la ruta minima entre dos Vertices indicados (longRutaMinimaDijkstra)__

```java
/**
 * Metodo que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la longitud de la ruta minima entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param fin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta Minima.
 */
public int longRutaMinimaDijkstra(T ini, T fin) {
     1       8n + 2
    if (`56¬this.hayPesosNegativosONullos()`)
           1
        return (-1);
          n + 1
    `25¬this.limpiaVisitasV()`;
     1           1  1              1
    int costos[] = new int[vertices.getTamanio()];
       1         1      4n + 6
    Vertice vIni = `11¬this.buscarVertice(ini)`;
       1         1      4n + 6
    Vertice vFin = `11¬this.buscarVertice(fin)`;
             1       1       1
    if (vIni == null || vFin == null)
          1
        return (-1);
        1
    vIni.setVisit(true);
           nT(n/n)+O(2)
    `53¬this.dijkstra(vIni, vFin, costos)`;
      1                    1
    return (costos[vertices.getIndice(vFin)]);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __53. Calcular el peso de la ruta minima entre dos Vertices indicados (dijkstra)__

```java
/**
 * Metodo que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la longitud de la ruta minima entre dos Vertices. <br>
 * @param vIni Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param vFin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @param costos Representa los costos minimos de cada vertice en el recorrido. <br>
 */
private void dijkstra(Vertice vIni, Vertice vFin, int costos[]) {
            2
    if (vIni.equals(vFin)) {
          1
        return;
    }
           1           1
    for (Object v: vIni.getVecinos()) {
           1         1    1
        Vertice vert = (Vertice) v;
           1         1      4n + 6             1      1
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
         1    1                1
        int p = costos[vertices.getIndice(vIni)];
         1    1                1
        int c = costos[vertices.getIndice(orig)];
         1          1     1            6n + 8      1      1            1      1          1
        int pesoAri = ((Integer) `12¬buscarArista((T) vIni.getInfo(), (T) orig.getInfo()).getPeso()`);
         1  1    1
        if (!orig.getVisit()) {
                1 
            orig.setVisit(true);
                   1   1    1    1
            if (c == 0 || c > (p + pesoAri)) {
                               1                 1    1
                costos[vertices.getIndice(orig)] = (p + pesoAri);
            }
            //llamado recursivo
            dijkstra(orig, vFin, costos);
                1
            orig.setVisit(false);
        }
    }

}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __54. Metodo privado: Calcular el peso de la ruta minima entre dos Vertices indicados (rutaMinimaDijkstra)__

```java
/**
 * Metodo de tipo privado que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la ruta minima entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param fin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta Minima.
 */
public ListaCD < Vertice > rutaMinimaDijkstra(T ini, T fin) {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
     1       8n + 2
    if (`56¬this.hayPesosNegativosONullos()`)
          1
        return (l);
          n + 1
    `25¬this.limpiaVisitasV()`;
     1           1  1              1
    int costos[] = new int[vertices.getTamanio()];
       1         1      4n + 6
    Vertice vIni = `11¬this.buscarVertice(ini)`;
       1         1      4n + 6
    Vertice vFin = `11¬this.buscarVertice(fin)`;
             1       1       1
    if (vIni == null || vFin == null)
          1
        return (l);
        1
    vIni.setVisit(true);
       nT(n/n)+O(2)
    `55¬this.dijkstra(vIni, vFin, costos, l)`;
    //Aqui deberia hacer el recorrido invertido
         1      4n + 6
    vFin = `11¬this.buscarVertice(fin)`;
                1
    while (vFin != null) {
         KTE
        l.insertarAlInicio(vFin);
             1     1
        vFin = vFin.getPredecesor();
    }     1 + n
    `69¬this.limpiarPredecesores()`;
       1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 8n + 2 + n + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + nT(n/n)+O(2) + 1 + 4n + 6 + 1 + n(KTE + 1 + 1 + 1) + 1 + 1 + n 1$

  $T({n}) = 17n + 31 + nT(n/n)+O(2) + 4n + 8 + n(KTE) + n + 3$

  $T({n}) = nT(n/n)+O(2) + n(KTE) + 42$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __55. Metodo privado: Calcular el peso de la ruta minima entre dos Vertices indicados (dijkstra)__

```java
/**
 * Metodo que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la ruta minima entre dos Vertices. <br>
 * @param vIni Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param vFin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @param costos Representa los costos minimos de cada vertice en el recorrido. <br>
 * @param l Representa el recorrido del camino minimo entre dos vertices. <br>
 */
private void dijkstra(Vertice vIni, Vertice vFin, int costos[], ListaCD < Vertice > l) {
            2
    if (vIni.equals(vFin)) {
          1
        return;
    }
           1           1
    for (Object v: vIni.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v;
           1         1      4n + 6             1      1
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
         1    1                1
        int p = costos[vertices.getIndice(vIni)];
         1    1                1
        int c = costos[vertices.getIndice(orig)];
         1          1      1           6n + 8      1      1            1      1          1
        int pesoAri = ((Integer) `12¬buscarArista((T) vIni.getInfo(), (T) orig.getInfo()).getPeso()`);
         1  1    1
        if (!orig.getVisit()) {
                1
            orig.setVisit(true);
                  1    1    1    1
            if (c == 0 || c > (p + pesoAri)) {
                               1                 1    1
                costos[vertices.getIndice(orig)] = (p + pesoAri);
                    1
                orig.setPredecesor(vIni);
            }
            //llamado recursivo
            dijkstra(orig, vFin, costos, l);
                1
            orig.setVisit(false);
        }
    }
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n^2)->2$

  $T({n}) = nT(n/n)+O(2)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{C}})$

  $Big O = O({n^2})$

***

## __56. Metodo privado: Evaluar la existencia de Aristas con peso negativo (hayPesosNegativosONullos)__

```java
/**
 * Metodo de tipo privado que permite evaluar la existencia de Aristas con peso negativo. <br>
 * @return Un objeto de tipo boolean con true si existen aristas con pesos negativos. <br>
 */
private boolean hayPesosNegativosONullos() {
            1
    for (Arista a: this.aristas) {
             1           1     1   1          1             1      1           1
        if (a.getPeso() == -1 || (a.getPeso() != -1 && ((Integer) a.getPeso()) < 0))
              1
            return (true);
    }
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 1) + 1$

  $T({n}) = 8n + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __57. Calcular la ruta mas corta entre dos Vertices indicados (rutaMasCorta)__

```java
/**
 * Metodo que permite calcular la ruta mas corta entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la ruta mas corta entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido. <br>
 * @param fin Representa el Vertice final en el recorrido. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta mas corta.
 */
public int rutaMasCorta(T ini, T fin) {
          n + 1
    `25¬this.limpiaVisitasV()`;
     1         1  1              1
    int cant[] = new int[vertices.getTamanio()];
       1         1      4n + 6
    Vertice vIni = `11¬this.buscarVertice(ini)`;
       1         1      4n + 6
    Vertice vFin = `11¬this.buscarVertice(fin)`;
             1       1        1
    if (vIni == null || vFin == null)
          1
        return (-1);
        1
    vIni.setVisit(true);
     1      1
    int tam = 1;
        nT(n/n)+O(n)
    `58¬this.rutaMasCorta(vIni, vFin, cant, tam)`;
      1                  1
    return (cant[vertices.getIndice(vFin)]);
}
```

* ### __Costo Operacional__

  $T({n}) = n + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + 1 + 1 + nT(n/n)+O(n) + 1 + 1$

  $T({n}) = nT(n/n)+O(n) + 9n + 29$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __58. Retornar la longitud de la ruta mas corta entre 2 vertices (rutaMasCorta)__

```java
/**
 * Metodo de tipo privado que permite retornar la longitud de la ruta mas corta entre 2 vertices. <br>
 * @param vIni Representa el Vertice inicial del recorrido. <br>
 * @param vFin Representa el Vertice final o destino final del recorrido. <br>
 * @param cant Representa la cantidada de iteraciones realizadas sobre e Grafo. <br>
 * @param tam Representa el tamaño la ruta minima entre los 2 vertices.
 */
private void rutaMasCorta(Vertice vIni, Vertice vFin, int cant[], int tam) {
     2
    tam++;
            2
    if (vIni.equals(vFin)) {
           1
        return;
    }
           1           1
    for (Object v: vIni.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v;
           1         1      4n + 6             1      1
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
         1    1              1
        int c = cant[vertices.getIndice(orig)];
         1  1    1
        if (!orig.getVisit()) {
                1
            orig.setVisit(true);
                  1
            if (c == 0)
                             1                 1
                cant[vertices.getIndice(orig)] = tam;
            else
                   1   1    1
            if (c == 0 || c > tam) {
                             1                 1
                cant[vertices.getIndice(orig)] = tam;
            }
            //llamado recursivo
            rutaMasCorta(orig, vFin, cant, tam);
                1
            orig.setVisit(false);
        }
    }

}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __59. Realizar el recorrido del Grafo en Profunidad (getBEP)__

```java
/**
 * BUSQUEDA EN PROFUNDIDAD
 * Metodo que permite realizar el recorrido del Grafo en Profunidad. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en profundidad. <br>
 * @param infoVert Representa la informacion del Vertices inicial sobre el cual comienza el recorrido. <br>
 * @return Un objeto de tipo ListaCD con el recorrido del Grafo en profundidad.
 */
public ListaCD < Vertice > getBEP(T infoVert) {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
       1      1      4n + 6
    Vertice v = `11¬this.buscarVertice(infoVert)`;
           1
    if (v == null)
           1
        return (l);
          n + 1
    `25¬this.limpiaVisitasV()`;
      KTE
    l.insertarAlFinal(v);
      KTE
    v.setVisit(true);
       nT(n/n)+O(n)
    `60¬getBEP(v, l)`;
      1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + n + 1 + KTE + KTE + nT(n/n)+O(n) + 1$

  $T({n}) = nT(n/n)+O(n) + 5n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __60. Metodo privado: Realizar el recorrido del Grafo en Profunidad (getBEP)__

```java
/**
 * Metodo de tipo privado que permite realizar el recorrido del Grafo en Profunidad. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en profundidad. <br>
 * @param v Representa el Vertice inicial sobre el cual comienza el recorrido. <br>
 * @param l Representa el listado con el recorrido del Grafo en Profundidad.
 */
public void getBEP(Vertice v, ListaCD < Vertice > l) {
           1         1
    for (Object v2: v.getVecinos()) {
           1         1
        Vertice vert = (Vertice) v2;
         1  1    1
        if (!vert.getVisit()) {
             KTE
            l.insertarAlFinal(vert);
                1
            vert.setVisit(true);
            //llamado recursivo
            getBEP(vert, l);
        }
    }
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __61. Realizar el recorrido del Grafo en Anchura (getBEA)__

```java
/**
 * BUSQUEDA EN ANCHURA
 * Metodo que permite realizar el recorrido del Grafo en Anchura. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en Anchura. <br>
 * @param infoVert Representa la informacion del Vertices inicial sobre el cual comienza el recorrido. <br>
 * @return Un objeto de tipo ListaCD con el recorrido del Grafo en Anchura.
 */
public ListaCD < Vertice > getBEA(T infoVert) {
       1                  1  1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
      1                1  1
    Cola < Vertice > c = new Cola < Vertice > ();
       1      1      4n + 6
    Vertice v = `11¬this.buscarVertice(infoVert)`;
           1
    if (v == null)
           1
        return (l);
          n + 1
    `25¬this.limpiaVisitasV()`;
     KTE
    l.insertarAlFinal(v);
     KTE
    v.setVisit(true);
      nT(n/n)+O(n)
    `62¬getBEA(v, l, c)`;
      1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 4n + 6 + 1 + n + 1 + KTE + KTE + nT(n/n)+O(n) + 1$

  $T({n}) = 5n + KTE + nT(n/n)+O(n) + 1$

  $T({n}) = nT(n/n)+O(n) + 5n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __62. Metodo privado: Realizar el recorrido del Grafo en Anchura (getBEA)__

```java
/**
 * Metodo de tipo privado que permite realizar el recorrido del Grafo en Anchura. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en Anchura. <br>
 * @param v Representa el Vertice inicial sobre el cual comienza el recorrido. <br>
 * @param l Representa el listado con el recorrido del Grafo en Anchura
 * @param c Representa una cola auxiliar como ayuda para el recorrido en Anchura
 */
public void getBEA(Vertice v, ListaCD < Vertice > l, Cola < Vertice > c) {
          1
    if (v == null)
          1
        return;
           1         1
    for (Object v2: v.getVecinos()) {
           1         1     1
        Vertice vert = (Vertice) v2;
         1  1    1
        if (!vert.getVisit()) {
             KTE
            l.insertarAlFinal(vert);
             KTE
            c.enColar(vert);
                1
            vert.setVisit(true);
        }
    }
    //llamado recurso
            KTE
    getBEA(c.deColar(), l, c);
}
```

* ### __Costo Operacional__

  $({A}) = n$

  $({B}) = n$

  $({C}) =O(n)->1$

  $T({n}) = nT(n/n)+O(n)$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

////////////////////////////////////////////////////////////
// Digrafo - Otras funcionalidades /////////////////////////
////////////////////////////////////////////////////////////

## __63. Conocer si un Grafo se encuentra o no vacio (esVacio)__

```java
/**
 * Metodo que permite conocer si un Grafo se encuentra o no vacio. <br>
 * <b>post:</b> Se evaluo la existencia de datos dentro del Grafo. <br>
 * @return Un objeto de tipo boolean con true si el Grafo se encuentra vacio.
 */
public boolean esVacio() {
       1                KTE
    return (this.vertices.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + KTE$

  $T({n}) = KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __64. Conocer si dos vertices son adyacentes/vecinos (sonVerticesAdyacentes)__

```java
/**
 * Metodo que permite conocer si dos vertices son adyacentes/vecinos. <br>
 * @param orig Representa el Vertice del cual se desea saber si es adyacente. <br>
 * @param dest Representa el Vertice del cual se desea saber si es adyacente. <br>
 * @return Un objeto de tipo boolean que evalua la adyacencia de los dos Vertices.
 */
public boolean sonVerticesAdyacentes(T orig, T dest) {
       1            1      4n + 6
    Vertice < T > a = `11¬this.buscarVertice(orig)`;
       1            1      4n + 6
    Vertice < T > b = `11¬this.buscarVertice(dest)`;
           1      1    1
    if (a == null || b == null)
          1
        return (false);
    //Vertice a es Adyacenta a b, o es adyacente desde b.
       1     KTE             1     KTE
    return (a.esAdyacente(b) || b.esAdyacente(a));
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 6 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 1 + KTE + 1 + KTE$

  $T({n}) = 8n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __65. Conocer el Grado de salida de un Vertice (getGradoSalidaVert)__

```java
/**
 * Metodo que permite conocer el Grado de salida de un Vertice. <br>
 * <b>post:</b> Se retorno el grado de salida del Vertice. <br>
 * @param info Represente la informacion del Vertice a evaluar. <br>
 * @return Un objeto de tipo int con el Grado de salida del Vertice.
 */
public int getGradoSalidaVert(T info) {
        1     1      4n + 6
    Vertice v = `11¬this.buscarVertice(info)`;
          1
    if (v == null)
          1
        return (-1);
       1         1       4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
     1      1         1             1      1          1
    int pos = vertices.getIndice(v) + 1, i = 1, grado = 0;
             1
    while (i < m.length) {
              1       1     1              2
        grado = grado + ((Integer) m[pos][i++]);
    }
      1
    return (grado);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 6 + 1 + 1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 1 + 2 + 1) + 1 + 1$

  $T({n}) = 4n^2 + 38n + 39$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __66. Conocer el Grado de entrada de un Vertice (getGradoEntradaVert)__

```java
/**
 * Metodo que permite conocer el Grado de entrada de un Vertice. <br>
 * <b>post:</b> Se retorno el grado de entrada del Vertice. <br>
 * @param info Represente la informacion del Vertice a evaluar. <br>
 * @return Un objeto de tipo int con el Grado de entrada del Vertice.
 */
public int getGradoEntradaVert(T info) {
        1     1        4n + 6
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
           1
        return (-1);
      1          1        4n^2 + 28n + 19
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
     1      1         1             1      1          1
    int pos = vertices.getIndice(v) + 1, i = 1, grado = 0;
             1 
    while (i < m.length) {
              1       1      1        2
        grado = grado + ((Integer) m[i++][pos]);
    }
      1
    return (grado);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 6 + 1 + 1 + 1 + 4n^2 + 28n + 19 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + n(1 + 1 + 1 + 2 + 1) + 1 + 1$

  $T({n}) = 4n^2 + 38n + 39$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^{2}})$

***

## __67. Evaluar si un Vertice se encuentra aislado dentro del Grafo (esVerticeAislado)__

```java
/**
 * Metodo que permite evaluar si un Vertice se encuentra aislado dentro del Grafo. <br>
 * <b>post:</b> Se evaluo si un Vertice es Aislado en el Grafo. <br>
 * @param info Representa la informacion del Vertice que se desea evaluar. <br>
 * @return Un objeto de tipo boolean con true si el vertice es aislado.
 */
public boolean esVerticeAislado(T info) {
      1          1      4n + 6
    Vertice vert = `11¬this.buscarVertice(info)`;
             1
    if (vert == null)
           1
        return (true);
           1
    for (Vertice v: this.vertices) {
           1                  1  1
        ListaCD < Vertice > l = v.getVecinos();
                1
        for (Vertice v2: l) {
            //Si accedido desde algun vertice
                1 2             1    2
            if (!v.equals(vert) && v2.equals(vert))
                  1
                return (false);
        }
    }
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 6 + 1 + 1 + n(1 + 1 + 1+ 1 + n(1 + 2 + 1 + 2)) + 1$

  $T({n}) = 4n + 10 + n(4 + 6n) + 1$

  $T({n}) = 6n^2 + 8n + 11$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __68. Conocer los vertices adyacentes/vecinos a un vertice indicado (getVecinosVertice)__

```java
/**
 * Metodo que permite conocer los vertices adyacentes/vecinos a un vertice indicado. <br>
 * <b>post:</b> Se retorno el conjunto de Vertices vecinos al info indicado. <br>
 * @param info Representa la informacion del Vertice que se desea evaluar. <br>
 * @return Un objeto de tipo ListaCD con los vertices vecinos al Vertice indicado. 
 */
public ListaCD < Vertice > getVecinosVertice(T info) {
        1     1      4n + 6
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
           1
        return (null);
       1     KTE
    return (v.getVecinos());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 4n + 6 + 1 + 1 + KTE$

  $T({n}) = 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __69. Limpiar el apuntador a los Vertices predecesores en el recorrido realizado (limpiarPredecesores)__

```java
/**
 * Metodo que permite limpiar el apuntador a los Vertices predecesores en el recorrido realizado. <br>
 */
private void limpiarPredecesores() {
            1   
    for (Vertice v: this.vertices)
         1
        v.setPredecesor(null);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + n$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __70. Evaluar la existencia de un circuito dentro del Grafo (hayCircuito)__

```java
/**
 * Metodo que permite evaluar la existencia de un circuito dentro del Grafo; Un circuito es una secuencia
 * de Vertices en la cual el vertice inicial y vertice final coinciden. <br>
 * <b>post:</b> Se evaluo la existencia de circuitos dentro del Grafo. <br>
 * @return Un boolean con true si existe un circuito dentro del Grafo.
 */
public boolean hayCircuito() {
            1
    for (Vertice v: this.vertices) {
         1     nT(n/n)+O(n)
        if (`45¬this.existeRuta(v, v)`) {
               1
            return (true);
        }
    }
      1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + n(1 + nT(n/n)+O(n)) + 1$

  $T({n}) = n(nT(n/n)+O(n)) + n + 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n \log n})$

***

## __71. Conocer los circuitos existentes dentro del Grafo (getCircuitos)__

```java
/**
 * Metodo que permite conocer los circuitos existentes dentro del Grafo. <br>
 * <b>post:</b> Se retorno el listado de Circuitos existentes dentro del Grafo. <br> 
 * @return Un objeto de tipo ListaCD con el conjunto de Circuitos existentes dentro del Grafo
 */
public ListaCD < ListaCD < Vertice >> getCircuitos() {
       1                             1  1
    ListaCD < ListaCD < Vertice >> l = new ListaCD < ListaCD < Vertice >> ();
       1
    ListaCD < Vertice > l2;
            1          
    for (Vertice v: this.vertices) {
           1  T(n/2)+O(1) + 10n + KTE 1  1           1    1
        l2 = `46¬this.getRutaEntre((T) v.getInfo(), (T) v.getInfo())`;
         1  1  KTE
        if (!l2.esVacia()) {
             KTE
            l.insertarAlFinal(l2);
        }
    }
      1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + n(1 + T(n/2)+O(1) + 10n + KTE + 1 + 1 + 1 + 1 + 1 + 1 + KTE + KTE) + 1$

  $T({n}) = 5 + n(T(n/2)+O(1) + 10n + KTE) + 1$

  $T({n}) = n(T(n/2)+O(1)) + 10n^2 + KTEn + 6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __72. Evaluar si una Arista es un PUENTE dentro del Grafo (esPuente)__

```java
/**
 * Metodo que permite evaluar si una Arista es un PUENTE dentro del Grafo;  <br>
 * Un PUESTE es una Arista que eliminandose desconecta el Grafo. <br>
 * <b>post:</b> Se evaluo lo existencia de la Arista puente dentro del Grafo. <br> 
 * @param info1 Representa la informacion del primer Vertice de la Arista. <br>
 * @param info2 Representa la informacion del segundo Vertice de la Arista. <br>
 * @return Un objeto de tipo boolean con true si la Arista en un puente del Grafo.
 */
public boolean esPuente(T info1, T info2) {
       1      1         8
    Digrafo d = `74¬this.clonar()`;
       1     1           6n + 8
    Arista a = d.`12¬buscarArista(info1, info2)`;
       1        1
    boolean rta = false;
           1
    if (a == null)
           1
        return (false);
         8n + n(KTE) + 25
    `10¬d.eliminarArista(info1, info2)`;
     1      1 T(n/2)+O(1) + 6n + 8
    if (`22¬!d.esConexo()`)
            1
        rta = true;
      1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 8 + 1 + 1 + 6n + 8 + 1 + 1 + 1 + 8n + n(KTE) + 25 + 1 + 1 + T(n/2)+O(1) + 6n + 8 + 1 + 1$

  $T({n}) = T(n/2)+O(1) + n(KTE) + 60$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __73. Evaluar si un Vertice es una Articulacion del Grafo (esArticulacion)__

```java
/**
 * Metodo que permite evaluar si un Vertice es una Articulacion del Grafo. <br>
 * Una Articulacion es un vertice que eliminandose desconecta el Grafo. <br>
 * <b>post:</b> Se evauo la existencia de una Aritulacion en el Grafo. <br> 
 * @param info Representa la informacion del Vertice que se quiere evaluar como Articulacion. <br>
 * @return Un objeto de tipo boolean con true si el Vertice evaluado es una Articulacion.
 */
public boolean esArticulacion(T info) {
       1      1         8
    Digrafo d = `74¬this.clonar()`;
       1      1          4n + 6
    Vertice v = `11¬d.buscarVertice(info)`;
       1        1
    boolean rta = false;
           1
    if (v == null)
           1
        return (false);
          4n + n(KTE) + KTE
    d.`9¬eliminarVertice(info)`;
     1      1 T(n/2)+O(1) + 6n + 8
    if (`22¬!d.esConexo()`)
            1
        rta = true;
       1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 8 + 1 + 1 + 4n + 6 + 1 + 1 + 1 + 4n + n(KTE) + KTE + 1 + 1 + T(n/2)+O(1) + 6n + 8 + 1 + 1$

  $T({n}) = T(n/2)+O(1) + n(KTE)+ KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __74. Clonar la informacio de un Grafo en un nuevo grafo y retornarlo (clonar)__

```java
/**
 * Metodo que permite clonar la informacio de un Grafo en un nuevo grafo y retornarlo. <br>
 * <b>post:</b> Se realizo la clonacion de la informacion del Grafo en un nuevo Grafo. <br> 
 * @return Un nuevo Digrafo que representa el grafo con la informacion clonada.
 */
public Digrafo clonar() {
       1          1  1
    Digrafo nuevo = new Digrafo();
         1                1
    nuevo.setVertices(this.getVertices());
         1                1
    nuevo.setAristas(this.getAristas());
      1
    return (nuevo);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$

  $T({n}) = 8$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __75. Conocer si un Grafo es un subgrafo de un Grafo mas grande (esSubGrafo)__

```java
/**
 * Metodo que permite conocer si un Grafo es un subgrafo de un Grafo mas grande. <br>
 * <b>post:</b> Se evaluo si un grafo hace parte minima de otro grafo. <br> 
 * @param g Representa el grafo el cual se desea saber si es un subgrafo de otro grafo. <br>
 * @return Un objeto boolean con true si es subgrafo y false en caso contrario.
 */
public boolean esSubGrafo(Digrafo g) {
           1         1
    for (Object v2: g.getVertices()) {
           1      1     1 
        Vertice v = (Vertice) v2;
         1  1                3n + 5
        if (!this.vertices.`13¬esta(v)`)
               1
            return (false);
    }
           1         1
    for (Object a2: g.getAristas()) {
           1     1    1
        Arista a = (Arista) a2;
         1  1               3n + 5
        if (!this.aristas.`13¬esta(a)`)
              1
            return (false);
    }
      1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 3n + 5) + 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 1 + 1 + 3n + 5) + 1$

  $T({n}) = 2 + n(3n + 10) + 2 + n(3n + 12) + 1$

  $T({n}) = 6n^2 + 22n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __76. Unir la informacion de 2 grafos en un solo grafo (unirGrafos)__

```java
/**
 * Metodo que permite unir la informaicon de 2 grafos en un solo grafo. <br>
 * <b>post:</b> Se realizo la union de dos grafos en un Grafo unico con toda la informacion. <br> 
 * @param g Representa el Grafo el cual se desea ser unido al Grafo actual. <br>
 */
public void unirGrafos(Digrafo g) {
            1        1
    for (Object v2: g.getVertices()) {
            1     1     1
        Vertice v = (Vertice) v2;
         1  1                 3n + 5
        if (!this.vertices.`13¬esta(v)`)
                      3n + KTE       1   1
            `6¬this.insertarVertice((T) v.getInfo())`;
    }
           1         1
    for (Object a2: g.getAristas()) {
           1     1    1
        Arista a = (Arista) a2;
         1  1                 3n + 5
        if (!this.aristas.`13¬esta(a)`)
                8n + KTE             1    1         1            1    1         1            2
            `8¬this.insertarAristaP((T) a.getVertA().getInfo(), (T) a.getVertB().getInfo(), a.getPeso())`;
    }
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + n(1 + 1 + 1 + 1 + 1 + 3n + 5 + 3n + KTE + 1 + 1) + 1 + 1+ n(1 + 1 + 1 + 1 + 1 + 3n + 5 + 8n + KTE + 1 + 1 + 1 + 1 + 1 + 1 + 2)$

  $T({n}) = 2 + n(6n + KTE) + 2 + n(11n + KTE)$

  $T({n}) = 17n^2 + n(KTE) + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n^2})$

***

## __77. Conocer el peso del Grafo (getPeso)__

```java
/**
 * Metodo que permite conocer el peso del Grafo. <br>
 * <b>post:</b> Se retorno el peso del Grafo. <br> 
 * @return Un valor int con el peso del Grafo.
 */
public int getPeso() {
       1                 1
    return (this.vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1$

  $T({n}) = 2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __78. Metodo toString (toString)__

```java
@Override
public String toString() {
       1       1
    String cad = "Vertices: ";
            1
    for (Vertice v: this.vertices) {
             2     1   1         1
        cad += "(" + v.getInfo() + "),";
    }
        2
    cad += "\nAristas:";
            1
    for (Arista a: this.aristas) {
             2  KTE
        cad += a.toString() + ",";
    }
      1
    return (cad);
}
```

* ### __Costo Operacional__

  $T({n}) = 1 + 1 + 1 + n(2 + 1 + 1 + 1) + 2 + 1 + n(2 + KTE) + 1$

  $T({n}) = 3 + n(5) + 3 + n(KTE) + 1$

  $T({n}) = n(KTE) + 7$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***
