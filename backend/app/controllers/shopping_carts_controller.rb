class ShoppingCartsController < ApplicationController
  before_action :set_shopping_cart, only: [:show, :update, :destroy]

  # GET /shopping_carts
  def index
    @shopping_carts = ShoppingCart.all

    render json: ShoppingCartSerializer.new(@shopping_carts).serializable_hash.to_json
  end

  # GET /shopping_carts/1
  def show
    render json: @shopping_cart
  end

  # POST /shopping_carts
  def create
    @shopping_cart = ShoppingCart.new(user_id: params['user_id']) do |cart|
      cart.jewelry_product_ids = params['jewelry_product_ids']
    end
    if @shopping_cart.save
      byebug
      render json: ShoppingCartSerializer.new(@shopping_cart).serializable_hash.to_json
      # , status: :created, location: @shopping_cart
    else
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shopping_carts/1
  def update
    if @shopping_cart.update(shopping_cart_params)
      render json: @shopping_cart
    else
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shopping_carts/1
  def destroy
    @shopping_cart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_cart
      @shopping_cart = ShoppingCart.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shopping_cart_params
      params.fetch(:shopping_cart).permit(:user_id, jewelry_product_ids: [])
    end
end
