'use server';

import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    auth().protect();

    const { sessionClaims } = await auth();

    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    });

    await adminDb
    .collection('users')
    .doc(sessionClaims?.email!)
    .collection('rooms')
    .doc(docRef.id)
    .set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
    } );

    return {docId: docRef.id};
};

export async function deleteDocument(roomId: string) {
    auth().protect(); // Ensure the user is authenticated

    console.log("deleteDocument", roomId);

    try {
        // delete the document reference itself
        await adminDb.collection("documents").doc(roomId).delete();

        const query = await adminDb
            .collectionGroup("rooms")
            .where("roomId", "==", roomId)
            .get();

        const batch = adminDb.batch();

        // delete the room reference in the users collection for every user in the room
        query.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });

        await batch.commit();

        // delete the room in liveblocks
        await liveblocks.deleteRoom(roomId);

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export async function inviteUserToDocument(roomId: string, email: string) {
    auth().protect(); // Ensure the user is authenticated

    console.log("inviteUserToDocument", roomId, email);

    // try catch block to handle errors
    try {
        await adminDb
            .collection("users")
            .doc(email)
            .collection("rooms")
            .doc(roomId)
            .set({
                userId: email,
                role: "contributor",
                createdAt: new Date(),
                roomId,
            });

            return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export async function removeUserFromDocument(roomId: string, email: string) {
    auth().protect(); // Ensure the user is authenticated

    console.log("removeUserFromDocument", roomId, email);

    // try catch block to handle errors
    try {
        await adminDb
            .collection("users")
            .doc(email)
            .collection("rooms")
            .doc(roomId)
            .delete();

        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}