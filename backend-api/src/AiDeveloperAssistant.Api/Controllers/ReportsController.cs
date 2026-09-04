using Microsoft.AspNetCore.Mvc;

namespace AiDeveloperAssistant.Api.Controllers;

[ApiController]
[Route("api/reports")]
public sealed class ReportsController : ControllerBase
{
    [HttpGet("monthly")]
    public ActionResult GetMonthlyReport([FromQuery] int month, [FromQuery] int year, [FromQuery] string format = "PDF")
    {
        return Ok(new { Month = month, Year = year, Status = "Completed", TotalRevenue = 284500.00m });
    }
}