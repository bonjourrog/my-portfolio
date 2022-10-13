import { Route } from "@angular/router";

export const AppRoutes:Route[] = [
    {
        path:'', redirectTo:'/home', pathMatch:'full'
    },
    {
        path:'',
        children:[
            {
                path:'home',
                loadChildren: ()=> import("./modules/home/home.module").then(m=>m.HomeModule)
            },
            {
                path:'projects',
                loadChildren: ()=> import("./modules/project-details/project-details.module").then(m=>m.ProjectDetailsModule)
            }
        ]
    }
]