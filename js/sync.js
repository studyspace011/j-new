const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnLnOp-xG6j-nZSU9RmM7S3suBfn4mI3eNsWDomEEK0njM_RGZAuH8Zv3bhd79Ei0j/exec";

async function saveEntry(data) {
    const formData = new URLSearchParams();
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("section", data.section);
    formData.append("text", data.text);

    return fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString()
    });
}