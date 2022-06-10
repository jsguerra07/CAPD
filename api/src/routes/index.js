const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Company, Project, Ticket, UserHistory } = require("../db");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//+++++++++++++++++COMPANIES++++++++++++++++++
const getCompaniesInfo = async () => {
    return await Company.findAll(
        {
            include: {
                model: Project,
                as: "projects",
                attributes: ["name"],

            }
        }
    )
}

router.get("/companies", async (req, res) => {
    let allCompanies = await getCompaniesInfo();
    res.status(200).send(allCompanies)
})

//+++++++++++++++++++TICKETS++++++++++++++++++++

router.get("/tickets", async (req, res) => {
    try {
        const allTicketsDb = await Ticket.findAll()
        /* const allTickets = allTicketsDb.data */
        //console.log(allTicketsDb)
        /* console.log(allTickets) */
        //res.send("list of tickets");
        res.send(allTicketsDb)
    } catch (error) {
        res.send(error)
    }
})

router.post("/tickets/new/:id", async (req, res) => {
    const { id } = req.params
    const { name, comments, status } = req.body

    try {
        const userHistoryDb = await UserHistory.findOne({
            where: {
                id: id,
            }
        })

        const result = await Ticket.findOrCreate({
            where: {
                name: name,
                comments: comments,
                status: status,
                userHistory_id: userHistoryDb.id
            }
        })
        console.log(req.body)
        res.send(result);

    } catch (error) {
        res.send(error)
    }
})

/* router.post("/tickets", async (req, res) => {
    const { name, comments, status, userHistory } = req.body

    try {
        const userHistoryDb = await UserHistory.findOne({
            where: {
                name: userHistory,
            }
        })

        const result = await Ticket.findOrCreate({
            where: {
                name: name,
                comments: comments,
                status: status,
                userHistory_id: userHistoryDb.id
            }
        })
        console.log(req.body)
        res.send(result);

    } catch (error) {
        res.send(error)
    }
}) */

router.put("/tickets/:id", async (req, res) => {
    const { id } = req.params
    const { name, comments, status, userHistory_id } = req.body
    console.log(id, name, comments, status, userHistory_id)

    const updatedTicket = await Ticket.update(
        {
            name: name,
            comments: comments,
            status: status,
            userHistory_id: userHistory_id
        },
        {
            where: {
                id: id,
            },
            returning: true, plain: true
        })

    console.log(updatedTicket)

    res.send("updating of tickets");
})

router.delete("/tickets/:id", async (req, res) => {
    const { id } = req.params

    try {

        const deletedTicket = await Ticket.destroy({
            where: {
                id: id,
            }
        })
        //console.log(deletedTask)
        deletedTicket === 1 ? res.sendSatus(204) : res.send("Task not found")

    } catch (error) {
        res.send(error)
    }

})

/* router.get("/tickets/:id", async (req, res) => {

    const { id } = req.params

    try {
        const ticketDb = await Ticket.findOne({
            where: {
                id: id,
            }
        })
        //console.log(req.params)

        ticketDb !== null ? res.send(ticketDb) : res.status(404).send("Ticket not found");

        //res.send(ticketDb)

    } catch (error) {
        res.send(error)
    }
}) */

//+++++++++++++++++++PROJECTS++++++++++++++++++++

router.get("/projects", async (req, res) => {
    try {
        const allProjectsDb = await Project.findAll({
            include: {
                model: UserHistory,
                as: "userHistories",
                include: {
                    model: Ticket,
                    as: "tickets"
                }
            }
        })
        console.log(allProjectsDb, "projects")
        res.send(allProjectsDb)
    } catch (error) {
        res.send(error)
    }
})

//+++++++++++++++++++USERHISTORIES++++++++++++++++++++

router.get("/userHistories/:id", async (req, res) => {

    const { id } = req.params

    try {
        const ticketsDb = await Ticket.findAll({
            where: {
                userHistory_id: id,
            }
        })
        //console.log(req.params)

        ticketsDb !== null ? res.send(ticketsDb) : res.status(404).send("Ticket not found");

        //res.send(ticketDb)

    } catch (error) {
        res.send(error)
    }
})



module.exports = router;
