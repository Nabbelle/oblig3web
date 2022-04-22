package com.example.oblig3web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagre(Billett billett) {
        String sql = "INSERT INTO Billett (fornavn,etternavn,telefonnr,epost,antall,film) VALUES(?,?,?,?,?,?)";
        db.update(sql, billett.getEtternavn(), billett.getFornavn(), billett.getTelefonnr(),
                billett.getEpost(), billett.getAntall(), billett.getFilm());
    }

    public List<Billett> hentAlle() {
        String sql = "SELECT * FROM Billett ORDER BY etternavn";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }


    public void slettBilletter() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
