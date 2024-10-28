import {ID, Account, Client,Avatars, Databases } from 'react-native-appwrite';
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

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
    


const account = new Account(client);
const avatars = new Avatars(client);
const databse = new Databases(client);
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
    
    const newUser = databse.createDocument(
        appWriteConfig.databaseId,
        appWriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser;
}
catch (error){
    console.log.error(error)
    throw new Error(error)

}

}
export async function signInRN(email, password){
    try {
        const session = await account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw new Error(error);
    }
}
