const Server = require("./Server")

class Main {
  static process(){
    const server = new Server()
    server.init()
    server.start()
  }
}

Main.process()

