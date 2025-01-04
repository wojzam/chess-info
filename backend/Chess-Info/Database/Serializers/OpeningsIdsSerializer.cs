using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace Chess_Info.Database.Serializers;

public class OpeningsIdsSerializer : SerializerBase<List<string>>
{
    public override List<string> Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
    {
        var list = new List<string>();
        var type = context.Reader.GetCurrentBsonType();

        if (type == BsonType.Array)
        {
            context.Reader.ReadStartArray();
            while (context.Reader.ReadBsonType() != BsonType.EndOfDocument)
            {
                var currentType = context.Reader.GetCurrentBsonType();
                if (currentType == BsonType.String)
                {
                    list.Add(context.Reader.ReadString());
                }
                else if (currentType == BsonType.Document)
                {
                    context.Reader.ReadStartDocument();
                    if (context.Reader.ReadString() == "$oid")
                    {
                        list.Add(context.Reader.ReadString());
                    }
                    context.Reader.ReadEndDocument();
                }
                else
                {
                    context.Reader.SkipValue();
                }
            }
            context.Reader.ReadEndArray();
        }
        else if (type == BsonType.Document)
        {
            context.Reader.ReadStartDocument();
            if (context.Reader.ReadString() == "$oid")
            {
                list.Add(context.Reader.ReadString());
            }
            context.Reader.ReadEndDocument();
        }

        return list;
    }

    public override void Serialize(BsonSerializationContext context, BsonSerializationArgs args, List<string> value)
    {
        context.Writer.WriteStartArray();
        foreach (var id in value)
        {
            context.Writer.WriteString(id);
        }
        context.Writer.WriteEndArray();
    }
}
