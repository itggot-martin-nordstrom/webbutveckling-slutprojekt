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
    @data = db.execute("SELECT * FROM pokemon")

    # gör inget, men varför? värt att använda flera selektorer från databasen?
    @pokeline = db.execute("SELECT id, name from pokemon ORDER BY id")
    p @pokeline

    return slim(:index)
end


get('/pokemon/:id') do |id|
    db = SQLite3::Database.new('pokemon_db.db')
    @data = db.execute("SELECT * FROM pokemon WHERE id = ?", id)

    return slim(:pokemon)
end


# get('/pokemon/:id/stats') do |id|
#     return erb(:stats, layout:false)
# end