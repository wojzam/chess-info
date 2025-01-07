namespace Chess_Info.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Contact
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("email")]
    public string Email { get; set; }

    [BsonElement("message")]
    public string Message { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }
}