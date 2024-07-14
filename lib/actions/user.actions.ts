"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from '../utils'

export async function signIn({email, password} : signInProps) {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password)
    
    return parseStringify(response)
} catch (error) {
    console.error("Error", error);
  }
}

export async function signUp(userData: SignUpParams) {
  try {
    // create a user account
    const { account } = await createAdminClient();
    const {email, password, firstName, lastName} = userData

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    // console.log(newUserAccount);
    
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    //console.log("Stringified user: ", parseStringify(newUserAccount));
    
    return parseStringify(newUserAccount)
  } catch (error) {
    console.error("Error", error);
  }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get()
    return parseStringify(user)
  } catch (error) {
    return null;
  }
}

export async function logoutAccount(){
    try {
        const {account} = await createSessionClient()
        cookies().delete('appwrite-session')
        await account.deleteSession('current')
    } catch (error) {
        console.error("Error: ", error);
        
        return null
    }
}
