using Chess_Info.Models;
using Chess_Info.Services;
using Microsoft.AspNetCore.Mvc;

namespace Chess_Info.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;

    public UsersController(UserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpGet("login/{login}")]
    public async Task<IActionResult> GetByLogin(string login)
    {
        var user = await _userService.GetByLoginAsync(login);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Create(User user)
    {
        await _userService.CreateAsync(user);
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
            return NotFound();

        await _userService.UpdateAsync(id, updatedUser);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
            return NotFound();

        await _userService.DeleteAsync(id);
        return NoContent();
    }
}
