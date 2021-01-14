const { default: ContactUs } = require("../../components/ContactUs")
const { default: Footer } = require("../../components/Footer")
const { default: OurBlog } = require("../../components/OurBlog")

const BlogPage = () => {
  return (
    <div>
      <div className="blog_main">
        <div className="container">
          <OurBlog/>
        </div>
      </div>
      <ContactUs />
      <Footer/>
    </div>
  );
};

export default BlogPage;