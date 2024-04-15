package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class Kunderepo {

    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(Kunde innkunde){
        String sql = "INSERT INTO Kunde (fornavn, etternavn, telefonnr, epost, antall, velgFilm) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, innkunde.getFornavn(), innkunde.getEtternavn(), innkunde.getTelefonnr(), innkunde.getEpost(), innkunde.getAntall(), innkunde.getFilm());

    }
    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;
    }
    public void slettAlleKunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
}
