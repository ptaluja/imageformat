class Format {
  imageToGif(value) {
    var findFormat = value.match(/^.*\;/);
    var changeFormat = value.replace(findFormat, "data:image/gif;");
    console.log(changeFormat);
    var anchor = document.getElementById("anchor");
    anchor.href = changeFormat;
    anchor.download = "download.gif";
    anchor.click();
  }
}
