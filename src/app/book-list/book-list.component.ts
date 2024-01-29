import { Component } from '@angular/core';
import { IBooks } from '../models';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

let book: IBooks[] = []

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  providers: [provideNativeDateAdapter()]
})

export class BookListComponent {
  displayedColumns = ['title', 'year', 'author'];
  dataSource :IBooks[]= [];
  books = new FormGroup({
    title: new FormControl<string|null>('',Validators.required),
    year: new FormControl<number|null>(null, Validators.required),
    author: new FormControl<string|null>('', Validators.required) 
  });
  

  onSubmit() {
    const newBook: IBooks = { ...this.books.value };
    book.push(newBook);
    this.dataSource = book
  
  }
  

}