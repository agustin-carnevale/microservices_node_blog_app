import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostsList = (props) => {
    const [posts,setPosts]= useState({})

    useEffect(()=>{
        fetchPosts()
    },[])
    
    const renderedPosts = Object.values(posts).map(post => {
        return <div 
                className='card' 
                style={{width: '30%', marginBottom: '20px'}}
                key={post.id}
            >
            <div className='card-body'>
                <h3>{post.title}</h3>
                <CommentList comments={post.comments}/>
                <CommentCreate postId={post.id}/>
            </div>
        </div>
    })

    const fetchPosts = async ()=>{
        const res = await axios.get('http://posts.com/posts')
        setPosts(res.data)
    }

    return <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPosts}
    </div> 
}

export default PostsList