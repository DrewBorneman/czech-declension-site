// import { TSiteInfo } from "types/routes";
// import { GetSiteInfo } from "./getRequests";
// import { SetSiteInfo } from "./postRequests";

// export async function digest(password: string, algo = 'SHA-256') {
//     return Array.from(
//         new Uint8Array(
//         await crypto.subtle.digest(algo, new TextEncoder().encode(password))
//         ),
//         (byte) => byte.toString(16).padStart(2, '0')
//     ).join('');
// }

// export async function verifyPassword(message='CMS Password:', SiteInfo: (TSiteInfo | null)=null): Promise<boolean> {
//     if(!SiteInfo) SiteInfo = await GetSiteInfo();

//     const password: string | null = window.prompt(message, '');
//     if (!password) { return false;}
//     const passwordDigest = await digest(password);
//     return(passwordDigest === SiteInfo.passwordHash);
// }

// export async function setNewPassword(): Promise<void> {
//     const SiteInfo: TSiteInfo = await GetSiteInfo();

//     const correctPassword = await verifyPassword('Current Password:', SiteInfo).then((response) => {return response;});

//     if(!correctPassword){
//         window.alert('Incorrect Password.');
//         return;
//     }

//     const password: string | null = window.prompt('New Password:', '');
//     if (!password) return;
//     const confirmPassword: string | null = window.prompt('Confirm Password:', '');
//     if (password != confirmPassword){
//         window.alert('Passwords do not match.');
//         return;
//     }
//     const newPasswordDigest = await digest(password);
//     SiteInfo.passwordHash = newPasswordDigest;
//     await SetSiteInfo(SiteInfo);

//     return;
// }
