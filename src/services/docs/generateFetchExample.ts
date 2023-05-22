import HTTPSnippet from "httpsnippet";
import * as ApiV1Read from "../../generated/api/resources/api/resources/v1/resources/read";

export function generateFetchExample(example: ApiV1Read.ExampleEndpointCall, method: ApiV1Read.HttpMethod): string {
    const snippet = new HTTPSnippet({
        method: "",
        /** Absolute URL of the request (fragments are not included). */
        url: "",
        httpVersion: "",
        cookies: [],
        headers: [],
        queryString: [],
        postData: undefined,
        headersSize: 0,
        bodySize: -1,
    });
}


function getExampleAsHttpSnippet({ example, method }: {example: ApiV1Read.ExampleEndpointCall, method: ApiV1Read.HttpMethod}): HTTPSnippet {
    return new HTTPSnippet({
        method: method,
        url: example.path,
        httpVersion: "",
        cookies: [],
        headers: [],
        queryString: [],
        postData: undefined,
        headersSize: 0,
        bodySize: -1,
    });
}
