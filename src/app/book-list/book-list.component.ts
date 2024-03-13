import { Component } from '@angular/core';
import { IBooks, IBookCategory } from '../models';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule, } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { CategoriesComponent } from '../categories/categories.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    // MatDialogModule,
    MatDialogModule,
    MatIconModule,
    CommonModule

  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  providers: [provideNativeDateAdapter(), MatDialog]
})

export class BookListComponent {
  displayedColumns = ['id', 'title', 'year', 'author', 'category','actions'];
  dataSource: IBooks[] = [];
  bookForm = new FormGroup({
    title: new FormControl<string | null>('', Validators.required),
    year: new FormControl<number | null>(null, Validators.required),
    author: new FormControl<string | null>('', Validators.required),
    id: new FormControl<number | null>(null, Validators.required),
    category: new FormControl<IBookCategory | null>(null, Validators.required)
  });
  book: IBooks[] = [];
  categories: IBookCategory[] = [];

  constructor(private dialog: MatDialog) { }


  onSubmit() {
    const newBook: IBooks = { ...this.bookForm.value };
    this.book.push(newBook);
    this.dataSource = [...this.book]
    console.log(this.bookForm.value );
    console.log(this.dataSource, "dataSource");
    this.bookForm.reset()
  }

  openModal() {
    const dialogRef = this.dialog.open(CategoriesComponent, {
      data: {}
    });

    dialogRef.componentInstance.categoriesChange.subscribe((result: IBookCategory[]) => {

        this.categories = [...result];
        console.log(this.categories);
      
      
    });



  }

  deleteFromList(book: []) {
    this.dataSource = this.dataSource.filter(function (currentBook) {
      return currentBook !== book;
    });
    console.log(this.dataSource);
  }







}