import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  image?: string
  featured?: boolean
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  slug,
  image,
  featured = false,
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (featured) {
    return (
      <Link href={`/blog/${slug}`}>
        <div className="group cursor-pointer">
          {image && (
            <div className="relative w-full h-96 md:h-[500px] bg-ivory overflow-hidden mb-8">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-1 bg-taupe text-cream rounded-sm text-xs font-sans font-semibold tracking-wider uppercase">
                {category}
              </span>
              <span className="text-xs text-taupe tracking-wider uppercase">
                {formatDate(date)}
              </span>
            </div>
            <h2 className="heading-large mb-6 group-hover:text-gold transition-colors leading-tight">
              {title}
            </h2>
            <p className="text-taupe mb-8 leading-relaxed text-lg font-body">
              {excerpt}
            </p>
            <button className="btn-primary">
              CONTINUE READING
            </button>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${slug}`}>
      <div className="card-elevated group">
        {image && (
          <div className="relative w-full h-56 bg-ivory overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        )}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-ivory">
            <span className="inline-block px-3 py-1 bg-ivory text-taupe rounded-sm text-xs font-sans font-semibold tracking-wider uppercase">
              {category}
            </span>
            <span className="text-xs text-taupe tracking-wider uppercase">
              {formatDate(date)}
            </span>
          </div>
          <h3 className="heading-small mb-4 group-hover:text-gold transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-taupe text-base leading-relaxed line-clamp-3 font-body">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
