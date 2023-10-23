import React, { useEffect, useState } from 'react'
// import { useAppSelector } from '../app/hooks';
import { CollectionReference, DocumentData, Query, Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';


interface Messages {
    timestamp: Timestamp,
    message: string;
    user: null | {
        uid: string,
        photo: string,
        email: string,
        displayName: string;
    };
}

const useSubCollection = (collectionName: string, subCollectionName: string) => {
    const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
    const channelId = useAppSelector((state) => state.channel.channelId);
    const [messages, setMessages] = useState<Messages[]>([]);

    useEffect(() => {
        let collectionRef = collection(db, collectionName, String(channelId), subCollectionName);

        const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "desc"));

        onSnapshot(collectionRefOrderBy, (snapshot) => {
            let results: Messages[] = [];
            snapshot.docs.forEach((doc) => {
                results.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user,
                })
            })
            setSubDocuments(results)
        })
    }, [channelId]);
    return { subDocuments }
}

export default useSubCollection