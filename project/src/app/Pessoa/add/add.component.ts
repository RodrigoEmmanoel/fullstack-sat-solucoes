import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Modelo/Pessoa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  Salvar(pessoa: Pessoa) {
    alert('Foi adicionado com sucesso...!!!');
    this.pessoa = pessoa;

    // this.service.createPessoa(pessoa)
    // .subscribe(data=>{
    //   alert("foi adicionado com sucesso...!!!");
    //   this.router.navigate(["listar"]);
    // })
  }
}
