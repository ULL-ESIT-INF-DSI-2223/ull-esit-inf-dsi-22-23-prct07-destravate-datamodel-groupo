[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101132945/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101132945?branch=master)

# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán utilizar los principios SOLID de diseño orientado a objetos.

Todas las soluciones a los ejercicios deberán estar alojadas en el repositorio generado tras la aceptación de la asignación de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

Además, tendrá que comentar en un informe la solución que ha diseñado para cada uno de los ejercicios propuestos.

## Ejercicio 1 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

- Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
- Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
- Tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
- Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

```typescript
interface Searchable<T> {
    searchByTitulo(name: string): T[];
    searchByAño(year: number): T[];
    searchByLeng(language: string): T[];
}
interface Sortable<T> {
    sortByTitulo(): T[];
    sortByAño(): T[];
    sortByVal(): T[];
    sortByLeng(): T[];
}
export interface Streamable<T> extends Searchable<T>, Sortable<T>{
    add(item: T): void;
    delete(item: T): void;
    getAll(): T[];
}

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]){}
    public add(item: T): void {
        this.items.push(item);
    }
    public delete(item: T): void {
        const index = this.items.indexOf(item);
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
    public getAll(): T[] {
        return this.items;
    }  
    public getCont(): number {
        return this.items.length;
    }
    abstract searchByTitulo(titulo: string): T[];
    abstract searchByAño(año: number): T[];
    abstract searchByLeng(leng: string): T[];
    abstract sortByTitulo(): T[];
    abstract sortByAño(): T[];
    abstract sortByVal(): T[];
    abstract sortByLeng(): T[];
    
}

type valoracion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export class Pelicula{
    constructor(protected name: string, protected año: number, protected leng : string,protected gen: string, protected val: valoracion){}
    getTitulo(): string {return this.name}
    getAño(): number {return this.año}
    getLeng(): string {return this.leng}
    getGen(): string {return this.gen}
    getVal(): valoracion {return this.val}
}
export class Serie{
    constructor(protected name: string, protected año: number, protected leng : string, protected temp: number,protected episode: number, protected val: valoracion){}
    getTitulo(): string {return this.name}
    getAño(): number {return this.año}
    getLeng(): string {return this.leng}
    getTemp(): number {return this.temp}
    getEpisode(): number {return this.episode}
    getVal(): valoracion {return this.val}
}
export class Documental{
    constructor(protected name: string, protected año: number, protected leng : string,protected temp: number,protected episode: number,protected temat: string ,protected val: valoracion){}
    getTitulo(): string {return this.name}
    getAño(): number {return this.año}
    getLeng(): string {return this.leng}
    getTemp(): number {return this.temp}
    getEpisode(): number {return this.episode}
    getTemat(): string {return this.temat}
    getVal(): valoracion {return this.val}
}

export class PeliculaCollection extends BasicStreamableCollection<Pelicula>{
    constructor(protected pelis: Pelicula[]){
        super(pelis);
    }
    public add(item: Pelicula): void {
        super.add(item);
    }
    public delete(item: Pelicula): void {
        super.delete(item);
    }
    public getAll(): Pelicula[] {
        return super.getAll();
    }
    public getCont(): number {
        return super.getCont()
    }
    public searchByTitulo(titulo: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getTitulo().includes(titulo))
        return coincidentes;
    }
    public searchByAño(año: number): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getAño() === año)
        return coincidentes;
    }
    public searchByLeng(leng: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getLeng().includes(leng))
        return coincidentes;
    }
    public searchByGen(gen: string): Pelicula[]{
        const coincidentes = this.pelis.filter(peli => peli.getGen().includes(gen))
        return coincidentes;
    }
    public sortByTitulo(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }
    public sortByAño(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getAño() - b.getAño());
    }
    public sortByVal(): Pelicula[]{
        return this.pelis.sort((a, b) => a.getVal() - b.getVal());
    }
    public sortByLeng(): Pelicula[]{
        
        return this.pelis.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }
    public sortByGen(): Pelicula[]{
        
        return this.pelis.sort((a, b) => a.getGen().localeCompare(b.getGen()));;
    }
    
}

export class DocumentalCollection extends BasicStreamableCollection<Documental>{
    constructor(protected docus: Documental[]){
        super(docus);
    }
    public add(item: Documental): void {
        super.add(item);
    }
    public delete(item: Documental): void {
        super.delete(item);
    }
    public getAll(): Documental[] {
        return super.getAll();
    }
    public getCont(): number {
        return super.getCont()
    }
    public searchByTitulo(titulo: string): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getTitulo().includes(titulo))
        return coincidentes;
    }
    public searchByAño(año: number): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getAño() === año)
        return coincidentes;
    }
    public searchByLeng(leng: string): Documental[]{
        const coincidentes = this.docus.filter(docu => docu.getLeng().includes(leng))
        return coincidentes;
    }
    public searchByTemat(tema: string): Documental[]{
        const coincidentes = this.docus.filter(peli => peli.getTemat().includes(tema))
        return coincidentes;
    }
    public sortByTitulo(): Documental[]{
        return this.docus.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }
    public sortByAño(): Documental[]{
        return this.docus.sort((a, b) => a.getAño() - b.getAño());
    }
    public sortByVal(): Documental[]{
        return this.docus.sort((a, b) => a.getVal() - b.getVal());
    }
    public sortByLeng(): Documental[]{
        
        return this.docus.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }
    public sortByTemp(): Documental[]{
        return this.docus.sort((a, b) => a.getTemp() - b.getTemp());;
    }
    public sortByEpis(): Documental[]{
        return this.docus.sort((a, b) => a.getEpisode() - b.getEpisode());
    }
}

export class SerieCollection extends BasicStreamableCollection<Serie>{
    constructor(protected series: Serie[]){
        super(series);
    }
    public add(item: Serie): void {
        super.add(item);
    }
    public delete(item: Serie): void {
        super.delete(item);
    }
    public getAll(): Serie[] {
        return super.getAll();
    }
    public getCont(): number {
        return super.getCont()
    }
    public searchByTitulo(titulo: string): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getTitulo().includes(titulo))
        return coincidentes;
    }
    public searchByAño(año: number): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getAño() === año)
        return coincidentes;
    }
    public searchByLeng(leng: string): Serie[]{
        const coincidentes = this.series.filter(serie => serie.getLeng().includes(leng))
        return coincidentes;
    }
    public sortByTitulo(): Serie[]{
        return this.series.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
    }
    public sortByAño(): Serie[]{
        return this.series.sort((a, b) => a.getAño() - b.getAño());
    }
    public sortByVal(): Serie[]{
        return this.series.sort((a, b) => a.getVal() - b.getVal());
    }
    public sortByLeng(): Serie[]{
        return this.series.sort((a, b) => a.getLeng().localeCompare(b.getLeng()));;
    }
    public sortByTemp(): Serie[]{
        return this.series.sort((a, b) => a.getTemp() - b.getTemp());;
    }
    public sortByEpis(): Serie[]{
        return this.series.sort((a, b) => a.getEpisode() - b.getEpisode());
    }
}
```
en este ejercicio se crean una serie de clase e interfaces para cumplir con los objetivos de este ejercicio, la primera interfaz se ha dividido en 3 interfaces para poder cumplir los principios SOLID, esta interfaz sirve para crear una clase abstracta con algunos metodos declarados y otros abstractos, en esta clase estan principalmente los metodos que son comunes a todos los objetos que se van a guardar, ademas hay que crear clases para esos objetos para poder guardarlos luego en las colecciones que derivaran de la clase abstracta y usaran las clases de objetos como elementos que se guardan.

