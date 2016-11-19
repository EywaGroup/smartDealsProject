require 'test_helper'

class WarrantyContractControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
