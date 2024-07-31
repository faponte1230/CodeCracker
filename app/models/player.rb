class Player < ApplicationRecord
    after_initialize :set_default_attempts

    private
  
    def set_default_attempts
        self.attempts ||= 0
    end
end