## Ejercicio 2 - Implementación de una lista y sus operaciones

En este ejercicio tendrá que implementar una clase genérica que modele una lista de elementos de cualquier tipo y sus operaciones sin hacer uso de ninguna de las funcionlidades proporcionadas por Array.prototype. Se permite, sin embargo, el uso de [].

Deberá incluir, al menos, las siguientes operaciones para trabajar con su lista:

- Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
- Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
- Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
- Método length, que devuelve el número de elementos de la lista.
- Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
- Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
- Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
- Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.
- Instancie diferentes listas que contengan elementos de diferentes tipos y lleve a cabo pruebas suficientes con cada una de las listas definidas para comprobar la generalidad de la clase diseñada.alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego.


```typescript
export class ListaGenerica<T> {
    public items: T[];
    constructor() {
        this.items = [];
    }

    append(lista: ListaGenerica<T>): void {
        this.items.push(...lista.items);
    }

    concatenate(...listas: ListaGenerica<T>[]): ListaGenerica<T> {
        const nuevaLista: ListaGenerica<T> = new ListaGenerica();
        for (const element of listas) {
        nuevaLista.append(element);
        }
        nuevaLista.append(this);
        return nuevaLista;
    }

    filter(predicado: (elemento: T) => boolean) {
        const nuevaLista = new ListaGenerica();
        for (const item of this.items) {
            if (predicado(item)) {
                nuevaLista.items.push(item);
            }
        }
        return nuevaLista;
    }

    length() {
        return this.items.length;
    }

    map<R>(funcion: (elemento: T) => R): ListaGenerica<R> {
        const nuevaLista: ListaGenerica<R> = new ListaGenerica();
        for (const item of this.items) {
            nuevaLista.items.push(funcion(item));
        }
        return nuevaLista;
    }
    
    reduce<R>(funcion: (acumulador: R, elemento: T) => R, acumulador: R):R {
        let resultado = acumulador;
        for (const item of this.items) {
            resultado = funcion(resultado, item);
        }
        
        return resultado;
    }

    reverse(): ListaGenerica<T> {
        const nuevaLista : ListaGenerica<T> = new ListaGenerica();
        for (let i = this.items.length - 1; i >= 0; i--) {
            nuevaLista.items.push(this.items[i]);
        }
        return nuevaLista;
    }

    forEach(funcion: (elemento: T) => void):void {
        for (const item of this.items) {funcion(item);}
    }
}  
```

