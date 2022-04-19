package com.example.oblig2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {
        @Autowired
        public BillettRepository rep;

        public final List<Billett> register = new ArrayList<>();


        @PostMapping("/lagBillett")
        public void lagreBillett (Billett innBillett) {
                register.add(innBillett);
        }
        @GetMapping("/hentbillett")
        public List<Billett> hentallebillet (){
        return register;

        }

        @PostMapping("/slettAlle")
        public void slettBilletter() {
                register.clear();
        }
}