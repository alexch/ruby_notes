# Ruby Notes

Alex's notes and slides for teaching Ruby

## Author

Alex Chaffee <alex@stinky.com>

# Showing the slides

We use a Ruby app called `deck` to generate and serve the slides. Install deck like this:

    gem install deckrb

## Showing all the slides

    deck showoff.json
    
This will launch a local web server on port 4333. Open your browser to `localhost:4333`. 

On a Mac you can run:

    open http://localhost:4333

On Windows I think you can run:

    start http://localhost:4333

Use arrow keys to navigate slides. Press '?' to see a help window.

## Showing some of the slides

Same as above, but specify the slide files you want, e.g.

    deck ruby-basics/strings.md

or 

    deck ruby-objects/objects.md ruby-objects/classes.md


# Editing slides

Slides are in [Markdown](http://daringfireball.net/projects/markdown/syntax) format.

Image files should be in, or relative to, the same directory as the slide source file that refers to them.

<!--
# Printing slides

Try this: first `gem install pdfkit`, then visit

    http://localhost:9090/pdf

but I make no guarantees!
-->

## Based upon and/or inspired by

* [Ruby Quickstart for Refugees](https://gist.github.com/190567)
* [ruby for programmers]() from Railsbridge Open Workshops
* _The Well-Grounded Rubyist_ by David A. Black
* _Learn to Program_ by Chris Pine

# LICENSE

This project is under an open source license. We're not sure exactly which one... probably MIT.
