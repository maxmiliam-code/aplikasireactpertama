import React from 'react'
//import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
        {
            <div>
            <Produk nama="Macbook Pro 2010" harga="33000000" stock="10"/>
            <Produk nama="Macbook Pro 2011" harga="34000000" stock="15"/>
            <Produk nama="Macbook Pro 2012" harga="40000000" stock="24"/>
            <Produk nama="Macbook Pro 2013" harga="45000000" stock="4"/>
            <Produk nama="Macbook Pro 2014" harga="55000000" stock="123"/>
            </div>
        /*<Blog
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
        */}
    </div>
}

export default Home;