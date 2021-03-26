var file = document.getElementById("file");
file.addEventListener(
  "change",
  function () {
    var reader = new FileReader();
    reader.onload = function () {
      var gif = new Format();
      gif.imageToGif(reader.result);
    };
    reader.readAsDataURL(file.files[0]);
  },
  false
);
