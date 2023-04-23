using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Domain.Core;

namespace Forget.Core.Domain;

public class Photo : BaseEntity{
  public string ImagePath { get; set; } = null!;
  public string ProductId { get; set; } = null!;
  
  public Product Product { get; set; } = null!;
}
