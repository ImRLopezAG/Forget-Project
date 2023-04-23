using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forget.Core.Service.Core.Models;

namespace Forget.Core.Service.Dtos.Photo;

public class PhotoDto : Base{
  public string ImagePath { get; set; } = null!;
  public string ProductId { get; set; } = null!;
}
