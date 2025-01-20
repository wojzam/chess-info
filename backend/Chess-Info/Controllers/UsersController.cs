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

        if (users == null || !users.Any())
        {
            return NoContent();
        }

        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(string id)
    {
        if (string.IsNullOrWhiteSpace(id))
        {
            return BadRequest("ID cannot be null or empty.");
        }

        var user = await _userService.GetByIdAsync(id);
        if (user == null)
        {
            return NotFound($"User with ID {id} not found.");
        }

        return Ok(user);
    }

    [HttpGet("login/{login}")]
    public async Task<IActionResult> GetByLogin(string login)
    {
        if (string.IsNullOrWhiteSpace(login))
        {
            return BadRequest("Login cannot be null or empty.");
        }

        var user = await _userService.GetByLoginAsync(login);
        if (user == null)
        {
            return NotFound($"User with login {login} not found.");
        }

        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Create(User user)
    {
        if (user == null)
        {
            return BadRequest("User data cannot be null.");
        }

        if (string.IsNullOrWhiteSpace(user.Name) || string.IsNullOrWhiteSpace(user.Email))
        {
            return BadRequest("User name and email are required.");
        }

        await _userService.CreateAsync(user);
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        if (string.IsNullOrWhiteSpace(id))
        {
            return BadRequest("ID cannot be null or empty.");
        }

        if (updatedUser == null)
        {
            return BadRequest("Updated user data cannot be null.");
        }

        var user = await _userService.GetByIdAsync(id);
        if (user == null)
        {
            return NotFound($"User with ID {id} not found.");
        }

        await _userService.UpdateAsync(id, updatedUser);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        if (string.IsNullOrWhiteSpace(id))
        {
            return BadRequest("ID cannot be null or empty.");
        }

        var user = await _userService.GetByIdAsync(id);
        if (user == null)
        {
            return NotFound($"User with ID {id} not found.");
        }

        await _userService.DeleteAsync(id);
        return NoContent();
    }
}
