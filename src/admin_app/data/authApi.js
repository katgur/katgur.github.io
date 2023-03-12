import { getItem, setItem } from './LSRequest';

const USER = 'sklif-admin-user';

export async function getUser() {
    const user = await getItem(USER);
    return JSON.parse(user);
}

export async function addUser(user) {
    await setItem(USER, JSON.stringify(user));
}
