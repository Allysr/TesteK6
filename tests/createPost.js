import http from "k6/http";
import { sleep, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),

    };
}

export const options = {
    vus: 1,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<2000'], //95% das requisições tem que ter um tempo menor que 2 segundos
        http_req_failed: ['rate<0.1'] //1% das requisições podem ocorrer erro
    }
}

export default function () {

    function gerarDados() {
        const numero = Math.random() * 99999 + 1
        return `meu post n ${numero}`
    }

    const payload = JSON.stringify({
        title: 'foo',
        body: gerarDados(),
        userId: 1
    });

    const headers = {
        'headers': {
            'Content-type': 'aplication/json'
        }
    }

    const res = http.post('https://jsonplaceholder.typicode.com/posts', payload, headers);


    sleep(Math.random() * 3 + 1);

    check(res, {
        "Deve ser 201 o status": (res) => res.status == 201
    })
}