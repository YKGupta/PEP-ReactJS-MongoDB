import { Link, Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <div>
                <Link to="post1">Post 1</Link>
                <Link to="post2">Post 2</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Blog;