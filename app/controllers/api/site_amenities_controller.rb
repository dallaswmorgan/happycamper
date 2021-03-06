class Api::SiteAmenitiesController < ApplicationController

  def update
    # Site_id is not necessarily == to site_amenity_id
    @site_amenity = SiteAmenity.find(params[:site_amenity][:id])
    @site = Site.find(params[:site_amenity][:site_id])
    if @site_amenity.update(site_amenity_params)
      render 'api/sites/show'
    else
      render json: @site_amenitiy.errors.full_messages, status: 422
    end
  end

  private

  def site_amenity_params
    params.require(:site_amenity).permit(:id, :fire_ring, :toilet,
      :shower, :drinking_water, :pets_allowed, :picnic_table)
  end
end
