function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    console.log(`${hours} : ${minute} : ${second}`);
    setTimeout(startTime, 1000);
};
startTime()