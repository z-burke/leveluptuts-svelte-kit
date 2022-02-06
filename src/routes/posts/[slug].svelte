<script context="module">
    export async function load({ params }) {
        try {
            const Post = await import(`../../posts/${params.slug}.md`);
            return {
                // Data passed into Svelte component
                props: {
                    Post: Post.default
                }
            };
        } catch (e) {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
            // Redirect Example
            // return {
            //     status: 307,
            //     redirect: '/posts'
            // }
            // For status to work
            // We need the correct outputs
            // 404 needs error message
            // Redirects need status and redirect
            return {
                status: 404,
                error: 'Post not found'
            };
        }
    }
</script>

<script>
    export let Post;
</script>

<svelte:component this={Post}/>
