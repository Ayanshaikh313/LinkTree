"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Generate = () => {
  const router = useRouter();
  const toTree = () => {
    router.push(`http://localhost:3000/${text}`);
  }
  const [text, settext] = useState("");
  const searchParams = useSearchParams();
  const [Links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get('handle'));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  }

  const addLink = () => {
    setLinks(Links.concat([{ link: "", linktext: "" }]));
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": Links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([]);
      setpic("");
      sethandle("");
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className='bg-blue-100 min-h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className="col1 flex justify-center items-center flex-col text-gray-900 p-4">
        <div className='flex flex-col gap-5 my-8'>
          <h1 className='font-bold text-4xl mt-16 text-center'>Create your Bittree</h1>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
            <div className='mx-4'>
              {/* <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 my-2 focus:outline-pink-500 rounded-full w-full'
                type="text" placeholder='Choose a Handle' /> */}
                <input className='px-4 py-2 my-2 focus:outline-pink-500 rounded-full w-full'
                type="text" placeholder='Choose a Handle' />
            </div>
          </div>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
            {Links && Links.map((item, index) => {
              return <div key={index} className='mx-4 flex flex-col md:flex-row'>
                {/* <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full w-full md:w-1/2' type="text" placeholder='Enter link text' /> */}
                <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full w-full md:w-1/2' type="text" placeholder='Enter link text' />
                {/* <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full w-full md:w-1/2'
                  type="text" placeholder='Enter link' /> */}
                  <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full w-full md:w-1/2'
                  type="text" placeholder='Enter link' />
              </div>
            })}
            {/* <button onClick={() => addLink()} className='p-5 py-2 mx-2 bg-blue-600 text-white font-bold rounded-3xl'>+ Add Link</button> */}
            <button  className='p-5 py-2 mx-2 bg-blue-600 text-white font-bold rounded-3xl'>+ Add Link</button>
          </div>

          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
            <div className='mx-4 flex flex-col'>
              {/* <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full' type="text" placeholder='Enter link to your Picture' /> */}
              <input  className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full' type="text" placeholder='Enter link to your Picture' />
              {/* <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full' type="text" placeholder='Enter description' /> */}
              <input  className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full' type="text" placeholder='Enter description' />
              {/* <button disabled={pic === "" || handle === "" || Links[0].linktext === ""} onClick={() => { submitLinks() }} className='disabled:bg-gray-600 p-5 py-2 mx-2 w-fit my-5 bg-blue-600 text-white font-bold rounded-3xl'>Create your BitTree</button> */}
              <button  className='disabled:bg-gray-600 p-5 py-2 mx-2 w-fit my-5 bg-blue-600 text-white font-bold rounded-3xl'>Create your BitTree</button>
            </div>

            <div className="push flex flex-col justify-center">
              <h2 className='font-bold text-red-500'>Enter your handle Name Only if your handle Created if Not create it from above</h2>
              {/* <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-lg' type="text" onChange={(e) => { settext(e.target.value) }} value={text} placeholder='Enter your handle' /> */}
              <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-lg' type="text"  placeholder='Enter your handle' />
              {/* <button onClick={() => { toTree() }} className="px-4 py-2 mx-2 my-2 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                View Your BitTree
              </button> */}
              <button  className="px-4 py-2 mx-2 my-2 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                View Your BitTree
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 h-full w-full object-contain max-h-screen">
        <img
          src="/log.png"
          className="max-h-screen w-full object-cover"
          alt="Generate your links here"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
