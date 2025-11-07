---
layout: page
title: Blog
subtitle: Thoughts on AI, mathematics, and technology
---

<div class="search-box">
  <input type="text" id="search-input" class="search-input" placeholder="Search posts..." aria-label="Search blog posts">
</div>

<div class="section-header" style="text-align: center; margin-bottom: 2rem;">
  <p class="text-muted">Exploring ideas at the intersection of artificial intelligence, machine learning, and mathematical theory</p>
</div>

{% if site.posts.size > 0 %}
<div class="card-grid" id="posts-container">
  {% for post in site.posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>

<div id="no-results" style="display: none; text-align: center; padding: 3rem;">
  <p class="text-muted">No posts found matching your search.</p>
</div>

{% else %}
<div style="text-align: center; padding: 3rem;">
  <p class="text-muted">No blog posts yet. Check back soon for new content!</p>
</div>
{% endif %}

---

## Topics I Write About

<div class="card-grid" style="margin-top: 2rem;">
  <div class="card">
    <div class="project-icon">🤖</div>
    <h3>Machine Learning</h3>
    <p class="text-muted">Deep learning techniques, neural networks, and the latest advances in AI</p>
  </div>
  
  <div class="card">
    <div class="project-icon">💬</div>
    <h3>NLP & Language Models</h3>
    <p class="text-muted">Natural language processing, transformers, and language understanding</p>
  </div>
  
  <div class="card">
    <div class="project-icon">📐</div>
    <h3>Mathematics</h3>
    <p class="text-muted">Mathematical foundations, theory, and their applications to AI</p>
  </div>
  
  <div class="card">
    <div class="project-icon">🔬</div>
    <h3>Research Insights</h3>
    <p class="text-muted">Thoughts on recent papers, research trends, and methodologies</p>
  </div>
</div>

---

<div style="text-align: center; margin-top: 3rem;">
  <p>Subscribe to my <a href="{{ '/feed.xml' | relative_url }}"><i class="fas fa-rss"></i> RSS feed</a> to stay updated with new posts.</p>
</div>

<script>
// Simple client-side search
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const postsContainer = document.getElementById('posts-container');
  const noResults = document.getElementById('no-results');
  
  if (searchInput && postsContainer) {
    const posts = Array.from(postsContainer.children);
    
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      let visibleCount = 0;
      
      posts.forEach(post => {
        const text = post.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          post.style.display = '';
          visibleCount++;
        } else {
          post.style.display = 'none';
        }
      });
      
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
});
</script>
