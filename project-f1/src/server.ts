import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
    {
        id: 1, 
        name:"ferrari", 
        base: "Woking, United Kingdom"
    },
    {
        id: 2, 
        name:"bugatti", 
        base: "Amsterdam"        
    },   
];

const drivers = [
    { 
        id: 1,
        name: "Max Verstappen",
        team: "Red Bull Racing" 
    }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return {drivers}
});

server.listen({ port: 3636 }, () =>{
    console.log("Server Init");
});