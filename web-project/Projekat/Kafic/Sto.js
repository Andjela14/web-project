import { Porudzbina } from "./Porudzbina.js";

export class Sto {
    constructor(id,broj,stat,kafe){
        this.id=id;
        this.broj=broj;
         // status je slobodan i zauzet; 
        this.porudzbinica=null;
        this.status=stat;
        this.kafic=kafe;
        this.refDiv = null; //kafa, caj
        this.kontPorudzbina=null; 
    }
    crtajSto(host,hostzaSto){
        if(!host || !hostzaSto)
            throw new Error("Host dosn't exist!");
      
        let kont= document.createElement("div");
        kont.className="Sto"+this.broj;
        kont.style.backgroundColor= "#80b3ff";

        let StoLabela = document.createElement("label");
        StoLabela.innerHTML = "Sto: "+this.broj+"  "+this.status;
        kont.appendChild(StoLabela);
        
        let dugme = document.createElement("button");
        dugme.innerHTML="&#128065";
        dugme.className = "dugmePlus";
        dugme.disabled = true;
        kont.appendChild(dugme);
        
        
        let dugme2 = document.createElement("button");
        dugme2.innerHTML="Oslobodi";
        dugme2.className = "dugmePlus";
        dugme2.disabled = true;
        kont.appendChild(dugme2);
        
        
        if(this.status=="Zauzet"){
           
             
            kont.style.backgroundColor="#75a3a3";  
            
            dugme.disabled = false;
            dugme2.disabled = false;
        
            dugme.onclick=(ev)=>{
               
                    this.funkcijaZadugme1(host);
                console.log(this.porudzbinica);
            }

            dugme2.onclick=(ev)=>{
               
                this.Oslobodi(host);
               
            }  
            if(this.refDiv==null){
                this.refDiv=kont;
                hostzaSto.appendChild(this.refDiv); 
            }
            else{
                
               this.Zauzmi(host);
                
            }
        }
       
        else{
            this.refDiv=kont;
            hostzaSto.appendChild(this.refDiv); 
        }
        
    }
    funkcijaZadugme1(host){
        this.kontPorudzbina = host.querySelector(".kontPorudzbina"+this.broj);
        if(this.kontPorudzbina==null)
        {
           
            this.porudzbinica = new Porudzbina( this.broj , null,this.kafic,this.kontPorudzbina);
            
            this.porudzbinica.crtajPoruzbinu(host);
            
                 
        }
        
       
        else if(this.kontPorudzbina.style.visibility=="hidden"){
        
                this.kontPorudzbina.style.visibility="visible";
                this.kontPorudzbina.style.maxHeight="none";
            }
        }


    Zauzmi(host){
        
        this.refDiv.style.backgroundColor = "#75a3a3";
        this.refDiv.querySelector("label").innerHTML="Sto: "+this.broj+"  "+this.status;
        this.refDiv.querySelectorAll("button").forEach( (element, index)=>{
                element.disabled =false;
                element.onclick=(ev)=>{
                    if(index==0)
                    this.funkcijaZadugme1(host);
                    if(index==1)
                    this.Oslobodi(host);

                }
        });
    
    }
    
    Oslobodi(host){
        document.getElementById("Por++").disabled=false;
        if(this.porudzbinica!=null && this.porudzbinica.kontPorudzbina!=null && this.porudzbinica.kontPorudzbina.style.visibility=="visible")
        {

           
            var brisanjepor =host.querySelector(".kontPorudzbina"+this.broj);
            console.log("brisem: por",this.broj,"  ",this.id);
            host.removeChild(brisanjepor);
            this.porudzbinica.kontPorudzbina = null;

        }
        
        console.log("ovamo da se doda za obrisi Porudzbinu",this.porudzbinica );
            this.porudzbinica=null; 
            fetch("https://localhost:5001/Sto/OslobodiSto/" + this.id, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Broj:this.broj,
                Status: "Slobodan",
                KaficId: this.kafic.id
                
            })
            }).then(resp => {
            if (resp.status == 204) {
        
            
                alert(`Sto ${this.broj} je upravo Oslobodjen!`);
            }
            });
        this.refDiv.style.backgroundColor="#80b3ff";
        this.status = "Slobodan";
        this.refDiv.querySelector("label").innerHTML="Sto: "+this.broj+"  "+this.status;
        this.refDiv.querySelectorAll("button").forEach( (element, index)=>{
            element.disabled =true;
            element.onclick=(ev)=>{
                if(index==0)
                    this.funkcijaZadugme1(host);
                if(index==1)
                    this.Oslobodi(host);

            }
    });
    
    }
    
    
}