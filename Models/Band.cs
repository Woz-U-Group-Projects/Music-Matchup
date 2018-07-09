using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Music_Matchup.Models
{
    public class Band
    {
        public int Id { get; set; }
        [Required]
        public string Bandname { get; set; }
        [Range(1900, 2018, ErrorMessage="Please only input start year, must be between {1} and {2}")]
        public int? StartYear { get; set; }
        [Range(1900, 2018, ErrorMessage="Please only input end year, must be between {1} and {2}")]
        public int? EndYear { get; set; }
    }
}