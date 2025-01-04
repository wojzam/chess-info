using Chess_Info.Database.Serializers;

namespace Chess_Info.Models;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("dailyNumberOfPuzzles")]
    [BsonRepresentation(BsonType.String)] 
    public int DailyNumberOfPuzzles { get; set; }

    [BsonElement("email")]
    public string Email { get; set; }

    [BsonElement("instructorPrivillages")] //TODO: Fix this once database get corrected
    [BsonSerializer(typeof(StringToBooleanSerializer))]
    public bool InstructorPrivileges { get; set; }

    [BsonElement("login")]
    public string Login { get; set; }

    [BsonElement("openingsIds")]
    [BsonSerializer(typeof(OpeningsIdsSerializer))]
    public List<string> OpeningsIds { get; set; }

    [BsonElement("password")]
    public string Password { get; set; }

    [BsonElement("plannedCourses")]
    public List<string> PlannedCourses { get; set; }
}

