using Chess_Info.Models;
using Chess_Info.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace Chess_Info.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PuzzlesController : ControllerBase
{
    private readonly PuzzleService _puzzleService;
    private readonly ILogger<PuzzlesController> _logger;

    public PuzzlesController(PuzzleService puzzleService, ILogger<PuzzlesController> logger)
    {
        _puzzleService = puzzleService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        _logger.LogInformation("Fetching all puzzles.");
        try
        {
            var puzzles = await _puzzleService.GetAllAsync();
            return Ok(puzzles);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while fetching puzzles.");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        _logger.LogInformation("Fetching puzzle with ID: {Id}", id);
        try
        {
            var puzzle = await _puzzleService.GetByIdAsync(id);
            if (puzzle == null)
            {
                _logger.LogWarning("Puzzle with ID: {Id} not found.", id);
                return NotFound();
            }
            return Ok(puzzle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while fetching puzzle with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Puzzle puzzle)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Creating new puzzle.");
        try
        {
            await _puzzleService.CreateAsync(puzzle);
            _logger.LogInformation("Puzzle created with ID: {Id}", puzzle.Id);
            return CreatedAtAction(nameof(GetById), new { id = puzzle.Id }, puzzle);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while creating puzzle.");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, [FromBody] Puzzle updatedPuzzle)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Updating puzzle with ID: {Id}", id);
        try
        {
            var existingPuzzle = await _puzzleService.GetByIdAsync(id);
            if (existingPuzzle == null)
            {
                _logger.LogWarning("Puzzle with ID: {Id} not found.", id);
                return NotFound();
            }

            await _puzzleService.UpdateAsync(id, updatedPuzzle);
            _logger.LogInformation("Puzzle with ID: {Id} updated successfully.", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while updating puzzle with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        _logger.LogInformation("Deleting puzzle with ID: {Id}", id);
        try
        {
            var existingPuzzle = await _puzzleService.GetByIdAsync(id);
            if (existingPuzzle == null)
            {
                _logger.LogWarning("Puzzle with ID: {Id} not found.", id);
                return NotFound();
            }

            await _puzzleService.DeleteAsync(id);
            _logger.LogInformation("Puzzle with ID: {Id} deleted successfully.", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while deleting puzzle with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }
}
