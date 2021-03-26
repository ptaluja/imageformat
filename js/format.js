class Format {
  imageToGif(value) {
    var findFormat = value.match(/^.*\;/);
    var changeFormat = value.replace(findFormat, "data:image/gif;");
    console.log(changeFormat);
    anchor.href = changeFormat;
  }

  cropImage() {
    window.addEventListener("DOMContentLoaded", function () {
      var cropper = null;

      cropper = jsCrop.initialise(document.getElementById("imageToCrop"), {
        outputCanvas: document.getElementById("crop-result"),
      });
      document.getElementById("crop2").onclick = function () {
        cropper.enableCropMode(this.classList.toggle("pressed"));
      };
      document.getElementById("crop").onclick = function () {
        cropper.downloadCroppedImage();
      };
    });
  }
}
