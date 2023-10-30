import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),

    };
}

export default function () {
    const res = http.get("https://jsonplaceholder.typicode.com/posts/1");
    sleep(1);

    check(res, {
        "Deve ser 200 o status": (res) => res.status == 200
    });
}

