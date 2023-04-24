namespace Forget.Presentation.WebApi.Helpers;

public static class ManageFile {
  public static string Upload(IFormFile file, string id, bool isEditMode = false, string imagePath = "") {
    if (isEditMode) {
      if (file == null)
        return imagePath;
    }

    string basePath = $"/Images/Profile/{id}";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    Guid guid = Guid.NewGuid();
    FileInfo fileInfo = new(file.FileName);
    string fileName = guid + fileInfo.Extension;

    string fileNameWithPath = Path.Combine(path, fileName);

    using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
      file.CopyTo(stream);

    if (isEditMode) {
      string[] oldImagePart = imagePath.Split("/");
      string oldImagePath = oldImagePart[^1];
      string completeImageOldPath = Path.Combine(path, oldImagePath);

      if (File.Exists(completeImageOldPath))
        File.Delete(completeImageOldPath);
    }
    return $"{basePath}/{fileName}";
  }


  public static string UploadProduct(IFormFile file, string id, bool isEditMode = false, string imagePath = "") {
    if (isEditMode) {
      if (file == null)
        return imagePath;
    }

    string basePath = $"/Images/Product/{id}";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    Guid guid = Guid.NewGuid();
    FileInfo fileInfo = new(file.FileName);
    string fileName = guid + fileInfo.Extension;

    string fileNameWithPath = Path.Combine(path, fileName);

    using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
      file.CopyTo(stream);

    if (isEditMode && imagePath != null) {

      string[] oldImagePart = imagePath.Split("/");
      string oldImagePath = oldImagePart[^1];
      string completeImageOldPath = Path.Combine(path, oldImagePath);

      if (File.Exists(completeImageOldPath))
        File.Delete(completeImageOldPath);

    }
    return $"{basePath}/{fileName}";
  }

  public static string UploadProductImages (IFormFile file, string id, bool isEditMode = false, string imagePath = "") {
    if (isEditMode) {
      if (file == null)
        return imagePath;
    }

    string basePath = $"/Images/Product/{id}/Images";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    Guid guid = Guid.NewGuid();
    FileInfo fileInfo = new(file.FileName);
    string fileName = guid + fileInfo.Extension;

    string fileNameWithPath = Path.Combine(path, fileName);

    using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
      file.CopyTo(stream);

    if (isEditMode && imagePath != null) {

      string[] oldImagePart = imagePath.Split("/");
      string oldImagePath = oldImagePart[^1];
      string completeImageOldPath = Path.Combine(path, oldImagePath);

      if (File.Exists(completeImageOldPath))
        File.Delete(completeImageOldPath);

    }
    return $"{basePath}/{fileName}";
  }

  public static void DeleteProfile(string id, string imagePath) {
    string basePath = $"/Images/Profile/{id}";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    string[] oldImagePart = imagePath.Split("/");

    string oldImagePath = oldImagePart[^1];
    string completeImageOldPath = Path.Combine(path, oldImagePath);

    if (File.Exists(completeImageOldPath))
      File.Delete(completeImageOldPath);
  }

  public static void DeleteProduct(string id, string imagePath) {
    string basePath = $"/Images/Product/{id}";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    string[] oldImagePart = imagePath.Split("/");

    string oldImagePath = oldImagePart[^1];
    string completeImageOldPath = Path.Combine(path, oldImagePath);

    if (File.Exists(completeImageOldPath))
      File.Delete(completeImageOldPath);
  }

  public static void DeleteProductImages(string id, string imagePath) {
    string basePath = $"/Images/Product/{id}/Images";
    string path = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot{basePath}");

    if (!Directory.Exists(path))
      Directory.CreateDirectory(path);

    string[] oldImagePart = imagePath.Split("/");

    string oldImagePath = oldImagePart[^1];
    string completeImageOldPath = Path.Combine(path, oldImagePath);

    if (File.Exists(completeImageOldPath))
      File.Delete(completeImageOldPath);
  }
}