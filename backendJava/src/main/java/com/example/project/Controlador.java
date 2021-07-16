
package com.example.project;

import java.util.List;
import static org.hibernate.criterion.Projections.id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/pessoas"})
public class Controlador {
    
    @Autowired
    PessoaService service;
    
    @GetMapping
    public List<Pessoa>listar(){
        return service.listar();
    }
    @PostMapping
    public Pessoa  adicionar(@RequestBody Pessoa p){
        return service.add(p);
    }
    @GetMapping(path = {"/{id}"})
    public Pessoa listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Pessoa editar(@RequestBody Pessoa p,@PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Pessoa delete(@PathVariable("id") int id){
        return service.delete(id);
    }
}
