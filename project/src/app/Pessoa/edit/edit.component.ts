import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    const id = localStorage.getItem('id');
    const listStatic = [
      {
        id: 1,
        name: 'Rodrigo',
        apelidos: 'Emmanoel',
      },
      {
        id: 2,
        name: 'Souza',
        apelidos: 'Franco',
      },
      {
        id: 3,
        name: 'Renata',
        apelidos: 'Vitoria',
      },
      {
        id: 4,
        name: 'Stéfany',
        apelidos: 'Repetcki',
      },
    ];

    let pessoaFiltered;

    if (
      listStatic.map(function (i) {
        if (i.id === Number(id)) {
          pessoaFiltered = i;
        }
      })
    )
      if (pessoaFiltered) this.pessoa = pessoaFiltered;

    // service para editar
    // this.service.getPessoaId(Number(id))
    // .subscribe(data=>{
    //   this.pessoa=data;
    // })
  }
  Atualizar(pessoa: Pessoa) {
    alert('foi atualizado com sucesso...!!!');
    this.router.navigate(['listar']);

    // service para atualizar
    // this.service.updatePessoa(pessoa)
    // .subscribe(data=>{
    //   this.pessoa=data;
    //   alert("foi atualizado com sucesso...!!!");
    //   this.router.navigate(["listar"])
    // })
  }
}
