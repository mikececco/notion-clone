'use server'

import { adminDb } from "@/firebase-admin"
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
  auth().protect() //if not authenticated when clicking on createNewDocument, it will redirect to log in form

  const {sessionClaims} = await auth()

  const documentCollectionRef = adminDb.collection('documents')

  const docRef = await documentCollectionRef.add({
    title: 'New Doc'
  })

  await adminDb.collection('users').doc(sessionClaims?.email!)
}
