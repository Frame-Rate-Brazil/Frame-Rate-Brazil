import React from 'react'
import Item from '../components/Item';


const Home = () => {
  return (
    
    <section className=' bg-base '>
        <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-8 p-8">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            
        </div>
    </section>
    
  );
}

export default Home
