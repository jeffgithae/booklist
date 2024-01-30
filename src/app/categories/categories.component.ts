import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { IbookCategory } from '../models';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';

// const categories: IbookCategory[] = []

@Component({
  selector: 'app-categories',
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
    MatDialogModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  displayedColumns: string[] = ['categoryTitle',];
  dataSource : IbookCategory[] =[];;
  categoryForm = new FormGroup({
    categoryTitle: new FormControl<string | null>('', Validators.required)
  })
  private category:IbookCategory []=[]

  onSubmitModal(){
    const newBook: IbookCategory = { ...this.categoryForm.value };
    this.category.push(newBook);
    this.dataSource = [... this.category]
    this.categoryForm.reset()

    
  }


}
