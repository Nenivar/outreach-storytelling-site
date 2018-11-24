---
title: 🐍📙 | Reference
layout: page
---

# Reference

This page has a list of `Emoji` images and `Action`s you can use.

## Emoji

Use these with `myEmoji = Emoji(id)`, i.e:
```python
myEmoji = Emoji('angry')
```

<br/>

<div id="reference__cont">
    {% for image in site.static_files %}
        {% if image.path contains 'assets/images/core/reference/emoji' %}
            <div class="block">
                <img src="{{ image.path }}"/>
                <p>{{ image.basename }}</p>
            </div>
        {% endif %}
    {% endfor %}
</div>

---

## Actions

### ActionMove

Moves an emoji to a given position.

```python
""" duration :: int
    emoji    :: Emoji
    position :: Vector2
"""
ActionMove(duration, emoji, position)
```
For example, `ActionMove(1000, laughing, Vector2(10, 30))` moves the emoji with variable name `laughing` to the position `(10, 30)` in `1000`ms (1 second).

### ActionScale

Scales an emoji by a given factor.

```python
""" duration :: int
    emoji    :: Emoji
    scale    :: int
"""
ActionScale(duration, emoji, scale)
```
For example, `ActionScale(500, laughing, 2)` scales the emoji with variable name `laughing` by a factor of `2` in `500`ms (half a second).

### ActionFlipHorz

Flips an emoji horizontally.

```python
""" duration :: int
    emoji    :: Emoji
"""
ActionFlipHorz(duration, emoji)
```
For example, `ActionFlipHorz(1000, laughing)` flips the emoji with variable name `laughing` horizontally in `1000`ms (one second).

### ActionFlipVert

Flips an emoji vertically.

```python
""" duration :: int
    emoji    :: Emoji
"""
ActionFlipVert(duration, emoji)
```
For example, `ActionFlipVert(1000, laughing)` flips the emoji with variable name `laughing` vertically in `1000`ms (one second).

### ActionRotate

Rotates an emoji by a given amount.

```python
duration :: int
emoji    :: Emoji
amount   :: int
# where amount is in degrees
ActionRotate(duration, emoji, amount)
```
For example, `ActionRotate(250, laughing, 90)` rotates the emoji with variable name `laughing` by `90` degrees clockwise in `250`ms (quarter of a second).

### ActionChange

Changes the image of one emoji to another.

```python
""" emoji       :: Emoji
    image_name  :: str
"""
ActionChange(emoji, image_name)
```
For example, `ActionChange(laughing, 'happy')` changes the emoji with variable name `laughing` to use the image `'happy'` instead.
> Note: this does not play very well with rotation! Use with caution

### ActionText

Displays some text for an amount of time.

```python
""" duration :: int
    text     :: str
"""
ActionScale(duration, text)
```
For example, `ActionScale(2000, 'Hello!')` displays the text `'Hello!'` for `2000`ms (two seconds).

### ActionChangeBGCol

Changes the colour of the background of a scene.

```python
""" duration :: int
    col      :: (int, int, int)
"""
ActionChangeBGCol(duration, col)
```
For example, `ActionChangeBGCol(1000, COL_RED)` changes the background of the scene the action is added to, to `COL_RED` (red) over `1000`ms (one second).