import React from 'react'

import PostList from './post/PostList'

const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Will Sokolowski' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Will Sokolowski' }
]

export default function App () {
    return <PostList posts={posts} />
}