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
        String sql = "INSERT INTO Kunde (film, antall,fornavn, etternavn, telefonnr, epost) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, innkunde.getFilm(), innkunde.getAntall(), innkunde.getFornavn(), innkunde.getEtternavn(), innkunde.getTelefonnr(), innkunde.getEpost());

    }
    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT * FROM Kunde";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper<>(Kunde.class));
        return alleKunder;
    }
    public void slettAlleKunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
    public void slettEnkeltKunde(int id){
        String sql = "DELETE FROM Kunde Where id = ?";
        db.update(sql, id);
    }

    public void oppdaterBiletten(Kunde kunde){
        String sql = "UPDATE Kunde SET film=?, antall=?, fornavn=?, etternavn=?, telefonnr=?, epost=? WHERE id=?";
        db.update(sql, kunde.getFilm(), kunde.getAntall(), kunde.getFornavn(), kunde.getEtternavn(), kunde.getTelefonnr(), kunde.getEpost(), kunde.getId());
    }

    public Kunde hentBilett(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Kunde WHERE id=?";
        Kunde enBilett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Kunde.class));
        return enBilett;
    }
}
