using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Music_Matchup.Models;

namespace Music_Matchup.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly MusicMatchupContext _context;

        public LoginController(MusicMatchupContext context)
        {
            _context = context;
        }
        
        [HttpPost("token")]
        public IActionResult CheckUser([FromBody] Auth auth)
        //public IActionResult CheckUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var username = auth.Username;
            var password = auth.Password;
            var result = _context.Users.FirstOrDefault(u => u.Username == username && u.Password == password);

            if (result != null)
            {
                var claimsData = new[] { new Claim(ClaimTypes.Name, username) };
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

            return BadRequest(new { error = "You dun messed up A A Ron" });
        }         
    }
}
        //[HttpPost("token")]
        //public IActionResult Token()
        //{
        //    var header = Request.Headers["Authorization"];
           

        //    if (header.ToString().StartsWith("Basic"))
        //    {
        //        var credValue = header.ToString().Substring("Basic ".Length).Trim();
        //        var usernameAndPassword = Encoding.UTF8.GetString(Convert.FromBase64String(credValue)); //admin:pass
        //        var test = from                                                                                        //var credValue = header.ToString().Substring("Description ".Length).Trim();
        //                                                                                                //var usernameAndPassword = 
        //        var usernameAndPass = usernameAndPassword.Split(":");
        //        var result = _context.Users.FirstOrDefault(u => u.Username == usernameAndPass[0] && u.Password == usernameAndPass[1]);
        //        if (result != null)
        //        {
        //            var claimsData = new[] { new Claim(ClaimTypes.Name, usernameAndPass[0]) };
        //            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("thisisasupersecretkeyomgitssolongbecauseitssupersecrtet"));
        //            var signInCred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
        //            var token = new JwtSecurityToken(
        //                 issuer: "musicmatchup.com",
        //                 audience: "musicmatchup.com",
        //                 expires: DateTime.Now.AddMinutes(5),
        //                 claims: claimsData,
        //                 signingCredentials: signInCred
        //                );

        //            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

        //            return Ok(tokenString);
        //        }

        //        return BadRequest(new { error = "You dun messed up A A Ron" });
        //    }

        //    return BadRequest("Incorrect Username or Password :(");

        //}


        //public IActionResult Index()
        //{
        //    return View();
        //}
//    }
//}