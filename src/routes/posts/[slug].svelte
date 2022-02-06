<script context="module">
// export interface LoadInput<Params extends Record<string, string> = Record<string, string>> {
// 	url: URL;
// 	params: Params;
// 	props: Record<string, any>;
// 	fetch(info: RequestInfo, init?: RequestInit): Promise<Response>;
// 	session: App.Session;
// 	stuff: Partial<App.Stuff>;
// }

// export interface LoadOutput<Props extends Record<string, any> = Record<string, any>> {
// 	status?: number;
// 	error?: string | Error;
// 	redirect?: string;
// 	props?: Props;
// 	stuff?: Partial<App.Stuff>;
// 	maxage?: number;
// }

export async function load({ params }) {
    const post = {
        title: params.slug,
        date: new Date(),
        body: 'lorem ipsum'
    };
        return {
            props: {
                post
            }
        }
    }
</script>

<script>
    export let post;
</script>

<h3>{post.title}</h3>
