using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RateMyDate.Models
{
    public class DateLocation
       {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public string Address { get; set; }

        public string Telephone { get; set; }

        public List<Review> Reviews { get; set; }
    }
}