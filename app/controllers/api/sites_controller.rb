class Api::SitesController < ApplicationController
  def index
    # Objects:
    geo_bounds = params[:geo_bounds]
    amenities = params[:amenities]

    # Booleans:
    featured = params[:featured]
    eclipse = params[:eclipse]
    if geo_bounds && params[:amenities]
      # Site.joins(:amenity_list).where(site_amenities: {pets_allowed: true, picnic_table: true})

      @sites = Site.joins(:amenity_list)
                   .in_bounds(geo_bounds)
                   .where(site_amenities: amenities)
    elsif geo_bounds
      @sites = Site.in_bounds(geo_bounds)
    elsif featured
      @sites = Site.featured_sites
    else
      @sites = Site.all
    end
    if eclipse
      @sites = @sites.eclipse_sites
    end
    @sites
  end

  def show
    @site = Site.find(params[:id])
  end

  def create
    @site = Site.new(site_params)
    @site.user_id = current_user.id
    if @site.save
      render :show
    else
      render json: @site.errors.full_messages, status: 422
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

  def amenities
    params.require(:amenities)
  end


end
