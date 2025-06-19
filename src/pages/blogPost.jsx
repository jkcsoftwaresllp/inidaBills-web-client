import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './blogPost.module.css';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import BlogContentTile from '../components/blogContentTile/BlogContentTile';
import blogArticles from '../components/blogArticles';

const BlogPost = () => {
  const { slug } = useParams();
  const getBlogData = blogArticles[slug];
  const post = getBlogData?.();

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <Link to="/blogs" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          
          <div className={styles.category}>{post.category}</div>
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.meta}>
            <div className={styles.metaInfo}>
              <User size={16} />
              <span>{post.author}</span>
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            
            <div className={styles.shareButtons}>
              <span>Share:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Twitter size={18} />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className={styles.imageContainer}>
          <img src={post.image} alt={post.title} className={styles.featuredImage} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.excerpt}>{post.excerpt}</div>
          <BlogContentTile sections={post.sections} />
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.tags}>
            <span>Tags:</span>
            <span className={styles.tag}>IndiaBills</span>
            <span className={styles.tag}>Billing Software</span>
            <span className={styles.tag}>GST</span>
            <span className={styles.tag}>Inventory Management</span>
          </div>
          
          <div className={styles.shareSection}>
            <h3>Share this article</h3>
            <div className={styles.shareButtons}>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Facebook size={20} />
                Facebook
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Twitter size={20} />
                Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className={styles.relatedPosts}>
        <h2>Related Articles</h2>
        <div className={styles.relatedGrid}>
          <Link to="/blog/inventory-management-best-practices-small-business" className={styles.relatedPost}>
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400" alt="Related post" />
            <h3>Inventory Management Best Practices</h3>
          </Link>
          <Link to="/blog/digital-transformation-indian-retail-businesses" className={styles.relatedPost}>
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400" alt="Related post" />
            <h3>Digital Transformation for Retail</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;