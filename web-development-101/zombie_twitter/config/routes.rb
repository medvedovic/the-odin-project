ZombieTwitter::Application.routes.draw do
	resources :tweets	
	get '/new_tweet' => 'tweets#new'
	get '/all' => 'tweets#index', as 'all_tweets'
	get '/local_tweets/:zipcode' => 'tweets#index'
	root to: "tweets#index"
	get ':name' => 'tweets#index', as: 'zombie_tweets'
end