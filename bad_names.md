# Bad Names

| name | why it's bad | alternative |
|---|---|---|
| attr_accessor | "access" implies reading, not writing | attribute |
| default block | "default" is misleading  | anonymous block |
| default hash | "default" is misleading  | automatic hash |
| case | comprises many cases, not one case | switch or compare |
| equal? |compares identity (object_id), not equality | identical? |
| attr_accessible <br> (Rails) | it's about setting, not accessing | mass_assignable |
| yield | implies thread/process swap | call |


