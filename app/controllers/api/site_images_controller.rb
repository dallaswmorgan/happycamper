class Api::SiteImagesController < ApplicationController

  def create
    @image = SiteImage.new(image_params)
    @site = Site.find(image_params[:site_id])
    if @image.save
      render 'api/sites/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  private

  def image_params
    params.require(:image).permit(:url, :site_id)
  end
end
