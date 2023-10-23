import React, { useEffect, useState } from 'react'
// import { useAppSelector } from '../app/hooks';
import { CollectionReference, DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
    id: string;
    channel: DocumentData;
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<Channels[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, "channels"));



    useEffect(() => {

        onSnapshot(collectionRef, (QuerySnapshot) => {
            const channelsResults: Channels[] = [];
            QuerySnapshot.docs.forEach((doc) =>
                channelsResults.push({
                    id: doc.id,
                    channel: doc.data(),
                })
            );
            setDocuments(channelsResults);
        });
    }, [])
    return { documents }
}

export default useCollection