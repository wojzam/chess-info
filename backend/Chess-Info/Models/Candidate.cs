namespace Chess_Info.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Candidate
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("candidateID")]
    public string CandidateID { get; set; }

    [BsonElement("certificates")]
    public string Certificates { get; set; }

    [BsonElement("experience")]
    public string Experience { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }
}