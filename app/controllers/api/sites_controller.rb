class Api::SitesController < ApplicationController
  def index
    if params[:geo_bounds]
      p "Searching within geo bounds"
      @sites = Site.in_bounds(geo_bounds)
    elsif params[:featured]
      @sites = Site.featured_sites
    else
      @sites = Site.all
    end
  end

  def show
    @site = Site.find(params[:id])
  end

  def create
    @site = Site.new(site_params)
    if @site.save
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
    params.require(:geo_bounds)
  end


end
