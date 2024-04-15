package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Kundekontroller {

   @Autowired
   private Kunderepo rep;

    @PostMapping("/lagre")
    public void lagreKunde(@RequestBody Kunde innKunde) {
        rep.lagreKunde(innKunde);
    }

    @GetMapping("/visBilletter")
    public List<Kunde> hentAlle(){
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void SlettAlle(){
        rep.slettAlleKunder();
    }
}
