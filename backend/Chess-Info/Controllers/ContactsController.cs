using Chess_Info.Models;
using Chess_Info.Services;

namespace Chess_Info.Controllers;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private readonly ContactService _contactService;

    public ContactsController(ContactService contactService)
    {
        _contactService = contactService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var contacts = await _contactService.GetAllAsync();
        return Ok(contacts);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var contact = await _contactService.GetByIdAsync(id);
        if (contact == null)
            return NotFound();
        return Ok(contact);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Contact contact)
    {
        await _contactService.CreateAsync(contact);
        return CreatedAtAction(nameof(GetById), new { id = contact.Id }, contact);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, Contact updatedContact)
    {
        var contact = await _contactService.GetByIdAsync(id);
        if (contact == null)
            return NotFound();

        await _contactService.UpdateAsync(id, updatedContact);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var contact = await _contactService.GetByIdAsync(id);
        if (contact == null)
            return NotFound();

        await _contactService.DeleteAsync(id);
        return NoContent();
    }
}