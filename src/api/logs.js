export const sendLogs = (list) => {
    return new Promise((resolve) => {
        console.log(list);
        resolve({});
    })
}