// moveablediv
// by me
class moveablediv extends HTMLElement {
    constructor(w, h, x, y, angle, unit_type) {
        super();
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.unit_type = unit_type;
    }
    static get observedAttributes() { return ["width", "height", "x", "y", "angle"]; }
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case "width":
                this.style.width = newValue.toString() + this.unit_type;
                break;
            case "height":
                this.style.height = newValue.toString() + this.unit_type;
                break;
            case "x":
                this.style.left = (newValue - this.width / 2).toString() + this.unit_type;
                break;
            case "y":
                this.style.top = (newValue - this.height / 2).toString() + this.unit_type;
                break;
            case "angle":
                this.style.transform = "rotate(" + newValue.toString() + "rad)";
                break;
        }
    }
    connectedCallback() {
        this.style.width = this.width.toString() + this.unit_type;
        this.style.height = this.height.toString() + this.unit_type;
        this.style.top = (this.y - this.height / 2).toString() + this.unit_type;
        this.style.left = (this.x - this.width / 2).toString() + this.unit_type;
        this.style.transform = "rotate(" + this.angle.toString() + ")";
        this.style.position = "absolute";
    }
    get x() {
        return parseFloat(this.getAttribute("x"));
    }
    get y() {
        return parseFloat(this.getAttribute("y"));
    }
    get width() {
        return parseFloat(this.getAttribute("width"));
    }
    get height() {
        return parseFloat(this.getAttribute("height"));
    }
    get angle() {
        return parseFloat(this.getAttribute("angle"));
    }
    set x(newval) {
        this.setAttribute("x", newval);
    }
    set y(newval) {
        this.setAttribute("y", newval);
    }
    set width(newval) {
        this.setAttribute("width", newval);
    }
    set height(newval) {
        this.setAttribute("height", newval);
    }
    set angle(newval) {
        this.setAttribute("angle", newval);
    }
};
customElements.define( "div-moving", moveablediv );

/*
// this stuff was made for testing
mydiv = new moveablediv(50, 50, 20, 20, 0, "px");
mydiv.style.backgroundColor = "red";
document.getElementById("container").appendChild(mydiv);
*/