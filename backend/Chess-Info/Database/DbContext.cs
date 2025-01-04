using MongoDB.Driver;

namespace Chess_Info.Database;

public class DbContext : IDbContext
{
    private readonly IMongoDatabase _database;

    public DbContext(IConfiguration configuration)
    {
        var connectionString = configuration.GetSection("MongoDB:ConnectionString").Value;
        var databaseName = configuration.GetSection("MongoDB:DatabaseName").Value;

        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);
    }

    public IMongoCollection<T> GetCollection<T>(string collectionName)
    {
        return _database.GetCollection<T>(collectionName);
    }
}