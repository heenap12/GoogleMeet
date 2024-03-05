import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const { roomId } = useParams()
    const meeting = async (element) => {
        const serverSecret = "0b0bf5b12933f46612aad6b3002c3ab8";
        const appID = 294278411;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "heena"
        )
        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: element,
            sharedLinks: [{
                name: "copy link",
                url:`http://localhost:3004/room/${roomId}`
            }],
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:false
        })
    }
  return (
    <div>
      <div ref={meeting}></div>
    </div>
  )
}

export default Room
