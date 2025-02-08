import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  // const handle=(await params).handle  
  // const client = await clientPromise;
  // const db = client.db("linkTree");
  // const collection = db.collection("links");

  //if the user is already exist then it will return an error popup

  // const Item = await collection.findOne({ handle:handle });
  // if(!Item){
  //   return notFound()
  // }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[rgb(6,11,16,1)] to-[rgb(14,69,68)] justify-center items-start py-16">
        {Item &&<div className="photo flex justify-center items-center flex-col gap-4">
        <img className="max-h-32 rounded-full" src={Item.pic} alt="" />
        <span className=" text-white font-bold">@{Item.handle}</span>
        <span className="text-white w-80 text-center ">{Item.desc}</span>
        <div className="link">
          {Item.links.map((Item, index) => {
            return (
              //   <Link key={index} href={Item.link}><div
              //   className="bg-white font-bold py-4 shadow-lg my-5 min-w-96 rounded-md flex justify-center"
              // >
              //   {Item.linktext}
              // </div></Link>
              <Link href={Item.link}><div
                className="bg-white font-bold py-4 shadow-lg my-5 min-w-96 rounded-md flex justify-center"
              >
                {Item.linktext}
              </div></Link>
            );
          })}
        </div>
      </div>}
    </div>
  );
}
