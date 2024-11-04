import {ID, Account, Client,Avatars, Databases, Query } from 'react-native-appwrite';
import signIn from '../app/(auth)/signIn';

export const appWriteConfig ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.Aora',
    projectId: '671d7215001986904574',
    databaseId: '671d75320029abb54fcd',
    userCollectionId: '671d75c70025b3806a40',
    videoCollectionId: '671d75e800097cb00d04',
    storageId: '671fb32c00363c1bc2e9',
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId
} = appWriteConfig;
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
    
;
  
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
export const createUser = async (email,password,username) => {
try{

    const newAccount = await account.create(
        ID.unique(), 
        email, 
        password,
        username)

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)
    await signInRN(email,password)
    
    const newUser = await database.createDocument(
        appWriteConfig.databaseId,
        appWriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email:email,
            username:username,
            avatar: avatarUrl
        }
    )

    return newUser;
}
catch (error){
    console.log(error)
    throw new Error(error)

}

}
export async function signInRN(email, password){
    try {
        const activeSession = await account.get();

        // If an active session exists, log it out
        if (activeSession) {
            await account.deleteSessions();
        }
        const session = await account.createEmailPasswordSession(email,password)
        return session
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () =>{
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = async () =>{
    try {
        const posts = await database.listDocuments(
            databaseId,
            videoCollectionId
        )

        return posts.documents;
        
    } catch (error) {
        throw new Error(error)
        
    }
}

export const getLatestPosts = async () =>{
    try {
        const posts = await database.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        )

        return posts.documents;
        
    } catch (error) {
        throw new Error(error)
        
    }
}