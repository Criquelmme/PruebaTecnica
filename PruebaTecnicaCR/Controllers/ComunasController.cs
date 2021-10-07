﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaCR.Models;

namespace PruebaTecnicaCR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComunasController : ControllerBase
    {
        private readonly PruebaTecnicaContext _context;

        public ComunasController(PruebaTecnicaContext context)
        {
            _context = context;
        }

        // GET: api/Comunas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comuna>>> GetComunas()
        {
            return await _context.Comunas.ToListAsync();
        }

        // GET: api/Comunas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comuna>> GetComuna(short id)
        {
            var comuna = await _context.Comunas.FindAsync(id);

            if (comuna == null)
            {
                return NotFound();
            }

            return comuna;
        }

        // PUT: api/Comunas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComuna(short id, Comuna comuna)
        {
            if (id != comuna.RegionCodigo)
            {
                return BadRequest();
            }

            _context.Entry(comuna).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComunaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Comunas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comuna>> PostComuna(Comuna comuna)
        {
            _context.Comunas.Add(comuna);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ComunaExists(comuna.RegionCodigo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetComuna", new { id = comuna.RegionCodigo }, comuna);
        }

        // DELETE: api/Comunas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComuna(short id)
        {
            var comuna = await _context.Comunas.FindAsync(id);
            if (comuna == null)
            {
                return NotFound();
            }

            _context.Comunas.Remove(comuna);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComunaExists(short id)
        {
            return _context.Comunas.Any(e => e.RegionCodigo == id);
        }
    }
}
