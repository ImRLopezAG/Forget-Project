using Forget.Core.Domain;
using Forget.Core.Service.Contracts;
using Forget.Core.Service.Controllers;
using Forget.Core.Service.Dtos.Product;
using Forget.Presentation.WebApi.Core;
using Forget.Presentation.WebApi.Helpers;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Forget.Presentation.WebApi.Controllers;

[SwaggerTag("Product Management")]
public class ProductController : GenericController<ProductDto, SaveProductDto, Product>, IProductController {
  private readonly IProductService _service;

  public ProductController(IProductService service) : base(service) {
    _service = service;
  }

  [HttpPost]
  [ProducesResponseType(StatusCodes.Status201Created)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  [SwaggerOperation(
    Summary = "Create product",
    Description = "Create product"
  )]
  public async override Task<ActionResult> Create([FromBody] SaveProductDto request) {
    var result = await _service.Save(request);

    if(request.ImageFile != null){
      result.Portrait = ManageFile.UploadProduct(request.ImageFile, result.Id);
      await _service.Edit(result);
    }

    if(request.ImagesFile != null || request.ImagesFile.Count() != 0 ){
      foreach(var image in request.ImagesFile){
        var photo = new Photo{
          ProductId = result.Id,
          ImagePath = ManageFile.UploadProductImages(image, result.Id)
        };
        await _service.SaveProductPhoto(photo);
      }
    }
    return Ok(result);
  }

  [HttpPut("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async override Task<ActionResult> Update([FromBody] SaveProductDto request){
    
    request.Id = RouteData.Values["id"].ToString();
    var entity = await _service.GetEntity(request.Id);

    if(entity == null)
      return BadRequest();

    if(request.ImageFile != null){
      request.Portrait = ManageFile.UploadProduct(request.ImageFile, entity.Id, true, entity.Portrait);
    }
    
    await _service.Edit(request);
    
    return Ok(request);
  }

}