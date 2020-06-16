import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog
            tanggal="16 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." />

        <Blog
            tanggal="17 Juni 2020"
            judul="Teknologi AI"
            summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." />

        <Blog
            tanggal="18 Juni 2020"
            judul="Teknologi Laravel"
            summary="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator." />

    </div>
}

export default Home;