# app/controllers/codecracker_controller.rb
class SecretCodesController < ApplicationController
    before_action :ensure_single_secret_code, only: [:new]

  
    def check
      guess = SecretCode.new(code_params)               # Get the guess from the request params
      secret_code = SecretCode.first   # Retrieve the first secret code from the database
    
      result = []
    
      # Check digit1
      if guess.digit1 == secret_code.digit1
        result << { digit: 1, status: "correct" }
      elsif guess.digit1 == secret_code.digit2 || guess.digit1 == secret_code.digit3
        result << { digit: 1, status: "correct for another attribute" }
      else
        result << { digit: 1, status: "incorrect" }
      end
    
      # Check digit2
      if guess.digit2 == secret_code.digit2
        result << { digit: 2, status: "correct" }
      elsif guess.digit2 == secret_code.digit1 || guess.digit2 == secret_code.digit3
        result << { digit: 2, status: "correct for another attribute" }
      else
        result << { digit: 2, status: "incorrect" }
      end
    
      # Check digit3
      if guess.digit3 == secret_code.digit3
        result << { digit: 3, status: "correct" }
      elsif guess.digit3 == secret_code.digit1 || guess.digit3 == secret_code.digit2
        result << { digit: 3, status: "correct for another attribute" }
      else
        result << { digit: 3, status: "incorrect" }
      end
    
      # Check overall result
      overall_result = result.all? { |digit| digit[:status] == "correct" }
    
      render json: { result: result, overall_result: overall_result }
    end


    def new
      code = SecretCode.create(digit1: rand(0..9),digit2: rand(0..9), digit3: rand(0..9))  # Generate a random 3-digit code
      render json: { message: "New game started. Secret code generated.", code: code }
    end
  
    private
  
    def ensure_single_secret_code
      SecretCode.destroy_all
    end

    def code_params
      params.require(:secret_code).permit(:digit1, :digit2, :digit3)
    end

  end
  
