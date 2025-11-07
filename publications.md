---
layout: page
title: Publications
subtitle: Research papers and academic work
---

Below is a selection of my research publications in mathematics and related fields. My work primarily focuses on algebraic geometry, moduli spaces, and representation theory.

<div class="section-header" style="margin-bottom: 2rem;">
  <p>For a complete list of my publications, please visit my <a href="{{ site.author.links[3].url }}" target="_blank" rel="noopener noreferrer">Google Scholar profile</a>.</p>
</div>

## Recent Publications

{% assign sorted_pubs = site.publications | sort: 'year' | reverse %}
{% for pub in sorted_pubs %}
  {% include publication-card.html pub=pub %}
{% endfor %}

---

## Research Areas

My research interests span several interconnected areas:

<div class="card-grid" style="margin-top: 2rem;">
  <div class="card">
    <h3>Algebraic Geometry</h3>
    <p class="text-muted">Moduli spaces, birational geometry, and geometric structures on algebraic varieties</p>
  </div>
  
  <div class="card">
    <h3>Representation Theory</h3>
    <p class="text-muted">Quiver representations, moduli of representations, and connections to geometry</p>
  </div>
  
  <div class="card">
    <h3>Mathematical Physics</h3>
    <p class="text-muted">Instanton sheaves, gauge theory, and geometric structures in theoretical physics</p>
  </div>
</div>

---

## Collaboration

I'm always interested in collaborative research opportunities. If you'd like to discuss potential projects or have questions about my work, please feel free to [reach out](mailto:{{ site.author.email }}).



