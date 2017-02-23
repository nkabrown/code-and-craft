var space = new CanvasSpace('#mount').setup({ bgcolor: '#f0f0f0'});

var form = new Form(space);
var width = window.innerWidth;

var dot = new Circle((width / 2), 160).setRadius(1.5);
var term = new Point((width / 2) - 280, 50);
var def_line_one = new Point((width / 2) - 80, 50);
var def_line_two = new Point((width / 2) - 280, 75);
var def_line_three = new Point((width / 2) - 280, 100);
var def_line_four = new Point((width / 2) - 280, 125);
var desc_line_one = new Point((width / 2) - 280, 190);
var desc_line_two = new Point((width / 2) - 280, 205);
var circle = new Circle((width / 2), 420).setRadius(1.5 * 100);
var quote_line_one = new Point((width / 2) - 280, 630);
var quote_line_two = new Point((width / 2) - 280, 645);
var quote_line_three = new Point((width / 2) - 280, 660);

var bot = {
  animate: function(time, fs, context) {
    form.font(24);
    form.fill('#fd6965').stroke('#fd6965');
    form.text(term, 'Abstract Objects.');
    form.fill('#333').stroke('#333');
    form.text(def_line_one, 'Abstract objects are ideal shapes');
    form.text(def_line_two, 'that cannot be physically created. When you try to');
    form.text(def_line_three, 'draw a point, for example, you do not end up with a');
    form.text(def_line_four, 'point but with a surface.');

    form.fill('#fd6965').stroke('#fd6965');
    form.circle(dot);

    form.font(11);
    form.fill('#333').stroke('#333');
    form.text(desc_line_one, 'The above illustration my look like a point, but it is only one representation of a point. It is actually a dot with a');
    form.text(desc_line_two, 'surface. Its size is 0.1% of that of the illustration below.');

    form.fill('#fd6965').stroke('#fd6965');
    form.circle(circle);

    form.fill('#333').stroke('#333');
    form.font(10);
    form.text(quote_line_one, '“The abstract conveys the essential meaing, cutting through the concious to the unconcious, from experience of the');
    form.text(quote_line_two, 'substance in the sensory field directly to the nervous system, from the event to perception.“ Donis A. Dondis,');
    form.text(quote_line_three, 'A Primer of Visual Literacy. (Cambridge: MIT Press, 1973), 81.');
  }
}

space.add(bot);
space.play();
