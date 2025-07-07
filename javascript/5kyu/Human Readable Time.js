function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60)
    let secs = Math.floor(((seconds % 3600) % 60));
    return `${String(Math.abs(hours)).length == 2 ? hours : "0" + hours}:${String(Math.abs(mins)).length == 2 ? mins : "0" + mins}:${String(Math.abs(secs)).length == 2 ? secs : "0" + secs}`;
}