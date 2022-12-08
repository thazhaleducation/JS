var file = {
  name: "index.html",
  size: 100,
  extension: function() {
    return this.name.split(".").at(1);
  }
};

file.extension();

