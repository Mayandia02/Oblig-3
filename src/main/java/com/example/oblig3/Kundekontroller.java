package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class Kundekontroller {

   @Autowired
   private Kunderepo rep;

    @GetMapping("/bestilling")
    public String visBestilling(Model model){
        model.addAttribute("bestilling", new Kunde());
        return "bestilling";
    }

    @PostMapping("/lagre")
    public String lagreKunde(@ModelAttribute Kunde kunde){
        kunder.add(kunde);
        return "redirect:/visBilletter";
    }

    @GetMapping("/visBilletter")
    public String visKunder(Model model){
        model.addAttribute("kunder", kunder);
        return "visBilletter";
    }
}
