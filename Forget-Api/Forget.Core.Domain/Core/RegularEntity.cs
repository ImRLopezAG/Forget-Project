using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forget.Core.Domain.Core;

public class RegularEntity : BaseEntity{
  public string Name { get; set; } = null!;
}
