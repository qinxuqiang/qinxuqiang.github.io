---
layout: home
title: Home
---

<div class="container">
  <!-- Hero Section -->
  <section class="hero hero-horizontal">
    <div class="hero-image">
      <img src="{{ site.author.avatar }}" alt="{{ site.author.name }}" class="hero-avatar">
    </div>
    <div class="hero-content">
      <h1>Hi, I'm {{ site.author.name }}</h1>
      <p class="subtitle">AI Researcher & Mathematician</p>
      <p class="text-muted">Exploring the intersection of artificial intelligence, machine learning, and mathematical foundations</p>
      
      <div class="hero-cta">
        <a href="{{ '/about/' | relative_url }}" class="btn btn-primary">Learn More About Me</a>
        <a href="{{ '/publications/' | relative_url }}" class="btn btn-secondary">View Publications</a>
      </div>
    </div>
  </section>
  

  
  <!-- Recent Blog Posts -->
  {% if site.posts.size > 0 %}
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">Recent Blog Posts</h2>
      <p class="section-subtitle">Thoughts on AI, mathematics, and technology</p>
    </div>
    
    <div class="card-grid">
      {% for post in site.posts limit:3 %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
    
    <div class="text-center mt-xl">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-primary">View All Posts</a>
    </div>
  </section>
  {% endif %}
  
  <!-- Research Interests -->
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">Research Interests</h2>
      <p class="section-subtitle">What I'm passionate about</p>
    </div>
    
    <div class="card-grid">
      <div class="card">
        <div class="project-icon">🤖</div>
        <h3>Machine Learning</h3>
        <p class="text-muted">Deep learning architectures, neural networks, and intelligent systems that learn from data</p>
      </div>
      
      <div class="card">
        <div class="project-icon">💬</div>
        <h3>Natural Language Processing</h3>
        <p class="text-muted">Language models, text generation, and understanding human communication through AI</p>
      </div>
      
      <div class="card">
        <div class="project-icon">📐</div>
        <h3>Mathematical Foundations</h3>
        <p class="text-muted">Theoretical underpinnings of AI, including algebra, geometry, and representation theory</p>
      </div>
    </div>
  </section>
  
  <!-- Featured Publications -->
  {% comment %}
  {% if site.publications.size > 0 %}
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">Featured Publications</h2>
      <p class="section-subtitle">Recent research work</p>
    </div>
    
    {% for pub in site.publications limit:3 %}
      {% include publication-card.html pub=pub %}
    {% endfor %}
    
    <div class="text-center mt-xl">
      <a href="{{ '/publications/' | relative_url }}" class="btn btn-primary">View All Publications</a>
    </div>
  </section>
  {% endif %}
  {% endcomment %}
  
  <!-- Call to Action -->
  <section class="section">
    <div class="hero" style="text-align: center;">
      <h2>Let's Connect</h2>
      <p class="text-muted">I'm always interested in discussing AI research, mathematical ideas, or potential collaborations</p>
      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
        <a href="mailto:{{ site.author.email }}" class="btn btn-primary">
          <i class="fas fa-envelope"></i> Get in Touch
        </a>
        <a href="https://github.com/qinxuqiang" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i> View GitHub
        </a>
      </div>
    </div>
  </section>
</div>
