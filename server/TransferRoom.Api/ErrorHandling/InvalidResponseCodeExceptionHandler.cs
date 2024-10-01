using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TransferRoom.Api.Exceptions;

namespace TransferRoom.Api.ErrorHandling;

internal sealed class InvalidResponseCodeExceptionHandler : IExceptionHandler
{
    private readonly ILogger<InvalidResponseCodeExceptionHandler> _logger;

    public InvalidResponseCodeExceptionHandler(ILogger<InvalidResponseCodeExceptionHandler> logger)
    {
        _logger = logger;
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        if (exception is not InvalidResponseCodeException invalidResponseCodeException)
            return false;

        _logger.LogError(
            invalidResponseCodeException,
            "Exception occurred: {Message}",
            invalidResponseCodeException.Message);

        var problemDetails = new ProblemDetails
        {
            Status = (int)invalidResponseCodeException.StatusCode,
            Title = invalidResponseCodeException.StatusCode.ToString(),
            Detail = invalidResponseCodeException.Message
        };

        httpContext.Response.StatusCode = problemDetails.Status.Value;

        await httpContext.Response
            .WriteAsJsonAsync(problemDetails, cancellationToken);

        return true;
    }
}