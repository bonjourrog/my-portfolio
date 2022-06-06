export interface UserInfo{
    name: string;
    description: Description[];
    image: string;
    social_networks: SocialNetwork[]
    experience: Experience[];
    projects: Project[];
}

export interface Description{
    name: string;
    icon: string;
}

export interface SocialNetwork{
    icon: string;
    link: string;
}

export interface Experience{
    occupation_name: string;
    company_name: string;
    time_worked: number;
    years_or_moths: string;
}

export interface Project{
    project_name: string;
    company_name: string;
    icon: string;
}
