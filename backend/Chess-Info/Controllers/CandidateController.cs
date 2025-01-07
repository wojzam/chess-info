using Chess_Info.Models;
using Chess_Info.Services;

namespace Chess_Info.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CandidatesController : ControllerBase
{
    private readonly CandidateService _candidateService;

    public CandidatesController(CandidateService candidateService)
    {
        _candidateService = candidateService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var candidates = await _candidateService.GetAllAsync();
        return Ok(candidates);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var candidate = await _candidateService.GetByIdAsync(id);
        if (candidate == null)
            return NotFound();
        return Ok(candidate);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Candidate candidate)
    {
        await _candidateService.CreateAsync(candidate);
        return CreatedAtAction(nameof(GetById), new { id = candidate.Id }, candidate);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Candidate updatedCandidate)
    {
        var candidate = await _candidateService.GetByIdAsync(id);
        if (candidate == null)
            return NotFound();

        await _candidateService.UpdateAsync(id, updatedCandidate);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var candidate = await _candidateService.GetByIdAsync(id);
        if (candidate == null)
            return NotFound();

        await _candidateService.DeleteAsync(id);
        return NoContent();
    }
}