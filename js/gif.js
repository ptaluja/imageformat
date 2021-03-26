var file = document.getElementById("file");

file.addEventListener(
  "change",
  function () {
    var reader = new FileReader();
    reader.onload = function () {
      var result = new Format();
      result.imageToGif(reader.result);
    };
    reader.readAsDataURL(file.files[0]);
  },
  false
);
