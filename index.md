---
layout: default
title: Home
---

# Welcome

This is my living build log in robotics and engineering.

## Recent Posts

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}
{% endfor %}
