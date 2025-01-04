using MongoDB.Driver;

namespace Chess_Info.Database;

public interface IDbContext
{
    IMongoCollection<T> GetCollection<T>(string collectionName);
}
