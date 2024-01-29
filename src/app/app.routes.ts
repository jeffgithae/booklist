import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path:'list',
        component:BookListComponent
    },
    {
        path:'category',
        component:CategoriesComponent
    }
];
