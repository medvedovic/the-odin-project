class TweetsController < ApplicationController
	before_action :get_tweet, only: [:edit, :update, :destroy]
	before_action :check_auth, :only => [:edit, :update, :destroy]
	def get_tweet
		@tweet = Tweet.find(params[:id])
	end

	def check_auth
		if session[:zombie_id] != @tweet.zombie_id
			flash[:notice] = "Sorry, you can't edit this tweet"
			redirect_to(tweets_path)
		end
	end

	def show
		@tweet = Tweet.find(params[:id].require(:tweet).permit(:status))
		render action: 'status'
	end

	def index
		if params[:zipcode]
			@tweets = Tweet.where(zipcode: params[:zipcode])
		else
			@tweets = Tweet.all
		end
		if params[:name]
			@zombie = Zombie.where(name: params[:name]).first
			@tweets = @zombie.tweets
		else
			@tweets = Tweet.all
	end

	def edit
		
	end

	def update

	end

	def destroy

	end
end