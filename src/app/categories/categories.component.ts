import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { IbookCategory } from '../models';

const categories: IbookCategory[] = [
  {id: 1, categoryTitle: 'Angular For Dummies', },
]

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,MatCardModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  displayedColumns: string[] = ['Title', ];
  dataSource = categories;

}
