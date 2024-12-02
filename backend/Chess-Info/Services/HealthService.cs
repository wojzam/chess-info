namespace Chess_Info.Services;

public class HealthService : IHealthService
{
    public string GetHealthStatus()
    {
        return "Healthy";
    }
}
