let drawing = false;
let prevX, prevY;

const svg = document.getElementById("box");

svg.addEventListener("mousedown", function (e) {
    drawing = true;
    prevX = e.offsetX;
    prevY = e.offsetY;
});

svg.addEventListener("mousemove", function (e) {
    if (!drawing) return;

    let line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    line.setAttribute("x1", prevX);
    line.setAttribute("y1", prevY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black");

    svg.appendChild(line);

    prevX = e.offsetX;
    prevY = e.offsetY;
});

svg.addEventListener("mouseup", function () {
    drawing = false;
});
