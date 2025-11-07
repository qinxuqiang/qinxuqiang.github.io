/**
 * Main JavaScript for Personal Website
 * Handles mobile menu, smooth scrolling, and interactive features
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.site-nav');
    
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('mobile-active');
        
        // Animate hamburger
        const hamburger = menuToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.classList.toggle('active');
        }
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('mobile-active');
          const hamburger = menuToggle.querySelector('.hamburger');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      });
      
      // Close mobile menu when clicking on a link
      const navLinks = nav.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('mobile-active');
          const hamburger = menuToggle.querySelector('.hamburger');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        });
      });
    }
  }

  // Smooth Scrolling for Anchor Links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty fragments
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const headerOffset = 80; // Account for sticky header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Copy to Clipboard for Code Blocks
  function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
      const pre = block.parentElement;
      
      // Create copy button
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      
      // Style the button
      button.style.position = 'absolute';
      button.style.top = '0.5rem';
      button.style.right = '0.5rem';
      button.style.padding = '0.25rem 0.75rem';
      button.style.fontSize = '0.75rem';
      button.style.backgroundColor = 'var(--color-bg-secondary)';
      button.style.border = '1px solid var(--color-border)';
      button.style.borderRadius = 'var(--radius-sm)';
      button.style.cursor = 'pointer';
      button.style.opacity = '0';
      button.style.transition = 'opacity var(--transition-fast)';
      
      // Position the pre element
      pre.style.position = 'relative';
      
      // Show button on hover
      pre.addEventListener('mouseenter', () => {
        button.style.opacity = '1';
      });
      
      pre.addEventListener('mouseleave', () => {
        if (button.textContent !== 'Copied!') {
          button.style.opacity = '0';
        }
      });
      
      // Copy functionality
      button.addEventListener('click', async () => {
        const code = block.textContent;
        
        try {
          await navigator.clipboard.writeText(code);
          button.textContent = 'Copied!';
          button.style.backgroundColor = 'var(--color-primary)';
          button.style.color = 'white';
          
          setTimeout(() => {
            button.textContent = 'Copy';
            button.style.backgroundColor = 'var(--color-bg-secondary)';
            button.style.color = '';
            button.style.opacity = '0';
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
          button.textContent = 'Error';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        }
      });
      
      pre.appendChild(button);
    });
  }

  // Add Reading Progress Bar (for blog posts)
  function initReadingProgress() {
    // Only add progress bar on post pages
    if (!document.querySelector('.post-content')) return;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.backgroundColor = 'var(--color-primary)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease-out';
    
    document.body.appendChild(progressBar);
    
    function updateProgress() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.pageYOffset;
      const progress = (scrolled / documentHeight) * 100;
      
      progressBar.style.width = Math.min(progress, 100) + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
  }

  // Add "Back to Top" Button
  function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('aria-label', 'Back to top');
    button.style.position = 'fixed';
    button.style.bottom = '2rem';
    button.style.right = '2rem';
    button.style.width = '3rem';
    button.style.height = '3rem';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'var(--color-primary)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1.25rem';
    button.style.boxShadow = 'var(--shadow-lg)';
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
    button.style.transition = 'all var(--transition-base)';
    button.style.zIndex = '1000';
    
    document.body.appendChild(button);
    
    function toggleButton() {
      if (window.pageYOffset > 300) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    }
    
    window.addEventListener('scroll', toggleButton);
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-4px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  }

  // Highlight Active Navigation Item
  function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.site-nav a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (currentPath === href || currentPath.endsWith(href))) {
        link.classList.add('active');
      }
    });
  }

  // Add External Link Icons
  function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    
    links.forEach(link => {
      // Skip if it's an internal link or already has an icon
      if (link.hostname === window.location.hostname) return;
      if (link.querySelector('i')) return;
      
      // Add external link indicator
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // Calculate and Display Reading Time
  function calculateReadingTime() {
    const content = document.querySelector('.post-content');
    if (!content) return;
    
    const text = content.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
    
    const readTimeElement = document.querySelector('.read-time');
    if (readTimeElement && !readTimeElement.textContent.includes('min read')) {
      readTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readingTime} min read`;
    }
  }

  // Initialize all features when DOM is ready
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initCodeCopy();
    initReadingProgress();
    initBackToTop();
    initActiveNav();
    initExternalLinks();
    calculateReadingTime();
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();



