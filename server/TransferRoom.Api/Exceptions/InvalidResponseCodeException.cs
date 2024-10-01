using System.Net;

namespace TransferRoom.Api.Exceptions;

public class InvalidResponseCodeException : Exception
{
    public HttpStatusCode StatusCode { get;}

    public InvalidResponseCodeException(string requestName, HttpStatusCode statusCode)
        : base($"Request for {requestName} failed. Invalid response status code: {(int)statusCode}")
    {
        StatusCode = statusCode;
    }
}
