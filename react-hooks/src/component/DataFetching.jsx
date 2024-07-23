import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState('');
    const [idFromButtonClick, setIdFromButtonClick] = useState('');

    const URL = `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`;
    useEffect(() => {
        async function getPosts() {
            const res = await axios.get(URL);
            // const data = await res.json();
            // console.log(res.data[0]);
            console.log(res.data);
            setPost(res.data);
        }

        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idFromButtonClick]);

    function handleClick() {
        setIdFromButtonClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>
                Fetch Post
            </button>
            <ul>
                {/* {post.map((item) => {
                    return <li key={item.id}> {item.title}</li>;
                })} */}
            </ul>
            <div>{post.body}</div>
        </div>
    );
}

export default DataFetching;
