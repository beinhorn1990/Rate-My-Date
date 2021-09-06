using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RateMyDate.Models;

namespace RateMyDate.Controllers
{
    // All of these routes will be at the base URL:     /api/DateLocation
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case DateLocationController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class DateLocationController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public DateLocationController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/DateLocation
        //
        // Returns a list of all your DateLocations
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DateLocation>>> GetDateLocations()
        {
            // Uses the database context in `_context` to request all of the DateLocations, sort
            // them by row id and return them as a JSON array.
            return await _context.DateLocations.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/DateLocation/5
        //
        // Fetches and returns a specific dateLocation by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<DateLocation>> GetDateLocation(int id)
        {
            // Find the dateLocation in the database using `FindAsync` to look it up by id
            var dateLocation = await _context.DateLocations.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (dateLocation == null)
            {
                // Return a `404` response to the client indicating we could not find a dateLocation with this id
                return NotFound();
            }

            //  Return the dateLocation as a JSON object.
            return dateLocation;
        }

        // PUT: api/DateLocation/5
        //
        // Update an individual dateLocation with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a DateLocation
        // variable named dateLocation. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our DateLocation POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDateLocation(int id, DateLocation dateLocation)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != dateLocation.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in dateLocation to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from dateLocation
            _context.Entry(dateLocation).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!DateLocationExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(dateLocation);
        }

        // POST: api/DateLocation
        //
        // Creates a new dateLocation in the database.
        //
        // The `body` of the request is parsed and then made available to us as a DateLocation
        // variable named dateLocation. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our DateLocation POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<DateLocation>> PostDateLocation(DateLocation dateLocation)
        {
            // Indicate to the database context we want to add this new record
            _context.DateLocations.Add(dateLocation);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetDateLocation", new { id = dateLocation.Id }, dateLocation);
        }

        // DELETE: api/DateLocation/5
        //
        // Deletes an individual dateLocation with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDateLocation(int id)
        {
            // Find this dateLocation by looking for the specific id
            var dateLocation = await _context.DateLocations.FindAsync(id);
            if (dateLocation == null)
            {
                // There wasn't a dateLocation with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.DateLocations.Remove(dateLocation);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(dateLocation);
        }

        // Private helper method that looks up an existing dateLocation by the supplied id
        private bool DateLocationExists(int id)
        {
            return _context.DateLocations.Any(dateLocation => dateLocation.Id == id);
        }
    }
}
