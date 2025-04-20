const blogs = [{
    title: "GDG WOW",
    content: "GDG WOW is awesome"
},{
  title: "GDG WOW",
  content: "content"
}]

function HomePage(){
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <p>This is a blog page.</p>
            <div className="blog-ka-list bg-gray-900 p-20">
              {blogs.map(function (item) {
                  return <BlogContent title={item.title} content={item.content} />
              })}
            </div>
        </div>
    );
}

function BlogContent(props){
  return (
  <div className="actual-blog text-white p-5 border-2 border-white">
    <p className="text-xl  font-bold">
      {props.title}
    </p>
    <p>{props.content}</p>
  </div>
  )
}

export default HomePage;