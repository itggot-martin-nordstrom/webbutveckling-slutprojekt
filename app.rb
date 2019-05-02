require 'sinatra'
require 'sqlite3'
require 'slim'

# vid error, utför grej
# error do
# end

# gör att funktioner blir tillgängliga i scopet du vill ha det
helpers do
    def numberExtender(number)
        if number < 10
            out = "#00" + number.to_s
        elsif number < 100  
            out = "#0" + number.to_s
        else
            out = "#" + number.to_s  
        end
    end
end


get('/') do
    db = SQLite3::Database.new('pokemon_db.db')
    @data = db.execute("SELECT id, name, line_starter, background, pokemon_intro FROM pokemon")

    @pokeline = db.execute("SELECT id, name from pokemon ORDER BY id")
    
    return slim(:index)
end


get('/pokemon/:id') do |id|
    db = SQLite3::Database.new('pokemon_db.db')
    @data = db.execute("SELECT * FROM pokemon WHERE id = ?", id)
    
    @pokeline = db.execute("SELECT id, name from pokemon ORDER BY id")
    @evolutions = db.execute("SELECT id FROM pokemon WHERE line_starter = ?", @data[0][2])
    # @evolutions = db.execute("SELECT id FROM pokemon")
    return slim(:pokemon)
end


# get('/pokemon/:id/stats') do |id|
#     return erb(:stats, layout:false)
# end