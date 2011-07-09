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
* Simple Prompt:

        irb --simple-prompt

    or

        echo "IRB.conf[:PROMPT_MODE] = :SIMPLE" >> ~/.irbrc


# ri and rdoc

* generate and/or display documentation
* per file or class
* can be useful; usually not sufficient
  * <http://gotapi.com/rubyrails> is a great RDoc browser
  
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
  * `rvm install 1.9.2`
  * `rvm use 1.9.2`
* also manages gemsets
  * `rvm gemset create teaching`
  * `rvm use 1.9.2@teaching`
* overlaps with `gem` and Bundler
  * in sometimes odd ways

# Alex's `rvm` bash prompt:

(todo: put in a gist)

    @@@ sh
    export Normal='\[\e[0m\]'
    export Bright='\[\e[1m\]'
    export Red='\[\e[0;31m\]'
    export Green='\[\e[0;32m\]'
    export BrightGreen='\[\e[1;32m\]'
    export PS1="\h:${Bright}\W${Normal} [${BrightGreen}\`which_ruby\`${Normal}] \u\$ "

(put the above in `~/.bash_profile` or equivalent)

