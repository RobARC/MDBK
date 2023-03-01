using System;
using System.Collections.Generic;

namespace MDBk.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Apellido { get; set; }

    public int? NumeroId { get; set; }

    public string? Email { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public string? Password { get; set; }
}
