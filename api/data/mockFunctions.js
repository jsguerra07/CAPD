const {Company, Project, UserHistory, Ticket} = require ("../src/db");
const { project, userHistory, ticket } = require("./capdMock");

async function createProject (projects) {
    try {
        const {name, company} = projects;

        const companyDb = await Company.findOne({
            where : {
                name: company,
            },
            include: [
                {
                    model: Project,
                    as: "projects"
                }
            ]
        });

        const newProject = await Project.findOrCreate({
            where: {
                name,
                company_id: companyDb.id
            }
        })

    } catch (error) {
        console.log(error)
    }
}

async function createUserHistory (userHistories) {
    try {
        const {name, project} = userHistories
        
        const projectDb = await Project.findOne({
            where: {
                name: project
            },
            include: [
                {
                    model: UserHistory,
                    as: "userHistories"
                }
            ]
        });
    
        const newUserHistory = await UserHistory.findOrCreate({
            where: {
                name,
                project_id: projectDb.id
            }
        })
        
    } catch (error){
        console.log(error)
    }

}

async function createTicket (ticket) {
    try {
        const {name, comments, status, userHistory} = ticket
        
        const userHistoryDb = await UserHistory.findOne({
            where: {
                name: userHistory
            },
        });
    
        const newTicket = await Ticket.findOrCreate({
            where: {
                name,
                comments,
                status,
                userHistory_id: userHistoryDb.id
            }
        })
        
    } catch (error){
        console.log(error)
    }

}
module.exports = {
    createProject,
    createUserHistory,
    createTicket,
}