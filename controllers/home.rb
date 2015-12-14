class HomeController < ApplicationController

# home page
get "/" do
  erb :'portfolio-home', :layout => :'portfolio-layout'
end



end # END CLASS
