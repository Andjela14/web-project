export class Stavka {
    constructor(vrsta, cena, naziv,por){
      
        this.vrsta=vrsta; 
        this.cena = cena;
        this.naziv=naziv;
        this.por = por
        
        this.kontStavka=null;
    }
    crtajStavku(host){
        var thisPok =this;

        if(!host)
            throw new Error("Host dosn't exist!");

        const divZasliku = document.createElement("div");
        if(this.vrsta=="jelo" || this.vrsta=="Jelo")
            divZasliku.className="jelo";
        else
            divZasliku.className="pice";

        const SlikaNaziv = document.createElement("div");
        SlikaNaziv.className= "SlikaNaziv";
        SlikaNaziv.appendChild(divZasliku);
        const nazivJela = document.createElement("label");
        nazivJela.innerHTML = this.naziv +", "+this.cena;
        nazivJela.style.alignSelf="center";
        let dugmeObrisiStavku = document.createElement("button");
        dugmeObrisiStavku.className = "dugmeX";
        dugmeObrisiStavku.style.flexGrow = 0;
        dugmeObrisiStavku.innerHTML = 	"&#x1f5d1;";


        dugmeObrisiStavku.onclick=(ev)=>{
           
           
            
            thisPok.kontStavka.remove();
           
            alert("Stavka Obrisana!");
              
        }


        SlikaNaziv.appendChild(nazivJela);
        SlikaNaziv.appendChild(dugmeObrisiStavku);
        
        this.kontStavka=SlikaNaziv;
        host.appendChild(this.kontStavka);
    }
    
    
}