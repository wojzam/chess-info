using Chess_Info.Models;
using Chess_Info.Services;
using Microsoft.AspNetCore.Mvc;

namespace Chess_Info.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OpeningsController : ControllerBase
{
    private readonly OpeningService _openingService;

    public OpeningsController(OpeningService openingService)
    {
        _openingService = openingService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var openings = await _openingService.GetAllAsync();
        return Ok(openings);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var opening = await _openingService.GetByIdAsync(id);
        if (opening == null)
            return NotFound();
        return Ok(opening);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Opening opening)
    {
        await _openingService.CreateAsync(opening);
        return CreatedAtAction(nameof(GetById), new { id = opening.Id }, opening);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Opening updatedOpening)
    {
        var opening = await _openingService.GetByIdAsync(id);
        if (opening == null)
            return NotFound();

        await _openingService.UpdateAsync(id, updatedOpening);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var opening = await _openingService.GetByIdAsync(id);
        if (opening == null)
            return NotFound();

        await _openingService.DeleteAsync(id);
        return NoContent();
    }
}