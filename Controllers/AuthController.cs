using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

namespace Music_Matchup.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        [HttpPost("token")]
        public IActionResult Token()
        {
            var header = Request.Headers["Authorization"];

            if (header.ToString().StartsWith("Basic"))
            {
                var credValue = header.ToString().Substring("Basic ".Length).Trim();
                var usernameAndPassword = Encoding.UTF8.GetString(Convert.FromBase64String(credValue)); //admin:pass
                var usernameAndPass = usernameAndPassword.Split(":");

                // Check database for username and password
                if (usernameAndPass[0] == "Admin" && usernameAndPass[1] == "pass")
                {

                    var claimsData = new[] { new Claim(ClaimTypes.Name, usernameAndPass[0]) };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("thisisasupersecretkeyomgitssolongbecauseitssupersecrtet"));

                    var signInCred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

                    var token = new JwtSecurityToken(
                         issuer: "musicmatchup.com",
                         audience: "musicmatchup.com",
                         expires: DateTime.Now.AddMinutes(5),
                         claims: claimsData,
                         signingCredentials: signInCred
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

                    return Ok(tokenString);
                }
            }

            return BadRequest("Incorrect Username or Password :(");

        }
    }
}