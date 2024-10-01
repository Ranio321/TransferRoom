namespace TransferRoom.Api.Exceptions;

public class DeserializationException : Exception
{
    public DeserializationException(Type type)
        : base($"Couldn't deserialize data to type {type.Name}")
    { }
}
