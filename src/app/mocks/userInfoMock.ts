import { UserInfo } from "../models/userInfo";


export const UserInfoMock: UserInfo = {
    name: "Rogelio",
    description: [
        {
            name:"Work both front-end and back-end technologies focus on web development",
            icon: "💻"
        },
        {
            name:"Like learn new things",
            icon:"📚"
        },
        {
            name:"Good at team working",
            icon: "🤝"
        },
        {
            name:"Easy integration with the team",
            icon:"👍"
        }
    ],
    image: "https://www.pngarts.com/files/5/Full-Body-Justin-Bieber-PNG-Photo.png",
    social_networks:[
        {
            icon:"fa-brands fa-github",
            link:"https://github.com/RsBVzla"
        },
        {
            icon:"fa-brands fa-linkedin",
            link:"https://www.linkedin.com/in/rogelio-beltr%C3%A1n-19ba95209/"
        }
    ],
    experience:[
        {
            company_name: "Triiple i soluciones",
            occupation_name: "web developer",
            time_worked: 9,
            years_or_moths: "months"
        }
    ],
    projects:[
        {
            project_name:"Solinsa Website",
            company_name: "Triple i soluciones",
            icon: "fa-solid fa-boxes-stacked"
        },
        {
            project_name:"Fluxy app",
            company_name: "Triple i soluciones",
            icon:"fa-regular fa-calendar-check"
        },
        {
            project_name:"fa-regular fa-calendar-check",
            company_name:"School project",
            icon:"fa-solid fa-image"
        },
        {
            project_name:"Report system",
            company_name:"School project",
            icon:"fa-solid fa-chart-column"
        }
    ]
}