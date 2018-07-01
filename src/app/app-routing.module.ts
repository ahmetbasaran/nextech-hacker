import { ExtraOptions, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', loadChildren: './main/main.module#MainModule'
            }
        ]
    },
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
