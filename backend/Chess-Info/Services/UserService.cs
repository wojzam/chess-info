using Chess_Info.Database;
using Chess_Info.Models;
using MongoDB.Driver;

namespace Chess_Info.Services;

public class UserService
{
    private readonly IMongoCollection<User> _users;

    public UserService(IDbContext dbContext)
    {
        _users = dbContext.GetCollection<User>("uzytkownik");
    }

    public async Task<List<User>> GetAllAsync()
    {
        return await _users.Find(_ => true).ToListAsync();
    }

    public async Task<User> GetByIdAsync(string id)
    {
        return await _users.Find(u => u.Id == id).FirstOrDefaultAsync();
    }

    public async Task<User> GetByLoginAsync(string login)
    {
        return await _users.Find(u => u.Login == login).FirstOrDefaultAsync();
    }

    public async Task<User> CreateAsync(User user)
    {
        await _users.InsertOneAsync(user);
        return user;
    }

    public async Task UpdateAsync(string id, User updatedUser)
    {
        await _users.ReplaceOneAsync(u => u.Id == id, updatedUser);
    }

    public async Task DeleteAsync(string id)
    {
        await _users.DeleteOneAsync(u => u.Id == id);
    }
}
