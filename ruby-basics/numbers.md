!SLIDE subsection
# Numbers

Ref. WGR Chapter 8, Section 8.3, Numerical objects

# Numerical Operations

    + - * / %

etc.

# Floats vs. Integers (Fixnums)

floating point literals

conversion only happens when it needs to

    @@@ruby
    >> 2/3 == 0
    => true
    
    >> 2.0/3 == 0.6666666666666666
    => true
    
    >> 2.0/3 == 0.666666666666666
    => false
    
    >> 2/3.0
    => 0.6666666666666666
    
    >> 2.to_f/3
    => 0.6666666666666666

# IEEE Rounding Error Is Awesome

    >> 0.5 - 0.4 - 0.1
    => -2.7755575615628914e-17

