import { useEffect, useState } from "react";

function BlogAll() {
    const [posts, setpost] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                setpost(data.posts)
            })
    }, []
    )
    console.log(posts);

    return (
        <>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        {item.title}

                    </li>

                ))}

            </ul>
        </>
    )
}
export default BlogAll;