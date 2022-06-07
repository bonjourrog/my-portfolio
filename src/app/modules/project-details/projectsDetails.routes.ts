import { Route } from "@angular/router";
import { ProjectDetailsComponent } from "./project-details.component";

export const  ProjectDetailsRoutes:Route[] = [
    {
        path:'', redirectTo:'/home',pathMatch:'full'
    },
    {
        path:'1',
        component:ProjectDetailsComponent
    }
];