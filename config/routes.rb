# config/routes.rb
Rails.application.routes.draw do
  #easy mode
  get '/new', to: 'secret_codes#new'
  post '/check', to: 'secret_codes#check'

  #medium mode
  get '/mednew', to: 'medium_codes#new'
  post '/medcheck', to: 'medium_codes#check'

  #hard mode
  get '/hardnew', to: 'hard_codes#new'
  post '/hardcheck', to:'hard_codes#check'
end
