class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");
      socket.emit("newC", { message: "Bienvenido al diagrama" });

      //cuando se desconecta un cliente:
      socket.on("disconnect", () => {
        console.log("cliente desconectado");
      });

      //* escuchar evento de unión a una sala dado el project id
      socket.on("joinRoom", (data) => {
        console.log(`Un cliente se ha unido a la sala: ${data.room}`);
        socket.join(data.room);
      });

      //* escuchar evento de dejar la sala dado el project id
      socket.on("leaveRoom", (data) => {
        console.log(`Un cliente ha dejado la sala: ${data.room}`);
        socket.leave(data.room);
      });

      //* cuando se cambia el nombre del project
      socket.on("changeName", (data) => {
        console.log(`un cliente cambio el nombre del project: ${data.name}`);
        this.io.to(data.room).emit("changedName", data);
      });

      // * escuchar evento cuando se coloca un nuevo nodo
      socket.on("insertNode", (data) => {
        console.log(`backend: nuevo nodo insertado ${data.node}`);
        this.io.to(data.room).emit("newNode", data);
      });

      // * escuchar evento cuando se conecta un nuevo edge
      socket.on(`insertEdge`, (data) => {
        console.log(`backend: nuevo edge insertado ${data.edge}`);
        this.io.to(data.room).emit("newEdge", data);
      });

      // * escuchar evento cuando un usuario termina de arrastrar un node
      socket.on("moveNode", (data) => {
        console.log(`un usuario ha movido un nodo ${data.node.data.title}`);
        this.io.to(data.room).emit("movedNode", data);
      });

      // * escuchar evento cuando se escribe un label para un edge
      socket.on("setLabel", (data) => {
        console.log(`set label edge ${data.edges}`);
        this.io.to(data.room).emit("changeLabel", data);
      });

      // * escuchar evento cuando se actualiza la data de un nodo
      socket.on("updateNode", (data) => {
        console.log(`update node ${data}`);
        this.io.to(data.room).emit("updatedNode", data);
      });

      // * escuchar evento cuando se elimina edges
      socket.on("deleteEdges", (data) => {
        console.log(`delete edges ${data}`);
        this.io.to(data.room).emit("deletedEdges", data.edges);
      });

      // * escuchar evento cuando se elimina nodes
      socket.on("deleteNodes", (data) => {
        console.log(`delete nodes ${data}`);
        this.io.to(data.room).emit("deletedNodes", data.nodes);
      });

      // * escuchar evento cuando
    });
  }
}

module.exports = Sockets;
