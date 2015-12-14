require "sinatra/base"

require("./controllers/application")
require("./controllers/home")

map ('/') { run HomeController }
