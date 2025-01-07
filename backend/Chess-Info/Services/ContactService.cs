using Chess_Info.Database;
using Chess_Info.Models;

namespace Chess_Info.Services;

using MongoDB.Driver;

public class ContactService
{
    private readonly IMongoCollection<Contact> _contacts;

    public ContactService(IDbContext dbContext)
    {
        _contacts = dbContext.GetCollection<Contact>("kontakt");
    }

    public async Task<List<Contact>> GetAllAsync()
    {
        return await _contacts.Find(_ => true).ToListAsync();
    }

    public async Task<Contact> GetByIdAsync(string id)
    {
        return await _contacts.Find(c => c.Id == id).FirstOrDefaultAsync();
    }

    public async Task<Contact> CreateAsync(Contact contact)
    {
        await _contacts.InsertOneAsync(contact);
        return contact;
    }

    public async Task UpdateAsync(string id, Contact updatedContact)
    {
        await _contacts.ReplaceOneAsync(c => c.Id == id, updatedContact);
    }

    public async Task DeleteAsync(string id)
    {
        await _contacts.DeleteOneAsync(c => c.Id == id);
    }
}