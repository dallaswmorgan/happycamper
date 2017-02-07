class Api::SitesController < ApplicationController
  def index
    # Values are stringified. Transforms back into boolean
    # Objects:
    geo_bounds = params[:geo_bounds]

    # Booleans:
    featured = params[:featured]
    if featured == "true"
      featured = true
    end
    unparsed_amenities = params[:amenities]
    amenities = {}
    if unparsed_amenities
      unparsed_amenities.each do |k, v|
        amenities[k] = true if v == "true"
      end
    end
    if geo_bounds && amenities != {}
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
    if params[:eclipse] == "true"
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
