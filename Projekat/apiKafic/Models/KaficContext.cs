using Microsoft.EntityFrameworkCore;

namespace apiKafic.Models{
    public class KaficContext:DbContext {

        public DbSet<Kafic> Kafic {get; set;}
	    public DbSet<Sto> Stolovi {get; set;}
      
    
        public KaficContext(DbContextOptions options) : base(options){

        }
        
    } 
}