class ApplicationController < Sinatra::base

  require "bundler"
  Bundler.require

  ActiveRecord::Base.establish_connectino(
    :adapter => "postgresql",
    :database => "" # TODO: database?
  )

  set :views, File.expand_path("../../views", __FILE__)
  set :public_dir, File.expand_path("../../public", __FILE__)



  not_found do
    erb :not_found
  end


end # END CLASS