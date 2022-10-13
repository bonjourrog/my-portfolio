export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: Technologie[];
    image: string;
}

export interface Technologie{
    name: string;
    icon: string;
}
