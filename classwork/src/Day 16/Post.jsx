import { useParams } from 'react-router-dom';

const Post = () => {

    const { postID } = useParams();

    return (
        <div>
            You are viewing post = {postID}
        </div>
    )
}

export default Post;