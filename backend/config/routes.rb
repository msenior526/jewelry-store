Rails.application.routes.draw do
  resources :users
  resources :shopping_carts
  resources :jewelry_products

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
