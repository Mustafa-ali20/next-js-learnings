import Link from "next/link"

export default function Home(){
    return <>
    <Link href="/blog">Blog</Link>
    <Link href="/products">Products</Link>
   <Link href="/article/breaking-news-123?lang=en">Read in English</Link> {/*  here the breaking news 123 is dynamic route parameter and lang=en is query parameter */}
   <Link href="/article/breaking-news-123?lang=fr">Read in French</Link>
    </>
}