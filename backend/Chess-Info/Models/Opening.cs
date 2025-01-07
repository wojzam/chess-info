namespace Chess_Info.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Opening
{
    [BsonId]
    [BsonElement("_id")]
    public string Id { get; set; }

    [BsonElement("player")]
    public string Player { get; set; }

    [BsonElement("start")]
    [BsonRepresentation(BsonType.String)]
    public int Start { get; set; }

    [BsonElement("startPosition")]
    public List<Piece> StartPosition { get; set; } = new List<Piece>();

    [BsonElement("variants")]
    public List<Variant> Variants { get; set; } = new List<Variant>();
}

public class Piece
{
    [BsonElement("type")]
    public string Type { get; set; }

    [BsonElement("color")]
    public string Color { get; set; }

    [BsonElement("position")]
    public string Position { get; set; }
}

public class Variant
{
    [BsonElement("playerMove")]
    public string PlayerMove { get; set; }

    [BsonElement("enemyMove")]
    public string EnemyMove { get; set; }

    [BsonElement("continuationID")]
    public string ContinuationId { get; set; }
}
