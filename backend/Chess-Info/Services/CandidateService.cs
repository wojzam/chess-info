using Chess_Info.Database;
using Chess_Info.Models;

namespace Chess_Info.Services;

using MongoDB.Driver;

public class CandidateService
{
    private readonly IMongoCollection<Candidate> _candidates;

    public CandidateService(IDbContext dbContext)
    {
        _candidates = dbContext.GetCollection<Candidate>("kandydat");
    }

    public async Task<List<Candidate>> GetAllAsync()
    {
        return await _candidates.Find(_ => true).ToListAsync();
    }

    public async Task<Candidate> GetByIdAsync(string id)
    {
        return await _candidates.Find(c => c.Id == id).FirstOrDefaultAsync();
    }

    public async Task CreateAsync(Candidate candidate)
    {
        await _candidates.InsertOneAsync(candidate);
    }

    public async Task UpdateAsync(string id, Candidate updatedCandidate)
    {
        await _candidates.ReplaceOneAsync(c => c.Id == id, updatedCandidate);
    }

    public async Task DeleteAsync(string id)
    {
        await _candidates.DeleteOneAsync(c => c.Id == id);
    }
}
