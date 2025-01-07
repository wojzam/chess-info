namespace Chess_Info.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Puzzle
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("difficulty")]
    public string Difficulty { get; set; }

    [BsonElement("name")]
    public string Name { get; set; }

    [BsonElement("player")]
    public string Player { get; set; }

    [BsonElement("solution")]
    public List<SolutionStep> Solution { get; set; } = new List<SolutionStep>();

    [BsonElement("startPosition")]
    public List<ChessPiece> StartPosition { get; set; } = new List<ChessPiece>();
}

public class SolutionStep
{
    [BsonElement("playerMove")]
    public string PlayerMove { get; set; }

    [BsonElement("enemyMove")]
    public string EnemyMove { get; set; }
}

public class ChessPiece
{
    [BsonElement("type")]
    public string Type { get; set; }

    [BsonElement("color")]
    public string Color { get; set; }

    [BsonElement("position")]
    public string Position { get; set; }
}