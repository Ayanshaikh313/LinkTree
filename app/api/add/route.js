import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body= await request.json()

    const client = await clientPromise;
    const db = client.db("linkTree")
    const collection = db.collection("links")

    //if the user is already exist then it will return an error popup
    
    const eco = await collection.findOne({ handle: body.handle })
    if (eco){
        return Response.json({success: false, Error: true, message: "User already exist!" })
    }


    const result= await collection.insertOne(body)
    
    return Response.json({success: true, Error: false, message: "Your LinkTree Has Been Generated",result:result })
}