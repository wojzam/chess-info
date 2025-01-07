using Chess_Info.Database;
using Chess_Info.Models;

namespace Chess_Info.Services;

using MongoDB.Driver;

public class PuzzleService
{
    private readonly IMongoCollection<Puzzle> _puzzles;

    public PuzzleService(IDbContext dbContext)
    {
        _puzzles = dbContext.GetCollection<Puzzle>("zagadka");
    }

    public async Task<List<Puzzle>> GetAllAsync()
    {
        return await _puzzles.Find(_ => true).ToListAsync();
    }

    public async Task<Puzzle> GetByIdAsync(string id)
    {
        return await _puzzles.Find(p => p.Id == id).FirstOrDefaultAsync();
    }

    public async Task<Puzzle> CreateAsync(Puzzle puzzle)
    {
        await _puzzles.InsertOneAsync(puzzle);
        return puzzle;
    }

    public async Task UpdateAsync(string id, Puzzle updatedPuzzle)
    {
        await _puzzles.ReplaceOneAsync(p => p.Id == id, updatedPuzzle);
    }

    public async Task DeleteAsync(string id)
    {
        await _puzzles.DeleteOneAsync(p => p.Id == id);
    }
}