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

### ActionText

Displays some text for an amount of time.

```python
""" duration :: int
    text     :: str
"""
ActionScale(duration, text)
```
For example, `ActionScale(2000, 'Hello!')` displays the text `'Hello!'` for `2000`ms (two seconds).

### ActionChange

Changes the image of one emoji to another.

```python
""" emoji       :: Emoji
    image_name  :: str
"""
ActionChange(emoji, image_name)
```
For example, `ActionChange(laughing, 'happy')` changes the emoji with variable name `laughing` to use the image `'happy'` instead.
> Note: this does not change the variable name of '*laughing*' to '*happy*'
