import data from "../../data";
import OurBlogCard from "../OurBlogCard";

const OurBlog = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="blog_text">Our Blog</h1>
        </div>
      </div>

      <div className="blog_section_2">
        <div className="row">
          {
            data.blog.map(blog => (
              <OurBlogCard
                blog={blog}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default OurBlog;