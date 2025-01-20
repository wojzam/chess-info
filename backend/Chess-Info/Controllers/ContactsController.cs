using Chess_Info.Models;
using Chess_Info.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace Chess_Info.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private readonly ContactService _contactService;
    private readonly ILogger<ContactsController> _logger;

    public ContactsController(ContactService contactService, ILogger<ContactsController> logger)
    {
        _contactService = contactService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        _logger.LogInformation("Fetching all contacts.");
        try
        {
            var contacts = await _contactService.GetAllAsync();
            return Ok(contacts);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while fetching contacts.");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        _logger.LogInformation("Fetching contact with ID: {Id}", id);
        try
        {
            var contact = await _contactService.GetByIdAsync(id);
            if (contact == null)
            {
                _logger.LogWarning("Contact with ID: {Id} not found.", id);
                return NotFound();
            }
            return Ok(contact);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while fetching contact with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Contact contact)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Creating new contact.");
        try
        {
            await _contactService.CreateAsync(contact);
            _logger.LogInformation("Contact created with ID: {Id}", contact.Id);
            return CreatedAtAction(nameof(GetById), new { id = contact.Id }, contact);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while creating contact.");
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, [FromBody] Contact updatedContact)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _logger.LogInformation("Updating contact with ID: {Id}", id);
        try
        {
            var existingContact = await _contactService.GetByIdAsync(id);
            if (existingContact == null)
            {
                _logger.LogWarning("Contact with ID: {Id} not found.", id);
                return NotFound();
            }

            await _contactService.UpdateAsync(id, updatedContact);
            _logger.LogInformation("Contact with ID: {Id} updated successfully.", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while updating contact with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        _logger.LogInformation("Deleting contact with ID: {Id}", id);
        try
        {
            var existingContact = await _contactService.GetByIdAsync(id);
            if (existingContact == null)
            {
                _logger.LogWarning("Contact with ID: {Id} not found.", id);
                return NotFound();
            }

            await _contactService.DeleteAsync(id);
            _logger.LogInformation("Contact with ID: {Id} deleted successfully.", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error occurred while deleting contact with ID: {Id}", id);
            return StatusCode(500, "An error occurred while processing your request.");
        }
    }
}