en este ejercicio los metodos modifican la lista invocante con las funcionalidades que se mencionan anteriormente, haciendo uso de push y las propias funcionalidades diseñadas previamente en la clase.

## Ejercicio 3 - Ampliando la biblioteca musical

Teniendo en cuenta el ejercicio de la biblioteca musical implementado en la práctica 5, mejore su diseño tratando de cumplir todos los principios SOLID si es que aún no los cumple.

Luego, trate de introducir las siguientes modificaciones a su diseño:

- Ahora, la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.

- Además, ahora deberá hacer que la discografía sea una clase genérica. En algún punto de su código deberá concretar esta clase genérica indicando que la discografía puede ser una colección de discos, una colección de singles o una colección de discos y singles.

```typescript
export interface Cancion {
    nombre : string;
    dur_seg : number;
    single : boolean;
    rep : number;
    gen : string[]; 
    getNombre() : string;
    getDur() : number;
    getSin() : boolean;
    getRep() : number;
    getGen() : string[];
}
export class CancionC implements Cancion {
    constructor(public nombre:string, public dur_seg:number, public single:boolean, public rep:number, public gen: string[]){}
    getNombre() : string{return this.nombre}
    getDur() : number{return this.dur_seg}
    getSin() : boolean{return this.single}
    getRep() : number{return this.rep}
    getGen() : string[]{return this.gen}
}

export interface Disco{
    nombre : string;
    pub : number;
    canciones : CancionC[];
}
export class DiscoC implements Disco{
    constructor(public nombre : string, public pub : number, public canciones : CancionC[]){}
    getNombre() : string{return this.nombre}
    getPub() : number{return this.pub}
    getCanciones() : CancionC[]{return this.canciones}
    getCancion(cancion: string) : CancionC {
        return this.canciones.find((c: CancionC) => c.getNombre() === cancion);
    }      
}

export interface Single {
    nombre: string;
    pub: number;
    cancion: Cancion;
    versiones: Cancion[];
}
export class SingleC implements Single {
    constructor(public nombre: string, public pub: number,public cancion: Cancion, public versiones: Cancion[]) {
        this.setCanciones(cancion, versiones);
    }
    private setCanciones(cancion: Cancion, versiones: Cancion[]) {
        this.cancion = cancion;
        this.versiones = versiones;
    }
    getNombre() {
        return this.nombre;
    }
    getPub() {
        return this.pub;
    }
    getCancion() {
        return this.cancion;
    }
    getVersiones() {
        return this.versiones;
    }
}

export class Discografia<T extends DiscoC | SingleC> {
    constructor(private discos: T[] = []) {}
    getDiscos(): T[] {
        return this.discos;
    }
    getDiscosOnly(): DiscoC[] {
        return this.discos.filter((d) => d instanceof DiscoC) as DiscoC[];
    }
    getSingles(): SingleC[] {
        return this.discos.filter((s) => s instanceof SingleC) as SingleC[];
    }
    addDisco(nuevoDisco: T): void {
        this.discos.push(nuevoDisco);
    }
}  

export interface Artista{
    nombre : string;
    oyentes : number;
    discografia : DiscoC[];
    
}
export class ArtistaC implements Artista{
    constructor(public nombre : string, public oyentes : number, public discografia : DiscoC[]){}
    getNombre(){return this.nombre}
    getOyentes(){return this.oyentes}
    getDisc(){return this.discografia}
    getDisco(disco : string){return this.discografia.find((d: DiscoC) => d.getNombre() === disco);}
}

export class Biblioteca{
    constructor(public artistas : ArtistaC[]){}
    getArtista(artista : string){return this.artistas.find((a: ArtistaC) => a.getNombre() === artista);}
}
class BiblioShows extends Biblioteca{
    constructor(public artistas : ArtistaC[]){
        super(artistas)
    }
    showBiblio(){console.table(this.artistas)}
    showArtista(artista : string){console.table(this.getArtista(artista))}
    showDisco(artista : string, disco : string){console.table(this.getArtista(artista).getDisco(disco))}
    showCancion(artista : string, disco : string, cancion : string){console.table(this.getArtista(artista).getDisco(disco).getCancion(cancion))}
}
class BiblioCounts extends Biblioteca {
    constructor(public artistas : ArtistaC[]){
        super(artistas)
    }
    numberCanc(artista:string , disco: string):number{
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        let count : number = 0;
        auxdisc.getCanciones().forEach(element => {
            count++; 
        });
        return count;
    }
    durDisc(artista : string , disco : string) : number{
        let totaldur : number = 0;
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totaldur += cancion.getDur();
        });
        return totaldur;
    }
    repDisc(artista : string , disco : string) : number{
        let totalrep = 0;
        let auxdisc : DiscoC = this.getArtista(artista).getDisco(disco);
        auxdisc.getCanciones().forEach(cancion => {
            totalrep += cancion.getRep();
        });
        return totalrep;
    }
}
```

En este ejercicio se ha cambiado la estructura y algunos metodos de las clases de la libreria musical de la practica anterior, adaptandolas para cumplir los principios SOLID en primer lugar, despues añadiendo la clase Single para guardar los objetos Single, que son singles de canciones, que despues se guardan en la nueva clase discografia que es una clase generica que guarda la discografias de los artistas, que se espicifica en la misma clase que usa los discos o singles, ademas la clase artista ha sido modificada para aceptar esta nueva clase discografia, y por ultimo la clase biblioteca ha sido separada en tres clases para poder respetar los principios SOLID    