import { Stavka } from "./Stavka.js";


export class Porudzbina {
    constructor(idStola,kafic,sto) {
        
        this.brojStola=idStola;
        this.stavke=[];
        this.kafic=kafic;
        this.sto=sto;
        this.kontPorudzbina = null;
    }
    
    crtajPoruzbinu(host){
        
        this.kontPorudzbina = document.createElement("div");
        this.kontPorudzbina.className="kontPorudzbina"+this.brojStola;
        
        let cenaLab = document.createElement("h3");
        
        cenaLab.innerHTML = "Sto: "+this.brojStola;
        this.kontPorudzbina.appendChild(cenaLab);

        let divZaStavku = document.createElement("div");
        divZaStavku.className= "divSlikaNaziv";
        
        this.stavke.forEach(el=>{
            if(el!=null)
                el.crtajStavku(divZaStavku);
            
        })
        this.kontPorudzbina.appendChild(divZaStavku);
       
        let divZaNovustavku = document.createElement("div");
        divZaNovustavku.className= "divZastavku";
        let jela= ["None","Palacinka", "Sendvic", "Pomfrit", "Kolac","Pica","Pasta"];
        let pica= ["None","Sok","Kafa","Caj","Pivo","Voda"];
        this.kreirajOpcijezaJela(divZaNovustavku,jela,"Jelo: ",this.brojStola);

        let cenaL = document.createElement("labela");
        cenaL.innerHTML = "Cena Jela: ";
        divZaNovustavku.appendChild(cenaL);
        let cena = document.createElement("input");
        cena.className = "cenaJ"+this.brojStola;
        cena.type = "number";
        divZaNovustavku.appendChild(cena);
        
        this.kreirajOpcijezaJela(divZaNovustavku,pica,"Pice: ",this.brojStola);
        cenaL = document.createElement("labela");
        cenaL.innerHTML = "Cena Pica: ";
        divZaNovustavku.appendChild(cenaL);

        cena = document.createElement("input");
        cena.className = "cenaP"+this.brojStola;
        cena.type = "number";
        divZaNovustavku.appendChild(cena);
        this.kontPorudzbina.appendChild(divZaNovustavku);

        let divZaDugmice = document.createElement("div");
        divZaDugmice.className= "divZaDugmice";
        let dugmePlus = document.createElement("button");
        dugmePlus.innerHTML="Dodaj Stavku";
        dugmePlus.className = "dugmeDodaj";
        
        dugmePlus.onclick=(ev)=>{
            
            this.preuzmiStavkeIzForme(divZaStavku);
        }
        divZaDugmice.appendChild(dugmePlus);
        let dugmeX = document.createElement("button");
        dugmeX.innerHTML="x";
        dugmeX.className = "dugmePlus";
    
        dugmeX.onclick=(ev)=>{
            if(this.stavke.length==0)
            document.querySelector(".Sto"+this.brojStola).style.backgroundColor="#d68190";
            
            this.sto.style.visibility="hidden";
            this.sto.style.padding= "0px";
            this.sto.style.maxHeight="0px";
            
        }
        divZaDugmice.appendChild(dugmeX);
      
        this.kontPorudzbina.appendChild(divZaDugmice);  
        this.sto=this.kontPorudzbina;
        host.appendChild(this.kontPorudzbina);
    
    }

    kreirajOpcijezaJela(host , niz, naziv,br){ 
    
        let SelJela = document.createElement("select");
        SelJela.id= naziv+br;
    
        let  labela = document.createElement("label");
        labela.innerHTML = naziv;
        host.appendChild(labela);
        host.appendChild(SelJela);
    
        niz.forEach(el=>{
            let opcija = document.createElement("option");
            opcija.innerHTML = el;
            opcija.value = el;
            SelJela.appendChild(opcija);
        })
    }
    preuzmiStavkeIzForme(host){
        this.kontPorudzbina=this.sto;
        console.log("preuzmiStavke", this.brojStola);

        let jelo = document.getElementById("Jelo: "+this.brojStola).value;
        console.log(jelo);
        let pice = document.getElementById("Pice: "+this.brojStola).value;
        let cenaJ = parseInt(this.kontPorudzbina.querySelector(".cenaJ"+this.brojStola).value);
        let cenaP = parseInt(this.kontPorudzbina.querySelector(".cenaP"+this.brojStola).value);

        let NovoJelo=null;
        let NovoPice=null;
            console.log(cenaJ+23);
       if(isNaN(cenaJ) && jelo=="None" && isNaN(cenaJ) && jelo=="None")
        {
                alert("Nema stavki za dodavanje!");
        }
        else{
        if(isNaN(cenaJ) && jelo!="None" )
            alert("Niste uneli cenu za jelo!");
        else if(isNaN(cenaJ) && jelo=="None" )
        {
            
        }
        else{
                
            if(jelo!="None"){
                
                NovoJelo = new Stavka("jelo",cenaJ,jelo, this );   
                if(NovoJelo!=null){
                    this.stavke.push(NovoJelo);
                    console.log(this.stavke);
                    this.azurirajPrikaz(host,NovoJelo);
                }
            }
        }  
             
        if(isNaN(cenaP) && pice!="None")
            alert("Niste uneli cenu za pice!"); 
       
        else{
            
            if(pice!="None"){
                
                NovoPice = new Stavka("pice",cenaP,pice,this );
                if(NovoPice!=null){
                    this.stavke.push(NovoPice);
                     this.azurirajPrikaz(host,NovoPice);
                            } 
                        
            }  
             
        }
        }
           

        document.getElementById("Jelo: "+this.brojStola).value = "None";
        document.getElementById("Pice: "+this.brojStola).value= "None";
    
        this.kontPorudzbina.querySelector(".cenaJ"+this.brojStola).value=null;
        this.kontPorudzbina.querySelector(".cenaP"+this.brojStola).value=null;
        this.sto =this.kontPorudzbina;
    }
    azurirajPrikaz(host, stavka){
        this.kontPorudzbina=this.sto;
        document.querySelector(".Sto"+this.brojStola).style.backgroundColor="#75a3a3";
        this.kontPorudzbina.querySelector("h3").innerHTML="Sto: "+this.brojStola;
        stavka.crtajStavku(host);
        this.sto=this.kontPorudzbina
    }

}

