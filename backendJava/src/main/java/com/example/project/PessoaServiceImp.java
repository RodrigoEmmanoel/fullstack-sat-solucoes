
package com.example.project;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaServiceImp implements PessoaService {
    @Autowired
    private PessoaRepositorio repositorio;
    
    @Override
    public List<Pessoa> listar() {
        return repositorio.findAll();
    }

    @Override
    public Pessoa listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Pessoa add(Pessoa p) {
        return repositorio.save(p);
    }

    @Override
    public Pessoa edit(Pessoa p) {
        return repositorio.save(p);
    }

    @Override
    public Pessoa delete(int id) {
        Pessoa p=repositorio.findOne(id);
        if(p!=null){
            repositorio.delete(p);
        }
        return p;
    }
    
}
