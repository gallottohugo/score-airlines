class Airline < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end 

    def avg_score 
        return 0 if reviews.count == 0
        reviews.average(:score).round(2)
    end
end
