function load_img() {
    var second_img = document.createElement("img");
    second_img.setAttribute("title", "Another small, interesting image");
    second_img.setAttribute("src", "images/image2.jpg");
    document.getElementById("header").appendChild(second_img);
}