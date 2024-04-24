package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Kundekontroller {

   @Autowired
   Kunderepo rep;

    @PostMapping("/lagre")
    public void lagreKunde(@RequestBody Kunde innKunde) {
        rep.lagreKunde(innKunde);
    }

    @GetMapping("/visBilletter")
    public List<Kunde> hentAlle(){
        return rep.hentAlleKunder();
    }

    @GetMapping("/hentBilett")
    public Kunde hentBilett(int id) {
        return rep.hentBilett(id);
    }

    @DeleteMapping("/slettAlle")
    public void SlettAlle(){
        rep.slettAlleKunder();
    }

    @GetMapping("/slettEnkelt")
    public String SlettEnkelt(int id) {
        rep.slettEnkeltKunde(id);
        return "Slettet";
    }

    @PostMapping("/oppdater")
        public void oppdaterBiletten(@RequestBody  Kunde kunde ){
        rep.oppdaterBiletten(kunde);
    }
}
