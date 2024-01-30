import { Component, ViewChild } from '@angular/core';
import { IBooks, IbookCategory } from '../models';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { CategoriesComponent } from '../categories/categories.component';



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
    MatDialogModule

  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  providers: [provideNativeDateAdapter(), MatDialog]
})

export class BookListComponent {
  displayedColumns = ['title', 'year', 'author'];
  dataSource: IBooks[] = [];
  bookCategory: IbookCategory[] =[];
  bookForm = new FormGroup({
    title: new FormControl<string | null>('', Validators.required),
    year: new FormControl<number | null>(null, Validators.required),
    author: new FormControl<string | null>('', Validators.required)
  });

  constructor(private dialog: MatDialog) {}
  private book: IBooks[] = [];

  
 
  onSubmit() {

    const newBook: IBooks = { ...this.bookForm.value };
    this.book.push(newBook);
    this.dataSource = [...this.book]
    this.bookForm.reset()

  }

  delete(){

  }

  openModal() {
    const dialogRef = this.dialog.open(CategoriesComponent, {
      // Pass data (optional)
      data: { }
      
      
      
    });
  
    // Handle closing and results
    dialogRef.afterClosed().subscribe(result => {
      // Process result from modal (optional)
    // const newBook: IbookCategory = { ...this.categoryForm.value };
    // this.category.push(newBook);
    // console.log('category ', this.category)
    });
  }
 


}