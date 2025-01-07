using Chess_Info.Database;
using Chess_Info.Models;
using MongoDB.Driver;

namespace Chess_Info.Services;

public class OpeningService
{
    private readonly IMongoCollection<Opening> _openings;

    public OpeningService(IDbContext dbContext)
    {
        _openings = dbContext.GetCollection<Opening>("otwarcia");
    }

    public async Task<List<Opening>> GetAllAsync()
    {
        return await _openings.Find(_ => true).ToListAsync();
    }

    public async Task<Opening> GetByIdAsync(string id)
    {
        return await _openings.Find(o => o.Id == id).FirstOrDefaultAsync();
    }

    public async Task<Opening> CreateAsync(Opening opening)
    {
        await _openings.InsertOneAsync(opening);
        return opening;
    }

    public async Task UpdateAsync(string id, Opening updatedOpening)
    {
        await _openings.ReplaceOneAsync(o => o.Id == id, updatedOpening);
    }

    public async Task DeleteAsync(string id)
    {
        await _openings.DeleteOneAsync(o => o.Id == id);
    }
}