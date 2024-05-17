export default class Pokemon{

    /* privát adattagok */

    #nev="";
    #kep="";
    #mondat="";
    
    
    
    constructor(nev, kep, mondat, szuloE){
        /* ez hívódik meg a példányosításkor
        beállítja az adattagokat
        this: mindig az aktuális objektumra mutat */
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = mondat;
        this.szuloE = szuloE;
        this.#megjelenit();
    }

    beszel(){
        console.log(this.#mondat);
    }

    get nev(){
        return this.#nev;
    }

    set mondat(szoveg){
        this.#mondat = szoveg;
    }

    #htmlOsszeallit(){
        let txt = `
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="$this.#nev">
            </div>
        `;
        return txt;
    }

    #megjelenit(){
        this.szuloE.append(this.#htmlOsszeallit());
    }

}