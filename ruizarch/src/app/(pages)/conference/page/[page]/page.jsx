
import Pagination from '@components/Pagination';

import Link from "next/link";
import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation';
import Paginatedblog from "@/src/app/_components/PaginatedBlog";


import AppData from "@data/app.json";
 
import PageBanner from "@components/PageBanner";
import Sidebar from "@components/Sidebar";
import PopularPosts from "@components/sections/PopularPosts";

import { getSortedCategoriesData } from "@library/categories";
import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

import PopularsPostsData from "@data/sections/popular-posts.json";

export const metadata = {
  title: {
		default: "conference",
	},
  description: AppData.settings.siteDescription,
}

async function blogPage( { params } ) {
  const populars = await getAllPupulars();
  const categories = await getAllCategories();
  const postsData = await getAllPosts(params);

  return (
    <>
      <PageBanner pageTitle={"Insights"} breadTitle={"conference"} bgImage={"/img/photo/12.jpg"} />

      {/* blog */}
      <section>
          <div className="container mil-p-120-60">
              <div className="mil-background-grid mil-softened"></div>
              <div className="row justify-content-between">
                  <div className="col-lg-7">
                      <PopularPosts posts={populars} />

                      {/* filter */}
                      <div className="mil-filter mil-up mil-mb-90">
                          <div className="mil-filter-links">
                              <Link href="/conference" className="mil-current">All</Link>
                              {categories.map((item, key) => (
                              <Link key={`categories-item-${key}`} href={`/conference/category/${item.id}`}>{item.title}</Link>
                              ))}
                          </div>
                      </div>
                      {/* filter end */}
                      
                      <Paginatedblog
                        items={postsData.posts}
                      />

                  </div>
                  <div className="col-lg-5">

                      <Sidebar />

                  </div>
              </div>
          </div>
      </section>
      {/* blog end */}

      {/* pagination */}
      <div className="container mil-p-0-120">
          <div className="mil-background-grid mil-softened" />
          
          <Pagination
            currentPage={postsData.currentPage}
            totalItems={postsData.totalPosts}
            perPage={AppData.settings.perPage}
            renderPageLink={(page) => `/conference/page/${page}`}
          />
      </div>
      {/* pagination end */}
    </>
  );
};
export default blogPage;

export async function generateStaticParams() {
  return Array.from({ length: 5 }).map((_, i) => `/conference/page/${i + 2}`)
}

async function getAllPupulars() {
  const popularsData = await getFeaturedPostsData( PopularsPostsData.featured )

  return popularsData
}

async function getAllCategories() {
  const categoriesData = await getSortedCategoriesData()

  return categoriesData
}

async function getAllPosts( params ) {
  const page = Number(params?.page) || 1
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, page );

  if (!posts.length) {
    notFound()
  }

  if (page === 1) {
    redirect('/conference')
  }

  return {
    posts: posts,
    totalPosts: total,
    currentPage: page
  }
}