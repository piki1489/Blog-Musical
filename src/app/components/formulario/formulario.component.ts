import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router,
    private blogService: BlogService) {

    this.formulario = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      date: new FormControl(),
      category: new FormControl(),
    });
  }
  createPost(form: any) {
    this.blogService.createPost(form.value);
    this.router.navigate(['/post']);
  }

  ngOnInit(): void {

  }

}
