import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import  VideoPlayer  from './VideoPlay';

const APP_ID = '14358986116341b9a57f71d58c652b1a';
const TOKEN =
  '007eJxTYPB3bzW4lBPc7rLb3O5SmbOi/TF5xzcBX99WNuT7XHOR4lBgMDQxNrWwtDAzNDQzNjFMskw0NU8zN0wxtUg2MzVKMkw8MD8gtSGQkWHn1JUMjFAI4rMzFFfmpRalVzIwAAD7tx7Z';
const CHANNEL = 'synergy';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

//   const handleUserJoined = async (user, mediaType) => {
//     await client.subscribe(user, mediaType);

//     if (mediaType === 'video') {
//       setUsers((previousUsers) => [...previousUsers, user]);
//     }

//     if (mediaType === 'audio') {
//       // user.audioTrack.play()
//     }
//   };

//   const handleUserLeft = (user) => {
//     setUsers((previousUsers) =>
//       previousUsers.filter((u) => u.uid !== user.uid)
//     );
//   };

  useEffect(() => {
    // client.on('user-published', handleUserJoined);
    // client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) =>
        Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          uid,
        ])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            // audioTrack, 
          },
        ]);
        client.publish(tracks);
      });

    // return () => {
    //   for (let localTrack of localTracks) {
    //     localTrack.stop();
    //     localTrack.close();
    //   }
    //   client.off('user-published', handleUserJoined);
    //   client.off('user-left', handleUserLeft);
    //   client.unpublish(tracks).then(() => client.leave());  //removed tracks
    // };
  }, []);

  return (
    // <div
    //   style={{ display: 'flex', justifyContent: 'center' }}
    // >
    //   <div
    //     style={{
    //       display: 'grid',
    //       gridTemplateColumns: 'repeat(2, 200px)',
    //     }}
    //   >
    <div>
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      {/* </div> */}
    </div>
  );
};