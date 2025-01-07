using Chess_Info.Models;
using Chess_Info.Services;

namespace Chess_Info.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PuzzlesController : ControllerBase
{
    private readonly PuzzleService _puzzleService;

    public PuzzlesController(PuzzleService puzzleService)
    {
        _puzzleService = puzzleService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var puzzles = await _puzzleService.GetAllAsync();
        return Ok(puzzles);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var puzzle = await _puzzleService.GetByIdAsync(id);
        if (puzzle == null)
            return NotFound();
        return Ok(puzzle);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Puzzle puzzle)
    {
        await _puzzleService.CreateAsync(puzzle);
        return CreatedAtAction(nameof(GetById), new { id = puzzle.Id }, puzzle);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Puzzle updatedPuzzle)
    {
        var puzzle = await _puzzleService.GetByIdAsync(id);
        if (puzzle == null)
            return NotFound();

        await _puzzleService.UpdateAsync(id, updatedPuzzle);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var puzzle = await _puzzleService.GetByIdAsync(id);
        if (puzzle == null)
            return NotFound();

        await _puzzleService.DeleteAsync(id);
        return NoContent();
    }
}