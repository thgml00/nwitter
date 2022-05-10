import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({userObj}) => {
  console.log('userObj',userObj)
  const [nweet, setNweet] = useState("")
  const [nweets, setNweets] = useState([])
  // const getNweets = async()=>{
  //   const dbNweets = await dbService.collection('nweets').get()
  //   // console.log(dbNweets)
  //   dbNweets.forEach(document=>{
  //     setNweets((prev)=>[document.data(), ...prev])
  //     const nweetObject={
  //       ...document.data(),
  //       id: document.id,
        
  //     }
  //     setNweets((prev)=>[document.data(),...prev])
  //   })
  // }
  useEffect(()=>{
    //getNweets()
    dbService.collection('nweets').onSnapshot(snapshot=>{
      //console.log(snapshot.docs)
      const nweetArray = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setNweets(nweetArray)
      console.log(nweetArray)
    })
  }, [])
  const onSubmit= async (event) => {
    event.preventDefault()
    await dbService.collection('nweets').add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid
    })
    setNweet("")
  }
  const onChange=(event)=>{
    const {target:{value}}=event
    setNweet(value)
  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={nweet} placeholder="What's on your mind?" maxLength={120} onChange={onChange}/>
        <input type='submit' value='Nweet' />
      </form>
      <div>
        {nweets.map((nweet)=>(
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home