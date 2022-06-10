const company = [
    {
        name: "Porsche",
        nit: "012345678-9",
        phone: "(012)3456789",
        address: "Cra01#23-45",
        email: "servicioalcliente@porsche.com.co",
        image: "https://marcas-logos.net/wp-content/uploads/2020/02/Porsche-logo.png"    
    },
    {
        name: "Mazda",
        nit: "123456789-0",
        phone: "(123)4567890",
        address: "Cra12#34-56",
        email: "servicioalcliente@mazda.com.co",
        image: "https://logodownload.org/wp-content/uploads/2019/11/mazda-logo-1.png"    
    },
    {
        name: "Audi",
        nit: "234567890-1",
        phone: "(234)5678901",
        address: "Cra23#45-67",
        email: "servicioalcliente@audi.com.co",
        image: "https://logos-marcas.com/wp-content/uploads/2021/03/Audi-Logotipo-1995-2009.jpg"    
    },

];

const project = [
    {
        name: "Porsche Web APP",
        company: "Porsche"
    },
    {
        name: "Mazda Web APP",
        company: "Mazda"
    },
    {
        name: "Mazda Mobile APP",
        company: "Mazda"
    },
];

const userHistory = [
    {
        name: "Porsche dataBase",
        project: "Porsche Web APP",
    },
    {
        name: "Porsche backend",
        project: "Porsche Web APP",
    },
    {
        name: "Porsche frontend",
        project: "Porsche Web APP",
    },
    {
        name: "Mazda dataBase",
        project: "Mazda Web APP",
    },
    {
        name: "Mazda backend",
        project: "Mazda Web APP",
    },
    {
        name: "Mazda frontend",
        project: "Mazda Web APP",
    },
    {
        name: "Mazda mobile dataBase",
        project: "Mazda Mobile APP",
    },
    {
        name: "Mazda mobile backend",
        project: "Mazda Mobile APP",
    },
    {
        name: "Mazda mobile frontend",
        project: "Mazda Mobile APP",
    },
];

const ticket = [
    {
        name: "Porsche dataBase ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Porsche dataBase",
    },
    {
        name: "Porsche dataBase ticket 2",
        comments: "",
        status: "en proceso",
        userHistory: "Porsche dataBase",
    },
    {
        name: "Porsche backend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Porsche backend",
    },
    {
        name: "Porsche frontend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Porsche frontend",
    },
    {
        name: "Mazda dataBase ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda dataBase",
    },
    {
        name: "Mazda dataBase ticket 2",
        comments: "",
        status: "en proceso",
        userHistory: "Mazda dataBase",
    },
    {
        name: "Mazda backend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda backend",
    },
    {
        name: "Mazda frontend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda frontend",
    },
    {
        name: "Mazda mobile dataBase ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda mobile dataBase",
    },
    {
        name: "Mazda mobile dataBase ticket 2",
        comments: "",
        status: "en proceso",
        userHistory: "Mazda mobile dataBase",
    },
    {
        name: "Mazda mobile backend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda mobile backend",
    },
    {
        name: "Mazda mobile frontend ticket 1",
        comments: "",
        status: "finalizado",
        userHistory: "Mazda mobile frontend"
    },
];

const user = [
    {
        name: "Pablo",
        last_name: "Picasso",
        email: "pablopicasso@gmail.com",
        password: "pablopicasso",
        assigned_company: "Porsche"

    },
    {
        name: "Antoni",
        last_name: "Gaudi",
        email: "antonigaudi@gmail.com",
        password: "antonigaudi",
        assigned_company: "Mazda"

    },
]

module.exports = {
    company,
    project,
    user,
    userHistory,
    ticket,

  };