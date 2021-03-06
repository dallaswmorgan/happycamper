Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :sites
    resources :reservations
    resources :site_images, only: [:create]
    resources :reviews
    resources :site_amenities, only: [:update]
  end
end
