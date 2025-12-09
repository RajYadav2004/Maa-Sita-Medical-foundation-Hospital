import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { Layout } from "@/components/layout/Layout";

import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, User, Clock } from "lucide-react";
import api from "@/services/api";

// Removed: type BlogPost = Tables<'blog_posts'>; as it's no longer directly from Supabase types

const BlogPostPage = () => { // Renamed back to BlogPostPage to match original export
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: async () => {
      const { data } = await api.get(`/blog/${id}`);
      return data;
    },
    enabled: !!id, // Only run query if id is available
  });

  // Related posts logic needs to be re-implemented if desired,
  // but the instruction only provided the main post fetch.
  // For now, relatedPosts will be an empty array or removed.
  const relatedPosts: any[] = []; // Placeholder for now

  if (isLoading) {
    return (
      <>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </>

    );
  }

  if (!post) {
    return (
      <>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </>

    );
  }

  return (
    <>

      {/* Back Button */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {post.category || 'General'}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author || 'Admin'}
                </span>
                {post.published_at && (
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.read_time || '5 min read'}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop'}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.excerpt && (
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}
              {post.content && (
                <div
                  className="text-foreground/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
                />
              )}
              <p className="text-foreground/80 leading-relaxed mt-6">
                At Charity Hospital, we're committed to providing you with the information and care
                you need to live your healthiest life. Schedule a consultation with our specialists
                to learn more about how we can help you achieve your health goals.
              </p>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
              <Link to="/doctors" className="text-primary font-medium hover:underline">
                Consult with a Specialist →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-card rounded-xl overflow-hidden card-elevated border border-border hover:border-primary/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop'}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">{relatedPost.read_time || '5 min read'}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>

  );
};

export default BlogPostPage;
