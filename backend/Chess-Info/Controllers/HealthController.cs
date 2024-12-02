using Chess_Info.Services;
using Microsoft.AspNetCore.Mvc;


namespace Chess_Info.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    private readonly IHealthService _healthService;
    
    public HealthController(IHealthService healthService)
    {
        _healthService = healthService;
    }
    
    [HttpGet]
    public IActionResult Get()
    {
        var status = _healthService.GetHealthStatus();
        return Ok(new { status });
    }
}