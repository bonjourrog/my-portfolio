import { Route } from "@angular/router";

export const AppRoutes:Route[] = [
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'',
        children:[
            {
                path:'home',
                loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)
            }
        ]
    }
]