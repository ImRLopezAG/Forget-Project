using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Forget.Core.Service.Core.Models;

public class Base {
  public string Id { get; set; } = null!;
  [JsonIgnore]
  public DateTime CreatedAt { get; set; }
  [JsonIgnore]
  public DateTime UpdatedAt { get; set; }
}
