class Api::SitesController < ApplicationController
  def index
    @sites = geo_bounds ? Site.in_bounds(geo_bounds) : Site.all
  end

  def show
    @site = Site.find(params[:id])
  end

  def create
    @site = Site.new(site_params)
    if @site.create
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def site_params
    params.require(:site).permit(
    :name,
    :description,
    :user_id,
    :region_id,
    :featured,
    :public,
    :state,
    :city,
    :lat,
    :lng,
    :price,
    :guest_limit
    )
  end

  def geo_bounds
    params[:geo_bounds]
  end

end
