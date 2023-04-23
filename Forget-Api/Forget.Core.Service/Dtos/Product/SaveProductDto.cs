using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Service.Core.Models;
using Microsoft.AspNetCore.Http;

namespace Forget.Core.Service.Dtos.Product;

public class SaveProductDto: BaseDto
{
  public string? Portrait { get; set; } = null!;
  public double Price { get; set; }
  public string CategoryId { get; set; } = null!;
  public string Description { get; set; } = null!;
  [DataType(DataType.Upload)]
  public IFormFile? ImageFile { get; set; } = null!;
}
