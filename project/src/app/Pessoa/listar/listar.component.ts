import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Pessoa } from 'src/app/Modelo/Pessoa';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  pessoas: Pessoa[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
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
    this.pessoas = listStatic;

    //  RODAR SE CONSEGUIR FUNCIONAR O BACK
    // this.service.getPessoas()
    // .subscribe(data=>{
    //   this.pessoas=data;
    // });
  }
  Editar(pessoa: Pessoa): void {
    localStorage.setItem('id', pessoa.id.toString());
    this.router.navigate(['edit']);
  }
  Delete(pessoa: Pessoa) {
    this.pessoas = this.pessoas.filter((p) => p !== pessoa);
    alert('Usuário excluído...!!!');
    // this.service.deletePessoa(pessoa)
    // .subscribe(data=>{
    //   this.pessoas=this.pessoas.filter(p=>p!==pessoa);
    //   alert("Usuário excluído...!!!");
    // })
  }
}
