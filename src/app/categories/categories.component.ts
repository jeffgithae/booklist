import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { IBookCategory } from '../models';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
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
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  displayedColumns = ['categoryTitle'];
  categories: IBookCategory[] = [];
  categoryForm = new FormGroup({
    categoryTitle: new FormControl<string | null>('', Validators.required),
  });

  @Output() categoriesChange = new EventEmitter<IBookCategory[]>();

  onSubmitModal() {
    const newCategory: IBookCategory = { ...this.categoryForm.value };
    if (newCategory.categoryTitle?.length !== 0) {
      this.categories.push(newCategory);
      this.categoriesChange.emit(this.categories);
      this.categoryForm.reset();
    }
  }
}
