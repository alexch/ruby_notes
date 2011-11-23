# Ruby Notes

Alex's notes and slides for teaching Ruby

## Author

Alex Chaffee <alex@stinky.com>

# Showing the slides

We use a Ruby app called `showoff` to generate and serve the slides.

Alex has been improving showoff; until his latest patches get accepted and released, you will have to download and install his version, as follows:

    gem uninstall -a showoff  # if this fails with "cannot uninstall", don't worry and just continue
    gem install showoff-alexch
    
After installing, run

    showoff serve --split

This will launch a local Sinatra server on port 9090. Open your browser to `localhost:9090`. 

On a Mac you can run:

    open http://localhost:9090

On Windows I think you can run:

    start http://localhost:9090

Use arrow keys to navigate slides. Press '?' to see a help window.

# Editing slides

Slides are in [Markdown](http://daringfireball.net/projects/markdown/syntax) format. Showoff will read all `.md` files in alphabetical order.

You can also add custom `.css`, `.scss`, and `.js` files, which will get imported into all slide sections.

Images should be in, or relative to, the current directory.

# Printing slides

Try this: first `gem install pdfkit`, then visit

    http://localhost:9090/pdf

but I make no guarantees!

## Based upon and/or inspired by

* [Ruby Quickstart for Refugees](https://gist.github.com/190567)
* [ruby for programmers]() from Railsbridge Open Workshops
* _The Well-Grounded Rubyist_ by David A. Black
* _Learn to Program_ by Chris Pine

# LICENSE

This project is under an open source license. We're not sure exactly which one... probably MIT.

Gill Sans is under copyright. It's a great slide font and it comes with all recent Macs (and Gill Sans MT comes with MS Office).

Here is Gill Sans licensing info
  <http://www.fontslive.com/font/gill-sans-family.aspx>
  <http://www.ascendercorp.com/font/gill-sans/>

"The Gill Sans stack should work on most all computers. Gill Sans comes on all
Macs and Gill Sans MT is installed with Microsoft Office, and Calibri (which
is a good stand-in for Gill Sans) is one the core Vista fonts and is installed
with both Office Windows and Office Mac. And lastly, if all else fails, use
Trebuchet" - <http://www.artsiteframework.com/guide/fontstacks.php> -- the stack
he's talking about is

    "Gill Sans", "Gill Sans MT", GillSans, Calibri, "Trebuchet MS", sans-serif

