using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;

namespace Chess_Info.Database.Serializers;

public class StringToBooleanSerializer : SerializerBase<bool>
{
    public override bool Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
    {
        var type = context.Reader.GetCurrentBsonType();
        switch (type)
        {
            case BsonType.String:
                var str = context.Reader.ReadString();
                return str == "1";
            case BsonType.Boolean:
                return context.Reader.ReadBoolean();
            case BsonType.Int32:
                return context.Reader.ReadInt32() == 1;
            default:
                throw new BsonSerializationException($"Cannot convert {type} to Boolean");
        }
    }

    public override void Serialize(BsonSerializationContext context, BsonSerializationArgs args, bool value)
    {
        context.Writer.WriteString(value ? "1" : "0");
    }
}
