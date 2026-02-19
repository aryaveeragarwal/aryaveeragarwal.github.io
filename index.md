---
layout: single
---
This is a living build log of my work in robotics and engineering.

I focus on:

- FTC & FRC robotics systems  
- Embedded control experiments  
- Applied problem solving under constraints

## Recent Posts
{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}
{% endfor %}
<script>
(function() {
  const current = window.location.pathname.replace(/\/$/, "");
  const links = document.querySelectorAll(".masthead__menu-item a");

  links.forEach(link => {
    const href = link.getAttribute("href").replace(/\/$/, "");
    if (href === current) {
      link.classList.add("active-nav");
    }
  });
})();
</script>
