class ShoppingCartsController < ApplicationController
  before_action :set_shopping_cart, only: [:show, :update, :destroy]

  # GET /shopping_carts
  def index
    @shopping_carts = ShoppingCart.all

    render json: @shopping_carts.to_json(include: [:jewelry_products], except: [:updated_at, :created_at])
  end

  # GET /shopping_carts/1
  def show
    render json: @shopping_cart.to_json(include: [:jewelry_products])
  end

  # POST /shopping_carts
  def create
    @shopping_cart = ShoppingCart.new(shopping_cart_params)

    if @shopping_cart.save
      render json: @shopping_cart.to_json(include: [:jewelry_products], except: [:updated_at, :created_at]), status: :created, location: @shopping_cart
    else
      byebug
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shopping_carts/1
  def update
    @shopping_cart.jewelry_product_ids = shopping_cart_params['jewelry_product_ids']
    if @shopping_cart.save
      render json: @shopping_cart.to_json(include: [:jewelry_products])
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
      params.require(:shopping_cart).permit!
    end
end
