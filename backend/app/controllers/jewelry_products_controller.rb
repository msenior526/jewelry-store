class JewelryProductsController < ApplicationController
  before_action :set_jewelry_product, only: [:show, :update, :destroy]

  # GET /jewelry_products
  def index
    @jewelry_products = JewelryProduct.all

    render json: @jewelry_products
  end

  # GET /jewelry_products/1
  def show
    render json: @jewelry_product
  end

  # POST /jewelry_products
  def create
    @jewelry_product = JewelryProduct.new(jewelry_product_params)

    if @jewelry_product.save
      render json: @jewelry_product, status: :created, location: @jewelry_product
    else
      render json: @jewelry_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jewelry_products/1
  def update
    if @jewelry_product.update(jewelry_product_params)
      render json: @jewelry_product
    else
      render json: @jewelry_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jewelry_products/1
  def destroy
    @jewelry_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jewelry_product
      @jewelry_product = JewelryProduct.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def jewelry_product_params
      params.fetch(:jewelry_product, {})
    end
end