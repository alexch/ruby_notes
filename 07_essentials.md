!SLIDE subsection
# Conversions

# to_x

* `to_i` converts to integer
* `to_f` converts to integer
* `to_s` converts to string
* `to_a` converts to array

# to_s

* it's tempting to use `to_s` in your UI
* usually `to_s` is insufficient and therefore useless
* make a custom named method instead for your purposes
  * e.g. `display_name`

# `inspect`

* `inspect` produces a *debug*-ready representation of the object
* usually contains lots of information
* not to be shown to users, but good in log files or console
* plug: Wrong and the "d" method





