react-resizable-panes
=====================

A quick implementation of a 3 pane display with highlighting, hiding and resizable border actions.


Keyboard support
----------------

- `ctrl+l` hides the leftmost pane, adding its size to the panel on its right, the center pane
- `ctrl+r` hides the rightmost pane, adding its size to the panel on its left, the center pane
- `ctrl+h` selects the hovered pane, turning it green

All actions are "toggable", which means when pressing the second time it will undo the previous action

Limits
------

- No pane should be smaller than 10% of the viewport width
- No pane should be bigger than 70% of the viewport width
- Viewport should be always 100% filled with the panes and helper borders

Bugs
----

- limits are not being properly applied, which, width resize and hide combinations should produce unwanted behaviors
- borders lack better grab feel for the user
- applications' state are not immutable nor components properties are clean
- multi-row support incomplete
