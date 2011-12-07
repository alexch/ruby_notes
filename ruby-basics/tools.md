<!SLIDE subsection>
# ruby command-line tools

When you use Ruby you will encounter an entire ecosystem of tools, most of which are run from the command line. This section gives a brief overview of the most important of these tools.

Ref: WGR Chapter 1. Bootstrapping your Ruby literacy

# ruby

* `ruby` is the Ruby Interpreter
* `ruby hello.rb` runs the Ruby source file `hello.rb`
* Options
  * `-w` - warnings
  * `-v` - version or verbose
  * `--help`
  * `-c` - check syntax

# irb

* Interactive Ruby Browser
* aka "the ruby console"
* interprets Ruby one line at a time
  * REPL: Read Eval Print Loop

# uncluttering irb's cluttered prompt


    irb --simple-prompt

or

    alias irb="irb --simple-prompt"

or

    echo "IRB.conf[:PROMPT_MODE] = :SIMPLE" >> ~/.irbrc

# ri and rdoc

* if you're running `rvm`, do this right now:

        rvm docs generate
    
* rdoc generates and displays documentation
  * per file or class or gem
  * documentation comes from inside source code
  * RDoc Syntax described at <http://rdoc.rubyforge.org/RDoc/Markup.html>
  
# web docs
* [ruby-doc.org](http://ruby-doc.org)
* [gotapi.com/rubyrails](http://gotapi.com/rubyrails)
* [api.rubyonrails.org](http://api.rubyonrails.org/)
* `gem server` launches an rdoc browser locally
* [railscasts.com](http://railscasts.com/)

# cheat

* a text-only command-line wiki
* `gem install cheat` for command-line tool or see <http://cheat.errtheblog.com>

        $ cheat agile
        Agile Manifesto_____________
         - Individuals and interactions over processes and tools 
         - Working software over comprehensive documentation  
         - Customer collaboration over contract negotiation 
         - Responding to change over following a plan 
        While there is value in the items on the right, we value the items on the left
        more.

# rake

* one `Rakefile` contains many "tasks" which can be run a la `rake test`
* rake looks up the directory tree for a Rakefile
* `rake --tasks` shows all defined tasks in the current Rakefile
  * also `rake -T`

# gem

* aka RubyGems
* gem = Ruby package = library or program or plugin
* `gem install foo` - downloads and installs the "foo" gem from rubygems.org
* `gem`, `rvm` and `bundler` live in uneasy harmony

# gem plugins
* installed as gems, but extend the `gem` command
* for example, `open_gem` which opens the source code for a gem in your editor

        gem install open_gem
        gem open rake

# bundler

* manages lots of different sets of gems and versions thereof
* bundler is a gem itself
  * `gem install bundler` loads it into the current gemset
* `bundle install`
* `bundle update`
* `Gemfile` lists all the gems for the current project (directory)
  * similar to `Rakefile` in scope

# rvm

* Ruby Version Manager
* manages lots of different versions and distros of Ruby on a single computer
  * `rvm list`
  * `rvm install 1.9.2`
  * `rvm use 1.9.2`
* also manages gemsets
  * `rvm gemset create teaching`
  * `rvm use 1.9.2@teaching`
* overlaps with `gem` and Bundler
  * in sometimes odd ways

# Bundler vs. RVM

* RVM manages multiple gemsets on a single machine
* Bundler manages the same gemset on multiple machines

# RSpec

* testing framework
* describe, it, before, after, should

# dotfiles

* Are you on Unix/OSX? Check out Alex's dotfiles repo

    <http://github.com/alexch/dotfiles>
    
# git

![Git CheatSheet](https://github.com/nerdgirl/git-cheatsheet-visual/raw/master/gitcheatsheet.png)

* <https://github.com/nerdgirl/git-cheatsheet-visual>
    
