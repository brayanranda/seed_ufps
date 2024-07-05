# __COSTO OPERACIONAL Y COMPLEJIDAD (GrafoND)__

[CODIGO FUENTE (GrafoND)](https://gitlab.com/estructuras-de-datos/proyecto-seed/-/blob/master/src/ufps/util/colecciones_seed/GrafoND.java)

Los análisis que se harán a continuación son para el peor de los casos Big(O) con la siguiente nomenclatura.

KTE -> Constante

n -> Tamaño de la estructura

Número -> Número de operaciones elementales

Cada instrucción se revisa línea a línea

Métodos de la misma clase que son llamados en otros métodos, tienen su hipervínculo.

***

## __1. Metodo Constructor Vacio (GrafoND)__

```java
/**
 * Metodo constructor del Grafo que inicializa el Listado de Vertices y Aristas.
 * <b> post: </b> Se creo un nuevo Grafo sin Vertices y Aristas.
 */
public GrafoND() {
                  1      1           1
    this.vertices = new ListaCD < Vertice > ();
                  1       1         1
    this.aristas = new ListaCD < Arista > ();
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + 3$

  $T({n}) =  6$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __2. Obtener Vertices Grafo (getVertices)__

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

## __3. Obtener Aristas Grafo (getAristas)__

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

## __4. Modificar Vertices Grafo (setVertices)__

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

## __5. Modificar Aristas Grafo (setAristas)__

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

## __6. Insertar Vertice Grafo (insertarVertice)__

```java
/**
 * Metodo que permite insertar un nuevo Vertice dentro en el listado del Grafo. <br>
 * <b> post: </b> Se inserto un Vertice dentro del Grafo. <br>
 * @param info Representa la informacion del Vertice que se desea ingresar al Grafo. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarVertice(T info) {
         1     1       1
    Vertice v = new Vertice(info);
             (3n + 5)     1    1
    if (`13¬esta((T) v.getInfo())`)
        //Mejor de los casos
            1
        return (false);
                         KTE
    this.vertices.insertarAlFinal(v);
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + (3n + 5) + 2 + KTE + 1$

  $T({n}) =  3n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __7. Insertar Arista Grafo (insertarArista)__

```java
/**
 * Metodo que permite insertar una nueva Arista en el Listado del Grafo. <br>
 * <b> post: </b> Se inserto una nueva Arista dentro del Listado del Grafo. <br>
 * @param info1 Representa uno de los Vertices de la Arista del Grafo. <br>
 * @param info2 Representa el otro Vertice de la Arista del Grafo. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarArista(T info1, T info2) {
          1         1               (3n + 5)
    Vertice < T > a = `11¬this.buscarVertice(info1)`;
          1         1               (3n + 5)
    Vertice < T > b = `11¬this.buscarVertice(info2)`;
          1        1    1
    if (a == null || b == null)
        //Mejor de los casos
              1
        return (false);
            KTE
    a.insertarVecino(b);
        1     1
    if (!a.equals(b))
                KTE
        b.insertarVecino(a);
                        KTE          1
    this.aristas.insertarAlFinal(new Arista < T > (a, b, -1));
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + (3n + 5) + 2 + (3n + 5) + 3 + KTE + 2 + KTE + KTE + 1 + 1$

  $T({n}) = 6n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __8. Insertar Arista Peso Grafo (insertarAristaP)__

```java
/**
 * Metodo que permite insertar una nueva Arista en el Listado del Grafo. <br>
 * <b> post: </b> Se inserto una nueva Arista dentro del Listado del Grafo. <br>
 * @param info1 Representa uno de los Vertices de la Arista del Grafo. <br>
 * @param info2 Representa el otro Vertice de la Arista del Grafo. <br>
 * @param peso Representa el peso de la Arista que se desea ingresar. <br>
 * @return Un objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean insertarAristaP(T info1, T info2, int peso) {
          1         1          (3n + 5)
    Vertice < T > a = `11¬this.buscarVertice(info1)`;
          1         1           (3n + 5)
    Vertice < T > b = `11¬this.buscarVertice(info2)`;
           1       1    1       1      1
    if (a == null || b == null || peso < 0)
        //Mejor de los casos
              1
        return (false);
           KTE
    a.insertarVecino(b);
         1   1
    if (!a.equals(b))
              KTE
        b.insertarVecino(a);
                        KTE          1   
    this.aristas.insertarAlFinal(new Arista < T > (a, b, peso));
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 2 + (3n + 5) + 5 + KTE + 2 + KTE + KTE 1 + 1$

  $T({n}) =  6n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __9. Eliminar Vertice Grafo (eliminarVertice)__

```java
/**
 * Metodo que permite eliminar un Vertice del listado del Grafo; Se eliminan tambien sus relaciones. <br>
 * <b> post: </b> Se elimino el Vertice del grafo, incluso sus relaciones en el mismo. <br>
 * @param info Representa la informacion del Vertice que se desea eliminar. <br>
 * @return  
 */
public boolean eliminarVertice(T info) {
         1       1           1         1       
    ListaCD < Vertice > vaux = new ListaCD < Vertice > ();
         1       1          1          1
    ListaCD < Arista > aaux = new ListaCD < Arista > ();
         1    1           (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
              1
        return false;
    //Eliminar todos los vertices
             2
    for (Arista a: this.aristas) {
            1       1        1       1 1       1        1
        if (!a.getVertA().equals(v) && !a.getVertB().equals(v))
                        KTE
            aaux.insertarAlFinal(a);
    }
                 1
    this.aristas = aaux;
               2
    for (Vertice vert: this.vertices) {
            1        1
        if (!vert.equals(v))
                       KTE
            vaux.insertarAlFinal(vert);
        else
                       KTE
            vert.eliminarVecino(v);
    }
                  1
    this.vertices = vaux;
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  4 + 4 + 2 + (3n + 5) + 1 + 2 + n(7 + KTE) + 2 + 1 + 2 + n(2 + KTE) + 2 + 1 + 1$

  $T({n}) =  12n + 2n(KTE) + 27$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __10. Eliminar Arista Grafo (eliminarArista)__

```java
/**
 * Metodo que permite eliminar una Arista dentro del Grafo. <br>
 * <b> post: </b> Se elimino la Arista del Grafo. <br>
 * @param orig Representa la informacion del Vertice origen de la Arista. <br>
 * @param dest Representa la informacion del Vertice destino de la Arista. <br>
 * @return  
 */
public boolean eliminarArista(T orig, T dest) {
          1      1          1         1
    ListaCD < Arista > aaux = new ListaCD < Arista > ();
          1    1          (3n + 5)
    Vertice v1 = `11¬this.buscarVertice(orig)`;
          1    1          (3n + 5)
    Vertice v2 = `11¬this.buscarVertice(dest)`;
            1       1     1
    if (v1 == null || v2 == null)
        //Mejor de los casos
              1
        return false;
    //Eliminar todos los vertices
             2
    for (Arista a: this.aristas) {
               1      1        1
        Vertice vOrig = a.getVertA();
               1      1        1
        Vertice vDest = a.getVertB();
             1     1           2        1            2       1           2        1           2
        boolean es = (vOrig.equals(v1) && vDest.equals(v2)) || (vOrig.equals(v2) && vDest.equals(v1));
             1
        if (!es)
            //Mejor de los casos
                       KTE
            aaux.insertarAlFinal(a);
        else {
            //Peor de los casos
                      KTE
            v1.eliminarVecino(v2);
                      KTE
            v2.eliminarVecino(v1);
        }
    }
                 1
    this.aristas = aaux;
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  4 + 2 + (3n + 5) + 2 + (3n + 5) + 3 + 2 + n(3 + 3 + 13 + 1 + KTE + KTE) + 2 + 1 + 1$

  $T({n}) =  n(KTE) + 6n + 27$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __11. Buscar Vertice Grafo (buscarVertice)__

```java
/**
 * Metodo que permite buscar un Vertice dentro del listado de Vertices en el Grafo. <br>
 * <b> post: </b> Se retorno el Vertice consultado dentro del Listado. <br>
 * @param info Representa la informacion del Vertice consultado. <br>
 * @return Un Objeto de tipo Vertice que representa el Vertice consultado. <br>
 */
public Vertice < T > buscarVertice(T info) {
              2          
    for (Vertice v: this.vertices) {
                1          2
        if (v.getInfo().equals(info))
            //Mejor de los casos
                 1
            return (v);
    }
    //Peor de los casos
          1
    return (null);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(3) + 2 + 1$

  $T({n}) =  3n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __12. Buscar Arista Grafo (buscarArista)__

```java
/**
 * Metodo que permite buscar una Arista dentro del listado de Aristas en el Grafo. <br>
 * <b> post: </b> Se retorno la Arista consultada dentro del Listado. <br>
 * @param info1 Representa la informacion del Vertice en un extremo de la Arista. <br>
 * @param info2 Representa la informacion del Vertice en un extremo de la Arista. <br>
 * @return Un Objeto de tipo Arista que representa la Arista consultada. <br>
 */
public Arista < T > buscarArista(T info1, T info2) {
            2
    for (Arista a: this.aristas) {
                 KTE          1           1                  1            
        if (a.equalsND(new Arista(new Vertice(info1), new Vertice(info2), -1)))
                 1
            return (a);
    }
           1
    return (null);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(KTE + 3) + 2 + 1$

  $T({n}) =  n(KTE) + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __13. Consultar Existencia Vertice Grafo (esta)__

```java
/**
 * Metodo que permite evaluar la existencia de un Vertice dentro del Grafo. <br>
 * <b> post: </b> Se evaluo la existencia de un Vertice dentro del Grafo. <br>
 * @param x Representa el Vertice que se desea consultar. <br>
 * @return Un Objeto de tipo boolean que representa el resultado de la operacion.
 */
public boolean esta(T x) {
              2
    for (Vertice v: this.vertices) {
                 1         2
        if (v.getInfo().equals(x))
           //Mejor de los casos
                  1
            return (true);
    }
          1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(3) + 2 + 1$

  $T({n}) =  3n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __14. Obtener Matriz Adyacente Grafo (getMatrizAdyacencia)__

```java
/**
 * Metodo que permite conocer la matriz de adyacencia del Grafo, que es una de sus representaciones; <br>
 * La primera fila y columna de la matriz representan la informacion de los Vertices, por lo que no posee valores. <br>
 * <b> post: </b> Se retorno la representacion de la matriz de adyacencia del Grafo. <br>
 * @return Una matriz de Object con la representacion del Grafo en su matriz de Adyacencia.
 */
public Object[][] getMatrizAdyacencia() {
           1     1        1                      1        1                     1        1
    Object m[][] = new Object[this.vertices.getTamanio() + 1][this.vertices.getTamanio() + 1];
    //Coloco los datos
       1   1
    int k = 1;
             2
    for (Vertice v: this.vertices) {
                1       1          1
        m[0][k] = v.getInfo().toString();
            2     1      1          1
        m[k++][0] = v.getInfo().toString();
    }
              2       1               2
    for (int i = 1; i < m[0].length; i++)
                2         1            2
        for (int j = 1; j < m.length; j++)
                    1
            m[i][j] = 0;
    //Creo la relacion entre los vertices
            1
    m[0][0] = 0;
              2
    for (Arista a: this.aristas) {
          1   1              KTE          1      1
        int i = vertices.getIndice(a.getVertA()) + 1;
         1    1              KTE          1      1
        int j = vertices.getIndice(a.getVertB()) + 1;
                1      1              1
        m[i][j] = ((Integer) m[i][j]) + 1;
                1      1              1
        m[j][i] = ((Integer) m[j][i]) + 1;
    }
         1
    return (m);
}
```

* ### __Costo Operacional__

  $T({n}) =  7 + 2 + 2 + n(3 + 5) + 2 + 3 + n(3 + n(1) + 3) + 3 + 1 + 2 + n(4 + KTE + 4 + KTE + 3 + 3) + 2 + 1$

  $T({n}) = n^{2} + 6n + 8n + n(KTE) + 25$

  $T({n}) = n^{2} + 14n + n(KTE) + 25$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __15. Obtener Lista Adyacente Grafo (getListaAdyacencia)__

```java
/**
 * Metodo que permite conocer la Lista de Adyacencia de Grafo; Es una mas de sus representacione; <br>
 * Se ha implementado de manera que se represente atravez de un Arreglo de ListasCD de Vertices. <br>
 * <b> post: </b> Se retorno la lista de Adyacencias del Grafo. <br>
 * @return Un Objecto de tipo Array de Listas (ListaCD[]) que representa el grado como Lista de Adyacencias.
 */
public ListaCD[] getListaAdyacencia() {
            1      1       1                       1
    ListaCD lad[] = new ListaCD[this.vertices.getTamanio()];
       1  1
    int i = 0;
             1                     1
    while (i < this.vertices.getTamanio()) {
             1    1                1
        Vertice v = this.vertices.get(i);
          1   1
        int j = 0;
           1          1            1        1          1 
        ListaCD < Vertice < T >> l = new ListaCD < Vertice < T >> ();
                 KTE
        l.insertarAlFinal(v);
                 1        1              1
        while (j < v.getVecinos().getTamanio()) {
                     KTE            1                1         1    2
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

  $T({n}) = 4 + 2 + 2 + n(3 + 2 + 5 + KTE + 3 + n(KTE + 5) + 3 + 3) + 2 + 1$

  $T({n}) = n^{2}(KTE) + n(KTE) + 11$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __16. Obtener Matriz Incidencia Grafo (getMatrizIncidencia)__

```java
/**
 * Metodo que permite conocer la Matriz de Incidencia del Grafo; Otra de sus representaciones; <br>
 * La primera fila y columna representan la informacion de los Vertices y Aristas, debe tenerse en cuenta. <br>
 * <b> post: </b> Se retorno el Grafo representado por su matriz de Incidencia. <br>
 * @return Una matriz de Object con la representacion del Grafo en su matriz de Incidencia.
 */
public Object[][] getMatrizIncidencia() {
        1        1       1                       1       1                     1        1
    Object m[][] = new Object[this.vertices.getTamanio() + 1][this.aristas.getTamanio() + 1];
    //Coloco los datos
     1    1
    int k = 1;
              2 
    for (Vertice v: this.vertices) {
           2      1       1          KTE
        m[k++][0] = v.getInfo().toString();
    }
      1
    k = 1;
             2
    for (Arista a: this.aristas) {
                 1    1
        m[0][k] = "e" + k;
          2
        k++;
    }
            2          1           2
    for (int i = 1; i < m.length; i++)
                  2       1               2
        for (int j = 1; j < m[0].length; j++)
                    1
            m[i][j] = 0;
    //Creo la relacion entre los vertices
             1
    m[0][0] = 0;
      1
    k = 1;
             2
    for (Arista a: this.aristas) {
          1   1               KTE         1      1
        int i = vertices.getIndice(a.getVertA()) + 1;
          1   1               KTE         1      1
        int j = vertices.getIndice(a.getVertB()) + 1;
               1
        if (i == j)
            //Mejor de los casos
                  2   1
            m[i][k++] = 2;
        else {
            //Peor de los casos
                    1
            m[i][k] = 1;
                   2   1
            m[j][k++] = 1;
        }
    }
         1
    return (m);
}
```

* ### __Costo Operacional__

  $T({n}) = 7 + 2 + 2 + n(4 + KTE) + 2 + 1 + 2 + n(2 + 2) + 2 + 3 + n(3 + n(1) + 3) + 3 + 1 + 1 + 2 + n(4 + KTE + 4 + KTE + 1 + 1 + 3 
  ) + 2 + 1$

  $T({n}) =  n^{2} + 7n + 2n(KTE) + 31$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __17. Evaluar Grafo si es Multigrado (esMultigrafo)__

```java
/**
 * Metodo que permite evaluar si el Grafo es un Multigrado; es decir, si existen mas de <br>
 * una relacion entre dos Vertices A y B. <br>
 * <b> post: </b> Se evaluo si el Grafo creado es un Multigrafo.
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esMultigrafo() {
          1       1   (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
              2        1              2
    for (int i = 1; i < m[0].length; i++) {
                 2        1            2
        for (int j = 1; j < m.length; j++) {
                   1    1      1              1
            if (i != j && ((Integer) m[i][j]) > 1)
                //Mejor de los casos
                       1
                return (true);
        }
    }
           1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (n^{2} + 14n + n(KTE) + 25) + 3 + n(4) + 3 + 1$

  $T({n}) =  n^{2} + 18n + n(KTE) + 34$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __18. Evaluar Grafo si es PseudoGrafo (esPseudoGrafo)__

```java
/**
 * Metodo que permite evaluar si el Grafo es un PseudoGrafo; es decir, si existe una<br>
 * relacion entre el mismo Vertice. <br>
 * <b> post: </b> Se evaluo si el Grafo creado es un Pseudografo.
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esPseudoGrafo() {
          1      1   (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
       1  1
    int i = 0;
             1
    while (i < m.length) {
                   1          2    1
        if (((Integer) m[i][i++]) != 0)
            //Mejor de los casos
                  1
            return (true);
    }
          1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (n^{2} + 14n + n(KTE) + 25) + 2 + 1 + n(4) + 1 + 1$

  $T({n}) =  n^{2} + 18n + n(KTE) + 32$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __19. Evaluar Grafo si es Simple (esGrafoSimple)__

```java
/**
 * Metodo que permite conocer si un Grafo evaluado es SImple; Un Grafo es simple cuando <br>
 * No es un Pseudografo ni un Multigrafo. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Simple. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoSimple() {
       1  1 (n^{2} + 18n + n(KTE) + 34) 1  1  (n^{2} + 18n + n(KTE) + 32)
    return (!`17¬this.esMultigrafo()` && !`18¬this.esPseudoGrafo()`);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + (n^{2} + 18n + n(KTE) + 34) + 1 + 1 + (n^{2} + 18n + n(KTE) + 32)$

  $T({n}) =  2n^{2} + 36n + 2n(KTE) + 70$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __20. Evaluar Grafo si es Ponderado (esGrafoPonderado)__

```java
/**
 * Metodo que permite conocer si un Grafo es Ponderado; Un Grafo es ponderado cuando <br>
 * sus Aristas poseen un valor que representa costos, tiempos, distancias. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Ponderado. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoPonderado() {
    for (Arista a: this.aristas) {
        if (a.getPeso() == -1)
            return (false);
    }
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __21. Evaluar Grafo si es Nulo (esGrafoNulo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Nulo; Un Grafo es Nulo cuando <br>
 * posee una cantidad de Vertices que no se encuentran relacionados NINGUNO, Para el caso <br>
 * se dice que el Arbol es N(n), donde n es el numero de Vertices.
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo NUlo. <br>
 * @return Un objeto de int con el numero de vertices NULOS, o -1 si no es NULO
 */
public int esGrafoNulo() {
    if (!this.aristas.esVacia())
        return (-1);
    return (this.vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __22. Evaluar Grafo si es Conexo (esConexo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Conexo; Un Grafo es conexo cuando <br>
 * se puede acceder a cada uno de sus Vertices de alguna forma. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Conexo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esConexo() {
               (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    boolean x;
          1   1                 1
    Vertice v = this.vertices.get(0);
           1
    v.setVisit(true);
     (1T(n/1) + O(n^{2}))
    `23¬this.visitarVecinos(v)`;
      1        (2n + 5)
    x = `24¬this.visitadosTodos()`;
            (n + 4)
    `25¬this.limpiaVisitasV()`;
          1
    return (x);
}
```

* ### __Costo Operacional__

  $T({n}) =  (n + 4) + 1 + 3 + 1 + (1T(\frac{n}{1}) + O(n^{2})) + 1 + (2n + 5) + (n + 4) + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n^{2}) + 4n + 20$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __23. Marcar Vertices como Visitados (visitarVecinos)__

```java
/**
 * Metodo de tipo privado que permite visitar los Vecinos de un Vertice y marcalos como visitados. <br>
 * @param v Representa el Vertice del cual se quieren visitar sus vecinos. <br>
 */
private void visitarVecinos(Vertice v) {
          1   1       1
    ListaCD l = v.getVecinos();
               2
    for (Object obj: l) {
              1    1      1
        Vertice v2 = (Vertice) obj;
           1          (3n + 5)                 1
        v2 = `11¬this.buscarVertice((T) v2.getInfo())`;
               1        1  1       1
        if (v2 != null && !v2.getVisit()) {
                   1
            v2.setVisit(true);
                       (2n + 5)
            if (`24¬this.visitadosTodos()`)
               //Mejor de los casos
                    1
                return;
            //Llamado Recursivo 1
            this.visitarVecinos(v2);
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 3 + 2 + n(3 + 2 + (3n + 5) + 4 + 1 + (2n + 5)) + 2$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n^{2}) -> 2$

  $T({n}) = 1T(\frac{n}{1}) + O(n^{2})$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n^{2}})$

***

## __24. Obtener Vertices Marcados como Visitados (visitadosTodos)__

```java
/**
 * Metodo de tipo privado que permite evaluar si todos los vertices del Grafo han sido visitados. <br>
 * @return Un objeto de tipo boolean qeu es true= si ha visitado todos los Vertices en el recorrido.
 */
private boolean visitadosTodos() {
              2 
    for (Vertice v: this.vertices)
            1       1
        if (!v.getVisit())
                  1
            return (false);
            1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(2) + 2 + 1$

  $T({n}) =  2n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __25. Eliminar Marcación Visita Vertices de un Recorrido (limpiaVisitasV)__

```java
/**
 * Metodo de tipo privado que permite limpiar la visita de los Vertices dentro de un recorrido. <br>
 */
private void limpiaVisitasV() {
             2       
    for (Vertice v: this.vertices)
              1
        v.setVisit(false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(1) + 2 $

  $T({n}) =  n + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __26. Eliminar Marcación Visita Aristas de un Recorrido (limpiaVisitasA)__

```java
/**
 * Metodo de tipo privado que permite limpiar la visita de las Aristas dentro de un recorrido. <br>
 */
private void limpiaVisitasA() {
            2 
    for (Arista a: this.aristas)
               1
        a.setVisit(false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(1) + 2$

  $T({n}) =  n + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __27. Evaluar Grafo si es Fuertemente Conexo (esFuertementeConexo)__

```java
/**
 * Metodo que permite conocer si un Grafo es Fuertemente Conexo; Un Grafo es Fuertemente conexo cuando <br>
 * se puede acceder a cada uno de sus vertices desde cada uno de ellos. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Fuertemente Conexo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esFuertementeConexo() {
    for (Vertice v1: this.vertices) {
        for (Vertice v2: this.vertices) {
            if (!v1.equals(v2) && !this.existeRutaEntre((T) v1.getInfo(), (T) v2.getInfo()))
                return (false);
        }
    }
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __28. Evaluar Grafo si es Regular (esGrafoRegular)__

```java
/**
 * Metodo que permite conocer si un Grafo es Regular; Un Grafo es Regular cuando <br>
 * el grado de todos sus vertices el mismo. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Regular. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoRegular() {
     (n^{2} + 18n + n(KTE) + 34)  1  (n^{2} + 18n + n(KTE) + 32)
    if (`17¬this.esMultigrafo()` || `18¬this.esPseudoGrafo()`)
        //Mejor de los casos
              1
        return (false);
        1     1
    int grado = -2;
              2
    for (Vertice v: this.vertices) {
                   1
        if (grado == -2)
                  1           (3n + 10)                1
            grado = `82¬this.getGradoVertice((T) v.getInfo())`;
                   1           (3n + 10)               1
        if (grado != `82¬this.getGradoVertice((T) v.getInfo())`)
            //Mejor de los casos
                   1
            return (false);
    }
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) = (n^{2} + 18n + n(KTE) + 34) + 1 + (n^{2} + 18n + n(KTE) + 32) + 2 + n(1 + 1 + (3n + 10) + 1 + 1 + (3n + 10) + 1) + 2 + 1$

  $T({n}) =  2n^{2} + 36n + 2n(KTE) + n(6n + 25) + 72$

  $T({n}) =  8n^{2} + 61n + 2n(KTE) + 72$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __29. Evaluar Grafo si es Completo (esCompleto)__

```java
/**
 * Metodo que permite conocer si un Grafo es Completo; Un Grafo es Completo cuando <br>
 * se posee una (y sola una) Arista entre cada uno de los Vertices del Grafo, se representa por K(n). <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Completo. <br>
 * @return Un objeto de tipo int con el Numero de vertices del Grafo completo o -1 si no lo es.
 */
public int esCompleto() {
          1       1  (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
             2        1               2
    for (int i = 1; i < m[0].length; i++) {
                  2      1             2
        for (int j = 1; j < m.length; j++) {
                    1    1      1              1      1     1    1      1               1
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) != 1))
                //Mejor de los casos
                     1
                return (-1);
        }
    }
        1                 1
    return (vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (n^{2} + 14n + n(KTE) + 25) + 3 + n(3 + n(9) + 3) + 3 + 2$

  $T({n}) =  10n^{2} + 20n + n(KTE) + 35$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __30. Evaluar Grafo si es Ciclo (esGrafoCiclo)__

```java
/**
 * Metodo que permite conocer si un Grafo es un Ciclo; Un Grafo es un ciclo cuando <br>
 * sus Vertices y Aristas forman un figura que se asemeja a un polígono de n lados; <br>
 * Se representa con C(n) donde n es el numero de Vertices. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Ciclico. <br>
 * @return Un Objeto de tipo int que representa el numero de Vertices o -1 si no es ciclo.
 */
public int esGrafoCiclo() {
       1  1                   1
    int c = this.vertices.getTamanio();
          1    1    1                    1
    if (c < 3 || c != this.aristas.getTamanio())
        //Mejor de los casos
             1
        return (-1);
          1      1   (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
              2       1               2
    for (int i = 1; i < m[0].length; i++) {
           1  1
        int n = 0;
                  2       1            2
        for (int j = 1; j < m.length; j++) {
            //si es pseudografo o es multigrafo
                    1   1        1              1     1    1     1      1              1
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) > 1))
                //Mejor de los casos
                     1
                return (-1);
                   1    1      1               1
            if (i != j && ((Integer) m[i][j]) == 1) {
                 2
                n++;
                      1
                if (n > 2)
                    //Mejor de los casos
                          1
                    return (-1);
            }
        }
              1
        if (n != 2)
            //Mejor de los casos
                  1
            return (-1);
    }
          1
    return (c);
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + 4 + 2 + (n^{2} + 14n + n(KTE) + 25) + 3 + n(2 + 3 + n(9 + 4 + 2 + 1) + 3 + 1) + 3 + 1$

  $T({n}) =  17n^{2} + 23n + n(KTE) + 41$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __31. Evaluar Grafo si es Rueda (esGrafoRueda)__

```java
/**
 * Metodo que permite conocer si un Grafo es una Rueda; Un Grafo es una Rueda cuando <br>
 * sus Vertices se conectan a un único vértice a todos los vértices de un ciclo C(n-1); <br>
 * Un Grafo Rueda se representa con W(n) donde n es el numero de Vertices.<br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Rueda. <br>
 * @return Un Objeto de tipo int que representa el numero de Vertices o -1 si no es ciclo.
 */
public int esGrafoRueda() {
       1   1            1
    int w = vertices.getTamanio();
          1
    if (w < 4)
        //Mejor de los casos
             1
        return (-1);
         1       1   (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
         1        1
    boolean cent = false;
             2        1                2
    for (int i = 1; i < m[0].length; i++) {
           1  1
        int n = 0;
                  2        1           2
        for (int j = 1; j < m.length; j++) {
            //si es pseudografo o si es multigrafo
                    1    1      1              1      1     1    1      1              1
            if ((i == j && ((Integer) m[i][j]) != 0) || (i != j && ((Integer) m[i][j]) > 1))
                //Mejor de los casos
                     1
                return (-1);
                   1   1      1                1
            if (i != j && ((Integer) m[i][j]) == 1) {
                  2
                n++;
            }
        }
              1 
        if (n != 3) {
                  1    1   1    1
            if (n == w - 1 && !cent)
                     1
                cent = true;
            else
                     1
                return (-1);
        }
    }
           1  1
    return (w - 1);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 1 + 2 + (n^{2} + 14n + n(KTE) + 25) + 2 + 3 + n(2 + 3 + n(9 + 4 + 2) + 3 + 1 + 4 + 1) + 3 + 2$

  $T({n}) = 16n^{2} + 28n + n(KTE) + 40$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __32. Evaluar Grafo si es Bipartito (esBipartito)__

```java
/**
 * Metodo que permite conocer si un Grafo es Bipartito; Un Grafo es Bipartito cuando <br>
 * sus vertices se pueden separar en dos conjuntos en los cuales los vertices del mismo conjunto, <br>
 * no pueden relacionarse entre si; Si todos los vertices de un grupo se relacionan con los del otro conjunto se dice<br>
 * que el Grafo es Bipartito completo y se representa con C(m,n), siendo m y n la cardinalidad de ambos conjuntos m y n.
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Bipartito Completo. <br>
 * @return Un Objeto String con el resultado obtenido del proceso realizado.
 */
public String esBipartito() {
        1 (1T(n/1) + O(n^{2}) + 4n + 20)
    if (!this.esConexo())
        //Mejor de los casos
             1
        return ("El Grafo es no conexo. No es Bipartito!");
        (n^{2} + 18n + n(KTE) + 32) 1 (n^{2} + 18n + n(KTE) + 34)
    if (`18¬this.esPseudoGrafo()` || `17¬this.esMultigrafo()`)
        //Mejor de los casos
              1
        return ("El grafo no es simple!");
          1       1           1        1         1
    ListaCD < Vertice > conj1 = new ListaCD < Vertice > ();
          1       1           1       1         1
    ListaCD < Vertice > conj2 = new ListaCD < Vertice > ();
      1   1
    int c = 0;
             2
    for (Vertice v: this.vertices) {
             1      KTE     1  1      KTE
        if (!conj1.esta(v) && !conj2.esta(v)) {
            //Mejor de los casos
                        KTE
            conj1.insertarAlFinal(v);
              1
            c = 1; //Esta en el conjunto 1
        } else {
            //Peor de los casos
            //Si está en A o en B confirma
                      KTE   1    1
            if (conj1.esta(v)) c = 1;
                      KTE   1    1
            if (conj2.esta(v)) c = 2;
        }
            (2T(n/1) + O(n))
        `33¬this.asignarVecinos(v, conj1, conj2, c)`;
    }
        1            (6n^{2} + n(KTE) + 5)
    if (!`34¬this.evaluarAristas(conj1, conj2)`)
        //Mejor de los casos
            1
        return ("El Grafo No es Bipartito");
        3
    int m, n, x;
      1           1
    m = conj1.getTamanio();
      1           1
    n = conj2.getTamanio();
           1
    if (n < m) {
          1
        x = m;
          1
        m = n;
          1
        n = x;
    }
           1     1                    1
    if ((m * n) == this.aristas.getTamanio())
            1                                         1  1      1  1
        return ("El Grafo es Bipartito Completo: K[" + m + "," + n + "]");
        1
    return ("El Grafo es Bipartito pero no es Completo!");
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + (1T(\frac{n}{1}) + O(n^{2}) + 4n + 20) + (8n^{2} + 36n + 3n(KTE) + 71) + 1 + 5 + 5 + 2 + 2 + n(3 + KTE + KTE + KTE + 2 + KTE + 2) + 2 + 1 + 3 + 2 + 2 + 1 + 3 + 5$

  $T({n}) =  1T(\frac{n}{1}) + O(n^{2}) + 40n + n(KTE) + 126$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __33. Asignar Vertices en Conjuntos Diferentes (asignarVecinos)__

```java
/**
 * Metodo de tipo privado que permite asignar los Vertuices del Grafo en 2 conjuntos diferentes. <br>
 * @param v Representa el Vertice principal del cual se comienza a realizar la agrupacion. <br>
 * @param conj1 Representa el primer conjunto en el cual se desean agrupar los vertices. <br>
 * @param conj2 Representa el segundo conjunto en el cual se desean agrupar los vertices. <br>
 * @param c Representa un valor que indica en que grupo se ubica el Vertice adyacentes.
 */
private void asignarVecinos(Vertice v, ListaCD < Vertice > conj1, ListaCD < Vertice > conj2, int c) {
    //Ubico sus vecinos en el otro conjunto.
       1
    int c2;
             2               1
    for (Object obj: v.getVecinos()) {
              1      1     1
        Vertice vec = (Vertice) obj;
            1       KTE      1  1        KTE
        if (!conj1.esta(vec) && !conj2.esta(vec)) {
                  1
            if (c == 1) {
                            KTE
                conj2.insertarAlFinal(vec);
                   1
                c2 = 2;
                //Llamado Recursivo 1      
                this.asignarVecinos(vec, conj1, conj2, c2);
                          1
            } else if (c == 2) {
                            KTE
                conj1.insertarAlFinal(vec);
                   1
                c2 = 1;
                //Llamado Recursivo 2
                this.asignarVecinos(vec, conj1, conj2, c2);
            }
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 3 + n(3 + 3 + KTE + KTE + 1 + KTE + 1) + 3$

  $({A}) = 2$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 2T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(2) = 0$

  $Big O = O({n})$

***

## __34. Evaluar Aristas Relación Vertices Conjuntos Diferente (evaluarAristas)__

```java
/**
 * Metodo de tipo privado que permite evaluar si las aristas del Grafo se relacionan con Vertices de cada <br>
 * conjunto diferente; Es decir, que cumple que no haya relaciones entre dos vertices del mismo conjunto.
 * @param conj1 Representa el primer conjunto en el cual se almacenan los Vertices. <br>
 * @param conj2 Representa el segundo conjunto en el cual se almacenan los Vertices. <br>
 * @return Un objeto de tipo boolean con false= si hay aristas con vertices en el mismo conjunto.
 */
private boolean evaluarAristas(ListaCD < Vertice > conj1, ListaCD < Vertice > conj2) {
             2
    for (Arista a: this.aristas) {
             1     1           (3n + 5)              1           1
        Vertice va = `11¬this.buscarVertice((T) a.getVertA().getInfo())`;
             1      1          (3n + 5)               1          1
        Vertice vb = `11¬this.buscarVertice((T) a.getVertB().getInfo())`;
                    KTE     1         KTE      1           KTE     1        KTE
        if ((conj1.esta(va) && conj1.esta(vb)) || (conj2.esta(va) && conj2.esta(vb))) {
                  1
            return (false);
        }
    }
           1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(4 + (3n + 5) + 4 + (3n + 5) + 3 + KTE + KTE + KTE) + 2 + 1$

  $T({n}) =  6n^{2} + n(KTE) + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __35. Evaluar Grafo si es Hamiltoniano (esGrafoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoHamiltoniano, es decir, represente un circuito Hamiltoniano; <br>
 * Un Grafo es Hamiltoniano si existe  una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Hamiltoniano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoHamiltoniano() {
                          1        1
    if (this.vertices.getTamanio() < 3)
        //Mejor de los casos
                1
        return (false);
        1    1   (1T(n/1) + O(n) + n + KTE)      KTE
    return (!`36¬this.getCicloHamiltoniano()`.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + 2 + 1T(\frac{n}{1}) + O(n) + n + KTE + KTE$

  $T({n}) = 1T(\frac{n}{1}) + O(n) + n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __36. Obtener Ciclo Hamiltoniano Grafo (getCicloHamiltoniano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoHamiltoniano, es decir, represente un circuito Hamiltoniano; <br>
 * Un Grafo es Hamiltoniano si existe  una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se retorno el Ciclo Hamiltoniano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el recorrido del Grafo Hamiltoniano.
 */
public ListaCD < Vertice > getCicloHamiltoniano() {
       1         1        1         1       1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
        1     1                 1
    Vertice v = this.vertices.get(0);
             (n + 4)
    `25¬this.limpiaVisitasV()`;
              KTE
    l.insertarAlInicio(v);
        1      (1T(n/1) + O(n))
    if (!`37¬getCHamiltoniano(v, l, v)`)
        //Peor de los casos
             KTE          1       1
        l.eliminar(l.getTamanio() - 1);
    else
        //Mejor de los casos
               KTE
        l.insertarAlFinal(v);

             (n + 4)
    `25¬this.limpiaVisitasV()`;
        1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 5 + 3 + n + 4 + KTE + 1 + 1T(\frac{n}{1}) + O(n) + KTE + 2 + n + 4 + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n) + n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __37. Obtener Ciclo Hamiltoniano Grafo Privado (getCHamiltoniano)__

```java
/**
 * Metodo de tipo privado que permite generar el recorrido del Arbol Hamiltoniano. <br>
 * @param v2 Representa el Vertice sobre el cual se encuentra iterando durante el recorrido. <br>
 * @param l Representa la lista donde se almacena el recorrido del Grafo. <br>
 * @param orig Representa el vertics desde el cual comienza el recorrido. <br>
 * @return Un objeto de tipo boolean dependiendo si existe el Grafo Hamiltoniano.
 */
private boolean getCHamiltoniano(Vertice v2, ListaCD < Vertice > l, Vertice orig) {
               1         1             1         1        KTE
    if (l.getTamanio() == vertices.getTamanio() && v2.esAdyacente(orig))
        //Mejor de los casos
              1
        return (true);
         1    1            (3n + 5)              1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
          1
    if (v == null)
        //Mejor de los casos
                1
        return (false);
          1
    v.setVisit(true);
            2             1
    for (Object v3: v.getVecinos()) {
               1     1     1
        Vertice vert = (Vertice) v3;
             1       1
        if (!vert.getVisit()) {
                   KTE
            l.insertarAlFinal(vert);
                //Llamado Recursivo 1
            if (getCHamiltoniano(vert, l, orig))
                //Mejor de los casos
                     1
                return (true);
            else 
                //Peor de los casos
                     KTE          1      1
                l.eliminar(l.getTamanio() - 1);
        }
    }
           1
    v.setVisit(false);
          1
    return (false);
}
```

* ### __Costo Operacional__

  $O({n}) = 4 + KTE + 3 + 3n + 5 + 1 + 1 + 3 + n(3 + 2 + KTE + KTE + 2) + 3 + 1 + 1$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __38. Consultar Existencia Camino Hamiltoniano Grafo (hayCaminoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si existe un camino Hamiltoniano en el Grafo; <br>
 * Un camino Hamiltoniano es una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se evaluo si el Grafo creado posee un camino Hamiltoniano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean hayCaminoHamiltoniano() {
       1    1  (1T(n^{2}/1) + O(n^{2}) + n(KTE) + 2n + 18) KTE
    return (!this.getCaminoHamiltoniano().esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{2}) + n(KTE) + 2n + 20$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __39. Obtener Camino Hamiltoniano Grafo (getCaminoHamiltoniano)__

```java
/**
 * Metodo que permite conocer si existe un camino Hamiltoniano en el Grafo; <br>
 * Un camino Hamiltoniano es una sucesión de aristas adyacentes, que visita todos los vértices del grafo una sola vez. <br>
 * <b>post:</b> Se retorno el camino Hamiltoniano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el camino del Grafo Hamiltoniano.
 */
public ListaCD < Vertice > getCaminoHamiltoniano() {
       1          1       1        1       1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
           (n + 4)
    `25¬this.limpiaVisitasV()`;
             2
    for (Vertice v: vertices) {
                KTE
        l.insertarAlFinal(v);
              (1T(\frac{n}{1}) + O(n))
        if (`40¬getCamHamiltoniano(v, l)`)
            //Mejor de los casos
                 1
            return (l);
        else {
            //Peor de los casos
                KTE
            l.vaciar();
                   (n + 4)
            `25¬this.limpiaVisitasV()`;
        }
    }
          (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + n + 4 + 2 + n(KTE + 1T(\frac{n}{1}) + O(n) + KTE + n + 4) + 2 + n + 4 + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{2}) + n(KTE) + 2n + 18$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __40. Obtener Camino Hamiltoniano Grafo Privado (getCamHamiltoniano)__

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
               1        1             1
    if (l.getTamanio() == vertices.getTamanio()) {
        //Mejor de los casos
              1
        return (true);
    }
         1    1           (3n + 5)               1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
            1
    if (v == null)
        //Mejor de los casos
              1
        return (false);
        1
    v.setVisit(true);
              2            1
    for (Object v3: v.getVecinos()) {
               1     1      1
        Vertice vert = (Vertice) v3;
            1          1
        if (!vert.getVisit()) {
                    KTE
            l.insertarAlFinal(vert);
                //Llamado Recursivo 1
            if (getCamHamiltoniano(vert, l))
                //Mejor de los casos
                      1
                return (true);
            else 
                //Peor de los casos
                      KTE          1      1
                l.eliminar(l.getTamanio() - 1);
        }
    }
           1
    v.setVisit(false);
         1
    return (false);
}
```

* ### __Costo Operacional__

  $O({n}) = 3 + 3 + 3n + 5 + 1 + 1 + 3 + n(3 + 2 + KTE + KTE + 2) + 3 + 1 + 1$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __41. Evaluar Grafo si es Euleriano (esGrafoEuleriano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoEuleriano, es decir, representa un circuito Euleriano; <br>
 * Un Grafo es Euleriano si posee un camino que recorre todas las aristas de un grafo tan solo una única vez, <br>
 * comenzando y terminando en el mismo Vertice. <br>
 * <b>post:</b> Se evaluo si el Grafo creado es un Grafo Euleriano. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean esGrafoEuleriano() {
             2
    for (Vertice v: this.vertices) {
             1    1             (3n + 10)             1
        int grado = `82¬this.getGradoVertice((T) v.getInfo())`;
                  1    1
        if (grado % 2 != 0)
            //Mejor de los casos
                   1
            return (false);
    }
            1    1    (1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 10)  KTE    
    boolean rta = `42¬this.getCicloEuleriano()`.esVacia();
        1   1
    return (!rta);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(3 + 3n + 10 + 2) + 2 + 2 + KTE + 1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 10 + 2$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{3})$

***

## __42. Obtener Ciclo Euleriano Grafo (getCicloEuleriano)__

```java
/**
 * Metodo que permite conocer si un Grafo es GrafoEuleriano, es decir, representa un circuito Euleriano; <br>
 * Un Grafo es Euleriano si posee un camino que recorre todas las aristas de un grafo tan solo una única vez, <br>
 * comenzando y terminando en el mismo Vertice. <br>
 * <b>post:</b> Se retorno el ciclo Euleriano del grafo.. <br>
 * @return Un objeto de tipo ListaCD que representa el recorrido del Grafo Euleriano.
 */
public ListaCD < Vertice > getCicloEuleriano() {
       1        1          1        1       1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
            2
    for (Vertice v: vertices) {
                (n + 4)
        `26¬this.limpiaVisitasA()`;
                 KTE
        l.insertarAlFinal(v);
            (1T(n/1) + O(n^{2}))
        if (`43¬getCEuleriano(v, l)`)
                1
            return (l);
        else
                 KTE
            l.vaciar();
    }
            (n + 4)
    `26¬this.limpiaVisitasA()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + 2 + n(n + 4 + KTE + 1T(\frac{n}{1}) + O(n^{2}) + 1) + 2 + (n + 4) + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 10$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{3})$

***

## __43. Obtener Ciclo Euleriano Grafo Privado (getCEuleriano)__

```java
/**
 * Metodo de tipo privado que permite generar el recorrido del Arbol Euleriano. <br>
 * @param v2 Representa el Vertice sobre el cual se encuentra iterando durante el recorrido. <br>
 * @param l Representa la lista donde se almacena el recorrido del Grafo. <br>
 * @return Un objeto de tipo boolean dependiendo si existe el Grafo Euleriano.
 */
private boolean getCEuleriano(Vertice v2, ListaCD < Vertice > l) {
           1     1     1
    Vertice orig = l.get(0);
          1    1          (3n + 5)              1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
          1     1       (n(KTE) + 5)         1                1
    Arista ari = `12¬this.buscarArista((T) v.getInfo(), (T) orig.getInfo())`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (false);
              1          1          1          1          KTE            1     1      1     1    1
    if (l.getTamanio() == aristas.getTamanio() && v2.esAdyacente(orig) && ari != null && !ari.getVisit()) {
        //Mejor de los casos
                 KTE
        l.insertarAlFinal(orig);
                1
        return true;
    }
             2            1
    for (Object v3: v.getVecinos()) {
              1      1      1
        Vertice vert = (Vertice) v3;
             1   1             (n(KTE) + 5)      1                 1
        Arista a = `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`;
        //Si la Arista no ha sido visitada.
            1      1
        if (!a.getVisit()) {
                   1
            a.setVisit(true);
                     KTE
            l.insertarAlFinal(vert);
                //Llamado Recursivo 1
            if (getCEuleriano(vert, l))
                //Mejor de los casos
                     1
                return true;
            else {
                //Peor de los casos
                       1
                a.setVisit(false);
                     KTE           1      1
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

  $({B}) = 1$

  $({C}) = O(n^{2}) -> 2$

  $T({n}) = 1T(\frac{n}{1}) + O(n^{2})$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O(n^{2})$

***

## __44. Consultar Existencia Camino Euleriano Grafo (hayCaminoEuleriano)__

```java
/**
 * Metodo que permite conocer si existe un camino Euleriano en el Grafo; <br>
 * Un camino Euleriano posee un camino que recorre todas las aristas de un grafo tan solo una única vez. <br>
 * <b>post:</b> Se retorno el camino Euleriano del grafo. <br>
 * @return Un objeto de tipo boolean con el resultado de la operacion.
 */
public boolean hayCaminoEuleriano() {
       1       1
    int impares = 0;
              (n + 4)
    `26¬this.limpiaVisitasA()`;
             2
    for (Vertice v: this.vertices) {
             1    1       (n^{2} + 22n + n(KTE) + 46)       1        1        (n^{2} + 22n + n(KTE) + KTE)  1
        int grado = `69¬this.getGradoEntradaVert((T) v.getInfo())` + `68¬this.getGradoSalidaVert((T) v.getInfo())`;
                  1    1
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
            1 1   (1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 2n + 18)         
    boolean x = `45¬this.getCaminoEuleriano()`.esVacia();
            (n + 4)
    `26¬this.limpiaVisitasA()`;
       1
    return (!x);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (n + 4) + n(4 + 2 + 2n^{2} + 44n + 2n(KTE) + KTE + 2 + 1) + 2 + 3 + 2 + 1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 2n + 18 + (n + 4) + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) $

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{3})$

***

## __45. Obtener Camino Euleriano Grafo (getCaminoEuleriano)__

```java
/**
 * Metodo que permite conocer si existe un camino Euleriano en el Grafo; <br>
 * Un camino Euleriano posee un camino que recorre todas las aristas de un grafo tan solo una única vez. <br>
 * <b>post:</b>  Se retorno el camino Euleriano del grafo. <br>
 * @return Un objeto de tipo ListaCD que representa el camino del Grafo Euleriano.
 */
public ListaCD < Vertice > getCaminoEuleriano() {
        1        1         1       1        1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
             (n + 4)
    `26¬this.limpiaVisitasA()`;
            2
    for (Vertice v: vertices) {
                (n + 4)
        `26¬this.limpiaVisitasA()`;
                KTE
        l.insertarAlFinal(v);
            (1T(n/1) + O(n^{2}))
        if (`46¬getCamEuleriano(v, l)`)
                 1
            return (l);
        else 
                KTE
            l.vaciar();
    }
            (n + 4)
    `26¬this.limpiaVisitasA()`;
          1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + (n + 4) + 2 + n(n + 4 + KTE + 1T(\frac{n}{1}) + O(n^{2}) + 1) + 2 + (n + 4) + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{3}) + n(KTE) + 2n + 18$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{3})$

***

## __46. Obtener Camino Euleriano Grafo Privado (getCamEuleriano)__

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
           1  1          (3n + 5)                1
    Vertice v = `11¬this.buscarVertice((T) v2.getInfo())`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (false);
               1         1     1          1
    if ((l.getTamanio() - 1) == aristas.getTamanio()) {
        //Mejor de los casos
              1
        return true;
    }
             2            1
    for (Object v3: v.getVecinos()) {
            1         1     1 
        Vertice vert = (Vertice) v3;
            1    1           (n(KTE) + 5)       1                    1
        Arista a = `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`;
        //Si la Arista no ha sido visitada.
            1
        if (!a.getVisit()) {
                 1
            a.setVisit(true);
                    KTE
            l.insertarAlFinal(vert);
                //Llamado Recursivo 1
            if (getCamEuleriano(vert, l))
                //Mejor de los casos
                      1
                return true;
            else {
                //Peor de los casos
                        1
                a.setVisit(false);
                      KTE          1      1
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

  $({B}) = 1$

  $({C}) = O(n^{2}) -> 2$

  $T({n}) = 1T(\frac{n}{1}) + O(n^{2})$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O(n^{2})$

***

## __47. Consultar Existencia Camino Entres Vertices Grafo Conexo (existeRutaEntre)__

```java
/**
 * Metodo que permite evaluar la existencia de un camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se evaluo la existencia de una ruta entre dos vertices. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo boolean que es true si existe ruta entre los vertices.
 */
public boolean existeRutaEntre(T orig, T dest) {
            (n + 4)
    `25¬this.limpiaVisitasV()`;
           1    1          (3n + 5)
    Vertice v1 = `11¬this.buscarVertice(orig)`;
          1     1          (3n + 5)
    Vertice v2 = `11¬this.buscarVertice(dest)`;
            1      1      1
    if (v1 == null || v2 == null)
        //Mejor de los casos
              1
        return (false);
         1       1    (1T(n/1) + O(n))
    boolean rta = `48¬existeRuta(v1, v2)`;
           (n + 4)
    `25¬this.limpiaVisitasV()`;
          1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) =  n + 4 + 2 + 3n + 5 + 2 + 3n + 5 + 3 + 2 + 1T(\frac{n}{1}) + O(n) + n + 4 + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n) + 8n + 28$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __48. Consultar Existencia Camino Entres Vertices Grafo Conexo Privado (existeRuta)__

```java
/**
 * Metodo de tipo privado que permite evaluar la existencia de un camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se evaluo la existencia de una ruta entre dos vertices. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo boolean que es true si existe ruta entre los vertices.
 */
private boolean existeRuta(Vertice orig, Vertice dest) {
                 KTE          1
    if (orig.esAdyacente(dest))
              1
        return (true);
         1    1            (3n + 5)                1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
          1
    if (v == null)
        //Mejor de los casos
              1
        return (false);
          1
    v.setVisit(true);
             2            1
    for (Object v3: v.getVecinos()) {
                1    1     1
        Vertice vert = (Vertice) v3;
             1        1
        if (!vert.getVisit()) {
                1  //Llamado Recursivo 1
            if (existeRuta(vert, dest))
               //Mejor de los casos
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

  $O({n}) = KTE + 1 + 3 + (3n + 5) + 1 + 1 + 3 + n(3 + 2 + 1) + 3 + 1 + 1$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __49. Obtener Camino Entre Vertices Grafo Conexo (getRutaEntre)__

```java
/**
 * Metodo que permite devolver el camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return La ruta entre los dos vertices indicados, representados en una Lista.
 */
public ListaCD < Vertice > getRutaEntre(T orig, T dest) {
         1      1          1       1         1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
          (n + 4)
    `25¬this.limpiaVisitasV()`;
        1      1         (3n + 5)
    Vertice v1 = `11¬this.buscarVertice(orig)`;
        1      1           (3n + 5)
    Vertice v2 = `11¬this.buscarVertice(dest)`;
           1        1     1
    if (v1 == null || v2 == null)
        //Mejor de los casos
             1
        return (l);
             KTE
    l.insertarAlInicio(v1);
        1    (1T(n/1) + O(n))
    if (!`50¬getRuta(v1, v2, l)`)
        //Peor de los casos
              KTE          1      1
        l.eliminar(l.getTamanio() - 1);
    else
        //Mejor de los casos
                    KTE
        l.insertarAlFinal(v2);

            (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + (n + 4) + 2 + (3n + 5) + 2 + (3n + 5) + 3 + KTE + 1 + (1T(\frac{n}{1}) + O(n)) + KTE + 1 + 1 + (n + 4) + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n) + 8n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __50. Evaluar Camino Entre Vertices Grafo Conexo (getRuta)__

```java
/**
 * Metodo de tipo privado que permite devolver el camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param l Representa la ruta entre los dos Vertices indicados. <br>
 * @return La ruta entre los dos vertices indicados, representados en una Lista.
 */
public boolean getRuta(Vertice orig, Vertice dest, ListaCD < Vertice > l) {
                KTE           1
    if (orig.esAdyacente(dest))
        //Mejor de los casos
              1
        return (true);
          1   1           (3n + 5)                  1
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
           1
    if (v == null)
        //Mejor de los casos
               1
        return (false);
         1
    v.setVisit(true);
              2             1
    for (Object v3: v.getVecinos()) {
              1      1      1
        Vertice vert = (Vertice) v3;
             1       1
        if (!vert.getVisit()) {
                     KTE
            l.insertarAlFinal(vert);
                1  //Llamado Recursivo 1
            if (getRuta(vert, dest, l))
                //Mejor de los casos
                      1
                return (true);
            else 
                     KTE           1       1
                l.eliminar(l.getTamanio() - 1);
        }
    }
         1
    v.setVisit(false);
          1
    return (false);
}
```

* ### __Costo Operacional__

  $O({n}) = KTE + 1 + 3 + (3n + 5) + 1 + 1 + 3 + n(3 + 2 + KTE + 1 + KTE + 1 + 1) + 3 + 1 + 1$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __51. Obtener Longitud Número Nodos Camino Entre Vertices Grafo Conexo (getLongitudDeCamino)__

```java
/**
 * Metodo que permite conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public int getLongitudDeCamino(T orig, T dest) {
    int longi[] = {
        0
    };
           (n + 4)
    `25¬this.limpiaVisitasV()`;
                         (3n + 5)
    Vertice v1 = `11¬this.buscarVertice(orig)`;
                         (3n + 5)
    Vertice v2 = `11¬this.buscarVertice(dest)`;
    if (v1 == null || v2 == null)
        return (-1);
    if (!longitudDeCam(v1, v2, longi))
        return (-1);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
    return (longi[0]);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __52. Evaluar Longitud Número Nodos Camino Entre Vertices Grafo Conexo (longitudDeCam)__

```java
/**
 * Metodo que permite conocer la longitud en numero de Nodos de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param longi Representa las longitud de camino para cada uno de los Vertices. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public boolean longitudDeCam(Vertice orig, Vertice dest, int longi[]) {
    if (orig.esAdyacente(dest)) {
        longi[0]++;
        return (true);
    }
                         (3n + 5)
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
    if (v == null)
        return (false);
    v.setVisit(true);
    for (Object v3: v.getVecinos()) {
        Vertice vert = (Vertice) v3;
        if (!vert.getVisit()) {
            longi[0]++;
            if (longitudDeCam(vert, dest, longi))
                return (true);
            else longi[0]--;
        }
    }
    v.setVisit(false);
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __53. Obtener Longitud Ponderada Camino Entre Vertices Grafo Conexo (getLongitudPonderadaDeCamino)__

```java
/**
 * Metodo que permite conocer la longitud ponderada de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public int getLongitudPonderadaDeCamino(T orig, T dest) {
    if (!esGrafoPonderado())
        return (-1);
    int longi[] = {
        0
    };
           (n + 4)
    `25¬this.limpiaVisitasV()`;
                        (3n + 5)
    Vertice v1 = `11¬this.buscarVertice(orig)`;
                        (3n + 5)
    Vertice v2 = `11¬this.buscarVertice(dest)`;
    if (v1 == null || v2 == null)
        return (-1);
    if (!longitudPondeDeCam(v1, v2, longi))
        return (-1);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
    return (longi[0]);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __54. Evaluar Longitud Ponderada Camino Entre Vertices Grafo Conexo (longitudPondeDeCam)__

```java
/**
 * Metodo que permite conocer la longitud en sumatoria del peso de aristas de camino entre dos vertices del Grafo Conexo. <br>
 * <b> post: </b> Se retorno la longitud de camino de la ruta entre dos Vertices de un Grafo conexo. <br>
 * @param orig Representa el vertice en el orgen de la ruta a consultar. <br>
 * @param dest Representa el vertice en el destino de la ruta a consultar. <br>
 * @param longi Representa las longitud de camino para cada uno de los Vertices. <br>
 * @return Un objeto de tipo int con la longitud de camino entre los Vertices.
 */
public boolean longitudPondeDeCam(Vertice orig, Vertice dest, int longi[]) {
    if (orig.esAdyacente(dest)) {
                                                               (n(KTE) + 5)
        longi[0] = (Integer) longi[0] + ((Integer) `12¬this.buscarArista((T) orig.getInfo(), (T) dest.getInfo())`.getPeso());
        return (true);
    }
                          (3n + 5)
    Vertice v = `11¬this.buscarVertice((T) orig.getInfo())`;
    if (v == null)
        return (false);
    v.setVisit(true);
    for (Object v3: v.getVecinos()) {
        Vertice vert = (Vertice) v3;
        if (!vert.getVisit()) {
                                                                (n(KTE) + 5)
            longi[0] = (Integer) longi[0] + ((Integer) `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`.getPeso());
            if (longitudPondeDeCam(vert, dest, longi))
                return (true);
            else
                                                          (n(KTE) + 5)
                longi[0] = longi[0] - ((Integer) `12¬this.buscarArista((T) v.getInfo(), (T) vert.getInfo())`.getPeso());
        }
    }
    v.setVisit(false);
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __55. Consultar Peso Ruta Minima Entre Vertices (longRutaMinimaDijkstra)__

```java
/**
 * Metodo que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la longitud de la ruta minima entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param fin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta Minima.
 */
public int longRutaMinimaDijkstra(T ini, T fin) {
                      (9n + 5)
    if (`59¬this.hayPesosNegativosONullos()`)
        //Mejor de los casos
              1
        return (-1);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
    int costos[] = new int[vertices.getTamanio()];
                           (3n + 5)
    Vertice vIni = `11¬this.buscarVertice(ini)`;
                           (3n + 5)
    Vertice vFin = `11¬this.buscarVertice(fin)`;
    if (vIni == null || vFin == null)
        return (-1);
    vIni.setVisit(true);
    this.dijkstra(vIni, vFin, costos);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
    return (costos[vertices.getIndice(vFin)]);
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __56. Metodo para Calcular Peso Minimo Entre Vertices (dijkstra)__

```java
/**
 * Metodo que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la longitud de la ruta minima entre dos Vertices. <br>
 * @param vIni Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param vFin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @param costos Representa los costos minimos de cada vertice en el recorrido. <br>
 */
private void dijkstra(Vertice vIni, Vertice vFin, int costos[]) {
    if (vIni.equals(vFin)) {
        return;
    }
    for (Object v: vIni.getVecinos()) {
        Vertice vert = (Vertice) v;
                               (3n + 5)
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
        int p = costos[vertices.getIndice(vIni)];
        int c = costos[vertices.getIndice(orig)];
                                      (n(KTE) + 5)
        int pesoAri = ((Integer) `12¬buscarArista((T) vIni.getInfo(), (T) orig.getInfo())`.getPeso());
        if (!orig.getVisit()) {
            orig.setVisit(true);
            if (c == 0 || c > (p + pesoAri)) {
                costos[vertices.getIndice(orig)] = (p + pesoAri);
            }
            dijkstra(orig, vFin, costos);
            orig.setVisit(false);
        }
    }
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + 1 + 1 + 1$

  $T({n}) =  4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __57. Obtener Ruta Minima Entre Vertices (rutaMinimaDijkstra)__

```java
/**
 * Metodo de tipo privado que permite calcular el peso de la ruta minima entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la ruta minima entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido del Dijsktra. <br>
 * @param fin Representa el Vertice final en el recorrido del Dijsktra. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta Minima.
 */
public ListaCD < Vertice > rutaMinimaDijkstra(T ini, T fin) {
         1       1         1        1        1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
                   (9n + 5)               1
    if (`59¬this.hayPesosNegativosONullos()`)
        //Mejor de los casos
             1
        return (l);

           (n + 4)
    `25¬this.limpiaVisitasV()`;
      1          1       1              1
    int costos[] = new int[vertices.getTamanio()];
         1       1            (3n + 5)
    Vertice vIni = `11¬this.buscarVertice(ini)`;
         1       1           (3n + 5)
    Vertice vFin = `11¬this.buscarVertice(fin)`;
              1       1       1
    if (vIni == null || vFin == null)
        //Mejor de los casos
              1
        return (l);
             1
    vIni.setVisit(true);
        (1T(n/1) + O(n^{2}))
    `58¬this.dijkstra(vIni, vFin, costos, l)`;
    //Aqui deberia hacer el recorrido invertido
         1           (3n + 5)
    vFin = `11¬this.buscarVertice(fin)`;
                 1
    while (vFin != null) {
                  KTE
        l.insertarAlInicio(vFin);
              1            1
        vFin = vFin.getPredecesor();
    }
               (n + 4)
    `72¬this.limpiarPredecesores()`;
           (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) = 5 + (9n + 5) + 1 + (n + 4) + 4 + 2 + (3n + 5) + 2 + (3n + 5) + 3 + 1 + (1T(n/1) + O(n^{2})) + 1 + (3n + 5) + 1 + n(KTE + 2) + 1 + (n + 4) + (n + 4)$

  $T({n}) = 1T(n/1) + O(n^{2}) + 23n + n(KTE) + 48$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __58. Metodo para Calcular Peso Ruta Minima Entre Vertices en Un Reocrrido (dijkstra)__

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
        //Mejor de los casos
           1
        return;
    }
             2               1
    for (Object v: vIni.getVecinos()) {
              1      1      1
        Vertice vert = (Vertice) v;
               1     1           (3n + 5)                 1
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
           1  1                   KTE
        int p = costos[vertices.getIndice(vIni)];
           1  1                   KTE
        int c = costos[vertices.getIndice(orig)];
           1  1            1              (n(KTE) + 5)        1                   1            1
        int pesoAri = ((Integer) `12¬buscarArista((T) vIni.getInfo(), (T) orig.getInfo())`.getPeso());
             1         1
        if (!orig.getVisit()) {
                     1
            orig.setVisit(true);
                   1    1   1    1
            if (c == 0 || c > (p + pesoAri)) {
                                    KTE           1   1
                costos[vertices.getIndice(orig)] = (p + pesoAri);
                            1
                orig.setPredecesor(vIni);
            }
            //Llamado Recursivo 1
            dijkstra(orig, vFin, costos, l);
                    1
            orig.setVisit(false);
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 2 + 3 + n(3 + 3 + (3n + 5) + 2 + KTE + 2 + KTE + 6 + (n(KTE) + 5) + 2 + 1 + 4 + KTE + 2 + 1 + 1) + 3$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 2$

  $T({n}) = 1T(\frac{n}{1}) + O(n^{2})$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O(n^{2})$

***

## __59. Consultar Existencia Aristas Peso Negativo o Nulo (hayPesosNegativosONullos)__

```java
/**
 * Metodo de tipo privado que permite evaluar la existencia de Aristas con peso negativo. <br>
 * @return Un objeto de tipo boolean con true si existen aristas con pesos negativos. <br>
 */
private boolean hayPesosNegativosONullos() {
             2 
    for (Arista a: this.aristas) {
                  1      1     1         1     1     1       1         1       1
        if (a.getPeso() == -1 || (a.getPeso() != -1 && ((Integer) a.getPeso()) < 0))
            //Mejor de los casos
                  1
            return (true);
    }
          1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + n(9) + 2 + 1$

  $T({n}) = 9n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __60. Metodo para Calcular Ruta Más Corta Entre Vertices (rutaMasCorta)__

```java
/**
 * Metodo que permite calcular la ruta mas corta entre dos Vertices indicados. <br>
 * <b> post:</b> Se retorno la ruta mas corta entre dos Vertices. <br>
 * @param ini Representa el Vertice inicial en el recorrido. <br>
 * @param fin Representa el Vertice final en el recorrido. <br>
 * @return Un objeto de tipo int con el valor de la longitud de la ruta mas corta.
 */
public int rutaMasCorta(T ini, T fin) {
           (n + 4)
    `25¬this.limpiaVisitasV()`;
        1       1      1              1
    int cant[] = new int[vertices.getTamanio()];
          1      1            (3n + 5)
    Vertice vIni = `11¬this.buscarVertice(ini)`;
          1      1           (3n + 5)
    Vertice vFin = `11¬this.buscarVertice(fin)`;
              1       1       1
    if (vIni == null || vFin == null)
        //Mejor de los casos
             1
        return (-1);
              1
    vIni.setVisit(true);
        1   1
    int tam = 1;
        (1T(n/1) + O(n))
    `61¬this.rutaMasCorta(vIni, vFin, cant, tam)`;
           (n + 4)
    `25¬this.limpiaVisitasV()`;
         1                   KTE
    return (cant[vertices.getIndice(vFin)]);
}
```

* ### __Costo Operacional__

  $T({n}) =  (n + 4) + 4 + 2 + (3n + 5) + 2 + (3n + 5) + 3 + 1 + 2 + (1T(n/1) + O(n)) + (n + 4) + 1 + KTE$

  $T({n}) =  1T(n/1) + O(n) + 8n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __61. Metodo para Calcular Ruta Más Corta Entre Vertices Privado (rutaMasCorta)__

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
        //Mejor de los casos
          1
        return;
    }
             2               1
    for (Object v: vIni.getVecinos()) {
               1     1     1
        Vertice vert = (Vertice) v;
               1      1           (3n + 5)                1
        Vertice orig = `11¬this.buscarVertice((T) vert.getInfo())`;
           1   1                    KTE
        int c = cant[vertices.getIndice(orig)];
            1         1
        if (!orig.getVisit()) {
                      1
            orig.setVisit(true);
                  1
            if (c == 0)
               //Mejor de los casos
                                  KTE          1
                cant[vertices.getIndice(orig)] = tam;
            else
            //Peor de los casos
                   1    1   1
            if (c == 0 || c > tam) {
                                  KTE          1
                cant[vertices.getIndice(orig)] = tam;
            }
            //Llamado Recursivo 1
            rutaMasCorta(orig, vFin, cant, tam);
                    1
            orig.setVisit(false);
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 2 + 2 + 3 + n(3 + 3 + (3n + 5) + 2 + KTE + 2 + 1 + 1 + 3 + KTE + 1 + 1) + 3$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __62. Obtener Recorrido del Grafo en Profundidad (getBEP)__

```java
/**
 * BUSQUEDA EN PROFUNDIDAD
 * Metodo que permite realizar el recorrido del Grafo en Profunidad. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en profundidad. <br>
 * @param infoVert Representa la informacion del Vertices inicial sobre el cual comienza el recorrido. <br>
 * @return Un objeto de tipo ListaCD con el recorrido del Grafo en profundidad.
 */
public ListaCD < Vertice > getBEP(T infoVert) {
         1         1      1       1          1
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
        1     1           (3n + 5)
    Vertice v = `11¬this.buscarVertice(infoVert)`;
          1
    if (v == null)
        //Mejor de los casos
             1
        return (l);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
             KTE
    l.insertarAlFinal(v);
          1
    v.setVisit(true);
     (1T(n/1) + O(n))
    `63¬getBEP(v, l)`;
           (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + 2 + (3n + 5) + 1 + (n + 4) + KTE + 1 + (1T(\frac{n}{1}) + O(n)) + (n + 4) + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n) + 5n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __63. Obtener Recorrido del Grafo en Profundidad Privado (getBEP)__

```java
/**
 * Metodo de tipo privado que permite realizar el recorrido del Grafo en Profunidad. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en profundidad. <br>
 * @param v Representa el Vertice inicial sobre el cual comienza el recorrido. <br>
 * @param l Representa el listado con el recorrido del Grafo en Profundidad.
 */
public void getBEP(Vertice v, ListaCD < Vertice > l) {
             2            1
    for (Object v2: v.getVecinos()) {
               1      1     1
        Vertice vert = (Vertice) v2;
            1         1
        if (!vert.getVisit()) {
                    KTE
            l.insertarAlFinal(vert);
                      1
            vert.setVisit(true);
            //Llamado Recursivo 1
            getBEP(vert, l);
        }
    }
}
```

* ### __Costo Operacional__

  $O({n}) = 3 + n(3 + 2 + KTE + 1) + 3$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __64. Obtener Recorrido del Grafo en Anchura (getBEA)__

```java
/**
 * BUSQUEDA EN ANCHURA
 * Metodo que permite realizar el recorrido del Grafo en Anchura. <br>
 * <b>post:</b> Se realizo un recorrido del Grafo en Anchura. <br>
 * @param infoVert Representa la informacion del Vertices inicial sobre el cual comienza el recorrido. <br>
 * @return Un objeto de tipo ListaCD con el recorrido del Grafo en Anchura.
 */
public ListaCD < Vertice > getBEA(T infoVert) {
         1       1        1        1         1 
    ListaCD < Vertice > l = new ListaCD < Vertice > ();
      1        1        1     1      1 
    Cola < Vertice > c = new Cola < Vertice > ();
         1    1           (3n + 5)
    Vertice v = `11¬this.buscarVertice(infoVert)`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (l);
           (n + 4)
    `25¬this.limpiaVisitasV()`;
             KTE
    l.insertarAlFinal(v);
          1
    v.setVisit(true);
      (1T(n/1) + O(n))
    `65¬getBEA(v, l, c)`;
           (n + 4)
    `25¬this.limpiaVisitasV()`;
         1
    return (l);
}
```

* ### __Costo Operacional__

  $T({n}) =  5 + 5 + 2 + (3n + 5) + 1 + (n + 4) + KTE + 1 + (1T(\frac{n}{1}) + O(n)) + (n + 4) + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n) + 4n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __65. Obtener Recorrido del Grafo en Anchura Privado (getBEA)__

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
        //Mejor de los casos
           1
        return;
            2             1
    for (Object v2: v.getVecinos()) {
               1     1     1
        Vertice vert = (Vertice) v2;
            1         1
        if (!vert.getVisit()) {
                     KTE
            l.insertarAlFinal(vert);
                 KTE
            c.enColar(vert);
                    1
            vert.setVisit(true);
        }
    }
    /*Llamado Recursivo 1*/ KTE
    getBEA(c.deColar(), l, c);
}
```

* ### __Costo Operacional__

  $O({n}) = 1 + 3 + n(3 + 2 + KTE + KTE + 1) + 3 + KTE$

  $({A}) = 1$

  $({B}) = 1$

  $({C}) = O(n) -> 1$

  $T({n}) = 1T(\frac{n}{1}) + O(n)$

* ### __Complejidad (Notación Asintótica)__

  $\log_1(1) = 0$

  $Big O = O({n})$

***

## __66. Consultar Existencia Datos en el Grafo (esVacio)__

```java
/**
 * Metodo que permite conocer si un Grafo se encuentra o no vacio. <br>
 * <b>post:</b> Se evaluo la existencia de datos dentro del Grafo. <br>
 * @return Un objeto de tipo boolean con true si el Grafo se encuentra vacio.
 */
public boolean esVacio() {
       1                   KTE
    return (this.vertices.esVacia());
}
```

* ### __Costo Operacional__

  $T({n}) =  1 + KTE$

  $T({n}) =  KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __67. Evaluar Vertices si son Adyacentes (sonVerticesAdyacentes)__

```java
/**
 * Metodo que permite conocer si dos vertices son adyacentes/vecinos. <br>
 * @param orig Representa el Vertice del cual se desea saber si es adyacente. <br>
 * @param dest Representa el Vertice del cual se desea saber si es adyacente. <br>
 * @return Un objeto de tipo boolean que evalua la adyacencia de los dos Vertices.
 */
public boolean sonVerticesAdyacentes(T orig, T dest) {
           1        1          (3n + 5)
    Vertice < T > a = `11¬this.buscarVertice(orig)`;
           1        1          (3n + 5)
    Vertice < T > b = `11¬this.buscarVertice(dest)`;
           1       1    1
    if (a == null || b == null)
        //Mejor de los casos
               1
        return (false);
    //Vertice a es Adyacenta a b, o es adyacente desde b.
       1          1           1         1
    return (a.esAdyacente(b) || b.esAdyacente(a));
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 2 + (3n + 5) + 3 + 4$

  $T({n}) =  6n + 21$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __68. Obtener Grado Salida de un Vertice (getGradoSalidaVert)__

```java
/**
 * Metodo que permite conocer el Grado de salida de un Vertice. <br>
 * <b>post:</b> Se retorno el grado de salida del Vertice. <br>
 * @param info Represente la informacion del Vertice a evaluar. <br>
 * @return Un objeto de tipo int con el Grado de salida del Vertice.
 */
public int getGradoSalidaVert(T info) {
          1   1            (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (-1);
          1      1   (n^{2} + 14n + n(KTE) + 25)
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
        1   1              KTE      1      1          1
    int pos = vertices.getIndice(v) + 1, i = 1, grado = 0;
             1
    while (i < m.length) {
               1      1      1             2
        grado = grado + ((Integer) m[pos][i++]);
    }
           1
    return (grado);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 2 + (n^{2} + 14n + n(KTE) + 25) + 5 + KTE + 1 + n(5) + 1 + 1$

  $T({n}) =  n^{2} + 22n + n(KTE) + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __69. Obtener Grado Entrada de un Vertice (getGradoEntradaVert)__

```java
/**
 * Metodo que permite conocer el Grado de entrada de un Vertice. <br>
 * <b>post:</b> Se retorno el grado de entrada del Vertice. <br>
 * @param info Represente la informacion del Vertice a evaluar. <br>
 * @return Un objeto de tipo int con el Grado de entrada del Vertice.
 */
public int getGradoEntradaVert(T info) {
          1    1          (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (-1);
          1      1     (n^{2} + 14n + n(KTE) + 25)     
    Object m[][] = `14¬this.getMatrizAdyacencia()`;
         3  1               1        1     1          1 
    int pos = vertices.getIndice(v) + 1, i = 1, grado = 0;
              1
    while (i < m.length) {
              1       1      1         2
        grado = grado + ((Integer) m[i++][pos]);
    }
          1
    return (grado);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 2 + (n^{2} + 14n + n(KTE) + 25) + 8 + 1 + n(5) + 1 + 1$

  $T({n}) =  n^{2} + 22n + n(KTE) + 46$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __70. Evaluar Vertice si es Aislado en el Grafo (esVerticeAislado)__

```java
/**
 * Metodo que permite evaluar si un Vertice se encuentra aislado dentro del Grafo. <br>
 * <b>post:</b> Se evaluo si un Vertice es Aislado en el Grafo. <br>
 * @param info Representa la informacion del Vertice que se desea evaluar. <br>
 * @return Un objeto de tipo boolean con true si el vertice es aislado.
 */
public boolean esVerticeAislado(T info) {
          1      1            (3n + 5)
    Vertice vert = `11¬this.buscarVertice(info)`;
             1
    if (vert == null)
        //Mejor de los casos
              1
        return (true);
              2 
    for (Vertice v: this.vertices) {
             1       1        1       1
        ListaCD < Vertice > l = v.getVecinos();
                  2
        for (Vertice v2: l) {
            //Si accedido desde algun vertice
                1    1           1       2
            if (!v.equals(vert) && v2.equals(vert))
                //Mejor de los casos
                      1
                return (false);
        }
    }
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 2 + n(4 + 2 + n(5) + 2) + 2 + 1$

  $T({n}) =  5n^{2} + 11n + 13$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __71. Obtener Vertices Adyacentes de un Vertice Específico (getVecinosVertice)__

```java
/**
 * Metodo que permite conocer los vertices adyacentes/vecinos a un vertice indicado. <br>
 * <b>post:</b> Se retorno el conjunto de Vertices vecinos al info indicado. <br>
 * @param info Representa la informacion del Vertice que se desea evaluar. <br>
 * @return Un objeto de tipo ListaCD con los vertices vecinos al Vertice indicado. 
 */
public ListaCD < Vertice > getVecinosVertice(T info) {
          1    1           (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
              1
        return (null);
         1        1
    return (v.getVecinos());
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 2$

  $T({n}) =  3n + 10$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __72. Limpiar Apuntador a los Vertices Predecesores (limpiarPredecesores)__

```java
/**
 * Metodo que permite limpiar el apuntador a los Vertices predecesores en el recorrido realizado. <br>
 */
private void limpiarPredecesores() {
             2
    for (Vertice v: this.vertices)
                 1
        v.setPredecesor(null);
}
```

* ### __Costo Operacional__

  $T({n}) = 2 + n(1) + 2$

  $T({n}) =  n + 4$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __73. Consultar Existencia Circuito en el Grafo (hayCircuito)__

```java
/**
 * Metodo que permite evaluar la existencia de un circuito dentro del Grafo; Un circuito es una secuencia
 * de Vertices en la cual el vertice inicial y vertice final coinciden. <br>
 * <b>post:</b> Se evaluo la existencia de circuitos dentro del Grafo. <br>
 * @return Un boolean con true si existe un circuito dentro del Grafo.
 */
public boolean hayCircuito() {
             2        
    for (Vertice v: this.vertices) {
          (1T(n/1) + O(n))  1
        if (`48¬this.existeRuta(v, v)`) {
            //Mejor de los casos
                  1
            return (true);
        }
    }
          1
    return (false);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + n(1T(\frac{n}{1}) + O(n) + 1) + 2 + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{2}) + n + 5$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __74. Obtener Circuitos Existentes en el Grafo (getCircuitos)__

```java
/**
 * Metodo que permite conocer los circuitos existentes dentro del Grafo. <br>
 * <b>post:</b> Se retorno el listado de Circuitos existentes dentro del Grafo. <br> 
 * @return Un objeto de tipo ListaCD con el conjunto de Circuitos existentes dentro del Grafo
 */
public ListaCD < ListaCD < Vertice >> getCircuitos() {
        1         1         1         1      1           1         1
    ListaCD < ListaCD < Vertice >> l = new ListaCD < ListaCD < Vertice >> ();
      1         1 
    ListaCD < Vertice > l2;
             2
    for (Vertice v: this.vertices) {
           1 (1T(\frac{n}{1}) + O(n) + 8n + KTE) 1          1
        l2 = `49¬this.getRutaEntre((T) v.getInfo(), (T) v.getInfo())`;
             1     KTE
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

  $T({n}) =  7 + 2 + 2 + n(3 + (1T(\frac{n}{1}) + O(n) + 8n + KTE) + 1 + KTE + KTE) + 2 + 1$

  $T({n}) =  1T(\frac{n^{2}}{1}) + O(n^{2}) + 8n^{2} + n(KTE) + 14 $

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __75. Evaluar Arista si es Puente en el Grafo (esPuente)__

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
        1     1        13
    GrafoND d = `77¬this.clonar()`;
        1    1       (n(KTE) + 5)
    Arista a = `12¬d.buscarArista(info1, info2)`;
          1     1
    boolean rta = false;
           1
    if (a == null)
        //Mejor de los casos
              1
        return (false);
              (n(KTE) + 6n + 27)
    `10¬d.eliminarArista(info1, info2)`;
        1  (1T(n/1) + O(n^{2}) + 4n + 20)
    if (!d.esConexo())
            1
        rta = true;
          1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) =  15 + 2 + (n(KTE) + 5) + 2 + 1 + (n(KTE) + 6n + 27) + 1 + (1T(\frac{n}{1}) + O(n^{2}) + 4n + 20) + 1 + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n^{2}) + 10n + 2n(KTE) + 70$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __76. Evaluar Vertices si es una Articulación en el Grafo (esArticulacion)__

```java
/**
 * Metodo que permite evaluar si un Vertice es una Articulacion del Grafo. <br>
 * Una Articulacion es un vertice que eliminandose desconecta el Grafo. <br>
 * <b>post:</b> Se evauo la existencia de una Aritulacion en el Grafo. <br> 
 * @param info Representa la informacion del Vertice que se quiere evaluar como Articulacion. <br>
 * @return Un objeto de tipo boolean con true si el Vertice evaluado es una Articulacion.
 */
public boolean esArticulacion(T info) {
          1   1            13
    GrafoND d = `77¬this.clonar()`;
          1    1        (3n + 5)
    Vertice v = `11¬d.buscarVertice(info)`;
          1     1
    boolean rta = false;
           1
    if (v == null)
        //Mejor de los casos
              1
        return (false);
        (12n + 2n(KTE) + 27)
    `9¬d.eliminarVertice(info)`;
         1    (1T(n/1) + O(n^{2}) + 4n + 20)
    if (!`22¬d.esConexo()`)
            1
        rta = true;
        1
    return (rta);
}
```

* ### __Costo Operacional__

  $T({n}) =  15 + 2 + (3n + 5) + 2 + 1 + (12n + 2n(KTE) + 27) + (1T(\frac{n}{1}) + O(n^{2}) + 4n + 20) + 1$

  $T({n}) =  1T(\frac{n}{1}) + O(n^{2}) + 19n + 2n(KTE) + 68$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __77. Clonar Grafo (clonar)__

```java
/**
 * Metodo que permite clonar la informacio de un Grafo en un nuevo grafo y retornarlo. <br>
 * <b>post:</b> Se realizo la clonacion de la informacion del Grafo en un nuevo Grafo. <br> 
 * @return Un nuevo Digrafo que representa el grafo con la informacion clonada.
 */
public GrafoND clonar() {
           1       1         6
    GrafoND nuevo = new `1¬GrafoND()`;
               1               1
    nuevo.setVertices(`2¬this.getVertices()`);
               1               1
    nuevo.setAristas(`3¬this.getAristas()`);
           1
    return (nuevo);
}
```

* ### __Costo Operacional__

  $T({n}) =  8 + 2 + 2 + 1$

  $T({n}) =  13$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __78. Evaluar Grafo es Subgrafo de un Grafo más Grande (esSubGrafo)__

```java
/**
 * Metodo que permite conocer si un Grafo es un subgrafo de un Grafo mas grande. <br>
 * <b>post:</b> Se evaluo si un grafo hace parte minima de otro grafo. <br> 
 * @param g Representa el grafo el cual se desea saber si es un subgrafo de otro grafo. <br>
 * @return Un objeto boolean con true si es subgrafo y false en caso contrario.
 */
public boolean esSubGrafo(GrafoND g) {
             2            1
    for (Object v2: `2¬g.getVertices()`) {
            1     1     1
        Vertice v = (Vertice) v2;
            1               KTE
        if (!this.vertices.esta(v))
                  1
            return (false);
    }               
              2                1
    for (Object a2: `3¬g.getAristas()`) {
           1     1     1
        Arista a = (Arista) a2;
            1              KTE
        if (!this.aristas.esta(a))
                  1
            return (false);
    }
          1
    return (true);
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + n(3 + 1 + KTE) + 3 + 3 + n(3 + 1 + KTE) + 3 + 1$

  $T({n}) =  2n(KTE) + 13$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __79. Metodo para Dos Unir Grafos en Uno (unirGrafos)__

```java
/**
 * Metodo que permite unir la informaicon de 2 grafos en un solo grafo. <br>
 * <b>post:</b> Se realizo la union de dos grafos en un Grafo unico con toda la informacion. <br> 
 * @param g Representa el Grafo el cual se desea ser unido al Grafo actual. <br>
 */
public void unirGrafos(GrafoND g) {
               2          1
    for (Object v2: `2¬g.getVertices()`) {
             1     1     1
        Vertice v = (Vertice) v2;
             1               KTE    
        if (!this.vertices.esta(v))
                      (3n + KTE)          1
            this.insertarVertice((T) v.getInfo());
    }
              2            1
    for (Object a2: `3¬g.getAristas()`) {
             1    1    1 
        Arista a = (Arista) a2;
             1              KTE
        if (!this.aristas.esta(a))
                    (6n + KTE)                1          1               1           1            1             
            `8¬this.insertarAristaP((T) a.getVertA().getInfo(), (T) a.getVertB().getInfo(), a.getPeso())`;
    }
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + n(3 + 1 + KTE + (3n + KTE) + 1) + 3 + 3 + n(3 + 1 + KTE + (6n + KTE) + 5) + 3$

  $T({n}) = 3n^{2} + n(KTE) + 6n^{2} + n(KTE) + 12$

  $T({n}) = 9n^{2} + 2n(KTE) + 12$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __80. Obtener Peso Grafo (getPeso)__

```java
/**
 * Metodo que permite conocer el peso del Grafo. <br>
 * <b>post:</b> Se retorno el peso del Grafo. <br> 
 * @return Un valor int con el peso del Grafo.
 */
public int getPeso() {
       1                       1
    return (this.vertices.getTamanio());
}
```

* ### __Costo Operacional__

  $T({n}) =  2$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({1})$

***

## __81. Obtener Lista de Grados de los Vertices del Grafo (getListaGrados)__

```java
/**
 * Metodo que permite conocer el Listado de Grados de los Vertices en el Grafo. <br>
 * <b>post:</b> Se retorno el Listado de grados de los Vertices en el Grafo. <br>
 * @return Un Objeto de tipo Array con el listado de los grados del Vertice.
 */
public int[] getListaGrados() {
        1    1    1                      1
    int v[] = new int[this.vertices.getTamanio()];
       1  1
    int i = 0;
               2       
    for (Vertice vert: this.vertices) {
           2   2    1             (3n + 10)                 1
        v[i++] = (int) `82¬this.getGradoVertice((T) vert.getInfo())`;
    }
          1
    return (v);
}
```

* ### __Costo Operacional__

  $T({n}) = 4 + 2 + 2 + n(6 + (3n + 10)) + 2 + 1$

  $T({n}) = 3n^{2} + 16n + 11$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __82. Obtener Grado de un Vertice del Grafo (getGradoVertice)__

```java
/**
 * Metodo que permite conocer el Grado de un Vertice. <br>
 * <b>post:</b> Se retorno el grado del Vertice consultado. <br>
 * @param info Representa la informacion del Vertice que se desea conocer su grado. <br>
 * @return Un objeto de tipo int con el grado del Vertice.
 */
public int getGradoVertice(T info) {
          1   1       (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
             1
        return (-1);
          1        1
    return (v.getGradoND());
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 2$

  $T({n}) =  3n + 10$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __83. Evaluar Vertice si es Hoja del Grafo (esVerticeHoja)__

```java
/**
 * Metodo que permite conoce si un Vertice es una Hoja del Grafo. <br>
 * <b>post:</b> Se evaluo si el Grafo consultado es un Vertice Hoja. <br>
 * @param info Representa la informacion del Vertice a evaluar. <br>
 * @return Un objeto de tipo boolean con true si el Vertice es un hoja y false en caso contrario.
 */
public boolean esVerticeHoja(T info) {
        1     1          (3n + 5)
    Vertice v = `11¬this.buscarVertice(info)`;
           1
    if (v == null)
        //Mejor de los casos
              1
        return (false);
         1        KTE
    return (v.esHojaND());
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + (3n + 5) + 1 + 1 + KTE$

  $T({n}) =  3n + KTE$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***

## __84. Evaluar Grafo si Cumple Teorema de Apreton de Manos (apretonDeManos)__

```java
/**
 * Metodo que permite saber si el grafo cumple el Teorema de Apreton de Manos; <br>
 * (Solo para Grafos Simples). <br>
 * <b>post:</b> Se evaluo si el Grafo cumple con el Teorema de Apreton de Manos. <br>
 * @return Un objeto de tipo boolean con true si el grafo cumple con el teorema.
 */
public boolean apretonDeManos() {
          1     1                   1
    int numAris = this.aristas.getTamanio();
         1     1
    int sumGra = 0;
              2
    for (Vertice v: this.vertices) {
               2                (3n + 10)            1
        sumGra += `82¬this.getGradoVertice((T) v.getInfo())`;
    }
         1     1           1
    return ((2 * numAris) == sumGra);
}
```

* ### __Costo Operacional__

  $T({n}) =  3 + 2 + 2 + n(2 + (3n + 10) + 1) + 2 + 3$

  $T({n}) =  3n^{2} + 13n + 12$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O(n^{2})$

***

## __85. Imprimir Grafo (toString)__

```java
@Override
public String toString() {
          1    1
    String cad = "Vertices: ";
              2
    for (Vertice v: this.vertices) {
             2       1     1
        cad += v.getInfo() + ",";
    }
        2
    cad += "\nAristas:";
              2
    for (Arista a: this.aristas) {
            2         KTE   1
        cad += a.toString() + ",";
    }
          1
    return (cad);
}
```

* ### __Costo Operacional__

  $T({n}) =  2 + 2 + n(4) + 2 + 2 + 2 + n(2 + KTE + 1) + 2 + 1$

  $T({n}) =  4n + n(KTE) + 13$

* ### __Complejidad (Notación Asintótica)__

  $Big O = O({n})$

***
